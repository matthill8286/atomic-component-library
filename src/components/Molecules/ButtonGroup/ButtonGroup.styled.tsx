import { styled, css } from '@/styles'
import { Color, Size } from '@/types'

export type StyledOptionProps = { selected?: boolean }

const color =
  (x: keyof Color) =>
  ({ theme }) =>
    theme.color[x]
const spacing =
  (x: keyof Size) =>
  ({ theme }) =>
    theme.spacing.base[x]
const innerShadowColor = (strColor: string) => `inset 0px 0px 0px 1px ${strColor}`
const innerShadowFromTheme =
  (x: keyof Color) =>
  ({ theme }) =>
    innerShadowColor(theme.color[x])

export const StyledButtonGroup = styled.div`
  display: flex;
  width: 100%;
  background-color: ${color('white')};
  button,
  [type='button'] {
    border-radius: 0;
    flex: 1 1 auto;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

const StyledButton = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  box-sizing: border-box;
  min-width: 50px;
  padding: ${spacing('xs')};
  border-width: 1px;
  border-style: solid;
  border-color: ${color('grey2')};
  border-radius: ${spacing('xxs')};
  background-color: ${color('white')};

  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  transition-property: border-color, box-shadow;

  outline: none;

  &:hover:enabled,
  &:active:enabled {
    box-shadow: ${innerShadowFromTheme('primary')};
    border-color: ${color('primary')};
  }
  &:disabled {
    cursor: not-allowed;
  }
`
export const BorderedButton = styled(StyledButton)<StyledOptionProps>(
  ({ selected, theme }) => css`
    ${Boolean(selected) &&
    css`
      border-color: ${theme.color.primary};
      box-shadow: ${innerShadowColor(theme.color.primary)};
    `}
  `,
)
