import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../redux/player'


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
        mode='outlined'
        onChangeText={text=>setName(text)}
        onSubmitEditing={(value)=>send(value.nativeEvent.text)}
      />
    </>
  )
}

export default AddPlayer
