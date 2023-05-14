import { useEffect, useRef } from 'react'

// from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay): void => {
  const savedCallback = useRef(callback)

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const tick = (): void => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
