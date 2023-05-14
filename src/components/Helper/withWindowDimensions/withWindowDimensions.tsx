import hoistNonReactStatics from 'hoist-non-react-statics'
import debounce from 'lodash/debounce'
import * as React from 'react'
import { subscribe } from 'subscribe-ui-event'
import { getWindowDimensions } from '../useWindowDimensions'

const delay = 250

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withWindowDimensions: any = (WrappedComponent: React.ComponentClass<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper = class extends React.Component<any, any> {
    _isMounted = false
    private _resizeListener

    constructor(props) {
      super(props)
      this.state = {
        breakpointName: 'xs',
      }
    }

    private debouncedHandle = debounce(this._handleResize, delay)

    public componentDidMount() {
      this._isMounted = true
      this._resizeListener = subscribe(
        'resize',
        (event, augmentedEvent) => this.debouncedHandle(augmentedEvent.resize.width),
        { enableResizeInfo: true, useRAF: true },
      )
      this.debouncedHandle(window.innerWidth)
    }

    public componentWillUnmount() {
      this._isMounted = false
      this._resizeListener?.unsubscribe()
    }

    public render() {
      return <WrappedComponent breakpointName={this.state.breakpointName} {...this.props} />
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private _handleResize(width: number) {
      const { breakpointName } = getWindowDimensions()

      if (this._isMounted) {
        this.setState({ breakpointName })
      }
    }
  }
  return hoistNonReactStatics(Wrapper, WrappedComponent)
}
