import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../redux/player'
import stylePlayers from '../../styles/stylePlayers'


const AddPlayer = () => {

  const [name, setName] = useState()
  const dispatch = useDispatch()

  const send = (value) => { 

    const newPlayer = {
      id: Date.now(),
      name: value,
    }
    dispatch(addPlayer(newPlayer))

    setName('')
   
  }

  return (
    <>
      <TextInput
        label='Nom du joueur'
        value={name}
        mode='flat'
        onChangeText={text=>setName(text)}
        onSubmitEditing={(value)=>send(value.nativeEvent.text)}
        textColor='white'
        underlineColor='transparent'
        activeUnderlineColor='transparent'
        style={stylePlayers.input}
      />
    </>
  )
}

export default AddPlayer
