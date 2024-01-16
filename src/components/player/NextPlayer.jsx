import { View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { nextPlayer } from '../../redux/player'
import { Button } from 'react-native-paper'
import styleShowTruthOrDare from '../../styles/styleShowTruthOrDare'

const NextPlayer = ({id}) => {

  const dispatch = useDispatch()

  const { players , position } = useSelector(state=>state.player)

  const navigation = useNavigation()

  const suivant = () => { 

    if(players.length == position + 1){

      dispatch(nextPlayer(0))

    }else{

      dispatch(nextPlayer(position + 1))

    }

    navigation.navigate('TruthOrDare' , {id: id})

  }

  return (
    <View>
      <Button style={styleShowTruthOrDare.buttonNextPlayer} labelStyle={{color: 'white' , fontSize: 21}} onPress={suivant}>Joueur suivant</Button>
    </View>
  )
}

export default NextPlayer