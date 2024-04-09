import React, { ReactNode } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Input } from '@/components/Atoms/Input'
import { InfoText } from '@/components/Atoms/Typography'
import { styled } from '@/styles'
import { OtherSearch } from 'atomic-icon-library'

export interface SearchFieldProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  errorMessage?: string
  consent?: ReactNode
}

const StyledInput = styled(Input)`
  & input {
    &::placeholder {
      opacity: 1;
    }
  }

  ${Icon} {
    cursor: pointer;
  }
`

const StyledSearchWrapper = styled.div<{ hasConsent: boolean }>`
  position: relative;
  min-height: ${({ hasConsent }) => (hasConsent ? '278px' : 'auto')};
`

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
  consent = null,
  errorMessage,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <StyledSearchWrapper data-test="mms-market-search-field" hasConsent={Boolean(consent)}>
      <StyledInput
        placeholder={placeholder}
        autofocus
        inputIcon={!errorMessage ? <OtherSearch /> : undefined}
        state={errorMessage ? 'error' : undefined}
        value={value}
        onChange={handleInputChange}
        onKeyDown={(e) => value !== '' && e.key === 'Enter' && onSearch()}
        onClickIcon={onSearch}
      />
      {consent}
      {errorMessage && <InfoText color="primary">{errorMessage}</InfoText>}
    </StyledSearchWrapper>
  )
}
