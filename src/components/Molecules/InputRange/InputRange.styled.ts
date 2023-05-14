import { css, media, saiyanTheme, styled } from '@/styles'
import { Typo } from '../../Atoms/Typography'

const issaiyan = (theme) => theme.name === saiyanTheme.name

export const StyledInputRangeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.base.md};
  flex-grow: 1;
  ${media.maxSm} {
    padding: ${({ theme }) => `${theme.spacing.base.md} ${theme.spacing.base.lg}`};
  }
`
export const StyledInputRangeBubbleContainer = styled.div`
  height: 6rem;
`

export const Animation = ({ theme }) => css`
  animation: wobble 2s ease-in-out 1 alternate;

  @keyframes wobble {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.15);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const StyledInputRangeBubblePosition = styled.output`
  ${({ theme }) =>
    css`
      width: ${issaiyan(theme) ? `4rem` : `3.5rem`};
      height: ${issaiyan(theme) ? `4rem` : `3.5rem`};

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%) ${!issaiyan(theme) && ` rotate(45deg)`};

      ${media.maxMd} {
        transform: translateX(-50%)
          ${issaiyan(theme)
            ? ` translateY(${theme.spacing.base.sm})`
            : ` translateY(${theme.spacing.base.xs}) rotate(45deg)`};
      }
    `}
`

export const StyledInputRangeBubble = styled.output<{ isSliding: boolean }>`
  ${({ theme, isSliding }) =>
    css`
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      border: 2px solid ${theme.color.primary};
      ${issaiyan(theme) && `border-radius: 50%;`}
      ${isSliding && Animation}
    `}
`

export const StyledInputRangeBubbleTypo = styled(Typo)`
  ${({ theme }) =>
    css`
      font-size: ${!issaiyan(theme) ? theme.font.size.md : theme.font.size.xl};
      transform: ${!issaiyan(theme) ? ` translateY(4px) rotate(-45deg)` : `translateY(0)`};
      line-height: ${theme.font.lineHeight.xl};
      padding: 0;

      ${media.maxMd} {
        font-size: ${!issaiyan(theme) ? theme.font.size.xs : theme.font.size.md};
      }
    `}
`

export const StyledInputRangeThumb = styled.div`
  -webkit-appearance: none;
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel1};
  height: 1px;
  width: 1px;
  background: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: ${({ theme }) => theme.spacing.base.md};
    width: ${({ theme }) => theme.spacing.base.md};
    margin-left: -${({ theme }) => theme.spacing.base.sm};
    border-radius: 50%;
    background: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => `5px solid ${theme.color.primary}`};
  }
`

const InputRangeThumbArea = ({ theme }) => css`
  /* WebKit/Blink */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1px;
    width: 1px;
    border-radius: 50%;
    border: 2px solid ${theme.color.white};
    transform: translateY(${theme.spacing.base.xxs}) scale(${theme.defaultSpacing * 4});
    ${media.maxMd} {
      transform: translateY(${theme.spacing.base.xxs}) scale(${theme.defaultSpacing * 2});
    }
    opacity: 0;
    cursor: pointer;
  }

  /* Firefox */
  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1px;
    width: 1px;
    border: 2px solid ${theme.color.white};
    transform: scale(${theme.defaultSpacing * 4});
    border-radius: 50%;
    opacity: 0;
    border: none;
    cursor: pointer;
  }

  /* IE */
  ::-ms-thumb {
    -webkit-appearance: none;
    height: 1px;
    width: 1px;
    border: 2px solid ${theme.color.white};
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
  }
`

const StyledInputRangeTrack = ({ theme }) => css`
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: ${theme.spacing.base.xs};
    cursor: pointer;
    background: ${theme.color.grey2};
    box-shadow: ${theme.dimension.elevationLevel1};
    border-radius: ${theme.dimension.borderRadius1};
  }

  :focus::-webkit-slider-runnable-track {
    background: ${theme.color.grey2};
  }

  ::-moz-range-track {
    width: 100%;
    height: ${theme.spacing.base.xs};
    cursor: pointer;
    background: ${theme.color.grey2};
    box-shadow: ${theme.dimension.elevationLevel1};
    border-radius: ${theme.dimension.borderRadius1};
  }

  ::-ms-track {
    width: 100%;
    height: ${theme.spacing.base.xs}px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  ::-ms-fill-lower {
    background: ${theme.color.grey2};
    box-shadow: ${theme.dimension.elevationLevel1};
    border-radius: ${theme.dimension.borderRadius1};
  }

  ::-ms-fill-upper {
    background: ${theme.color.grey2};
    box-shadow: ${theme.dimension.elevationLevel1};
    border-radius: ${theme.dimension.borderRadius1};
  }

  :focus::-ms-fill-lower {
    background: ${theme.color.grey2};
  }

  :focus::-ms-fill-upper {
    background: ${theme.color.grey2};
  }
`

export const StyledInputRange = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing.base.lg};
  -webkit-appearance: none;
  :focus {
    outline: none;
  }

  ${InputRangeThumbArea}
  ${StyledInputRangeTrack}
`

export const StyledInputRangeMarks = styled.div`
  position: relative;
  padding-bottom: 4rem;
`

export const StyledInputRangeMarkLine = styled.div<{
  left: number
  index: number
  markAmount: number
}>`
  left: ${({ left }) => left}%;
  top: -4px;
  position: absolute;
  height: ${({ theme }) => theme.spacing.base.md};
  width: 1px;
  background-color: ${({ theme }) => theme.color.grey3};

  ${media.maxMd} {
    display: ${({ index, markAmount }) => {
      const showFirstLastAndEverySecond = index === 0 || index === markAmount || index % 2 === 0
      return showFirstLastAndEverySecond ? 'block' : 'none'
    }};
  }

  ${media.maxSm} {
    display: ${({ index, markAmount }) => {
      const showFirstLastAndEveryFifth = index === 0 || index === markAmount || index % 5 === 0
      return showFirstLastAndEveryFifth ? 'block' : 'none'
    }};
  }
`

export const StyledInputRangeMarkTypo = styled(Typo)`
  position: absolute;
  max-width: unset;
  overflow: unset;
  text-overflow: ellipsis;
  top: ${({ theme }) => theme.spacing.base.md};
  transform: translateX(-50%);
`
