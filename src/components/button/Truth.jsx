import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Truth = ({navigation}) => {
  return (
    <View>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare')}>VÉRITÉ</Button>
    </View>
  )
}

export default Truth
