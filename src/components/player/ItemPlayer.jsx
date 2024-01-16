import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { delPlayer } from '../../redux/player'
import { Button, Divider } from 'react-native-paper'
import stylePlayers from '../../styles/stylePlayers'


const ItemPlayer = ({player}) => {

  const dispatch = useDispatch()

  const supprimer = () => {
    
    dispatch(delPlayer(player))

  }

  return (
    <View style={{flexDirection: 'row' , marginTop: 15}}>
      <Text style={stylePlayers.namePlayer}>{player.name}</Text>
      <Divider style={{color: 'white' , width: 345}}/>
      <Button labelStyle={{color: 'white' , fontSize: 18}} contentStyle={{width: 100 , height: 45}} style={{marginLeft: 'auto' , marginRight: 20}} onPress={supprimer}>Effacer</Button>
      
    </View>
  )
}

export default ItemPlayer
