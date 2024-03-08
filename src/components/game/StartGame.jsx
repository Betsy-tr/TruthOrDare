import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import stylePlayers from '../../styles/stylePlayers'

const StartGame = () => {

    const navigation = useNavigation()

    const { players } = useSelector(state=>state.player)

    const start = () => {

      navigation.navigate('Category')
    }

  return (
    <View>
      <Button disabled={!(players.length >= 2)} style={stylePlayers.buttonStartGame} labelStyle={{color: 'white' , fontSize: 21 , fontFamily: 'Handlee'}} onPress={start}>Suivant</Button>
    </View>
  )
}

export default StartGame
