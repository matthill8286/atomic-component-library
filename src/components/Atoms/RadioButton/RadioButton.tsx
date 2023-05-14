import * as React from 'react'
import { Selectable } from '@/components/Atoms/Selectable'
import { RadioButtonProps } from '@/components/Atoms/Selectable/Selectable.interface'

export const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
  return <Selectable type="radio" {...props} />
}
