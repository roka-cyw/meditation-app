import React from 'react'
import { SafeAreaView } from 'react-native'

const Content = ({ children }: any) => {
  // px-5 py-3
  return <SafeAreaView className='flex-1 mx-3 justify-between'>{children}</SafeAreaView>
}

export default Content
