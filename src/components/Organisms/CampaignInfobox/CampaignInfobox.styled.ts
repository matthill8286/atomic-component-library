import { Link } from '@/components/Atoms/Link'
import { Picture } from '@/components/Atoms/Picture'
import { css, media, styled } from '@/styles'

export const StyledWrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    background-color: ${theme.color.white};
    border-radius: ${theme.dimension.borderRadius1};
    border: 1px solid ${theme.color.grey2};
    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.07), 0 3px 14px 2px rgba(0, 0, 0, 0.06),
        0 5px 5px -3px rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0);
    }
  `,
)

export const StyledLink = styled(Link)`
  width: 100%;
`

export const StyledTextWrapper = styled.div(
  () => css`
    display: flex;
    padding-left: 0.5rem;
    span {
      margin: auto;
      margin-right: 16px;
    }

    ${media.ie11} {
      align-items: center;
    }
  `,
)

export const StyledPicture = styled(Picture)(
  () => css`
    display: flex;
    padding: 0.5rem;
    :hover {
      cursor: pointer;
    }
    img {
      max-height: 60px;
      width: auto;
    }
    picture {
      display: flex;
    }

    ${media.ie11} {
      width: auto;
    }
  `,
)
