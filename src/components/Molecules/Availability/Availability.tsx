import React, { ReactNode } from 'react'
import { SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { convertPrice } from '@/utils/convertPrice'
import { AvailabilityProps, AvailabilitySize } from './Availability.interface'
import {
  StyledAvailabilityHeadingWrapper,
  StyledAvailabilityIcon,
  StyledAvailabilityPrice,
  StyledAvailabilityStatus,
  StyledAvailabilityStatusWrapper,
  StyledAvailabilitySubText,
  StyledAvailabilityTypo,
  StyledAvailabilityWrapper,
  StyledCustomIcon,
} from './Availability.styled'
import { OtherInfo } from '@matthill8286/atomic-icon-library'
import { ProductAvailabilityState } from '@/types'

const textOrNode = (content: ReactNode | string): ReactNode =>
  typeof content === 'string' && /<\/?[a-z][\s\S]*>/.test(content) ? (
    <span dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <>{content}</>
  )

const renderSubtext = (scale: AvailabilitySize, loading: boolean, subtext: ReactNode): JSX.Element | null =>
  !subtext ? null : (
    <StyledAvailabilitySubText scale={scale}>
      {loading ? <SkeletonInlineItem fontSize={scale === 'small' ? 'xxs' : 'sm'} length={20} /> : textOrNode(subtext)}
    </StyledAvailabilitySubText>
  )

export const Availability: React.FC<AvailabilityProps> = ({
  currency,
  freeLabel,
  infoIconOnClick,
  loading = false,
  price,
  scale = 'small',
  state,
  subtext,
  text,
  CustomIcon,
  ...props
}): JSX.Element => {
  return (
    <StyledAvailabilityWrapper {...props}>
      <StyledAvailabilityStatusWrapper scale={scale}>
        {CustomIcon ? (
          <StyledCustomIcon height="sm" width="sm">
            <CustomIcon />
          </StyledCustomIcon>
        ) : (
          <StyledAvailabilityStatus state={loading ? ProductAvailabilityState.NOT_AVAILABLE : state} />
        )}
      </StyledAvailabilityStatusWrapper>
      <StyledAvailabilityHeadingWrapper>
        {loading ? (
          <SkeletonInlineItem fontSize={scale === 'small' ? 'xxs' : 'sm'} length={12} />
        ) : (
          <StyledAvailabilityTypo
            fontSize={scale === 'small' ? 'xxs' : 'sm'}
            weight="semibold"
            color="grey5"
            hasIcon={!!infoIconOnClick}
          >
            {textOrNode(text)}
            {infoIconOnClick && (
              <StyledAvailabilityIcon as="span" color="black" height={20} onClick={infoIconOnClick} width={20}>
                <OtherInfo />
              </StyledAvailabilityIcon>
            )}
          </StyledAvailabilityTypo>
        )}

        {renderSubtext(scale, loading, subtext)}
      </StyledAvailabilityHeadingWrapper>
      <StyledAvailabilityPrice>{convertPrice(price, currency, freeLabel)}</StyledAvailabilityPrice>
    </StyledAvailabilityWrapper>
  )
}

Availability.displayName = 'Availability'
