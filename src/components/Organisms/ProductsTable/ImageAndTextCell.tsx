import React from 'react'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'

interface ImageAndTextProps {
  children: React.ReactNode
}

const StyledImageAndTextCell = styled.div<ImageAndTextProps>`
  display: flex;
  justify-content: center;
  min-width: 100px;
  text-align: center;
  align-items: center;
  img {
    margin-right: 8px;
    max-width: 25px;
  }
  ${media.sm} {
    text-align: left;
    justify-content: left;
  }
`

export const ImageAndTextCell: React.FC<ImageAndTextProps> = ({ children }) => {
  return <StyledImageAndTextCell>{children}</StyledImageAndTextCell>
}
