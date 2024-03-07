import { View, Text } from 'react-native'
import React from 'react'
import stylePlayers from '../../styles/stylePlayers'

const EmptyPlayer = () => {
  return (
    <View>
      <Text style={stylePlayers.empty}>La liste des joueurs est actuellement vide ! Merci de saisir le nom des différents joueurs</Text>
    </View>
  )
}

export default EmptyPlayer
