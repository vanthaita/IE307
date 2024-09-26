import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='h-24 fixed bg-blue-500 flex justify-center items-center'>
      <Text className='text-white text-4xl font-semibold'>Social Media Feed</Text>
    </View>
  )
}

export default Header