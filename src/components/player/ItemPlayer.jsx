import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { delPlayer } from '../../redux/player'
import { Button } from 'react-native-paper'
import stylePlayers from '../../styles/stylePlayers'

const ItemPlayer = ({player}) => {

  const dispatch = useDispatch()

  const supprimer = () => {
    
    dispatch(delPlayer(player))

  }

  return (
    <View style={{flexDirection: 'row' , marginTop: 15}}>
      <Text style={stylePlayers.namePlayer}>{player.name}</Text>
      <Button mode='outlined' labelStyle={{color: 'white'}} contentStyle={{width: 100 , height: 45}} style={{marginLeft: 170}} onPress={supprimer}>Effacer</Button>
    </View>
  )
}

export default ItemPlayer
