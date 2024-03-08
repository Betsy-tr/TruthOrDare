import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import styleTruthOrDare from '../styles/styleTruthOrDare'

const TruthOrDare = ({navigation , route}) => {

  const { id } = route.params
  console.log("effectué" , id)

  const { players , position } = useSelector(state=>state.player)

  return (
    <View style={styleTruthOrDare.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/TruthOrDare.png')}
      >
        <Text style={styleTruthOrDare.namePlayer}>{players[position].name}</Text>
        <Button style={styleTruthOrDare.buttonDare} labelStyle={{color: 'white' , fontSize: 21 , fontFamily: 'Handlee'}} onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'action'})}>ACTION</Button>
        <Button style={styleTruthOrDare.buttonTruth} labelStyle={{color: 'white' , fontSize: 21 , fontFamily: 'Handlee'}} onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'vérité'})}>VÉRITÉ</Button>
      </ImageBackground>
    </View>
  )
}

export default TruthOrDare
