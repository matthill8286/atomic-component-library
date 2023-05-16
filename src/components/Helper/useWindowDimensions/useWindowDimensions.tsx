import debounce from 'lodash/debounce'
import * as React from 'react'
import { breakpoints } from '@/styles'

type breakpointValue = 1472 | 1232 | 1008 | 752 | 512
export type breakpointName = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const breakpointNamesMapping = {
  1472: 'xxl',
  1232: 'xl',
  1008: 'lg',
  752: 'md',
  512: 'sm',
  0: 'xs',
}

export interface WindowDimensions {
  width: number
  height: number
  breakpoint: breakpointValue | 0
  breakpointName: breakpointName
}

// todo add isUp isDown functions
export const getWindowDimensions = (): WindowDimensions => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      breakpoint: 0,
      breakpointName: 'sm',
    }
  }
  const { innerWidth: width, innerHeight: height } = window
  const breakpoint =
    Object.values(breakpoints)
      .sort((a, b) => b - a)
      .find((w) => width >= w) || 0
  return {
    width,
    height,
    breakpoint,
    breakpointName: breakpointNamesMapping[breakpoint],
  }
}

const frameThrottle = (func: FrameRequestCallback) => {
  let frame: number | undefined
  const cancel = () => {
    if (frame !== undefined) cancelAnimationFrame(frame)
  }
  const throttled = () => {
    if (frame !== undefined) cancelAnimationFrame(frame)
    frame = requestAnimationFrame(func)
  }
  return [throttled, cancel]
}

// Pass 'frame' to throttle resize events matching the framerate
export const useWindowDimensions = (delay: number | 'frame' = 250) => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions())

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const update = () => setWindowDimensions(getWindowDimensions())
    const [limitedUpdate, cancel] = delay === 'frame' ? frameThrottle(update) : [debounce(update, delay)]
    update()
    window.addEventListener('resize', limitedUpdate)
    return () => {
      window.removeEventListener('resize', limitedUpdate)
      cancel?.()
    }
  }, [delay])

  return windowDimensions
}
