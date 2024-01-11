import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'


const AddPlayer = () => {

  const [name, setName] = useState()

  return (
    <>
      <TextInput
        label='Nom du joueur'
        value={name}
        mode='outlined'
        onChangeText={text=>setName(text)}
      />
    </>
  )
}

export default AddPlayer
