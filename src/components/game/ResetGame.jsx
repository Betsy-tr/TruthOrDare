import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const ResetGame = () => {

  const navigation = useNavigation()

  const reset = () => { 

    navigation.navigate('Category')
  }

  return (
    <View>
      <Button onPress={reset}>Quitter la partie</Button>
    </View>
  )
}

export default ResetGame
