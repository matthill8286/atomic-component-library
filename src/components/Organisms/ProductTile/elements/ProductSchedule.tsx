import React from 'react'
import { Tag } from '@/components/Atoms/Tag'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'
import { OtherCalendar, OtherLiveLabel } from 'atomic-icon-library'
import { Icon } from '@/components/Atoms/Icon'

type TimeBoxValues = string | null

type Timebox = {
  start?: TimeBoxValues | undefined
  end?: TimeBoxValues | undefined
}

export interface ProductSchedule {
  timebox?: Timebox | undefined
  color?: ThemeColors
}

export const StyledIcon = styled(Icon)(
  ({ theme }) => css`
    position: absolute;
    z-index: 25;
    padding-left: ${theme.spacing.base.md};
    top: 4px;
    left: 0;
  `,
)

export const StyledLiveLabel = styled(Icon)(
  ({ theme }) => css`
    position: absolute;
    z-index: 25;
    padding-left: ${theme.spacing.base.sm};
    top: 0;
    left: 0;
  `,
)

const StyledProductSchedule = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 20;
    display: flex;
    padding: 0 ${theme.spacing.base.sm};
    top: ${theme.spacing.base.sm};
    left: 0;
  `,
)

const StyledTag = styled(Tag)`
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  border-color: transparent;

  span {
    font-size: 12px;
    line-height: 17px;
  }
`

// Timebox object
// create a new date object for both start and end and current date

export const ProductSchedule: React.FC<ProductSchedule> = ({ timebox, color }) => {
  const startTime = new Date(timebox?.start as string)
  const endTime = new Date(timebox?.end as string)
  const currentTime = new Date()

  const date = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const time = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    // @ts-ignore
    hourCycle: 'h12',
  })

  const formattedDate = date.format(startTime)
  const formattedTime = time.format(startTime).toLocaleUpperCase()
  const tn = Intl.DateTimeFormat().resolvedOptions().timeZone

  const fullStart = `${formattedDate}, ${formattedTime} ${tn}`

  const beforeScheduledTime = currentTime.getTime() < startTime.getTime()
  const startScheduledTime = currentTime.getTime() > startTime.getTime()
  const duringScheduledTime = currentTime.getTime() < endTime.getTime()

  const showTimeSchedule = beforeScheduledTime && (duringScheduledTime || !timebox?.end)
  const showTimeLive = startScheduledTime && (duringScheduledTime || !timebox?.end)

  return (
    <StyledProductSchedule>
      {showTimeSchedule && !showTimeLive && (
        <>
          <StyledIcon color="white" width="sm" height="sm">
            <OtherCalendar />
          </StyledIcon>
          <StyledTag weight="bold" padding={{ left: 'lg', right: 'xs' }} text={fullStart} color={color} />
        </>
      )}
      {showTimeLive && (
        <StyledLiveLabel color="transparent" width={62} height={23}>
          <OtherLiveLabel />
        </StyledLiveLabel>
      )}
    </StyledProductSchedule>
  )
}
