import { FC, useState } from 'react'
import { SelectableState } from '../Selectable/Selectable.interface'

interface RenderPropObject {
  name: string
  onChange: (isChecked?: boolean, value?: string) => void
  selected?: string
  state?: SelectableState
}

interface RadioGroupProps {
  name: string
  onChange?: (value: string) => void
  children: (props: RenderPropObject) => React.ReactElement | null
  state?: SelectableState
}

export const RadioGroup: FC<RadioGroupProps> = ({ name, onChange, children, state = 'idle' }) => {
  const [groupValue, setGroupValue] = useState<string>()
  const internalOnChange = (_?: boolean, value?: string) => {
    setGroupValue(value)
    if (value) {
      onChange?.(value)
    }
  }
  return children({ name, onChange: internalOnChange, selected: groupValue, state })
}
