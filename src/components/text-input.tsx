import React from 'react'
import { TextInput as Input, TextInputProps } from 'react-native'

export function TextInput({ ...rest }: TextInputProps) {
  return <Input {...rest} />
}
