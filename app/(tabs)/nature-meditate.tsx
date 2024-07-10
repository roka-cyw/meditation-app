import React from 'react'
import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#161b2e', '#0a4d4e', '#766e67']}>
        <View className='mb-6'>
          <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome User</Text>
          <Text className='text-indigo-100 text-xl font-medium'>Start your meditation practise today</Text>
        </View>
        <View>
          <FlatList
            className='mb-20'
            data={MEDITATION_DATA}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className='h-48 my-3 rounded-md overflow-hidden'
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode='cover'
                  className='flex-1 rounded-lg justify-center'
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                    className='flex-1 justify-center items-center'
                  >
                    <Text className='text-gray-100 text-3xl font-bold text-center'>{item.title}</Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style='light' />
    </View>
  )
}

export default NatureMeditate
