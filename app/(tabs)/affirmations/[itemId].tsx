import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { GalleryPreviewData } from '@/constants/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams()
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affirmationsData = AFFIRMATION_GALLERY[index].data

      const affirmationToStart = affirmationsData.find(item => item.id === Number(itemId))

      if (affirmationToStart) {
        setAffirmation(affirmationToStart)
        return
      }
    }
  }, [])

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice
