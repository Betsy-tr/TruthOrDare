import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import styleShowTruthOrDare from '../../styles/styleShowTruthOrDare'

const ResetGame = () => {

  const navigation = useNavigation()

  const reset = () => { 

    navigation.navigate('Category')
  }

  return (
    <View>
      <Button style={styleShowTruthOrDare.buttonResetGame} labelStyle={{color: 'white' , fontSize: 21}} onPress={reset}>Quitter la partie</Button>
    </View>
  )
}

export default ResetGame
