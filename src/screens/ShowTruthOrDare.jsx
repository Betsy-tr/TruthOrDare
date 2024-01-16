import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'
import styleShowTruthOrDare from '../styles/styleShowTruthOrDare'

const ShowTruthOrDare = () => {

  const { players , position } = useSelector(state=>state.player)

  return (
    <View style={styleShowTruthOrDare.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bg.png')}
      >
        <Text style={styleShowTruthOrDare.namePlayer}>{players[position].name}</Text>
        <Text style={styleShowTruthOrDare.content}>Contenu selon le choix du joueur</Text>
        <NextPlayer/>
        <ResetGame/>
      </ImageBackground> 
    </View>
  )
}

export default ShowTruthOrDare
