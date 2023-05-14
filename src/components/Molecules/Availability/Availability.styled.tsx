import { Icon } from '@/components/Atoms/Icon'
import { Typo } from '@/components/Atoms/Typography/Typo'
import { styled } from '@/styles/styled'
import { ProductAvailabilityState } from '@/types/availabilityState'
import { AvailabilityProps, AvailabilityStatusProps, StyledAvailabilityTypoProps } from './Availability.interface'

export const StyledAvailabilityWrapper = styled.div`
  display: flex;
`
export const StyledAvailabilityStatus = styled.span<AvailabilityStatusProps>`
  display: inline-block;
  height: ${({ theme }) => theme.spacing.base.xs};
  width: ${({ theme }) => theme.spacing.base.xs};
  margin-right: ${({ theme }) => theme.spacing.base.xs};
  border-radius: 50%;

  ${({ theme, state }) => {
    const stateBackgroundMap = new Map<ProductAvailabilityState, string>([
      [ProductAvailabilityState.LOWERTHRESHOLD, `background: ${theme.color.success};`],
      [ProductAvailabilityState.UPPERTHRESHOLD, `background: ${theme.color.success};`],
      [ProductAvailabilityState.AVAILABLE, `background: ${theme.color.success};`],
      [ProductAvailabilityState.PARTIAL_AVAILABLE, `background: ${theme.color.alert};`],
      [ProductAvailabilityState.TIME_CLUSTER, `background: ${theme.color.alert};`],
      [ProductAvailabilityState.RELEASE, `background: ${theme.color.alert};`],
      [ProductAvailabilityState.PICKUP_TIMERANGE, `background: ${theme.color.alert};`],
      [ProductAvailabilityState.NOT_AVAILABLE, `background: ${theme.color.grey3};`],
      [ProductAvailabilityState.NOONLINESTOCK, `background: ${theme.color.grey3};`],
      [ProductAvailabilityState.NOT_POSSIBLE_IN_CITY_CENTER, `background: ${theme.color.grey3};`],
      [ProductAvailabilityState.NOT_POSSIBLE_IN_GENERAL, `background: ${theme.color.grey3};`],
    ])
    return state && stateBackgroundMap.get(state)
  }}
`

export const StyledAvailabilityHeadingWrapper = styled.div`
  flex: 1;
  flex-basis: auto;
`

export const StyledAvailabilityStatusWrapper = styled.span<AvailabilityProps>`
  line-height: ${({ theme, scale }) => scale === 'large' && theme.font.lineHeight.xs};
`

export const StyledAvailabilityPrice = styled.div`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.grey5};
  font-family: ${({ theme }) => theme.font.family.default};
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.sm};
`

export const StyledAvailabilitySubText = styled.div<AvailabilityProps>`
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.grey5};
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme, scale }) => (scale == 'large' ? theme.font.size.sm : theme.font.size.xxs)};
`

export const StyledAvailabilityIcon = styled(Icon)`
  cursor: pointer;
  display: inline;
  margin-left: ${({ theme }) => theme.spacing.base.xs};
  position: absolute;
  top: -2px;
  right: ${({ theme }) => `-${theme.spacing.base.md}`};
`

export const StyledAvailabilityTypo = styled(Typo)<StyledAvailabilityTypoProps>`
  position: relative;
  ${({ hasIcon }) => {
    return hasIcon ? `display: inline-flex;` : ''
  }}
`

export const StyledCustomIcon = styled(Icon)`
  vertical-align: middle;
  margin: ${({ theme }) => `${theme.spacing.base.xxs} ${theme.spacing.base.xxs}`} 0 0;
`
