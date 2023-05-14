import React, { Component, MouseEvent } from 'react'
import { subscribe } from 'subscribe-ui-event'

type Props = {
  visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN'
  onClick?: (e: MouseEvent<Element, MouseEvent>) => void
  onMouseOver?: (e: MouseEvent<Element, MouseEvent>) => void
}

type InnerProps = {
  visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN'
  onClick?: (e: MouseEvent<Element, MouseEvent>) => void
  onMouseOver?: (e: MouseEvent<Element, MouseEvent>) => void
}

type InnerState = {
  scrollDirection: 'NONE' | 'UP' | 'DOWN'
  backToTop: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN'
}

export const withBackToTop = (WrappedComponent: React.FC<Props>) => {
  return class extends Component<InnerProps, InnerState> {
    handleTimeout?: any | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subscribers: any[] = []

    state: Readonly<InnerState> = {
      scrollDirection: 'NONE',
      backToTop: 'HIDDEN',
    }

    handleScroll(event: unknown, augmentedEvent: { scroll: { delta: number; top: number } }) {
      if (augmentedEvent.scroll.delta > 0 && this.state.scrollDirection !== 'DOWN' && augmentedEvent.scroll.top > 0) {
        this.setState({ scrollDirection: 'DOWN' })
      } else if (augmentedEvent.scroll.delta < 0 && this.state.scrollDirection !== 'UP') {
        this.setState({ scrollDirection: 'UP' })
      }
      this.handleBackToTop(augmentedEvent.scroll.top)
    }

    handleBackToTop(scrollPositionY: number) {
      clearTimeout(this.handleTimeout)
      if (this.state.scrollDirection === 'DOWN' && scrollPositionY > 300) {
        this.setState({ backToTop: 'VISIBLE' })

        this.handleTimeout = setTimeout(() => {
          this.setState({ backToTop: 'TRANSPARENT' })
        }, 6000)
      } else if (this.state.scrollDirection === 'UP') {
        this.handleTimeout = setTimeout(() => {
          this.setState({ backToTop: 'TRANSPARENT' })
          this.setState({ backToTop: 'HIDDEN' })
        }, 1000)
      }
    }

    componentDidMount() {
      this.subscribers = [
        subscribe('scroll', this.handleScroll.bind(this), {
          useRAF: true,
          enableScrollInfo: true,
        }),
      ]
    }

    componentWillUnmount() {
      this.subscribers.forEach((subscriber) => subscriber.unsubscribe())
      clearTimeout(this.handleTimeout)
    }

    render() {
      return (
        <WrappedComponent
          visible={this.state.backToTop}
          onMouseOver={() => clearTimeout(this.handleTimeout)}
          {...this.props}
        />
      )
    }
  }
}
