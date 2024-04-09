import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'

interface ProductCellProps {
  children: React.ReactNode
  linkUrl: string
}

const StyledProductCell = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  text-align: left;
  width: 100%;
  ${media.md} {
    min-width: 150px;
  }
  img {
    width: 120px;
    margin-bottom: 16px;
  }
`

export const ProductCell: React.FC<ProductCellProps> = ({ children, linkUrl }) => {
  return (
    <Link to={linkUrl}>
      <StyledProductCell>{children}</StyledProductCell>
    </Link>
  )
}
