import React, { useState } from 'react'
import { Button } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { ProgressBar } from '@/components/Atoms/ProgressBar'
import { OtherArrow } from '@matthill8286/atomic-icon-library'
import {
  BulletProps,
  DotsOptions,
  PageNumberProps,
  PagesOptions,
  PaginationProps,
  ProgressOptions,
} from './Pagination.interface'
import {
  StyledBullet,
  StyledCopyText,
  StyledInfoText,
  StyledLinkWrapper,
  StyledMoreButton,
  StyledPagesWrapper,
  StyledPaginationWrapper,
} from './Pagination.styled'

const Bullets: React.FC<BulletProps> = ({ max, current, handleClick }): JSX.Element => {
  return (
    <>
      {Array.from({ length: max }, (item, index) => {
        return (
          <StyledBullet
            isClickable
            isActive={index === current}
            key={'mms-bullet_' + index}
            onClick={(ev) => handleClick(ev, index)}
          />
        )
      })}
    </>
  )
}

const PageNumberDots: React.FC = () => {
  return (
    <StyledCopyText tag={'span'} color={'grey3'} isActive={false} isClickable={false}>
      {'...'}
    </StyledCopyText>
  )
}

const PageNumber: React.FC<PageNumberProps> = ({ item, current, handleClick }): JSX.Element => {
  return (
    <StyledCopyText
      tag={'span'}
      color={'black'}
      bold={item === current}
      isActive={item === current}
      isClickable
      onClick={(ev) => handleClick(ev, item)}
    >
      {item + 1}
    </StyledCopyText>
  )
}

const insertIfWithMax =
  (max: number) =>
  (condition: boolean, element: number): [] | [number] => {
    if (element < 0 || element >= max) return []
    return condition ? [element] : []
  }

const renderPages = (
  amount: number,
  current: number,
  handleLinkClick: (ev: React.MouseEvent, index: number) => void,
): JSX.Element[] => {
  const hasPrev = current - 1 > 0
  const hasPrevBefore = current - 2 > 0
  const hasNext = current + 1 < amount - 1
  const hasNextAfter = current + 2 < amount - 1
  const isLast = current === amount - 1
  const isNearLast = isLast || current === amount - 2
  const isFirst = current === 0
  const isNearFirst = isFirst || current === 1
  const insertIf = insertIfWithMax(amount)
  const indexToRender = Array.from(
    new Set([
      0,
      ...insertIf(isLast, current - 4),
      ...insertIf(isNearLast, current - 3),
      ...insertIf(hasPrevBefore, current - 2),
      ...insertIf(hasPrev, current - 1),
      ...insertIf(!isFirst, current),
      ...insertIf(hasNext, current + 1),
      ...insertIf(hasNextAfter, current + 2),
      ...insertIf(isNearFirst, current + 3),
      ...insertIf(isFirst, current + 4),
      ...insertIf(!isLast, amount - 1),
    ]),
  )

  return indexToRender.map((item: number, index: number, array: number[]) => {
    const showDots = array[index + 1] > item + 1
    return (
      <StyledLinkWrapper key={'mms-paging_' + item}>
        <PageNumber item={item} current={current} handleClick={handleLinkClick} />
        {showDots && <PageNumberDots />}
      </StyledLinkWrapper>
    )
  })
}

export const Pagination: React.FC<PaginationProps> = ({
  variant,
  current,
  max,
  options,
  ...otherProps
}): JSX.Element | null => {
  if (current > max) throw Error('current needs to be smaller then the max')

  const [active, setActive] = useState(current)

  const handleClick = (ev: React.MouseEvent, index: number): void => {
    ev.stopPropagation()
    if (index !== active && index >= 0 && index < max) {
      setActive(index)
      if (variant === 'dots') {
        ;(options as DotsOptions).onChange(ev, index)
      }
      if (variant === 'pages') {
        ;(options as PagesOptions).onChange(ev, index)
      }
    }
  }

  const handleClickMore = (ev: React.MouseEvent): void => {
    ev.stopPropagation()
    if (variant === 'progress') {
      ;(options as ProgressOptions).onClickMore(ev)
    }
  }

  if (variant === 'progress') {
    const hasNext = active + 1 < max
    const { progressLabel, buttonLabel } = options as ProgressOptions
    const value = (current / max) * 100
    return (
      <StyledPaginationWrapper variant={variant} {...otherProps}>
        <StyledInfoText>{progressLabel}</StyledInfoText>
        <ProgressBar small value={value} />
        <StyledMoreButton fullWidth actionType="primary" onClick={handleClickMore} disabled={!hasNext}>
          {buttonLabel}
        </StyledMoreButton>
      </StyledPaginationWrapper>
    )
  } else if (variant === 'dots') {
    return (
      <StyledPaginationWrapper variant={variant} {...otherProps}>
        <Bullets max={max} current={active} handleClick={handleClick} />
      </StyledPaginationWrapper>
    )
  } else if (variant === 'pages') {
    const hasPrev = active - 1 >= 0
    const hasNext = active + 1 < max
    return (
      <StyledPaginationWrapper variant={variant} {...otherProps}>
        <Button disabled={!hasPrev} actionType="primary" round onClick={(ev) => handleClick(ev, active - 1)}>
          <Icon width={16} height={16} rotate={180}>
            <OtherArrow />
          </Icon>
        </Button>
        <StyledPagesWrapper>{renderPages(max, active, handleClick)}</StyledPagesWrapper>
        <Button disabled={!hasNext} actionType="primary" round onClick={(ev) => handleClick(ev, active + 1)}>
          <Icon width={16} height={16}>
            <OtherArrow />
          </Icon>
        </Button>
      </StyledPaginationWrapper>
    )
  } else {
    return null
  }
}
