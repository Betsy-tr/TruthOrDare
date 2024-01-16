import { ImageBackground, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/Home.png')}
      >
        <Button onPress={() => navigation.navigate('Players')}>Commencer</Button>
      </ImageBackground>
    </View>
  )
}

export default Home
