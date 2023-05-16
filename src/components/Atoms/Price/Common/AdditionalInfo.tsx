import * as React from 'react'
import { FlexBox } from '@/components/Helper/FlexBox'
import { InfoLine } from '../BrandedPrice/BrandedPrice.styled'

export const AdditionalInfo = ({ lines, withBackground }): React.ReactElement => {
  return (
    <FlexBox flexDirection="column">
      {lines.map((line, i) =>
        line ? (
          <InfoLine key={'adi' + i} color={withBackground ? 'white' : 'grey4'}>
            {line}
          </InfoLine>
        ) : null,
      )}
    </FlexBox>
  )
}
