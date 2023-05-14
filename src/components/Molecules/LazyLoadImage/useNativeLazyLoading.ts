import { useEffect, useState } from 'react'

export const useNativeLazyLoading = () => {
  const [supported, setSupported] = useState<boolean>(false)

  useEffect(() => {
    if (!supported) {
      const isSupported = 'loading' in HTMLImageElement.prototype
      setSupported(isSupported)
    }
  }, [])

  return supported
}
