import * as React from 'react'
import { Selectable } from '@/components/Atoms/Selectable'
import { CheckboxProps } from '@/components/Atoms/Selectable/Selectable.interface'

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <Selectable type="checkbox" {...props} data-test={'checkbox'} />
}
