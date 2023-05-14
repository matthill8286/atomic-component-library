import React, { Dispatch, createContext, useContext, useReducer, useMemo, FC } from 'react'

enum MultiViewModalActionType {
  MULTI_VIEW_MODAL_CLOSE = 'MULTI_VIEW_MODAL_CLOSE',
  MULTI_VIEW_MODAL_GO_HOME = 'MULTI_VIEW_MODAL_GO_HOME',
  MULTI_VIEW_MODAL_SET_VIEW = 'MULTI_VIEW_MODAL_SET_VIEW',
  MULTI_VIEW_MODAL_SET_ACTIVE = 'MULTI_VIEW_MODAL_SET_ACTIVE',
}

type MultiViewModalClose = ReturnType<typeof closeAction>
const closeAction = () => ({
  type: MultiViewModalActionType.MULTI_VIEW_MODAL_CLOSE,
  payload: {},
})

type MultiViewModalGoHome = ReturnType<typeof goHomeAction>
const goHomeAction = () => ({
  type: MultiViewModalActionType.MULTI_VIEW_MODAL_GO_HOME,
  payload: {},
})

type MultiViewModalSetView = ReturnType<typeof setViewAction>
const setViewAction = (id: string) => ({
  type: MultiViewModalActionType.MULTI_VIEW_MODAL_SET_VIEW,
  payload: { id },
})

type MultiViewModalSetActive = ReturnType<typeof setActiveAction>
const setActiveAction = (isActive: boolean) => ({
  type: MultiViewModalActionType.MULTI_VIEW_MODAL_SET_ACTIVE,
  payload: { isActive },
})

type MultiViewModalAction = MultiViewModalSetView | MultiViewModalSetActive | MultiViewModalGoHome | MultiViewModalClose

interface MultiViewModalState {
  homeViewId: string | null
  activeViewId: string | null
  hasBackButton: boolean
  isActive: boolean
}

type MultiViewModalStore = [MultiViewModalState, Dispatch<MultiViewModalAction>]

type MultiViewModalReducer = (state: MultiViewModalState, action: MultiViewModalAction) => MultiViewModalState

const initialState: MultiViewModalState = {
  homeViewId: null,
  activeViewId: null,
  hasBackButton: false,
  isActive: false,
}

const reducer: MultiViewModalReducer = (
  state: MultiViewModalState,
  action: MultiViewModalAction,
): MultiViewModalState => {
  switch (action.type) {
    case MultiViewModalActionType.MULTI_VIEW_MODAL_CLOSE: {
      return {
        ...state,
        activeViewId: state.homeViewId,
        hasBackButton: false,
        isActive: false,
      }
    }
    case MultiViewModalActionType.MULTI_VIEW_MODAL_GO_HOME: {
      return {
        ...state,
        activeViewId: state.homeViewId,
        hasBackButton: false,
      }
    }
    case MultiViewModalActionType.MULTI_VIEW_MODAL_SET_VIEW: {
      const {
        payload: { id },
      } = action as MultiViewModalSetView
      return {
        ...state,
        activeViewId: id,
        hasBackButton: id !== state.homeViewId,
      }
    }
    case MultiViewModalActionType.MULTI_VIEW_MODAL_SET_ACTIVE: {
      const {
        payload: { isActive },
      } = action as MultiViewModalSetActive
      return {
        ...state,
        isActive,
      }
    }
    default:
      return state
  }
}

const MultiViewModalContext = createContext<MultiViewModalStore>([
  initialState,
  // eslint-disable-next-line no-console
  (action) => console.log(action),
])

const useMultiViewModalContext = () => useContext<MultiViewModalStore>(MultiViewModalContext)

const useMultiViewModalReducer = (homeViewId: string): MultiViewModalStore =>
  useReducer<MultiViewModalReducer>(reducer, {
    ...initialState,
    homeViewId,
    activeViewId: homeViewId,
  })

export const useMultiViewModalAction = () => {
  const [, dispatch] = useMultiViewModalContext()
  return useMemo(
    () => ({
      close: () => dispatch(closeAction()),
      goHome: () => dispatch(goHomeAction()),
      setView: (id) => dispatch(setViewAction(id)),
      setActive: (isActive) => dispatch(setActiveAction(isActive)),
    }),
    [dispatch],
  )
}

export const useMultiViewModalState = (): MultiViewModalState => useMultiViewModalContext()[0]

export const MultiViewModalProvider: FC<{ homeViewId: string }> = ({ homeViewId, children }) => {
  const modalReducer = useMultiViewModalReducer(homeViewId)
  return <MultiViewModalContext.Provider value={modalReducer}>{children}</MultiViewModalContext.Provider>
}
