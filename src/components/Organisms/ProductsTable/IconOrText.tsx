import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { OtherCross, OtherDone } from '@matthill8286/atomic-icon-library'

interface IconOrTextProps {
  textType: string
}

const IconOrTextWrapper = styled.div<IconOrTextProps>`
  text-align: center;
  svg {
    max-width: 15px;
    max-height: 15px;
    fill: ${({ theme, textType }) => (textType === 'check true' ? theme.color.success : theme.color.error)};
  }
  ${media.sm} {
    text-align: left;
  }
`

export const IconOrText: React.FC<IconOrTextProps> = ({ textType }) => {
  const getIconOrText = () => {
    return textType === 'check true' ? (
      <Icon className="mms-pds-table__check-icon">
        <OtherDone />
      </Icon>
    ) : textType === 'check false' ? (
      <Icon className={'mms-pds-table__cross-icon'}>
        <OtherCross viewBox="0 0 100 100" />
      </Icon>
    ) : (
      <CopyText tag={'span'} fontSize={'sm'}>
        {textType}
      </CopyText>
    )
  }

  return <IconOrTextWrapper textType={textType}>{getIconOrText()}</IconOrTextWrapper>
}
