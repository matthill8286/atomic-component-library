import { styled } from '@/styles/styled'
import { Button } from './Button'
import { ButtonProps } from './Button.interface'

export interface IconButtonProps extends ButtonProps {
  width?: number | string
  height?: number | string
  isInputIcon?: boolean
  isFlat?: boolean
}

export interface StyledIconButtonProps extends IconButtonProps {
  width: number | string
  height: number | string
  isFlat?: boolean
}

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  min-width: ${({ width, theme }) => (typeof width === 'number' ? `${width}px` : theme.spacing.base[width] || width)};
  height: ${({ height, theme }) => (typeof height === 'number' ? `${height}px` : theme.spacing.base[height] || height)};
  padding: 0 ${({ theme }) => theme.spacing.base.xs};
`

export const IconButton: React.FC<IconButtonProps> = ({
  actionType = 'outlined',
  height = 40,
  width,
  color,
  isLoading,
  isFlat,
  onClick,
  ...rest
}) => {
  return (
    <StyledIconButton
      color={color}
      actionType={actionType}
      width={width || height}
      height={height}
      isFlat={isFlat}
      isLoading={isLoading}
      onClick={onClick}
      {...rest}
    />
  )
}

IconButton.displayName = 'IconButton'
