import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'



const Loading = () => {
  return (

    <ActivityIndicator animating={true} style={{color : '#09D0EB' }} size='large' />

  )
}

export default Loading