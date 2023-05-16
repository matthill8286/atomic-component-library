import React, { FC, useState } from 'react'
import { OtherPercentage, OtherTrash } from 'atomic-icon-library'
import { Input } from './Input'
import { InputProps } from './Input.interface'

export const InputPassword: FC<InputProps> = (props) => {
  const [showPassword, toggleShowPassword] = useState<boolean>(false)

  const handleClickIcon = () => {
    toggleShowPassword(!showPassword)
  }

  return (
    <Input
      {...props}
      inputType={showPassword ? 'text' : 'password'}
      inputIcon={showPassword ? <OtherPercentage /> : <OtherTrash />}
      onClickIcon={handleClickIcon}
    />
  )
}
