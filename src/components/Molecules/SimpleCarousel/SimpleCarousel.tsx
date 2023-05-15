import React, { useCallback, useState } from 'react'
import Slider from 'react-slick'
import { Icon, RotationValues } from '@/components/Atoms/Icon'
import { CarouselProps } from './SimpleCarousel.interface'
import { StyledCarousel, StyledCarouselHandler, StyledNavArrow } from './SimpleCarousel.styled'
import { OtherArrow } from 'atomic-icon-library'

export const SimpleCarousel: React.FC<CarouselProps> = ({
  arrowsSurfaceColor,
  sliderSettings,
  items,
  renderSlide,
  whiteDots,
  brightArrows,
  boxShadow,
  hasOverflow,
  hasPadding,
  fixedWidth,
  tileWidth,
  className,
  carouselRef,
}): React.ReactElement => {
  let firstClientX: number | 0

  const sliderRef = React.useRef<Slider | null>(null)
  const minValue = 20 // threshold

  const rightDirection = (direction: number) => direction < -Math.abs(minValue)
  const leftDirection = (direction: number) => direction > Math.abs(minValue)

  const touchStart = (e: React.TouchEvent): void => {
    e.preventDefault()
    e.stopPropagation()
    firstClientX = e.touches[0].clientX
  }

  const touchEnd = (e: React.TouchEvent): void => {
    const clientX = Math.round(e.changedTouches[0].clientX - firstClientX)

    if (rightDirection(clientX)) {
      sliderRef.current?.slickNext()
    } else if (leftDirection(clientX)) {
      sliderRef.current?.slickPrev()
    }
  }

  const renderArrows = (rotation: RotationValues): React.ReactElement => {
    return (
      <StyledNavArrow>
        <Icon rotate={rotation} color="white" padding="sm">
          <OtherArrow width={30} height={30} />
        </Icon>
      </StyledNavArrow>
    )
  }

  const customPaging = () => <div />

  const sliderConfig = () => {
    return {
      focusOnSelect: false,
      nextArrow: renderArrows(0),
      prevArrow: renderArrows(180),
      customPaging,
      responsive: [
        {
          breakpoint: 1007,
          settings: {
            swipe: false,
            swipeToSlide: false,
            draggable: false,
            touchMove: false,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            swipeToSlide: true,
          },
        },
      ],
      ...sliderSettings,
      ref: (e) => {
        sliderRef.current = e
        if (carouselRef) {
          carouselRef(e)
        }
      },
    }
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
      arrowsSurfaceColor={arrowsSurfaceColor}
      whiteDots={whiteDots}
      fixedWidth={fixedWidth}
      tileWidth={tileWidth}
      brightArrows={brightArrows}
      items={items}
      sliderSettings={sliderSettings}
      renderSlide={renderSlide}
      boxShadow={boxShadow}
      hasOverflow={hasOverflow}
      hasPadding={hasPadding}
      className={className}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <Slider {...sliderConfig()} beforeChange={beforeChange} afterChange={afterChange}>
        {items.map((entry, index) => {
          return (
            <StyledCarouselHandler onClickCapture={handleOnItemClick} key={index} className="ewb-slider--element">
              {renderSlide(entry, index)}
            </StyledCarouselHandler>
          )
        })}
      </Slider>
    </StyledCarousel>
  )
}

SimpleCarousel.displayName = 'SimpleCarousel'
