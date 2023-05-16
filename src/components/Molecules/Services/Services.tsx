import * as React from 'react'
import { Selectable } from '@/components/Atoms/Selectable'
import { convertPrice } from '@/utils/convertPrice'
import { ServiceEntryProps, ServicesPriceProps, ServicesProps, ServiceType } from './Services.interface'
import {
  StyledEntry,
  StyledEntryText,
  StyledPrice,
  StyledRecurringSubscriptionText,
  StyledSkeleton,
} from './Services.styled'

const ServicePrice: React.FC<ServicesPriceProps> = ({
  amount,
  currency,
  freeLabel,
}: ServicesPriceProps): React.ReactElement => {
  return <StyledPrice>{convertPrice(amount, currency, freeLabel)}</StyledPrice>
}

const ServiceEntry = ({
  onChange,
  freeLabel,
  item,
  lineitemId,
  offersDisabled,
  onDisabledServicesClick,
}: ServiceEntryProps): React.ReactElement => {
  const { id, offerType, selected, price, recurringSubscriptionText } = item
  const inputId = `${lineitemId}-${offerType}-${id}`
  return (
    <StyledEntry
      isDisabled={!!offersDisabled}
      data-test={'mms-services-entry'}
      onClick={offersDisabled ? onDisabledServicesClick : undefined}
    >
      <Selectable
        type="checkbox"
        selectableId={inputId}
        name={inputId}
        label=""
        value={id}
        isChecked={!!selected}
        state={offersDisabled ? 'disabled' : 'idle'}
        onChangeValue={(isCheck, value) => onChange(isCheck, value)}
      >
        <StyledEntryText>{item.name}</StyledEntryText>
        <ServicePrice amount={price?.amount || 0} currency={price?.currency || ''} freeLabel={freeLabel} />
        {recurringSubscriptionText && (
          <StyledRecurringSubscriptionText>{recurringSubscriptionText}</StyledRecurringSubscriptionText>
        )}
      </Selectable>
    </StyledEntry>
  )
}

const Services: React.FC<ServicesProps> = (props: ServicesProps): React.ReactElement | null => {
  const { items, loading } = props

  return loading ? (
    <StyledSkeleton />
  ) : (
    <>
      {items &&
        items.length > 0 &&
        items.map((item: ServiceType, index: number): React.ReactElement | null => (
          <ServiceEntry {...{ ...props, ...{ index: index } }} item={item} key={index} />
        ))}
    </>
  )
}

export { Services, StyledSkeleton, ServiceEntry, ServicePrice }
