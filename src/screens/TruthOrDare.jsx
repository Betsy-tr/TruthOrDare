import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import styleTruthOrDare from '../styles/styleTruthOrDare'

const TruthOrDare = ({navigation}) => {

  const { players , position } = useSelector(state=>state.player)

  return (
    <View style={styleTruthOrDare.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/TruthOrDare.png')}
      >
        <Text style={styleTruthOrDare.namePlayer}>{players[position].name}</Text>
        <Button style={styleTruthOrDare.buttonDare} labelStyle={{color: 'white' , fontSize: 21}} onPress={()=>navigation.navigate('ShowTruthOrDare')}>ACTION</Button>
        <Button style={styleTruthOrDare.buttonTruth} labelStyle={{color: 'white' , fontSize: 21}} onPress={()=>navigation.navigate('ShowTruthOrDare')}>VÉRITÉ</Button>
      </ImageBackground>
    </View>
  )
}

export default TruthOrDare
