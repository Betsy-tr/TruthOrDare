import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Dare = ({navigation}) => {
  return (
    <View>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare')}>ACTION</Button>
    </View>
  )
}

export default Dare
