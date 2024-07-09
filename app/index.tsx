import React from 'react'
import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import beachImage from '@/assets/meditation-images/beach.webp'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'

const App = () => {
  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
        <AppGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
          <SafeAreaView className='flex-1 mx-5 my-5 justify-between'>
            <View>
              <Text className='text-center text-white font-bold text-4xl'>Simple meditation</Text>
              <Text className='text-center text-white font-bold text-2xl mt-3'>
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton title='Get started' onPress={() => router.push('/nature-meditate')} />
            </View>
            <StatusBar style='light' />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App
