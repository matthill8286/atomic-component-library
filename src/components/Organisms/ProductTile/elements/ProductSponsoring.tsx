import React, { useCallback, useRef, useState, MouseEvent } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { FlexItem } from '@/components/Helper/FlexBox'
import { NotificationBox } from '@/components/Molecules/NotificationBox'
import { css, styled } from '@/styles/styled'
import { OtherInfoOutlined } from 'atomic-icon-library'
import { SponsoringDetails } from '@/components/Organisms/ProductTile'

interface ProductSponsoringProps {
  sponsoringDetails: SponsoringDetails
  layout?: 'carousel' | 'tile'
  maxWidth?: string
}

export const ProductSponsoring: React.FC<ProductSponsoringProps> = ({
  sponsoringDetails,
  layout = 'tile',
  maxWidth = '350px',
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)
  const arrowLeft = (iconRef.current?.offsetLeft || 4) - 4

  const handleTooltipChange = useCallback(
    (newState: boolean) => (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setTooltipVisible(newState)
    },
    [],
  )
  const handleClick = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLAnchorElement)) {
      // clicked on notification box - but not link
      e.preventDefault() // avoid parent anchor click
    }
    e.stopPropagation() // avoid parent click handler
  }, [])

  return (
    <StyledSponsoringWrapper layout={layout}>
      <StyledSponsoringInnerWrapper onClick={handleTooltipChange(!tooltipVisible)}>
        {sponsoringDetails?.label && (
          <>
            <CopyText
              toUpperCase={sponsoringDetails.showUppercase}
              fontSize="sm"
              tag="div"
              color="grey4"
              margin="0 4px 0 0"
            >
              {sponsoringDetails.label}
            </CopyText>
            <Icon
              ref={iconRef}
              width={12}
              height={12}
              color="grey4"
              display="inline-flex"
              alignSelf="center"
              onMouseEnter={handleTooltipChange(true)}
              onMouseLeave={handleTooltipChange(false)}
            >
              <OtherInfoOutlined />
            </Icon>
          </>
        )}
        {tooltipVisible && (
          <NotificationBox
            onClick={handleClick}
            title={sponsoringDetails.title}
            body={sponsoringDetails.infoText}
            maxWidth={maxWidth}
            animation="fadeIn"
            bodyFontSize="xs"
            bodyMargin="0"
            isClosable
            color="white"
            onClose={handleTooltipChange(false)}
            tooltip={{
              arrowPosition: 'top-left',
              arrowleft: arrowLeft,
              left: 0,
              top: 30,
            }}
          />
        )}
      </StyledSponsoringInnerWrapper>
    </StyledSponsoringWrapper>
  )
}

export const StyledSponsoringWrapper = styled(FlexItem)<{
  layout: ProductSponsoringProps['layout']
}>(
  ({ layout, theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${layout === 'tile' ? theme.spacing.base.xs : '0'};
    margin-left: 0;
    position: relative;
    min-width: 0;
  `,
)

const StyledSponsoringInnerWrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    margin-bottom: -${theme.spacing.base.xs};
    padding-bottom: ${theme.spacing.base.xs};
  `};
`

export const StyledSponsoringIconWrapper = styled.div`
  width: 100%;
  display: flex;
`
