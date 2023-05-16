import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback) => {
  const callbackRef = useRef()
  const innerRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  })
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
    function handleClick(e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        callbackRef.current(e)
      }
    }
  }, [])

  return innerRef
}
