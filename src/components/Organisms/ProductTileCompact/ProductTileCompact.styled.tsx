import { Icon } from '@/components/Atoms/Icon'
import { InfoText, Typo } from '@/components/Atoms/Typography'
import { media, spacing } from '@/styles'
import { styled } from '@/styles/styled'
import { ProductImage } from './elements/ProductImage'

export const StyledProductTileCompactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: ${spacing.base.xs} 0;
`

export const StyledProductTileCompactElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledContentColumn = styled.div<{ hasIcon?: boolean }>`
  min-width: 0;
  flex-grow: 1;
  position: relative;
  width: 100%;

  ${({ hasIcon, theme }) => (hasIcon ? `padding-left: ${theme.spacing.base.xxs};` : '')}
`

export const StyledProductImage = styled(ProductImage)<{
  width?: number
  height?: number
}>`
  flex: 1;
  margin: auto;
  align-content: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const StyledContentList = styled.div`
  flex-grow: 1;
  margin-left: ${({ theme }) => theme.spacing.base.md};
  align-self: center;

  ${media.maxMd} {
    flex-grow: 1;
    margin-left: ${({ theme }) => theme.spacing.base.sm};
  }
`

export const StyledRightIconsWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.base.xs} 0;
  padding: ${({ theme }) => theme.spacing.base.sm};
  display: flex;
  cursor: pointer;
`

export const StyledIconsWrapper = styled.div`
  flex: 1;
  display: inline-flex;
`

export const StyledElementIcon = styled(Icon)`
  cursor: pointer;
  display: inline;
  position: absolute;
  left: 0;
  top: 0;
`

export const StyledRightIconsInfoText = styled(InfoText)`
  white-space: nowrap;
`

export const StyledInformationTypo = styled(Typo)`
  border-right: 1px solid ${({ theme }) => theme.color.grey5};
`
