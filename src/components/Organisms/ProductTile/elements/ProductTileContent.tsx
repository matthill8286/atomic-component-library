import { FC, MouseEvent, ReactElement } from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { Spacer } from '@/components/Atoms/Spacer'
import { CopyText, InfoTextProps, Typo } from '@/components/Atoms/Typography'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { breakpoints, css, styled } from '@/styles'
import { ThemeFontSizes } from '@/types/theme'
import { Provider as ProviderType, Skills } from '../ProductTile.interface'
import { ProductSkills } from '@/components/Organisms/ProductTile/elements/ProductSkills'

/** Unique component for better selection during tests */
const Provider: React.FC<InfoTextProps> = (props) => <CopyText weight="bold" toUpperCase {...props} />

interface StyledElementProps {
  isDisabled?: boolean
  isCompact?: boolean
}

export interface ProductTitleProps extends StyledElementProps {
  fontSize?: ThemeFontSizes
  isCompact?: boolean
  loading?: boolean
  limitContentLines?: number
  renderSkills?: ReactElement | undefined
  provider?: ProviderType['name'] | undefined
  onHeadingClick?: (e) => void
  description?: string | null
  withEllipsis?: boolean
  skills?: (Skills | null)[]
  competencyLabel?: string
  showSkills?: boolean
}

const Ellipsis = css`
  min-height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`

const StyledProviderWrapper = styled.div<StyledElementProps>`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  display: flex;

  ${({ isCompact }) =>
    `${
      !isCompact
        ? `
  justify-content: space-between;
  `
        : `
  justify-content: flex-end;`
    }`}
`

const StyledHeadingDescription = styled(Typo)<StyledElementProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ isDisabled }) => `
    ${
      isDisabled
        ? `
        -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
      `
        : ''
    }
  `};
`

const StyledProvider = styled(Provider)<StyledElementProps>`
  display: flex;
  padding-top: 5px;

  ${({ isDisabled }) => `
    ${
      isDisabled
        ? `
        -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
      `
        : ''
    }
  `};
`
export const StyledSkills = styled.div<StyledElementProps>`
  margin-top: 0;

  ${({ isDisabled }) => `
    ${
      isDisabled
        ? `
        -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
      `
        : ''
    }
  `};
`

const StyledHeaderWrapper = styled.div<{
  withEllipsis?: boolean
}>`
  ${({ withEllipsis }) => withEllipsis && Ellipsis}
  ${({ theme }) => `margin-bottom: ${theme.spacing.base.sm}`};
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`

export const ProductTileContent: FC<ProductTitleProps> = ({
  provider,
  description,
  limitContentLines = 2,
  isDisabled = false,
  loading = false,
  isCompact = false,
  withEllipsis = true,
  showSkills = true,
  skills,
  competencyLabel,
  onHeadingClick,
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.sm

  if (loading) {
    return (
      <StyledHeaderWrapper>
        {!isCompact && <SkeletonBlockItem width="170px" height="23px" />}
        <Spacer size="md" />
        <SkeletonBlockItem width="90%" height="25px" />
        <Spacer size="md" />
      </StyledHeaderWrapper>
    )
  }

  return (
    <StyledHeaderWrapper withEllipsis={withEllipsis} onClick={onHeadingClick}>
      <StyledProviderWrapper isCompact={isCompact}>
        {!isCompact && (
          <StyledProvider
            isDisabled={isDisabled}
            data-test="learning-product-provider"
            color="grey5"
            display="inline-flex"
            fontSize="xs"
            textAlign="left"
            toUpperCase
            margin="0 0 xs"
            tag="h1"
          >
            {provider}
          </StyledProvider>
        )}
        {showSkills && (
          <StyledSkills>
            <ProductSkills loading={loading} color="grey4" skills={skills} competencyLabel={competencyLabel} />
          </StyledSkills>
        )}
      </StyledProviderWrapper>
      {description && (
        <StyledHeadingDescription
          weight="bold"
          tag="div"
          margin="xs 0 0"
          fontSize="lg"
          textAlign="left"
          lineHeight={isMobile ? 'sm' : 'md'}
          color="grey6"
          limitLines={limitContentLines}
          isDisabled={isDisabled}
          data-test="learning-product-description"
        >
          {description}
        </StyledHeadingDescription>
      )}
    </StyledHeaderWrapper>
  )
}
