import { View, Text } from 'react-native'
import React from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'

const ShowTruthOrDare = () => {

  const { players , position } = useSelector(state=>state.player)

  return (
    <View>
      <Text>ShowTruthOrDare</Text>
      <Text>{players[position].name}</Text>
      <NextPlayer/>
      <ResetGame/>
    </View>
  )
}

export default ShowTruthOrDare
