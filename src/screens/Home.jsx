import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Players')}>Commencer</Button>
    </View>
  )
}

export default Home
