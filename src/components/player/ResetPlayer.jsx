import { View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { resetPlayer } from '../../redux/player'
import { Button } from 'react-native-paper'

const ResetPlayer = () => {

  const dispatch = useDispatch()

  const reset = () => { 
    dispatch(resetPlayer())
  }

  return (
    <View>
      <Button onPress={reset}>Vider la liste</Button>
    </View>
  )
}

export default ResetPlayer