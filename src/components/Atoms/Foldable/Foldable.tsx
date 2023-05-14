import React from 'react'
import { styled } from '@/styles/styled'
import { FoldableProps, FoldableState } from './Foldable.interface'

export const StyledFoldable = styled.div<{ looksOpenFromBreakpoint?: number }>`
  overflow: hidden;

  ${({ looksOpenFromBreakpoint }) =>
    looksOpenFromBreakpoint &&
    `
    @media (min-width: ${looksOpenFromBreakpoint}px) {
      height: auto !important;
    }
  `}
`

export class Foldable extends React.Component<FoldableProps, FoldableState> {
  private entryRef: React.RefObject<HTMLDivElement>
  private standardDuration: number
  private maxDuration: number

  constructor(props: FoldableProps) {
    super(props)
    this.entryRef = React.createRef()
    this.standardDuration = 300
    this.maxDuration = 1000

    this.state = {
      height: this._getHeight(),
      transition: `height ${this.standardDuration}ms linear`,
      looksOpenFromBreakpoint: props.looksOpenInitiallyFromBreakpoint,
    }
  }

  public componentDidMount() {
    if (this.props.isOpen) {
      this._updateHeightBeforeTransition()
    }
  }

  public componentDidUpdate(prevProps: FoldableProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this._updateHeightBeforeTransition()
    }
  }

  public render() {
    const { isOpen: _isOpen, ...rest } = this.props
    const { looksOpenFromBreakpoint } = this.state
    return (
      <StyledFoldable
        data-test={'foldable'}
        style={this._applyTransition()}
        onTransitionEnd={this._afterTransition}
        className={this.props.className}
        looksOpenFromBreakpoint={looksOpenFromBreakpoint}
        {...rest}
      >
        <div data-test="inner-foldable" ref={this.entryRef}>
          {this.props.children}
        </div>
      </StyledFoldable>
    )
  }

  private _afterTransition = () => {
    const { isOpen } = this.props
    if (isOpen) {
      this.setState({
        height: 'auto',
      })
    }
  }

  private _scrollToElement(duration: number) {
    const currentElement = this.entryRef.current

    setTimeout(() => {
      const rect = currentElement?.getBoundingClientRect() || { top: 0 }
      if (rect.top < 0) {
        // reset viewport to calculate the right position
        window.scrollTo(0, 0)
        const rectUpdate = currentElement?.getBoundingClientRect() || { top: 0, height: 0 }
        window.scrollTo(0, rectUpdate.top - rectUpdate.height)
      }
    }, duration)
  }

  private _updateHeightBeforeTransition() {
    const { looksOpenFromBreakpoint } = this.state
    const isTransitionCancelled = !!looksOpenFromBreakpoint
    const currentElement = this.entryRef.current
    const calculatedDuration = this._getDuration()
    const animationType = this._getAnimationType(calculatedDuration)

    const height = isTransitionCancelled ? 'auto' : currentElement?.clientHeight ?? 'auto'
    const transition = isTransitionCancelled ? '' : `height ${calculatedDuration}ms ${animationType}`

    this.setState(
      {
        height,
        transition,
        looksOpenFromBreakpoint: undefined,
      },
      () => {
        if (!this.props.isOpen) {
          this._updateTransition()
        } else {
          this._scrollToElement(calculatedDuration)
        }
      },
    )
  }

  private _getDuration() {
    const { isOpen } = this.props
    const currentElement = this.entryRef.current
    const calcDuration = !!currentElement && currentElement.clientHeight / 2

    if (calcDuration) {
      if (!isOpen) {
        return this.standardDuration
      } else if (calcDuration > this.maxDuration) {
        return this.maxDuration
      } else if (calcDuration < this.standardDuration) {
        return this.standardDuration
      } else {
        return calcDuration
      }
    } else {
      return this.standardDuration
    }
  }

  private _getAnimationType(calculatedDuration: number) {
    const { isOpen } = this.props
    return calculatedDuration === this.standardDuration ? 'linear' : isOpen ? 'ease-in' : 'ease-out'
  }

  private _updateTransition() {
    const calculatedDuration = this._getDuration()
    const animationType = this._getAnimationType(calculatedDuration)
    this.setState({
      height: this._getHeight(),
      transition: `height ${calculatedDuration}ms ${animationType}`,
    })
  }

  private _applyTransition() {
    return {
      height: this.state.height,
      transition: this.state.transition,
    }
  }

  private _getHeight() {
    const { isOpen } = this.props
    return isOpen ? 'auto' : 0
  }
}
