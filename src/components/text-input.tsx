import React from 'react'
import { TextInput as Input, TextInputProps } from 'react-native'
import colors from 'tailwindcss/colors'

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <Input
      {...rest}
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]}
      className="h-32 py-3 px-4 bg-slate-800 rounded-lg text-white font-body text-sm placeholder-slate-400"
    />
  )
}
