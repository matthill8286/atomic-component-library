import React, { useState } from 'react'
import { InfoText } from '../Typography'
import { ToolTipProps } from './ToolTip.interface'
import { StyledToolTip, StyledToolTipContent, StyledToolTipWrapper } from './ToolTip.styled'

export const ToolTip: React.FC<ToolTipProps> = (props) => {
  const { children, content, primary = false, limitLines = 5, ...otherProps } = props
  const [tooltipVisible, setState] = useState(false)

  return (
    <StyledToolTipWrapper
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      onClick={() => setState(!tooltipVisible)}
      {...otherProps}
    >
      {children}
      {tooltipVisible && content && (
        <StyledToolTip primary={primary}>
          <StyledToolTipContent primary={primary}>
            <InfoText color={primary ? 'white' : 'grey4'} limitLines={limitLines} textAlign={'center'}>
              {content}
            </InfoText>
          </StyledToolTipContent>
        </StyledToolTip>
      )}
    </StyledToolTipWrapper>
  )
}
