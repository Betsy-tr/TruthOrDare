import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import stylePlayers from '../../styles/stylePlayers'

const StartGame = () => {

    const navigation = useNavigation()

    const start = () => {

        navigation.navigate('Category')
    }

  return (
    <View>
      <Button style={stylePlayers.buttonStartGame} labelStyle={{color: 'white' , fontSize: 21}} onPress={start}>Suivant</Button>
    </View>
  )
}

export default StartGame
