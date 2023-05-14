import React from 'react'

export const smoothScrollWithElement = (element: HTMLElement | null, scrollOffset = 0) => {
  if (element) {
    window.scroll({
      top: element.offsetTop - scrollOffset,
      behavior: 'smooth',
    })
  }
}

export const smoothScrollWithSelector = (selector: string, scrollOffset: number) => {
  const element = document.querySelector(selector)

  if (element) {
    smoothScrollWithElement(element as HTMLElement, scrollOffset)
  }
}

export const smoothScrollWithEvent = (event: React.MouseEvent<HTMLElement>, scrollOffset: number) => {
  event.preventDefault()
  smoothScrollWithSelector(event?.currentTarget?.getAttribute('href') || '#', scrollOffset)
}
