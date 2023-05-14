import { ButtonProps } from '@/components/Atoms/Button'

export interface ErrorBoxProps extends Pick<ButtonProps, 'isLoading' | 'onClick'> {
  title: string
  subtitle: string
  buttonLabel: string
}
