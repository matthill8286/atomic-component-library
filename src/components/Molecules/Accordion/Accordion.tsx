import React, { forwardRef, useImperativeHandle } from 'react'
import { useContext, useEffect, useReducer } from 'react'
import { FoldableAcceptedBreakpoints } from '@/components/Atoms/Foldable/Foldable.interface'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { AccordionEntry } from '@/components/Molecules/Accordion/AccordionEntry'
import { ThemeContext } from '@/styles/styled'
import { AccordionEntryObject, AccordionProps, AccordionRefObject, ActionType } from './Accordion.interface'

const openEntriesReducer = (state: string[], action: ActionType): string[] => {
  switch (action.type) {
    case 'open':
      return action.shouldCloseOthers ? [action.id] : state.concat(action.id)
    case 'close':
      return state.filter((id) => id !== action.id)
    case 'openBatch':
      return action.entries.reduce<string[]>((acc, entry, index) => acc.concat(entry.id || index.toString()), [])
    case 'checkNewEntries':
      return state.concat(
        action.entries
          .filter((entry) => typeof entry.id === 'string' && entry.isOpenInitially)
          .map(({ id }) => id as string),
      )
    default:
      return state
  }
}

const getInitialState = ([openedIndex, isUnfoldable, entries]: [number, boolean, AccordionEntryObject[]]): string[] => {
  // We can have more than one entry open
  if (isUnfoldable) {
    return entries.reduce<string[]>(
      (acc, entry, index) =>
        entry.isOpenInitially || openedIndex === index ? acc.concat(entry.id || index.toString()) : acc,
      [],
    )
  }

  // We can only have one entry open
  // If there are more than one entries with isOpenInitially, use the first one.
  const openEntry = entries.find((entry) => !!entry.isOpenInitially)
  if (openEntry) {
    return [openEntry.id || entries.indexOf(openEntry).toString()]
  }
  // Initially open entry can also be set by list index.
  if (openedIndex > -1 && openedIndex < entries.length) {
    return [entries[openedIndex].id || openedIndex.toString()]
  }

  // Otherwise all entries are closed.
  return []
}

export const Accordion = forwardRef<AccordionRefObject, AccordionProps>(
  (
    {
      entries,
      isUnfoldable = false,
      openedIndex = -1,
      onChange,
      isExpandedFrom,
      isLarge,
      customLabelHeading,
      withIconsOnRight = false,
      labelPadding,
      entryPadding,
      withCustomIcon = false,
      customIcon,
      ...otherProps
    },
    ref,
  ): JSX.Element | null => {
    const [idsOfOpenEntries, dispatch] = useReducer(
      openEntriesReducer,
      [openedIndex, isUnfoldable, entries],
      getInitialState,
    )

    useEffect(() => {
      if (openedIndex > -1 && !idsOfOpenEntries.includes(`${openedIndex}`)) {
        dispatch({ type: 'open', id: `${openedIndex}`, shouldCloseOthers: !isUnfoldable })
      }
    }, [openedIndex])

    const knownEntryIds = React.useRef(entries.map(({ id }) => id))

    const entriesNotYetInitialized = entries.filter((entry) => !knownEntryIds.current.includes(entry.id))

    knownEntryIds.current = [...entries.map(({ id }) => id)]

    if (entriesNotYetInitialized.length > 0) {
      dispatch({ type: 'checkNewEntries', entries: entriesNotYetInitialized })
    }

    const { breakpoint: currentBreakpoint } = useWindowDimensions()
    const theme = useContext(ThemeContext)
    const isExpandedFromBreakpoint = isExpandedFrom ? theme.breakpoints[isExpandedFrom] : undefined

    const _onChange = (id: string): void => {
      const isOpen = idsOfOpenEntries.includes(id)
      if (isOpen) {
        dispatch({
          type: 'close',
          id,
        })
      } else {
        dispatch({
          type: 'open',
          id,
          shouldCloseOthers: !isUnfoldable,
        })
      }

      if (onChange) {
        onChange({
          index: entries.findIndex((entry) => entry.id === id) || +id,
          eventType: isOpen ? 'HIDE' : 'SHOW',
        })
      }
    }

    useEffect(() => {
      if (currentBreakpoint >= isExpandedFromBreakpoint) {
        dispatch({
          type: 'openBatch',
          entries,
        })
      }
    }, [])

    useImperativeHandle(ref, () => ({
      openEntryById: (id: string) => {
        const isOpen = idsOfOpenEntries.includes(id)
        if (!isOpen) {
          _onChange(id)
        }
      },
    }))

    return entries ? (
      <section {...otherProps}>
        {entries.map((entry: AccordionEntryObject, index: number) => {
          const id = entry.id || index.toString()
          const isOpen = idsOfOpenEntries.includes(id)

          return (
            <AccordionEntry
              isLarge={isLarge}
              entryPadding={entryPadding}
              details={entry.details}
              id={id}
              isOpen={isOpen}
              key={id}
              looksOpenInitiallyFromBreakpoint={isExpandedFromBreakpoint as FoldableAcceptedBreakpoints}
              onChange={_onChange}
              labelPadding={labelPadding}
              title={entry.title}
              customLabelHeading={customLabelHeading}
              noBorderTop={entry.noBorderTop}
              withIconsOnRight={withIconsOnRight}
              withCustomIcon={withCustomIcon}
              customIcon={customIcon}
            />
          )
        })}
      </section>
    ) : null
  },
)
