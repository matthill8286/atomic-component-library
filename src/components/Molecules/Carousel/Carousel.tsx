import React, { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Badge } from '@/components/Atoms/Badge'
import { Icon, RotationValues } from '@/components/Atoms/Icon'
import { OtherArrow } from '@matthill8286/atomic-icon-library'
import { CarouselProps } from './Carousel.interface'
import { StyledCarousel, StyledCarouselHandler } from './Carousel.styled'

export const Carousel: React.FC<CarouselProps> = ({
  className,
  sliderSettings,
  items,
  renderSlide,
  hasThumbnails,
  badges,
  whiteDots,
  boxShadow,
  hasOverflow,
  hasPadding,
  fullHeight,
}): React.ReactElement => {
  let firstClientX: number | 0
  let clientX: number | 0
  let carouselDom: HTMLDivElement | null
  let slider1
  let slider2
  const [nav1, setCountNav1] = useState(slider1)
  const [nav2, setCountNav2] = useState(slider2)
  const touchStart = (e: TouchEvent): void => {
    firstClientX = e.touches[0].clientX
  }
  const preventTouch = (e: TouchEvent): boolean => {
    const minValue = 5 // threshold
    clientX = e.touches[0].clientX - firstClientX

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault()
      e.returnValue = false
      return false
    }
    return true
  }

  useEffect(() => {
    if (carouselDom) {
      carouselDom.addEventListener('touchstart', touchStart)
      carouselDom.addEventListener('touchmove', preventTouch, {
        passive: false,
      })
    }

    if (hasThumbnails) {
      setCountNav1(slider1)
      setCountNav2(slider2)
    }
  }, [])

  const renderArrows = (rotation: RotationValues): React.ReactElement => {
    if (hasThumbnails) {
      return (
        <Icon rotate={rotation} color={'black'} width={24} height={24}>
          <OtherArrow />
        </Icon>
      )
    } else {
      return (
        <Icon rotate={rotation} color={'white'} width={24} height={24}>
          <OtherArrow />
        </Icon>
      )
    }
  }

  const customPaging = () => <div />

  const sliderConfig = (hasThumbnails = false) => {
    return hasThumbnails
      ? {
          asNavFor: nav2,
          ref: (slider) => (slider1 = slider),
          slidesToShow: 1,
          arrows: false,
          swipeToSlide: true,
          focusOnSelect: true,
          ...sliderSettings,
        }
      : {
          nextArrow: renderArrows(90),
          prevArrow: renderArrows(270),
          customPaging,
          ...sliderSettings,
        }
  }

  const sliderThumbnailImageConfig = {
    ref: (slider) => (slider2 = slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1,
    dots: true,
    className: 'mms-th-slider',
    ...sliderConfig(false),
  }

  const [dragging, setDragging] = useState(false)

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = useCallback(() => {
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.stopPropagation()
      }
    },
    [dragging],
  )

  const beforeChange = (currentSlide, nextSlide) => {
    if (sliderSettings.beforeChange) sliderSettings.beforeChange(currentSlide, nextSlide)
    handleBeforeChange()
  }

  const afterChange = (currentSlide) => {
    if (sliderSettings.afterChange) sliderSettings.afterChange(currentSlide)
    handleAfterChange()
  }

  return (
    <StyledCarousel
      className={className}
      whiteDots={whiteDots}
      ref={(elem) => (carouselDom = elem)}
      hasThumbnails={hasThumbnails}
      items={items}
      sliderSettings={sliderSettings}
      renderSlide={renderSlide}
      boxShadow={boxShadow}
      hasOverflow={hasOverflow}
      hasPadding={hasPadding}
      fullHeight={fullHeight}
    >
      {badges && badges.length > 0 && <Badge badges={badges} />}
      <Slider {...sliderConfig(hasThumbnails)} beforeChange={beforeChange} afterChange={afterChange}>
        {items.map((entry, index) => {
          return (
            <StyledCarouselHandler onClickCapture={handleOnItemClick} key={index}>
              {renderSlide(entry, index, false)}
            </StyledCarouselHandler>
          )
        })}
      </Slider>
      {hasThumbnails && (
        <Slider {...sliderThumbnailImageConfig} beforeChange={beforeChange} afterChange={afterChange}>
          {items &&
            items.map((entry, index) => {
              return (
                renderSlide && (
                  <StyledCarouselHandler onClickCapture={handleOnItemClick} key={index}>
                    {renderSlide(entry, index, true)}
                  </StyledCarouselHandler>
                )
              )
            })}
        </Slider>
      )}
    </StyledCarousel>
  )
}

Carousel.displayName = 'Carousel'
