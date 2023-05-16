import { CSSProperties, Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

export type UseElementPositionProps = {
  ref?: RefObject<HTMLElement>
  attachTo?: 'bottom-center' | 'bottom-left'
  delay?: number
}

export type UseElementPositionReturnType = {
  position: Partial<CSSProperties>
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const useElementPosition = ({
  ref,
  attachTo = 'bottom-center',
  delay = 250,
}: UseElementPositionProps): UseElementPositionReturnType => {
  const [position, setPosition] = useState<Partial<CSSProperties>>({ top: 0, left: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        const { top, left, right } = ref.current.getBoundingClientRect()
        const verticalRefAdaption = attachTo?.includes('center') ? 0.5 * (right - left) : 0
        const horizontalRefAdaption = attachTo?.includes('bottom') ? ref.current.offsetHeight : 0
        const offsetLeft =
          (typeof window !== undefined && window.pageXOffset) || document?.documentElement.scrollLeft || 0
        const offsetTop =
          (typeof window !== undefined && window.pageYOffset) || document?.documentElement.scrollTop || 0
        const positionTop = `${Math.round(top + horizontalRefAdaption + offsetTop)}px`
        const positionLeft = `${Math.max(0, Math.round(left + verticalRefAdaption + offsetLeft))}px`
        setPosition({
          top: positionTop,
          right: 'auto',
          bottom: 'auto',
          left: positionLeft,
        })
      }
    }

    handleResize()
    const throttledHandle = throttle(handleResize, delay)

    window.addEventListener('resize', throttledHandle)
    return () => window.removeEventListener('resize', throttledHandle)
  }, [ref, attachTo, delay, isVisible])

  return {
    position,
    isVisible,
    setIsVisible,
  }
}
