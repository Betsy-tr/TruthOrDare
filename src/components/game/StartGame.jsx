import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const StartGame = () => {

    const navigation = useNavigation()

    const start = () => {

        navigation.navigate('Category')
    }

  return (
    <View>
      <Button onPress={start}>Suivant</Button>
    </View>
  )
}

export default StartGame
