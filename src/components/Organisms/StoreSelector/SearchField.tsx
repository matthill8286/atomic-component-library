/* global JSX */
import React from 'react'
import { InfoText } from '@/components/Atoms/Typography'
import { OtherSearch } from '@matthill8286/atomic-icon-library'
import { SSearchWrapper, SInput } from './StoreSelector.styled'
// eslint-disable-next-line prettier/prettier
import type { SearchFieldProps } from './StoreSelector.types'

export function SearchField({
  placeholder,
  value,
  onChange,
  onSearch,
  consent = null,
  errorMessage,
  disabled,
}: SearchFieldProps): JSX.Element {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <SSearchWrapper data-test="mms-market-search-field" hasConsent={Boolean(consent)}>
      <SInput
        autofocus
        inputIcon={!errorMessage ? <OtherSearch /> : undefined}
        onChange={handleInputChange}
        onClickIcon={onSearch}
        onKeyDown={(e) => value !== '' && e.key === 'Enter' && onSearch()}
        placeholder={placeholder}
        state={errorMessage ? 'error' : disabled ? 'disabled' : undefined}
        value={value}
      />
      {consent}
      {errorMessage && (
        <InfoText color="primary" data-test="mms-market-search-field-error">
          {errorMessage}
        </InfoText>
      )}
    </SSearchWrapper>
  )
}
