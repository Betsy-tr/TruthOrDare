import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const TruthOrDare = ({navigation}) => {
  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare')}>ACTION</Button>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare')}>VÉRITÉ</Button>
    </View>
  )
}

export default TruthOrDare
