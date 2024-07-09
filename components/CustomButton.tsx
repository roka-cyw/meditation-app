import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface CustomButtonProps {
  title: string
  onPress: () => void
  textStyles?: string
  containerStyles?: string
}

const CustomButton = ({ title, onPress, textStyles = '', containerStyles = '' }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
      onPress={onPress}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
