import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const TruthOrDare = ({navigation , route}) => {

  const { id } = route.params
  console.log("effectué" , id)

  const { players , position } = useSelector(state=>state.player)

  return (
    <View>
      <Text>TruthOrDare</Text>
      <Text>{players[position].name}</Text>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'action'})}>ACTION</Button>
      <Button onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'vérité'})}>VÉRITÉ</Button>
    </View>
  )
}

export default TruthOrDare
