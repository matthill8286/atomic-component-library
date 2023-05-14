import React, { FC } from 'react'
import { media, MediaType } from '@/styles/media'
import { css, styled } from '@/styles/styled'

export interface MediaStyleSwitchProps {
  className?: string
  query: MediaType | string
  activeCSS?: string
  inactiveCSS?: string
  activeDisplay?: string
  inactiveDisplay?: string
}

const StyledMediaStyleSwitch = styled.div<MediaStyleSwitchProps>(
  ({ query, activeCSS, inactiveCSS, inactiveDisplay, activeDisplay }) =>
    query
      ? css`
          ${inactiveDisplay
            ? css`
                display: ${inactiveDisplay};
              `
            : ''}
          ${inactiveCSS
            ? css`
                ${inactiveCSS};
              `
            : ''}
    
   ${css`
            ${typeof media[query] === 'undefined' ? query : media[query]} {
              ${activeDisplay
                ? css`
                    display: ${activeDisplay};
                  `
                : ''}
              ${activeCSS
                ? css`
                    ${activeCSS};
                  `
                : ''};
            }
          `}
        `
      : '',
)

export const MediaStyleSwitch: FC<MediaStyleSwitchProps> = (props) => <StyledMediaStyleSwitch {...props} />
