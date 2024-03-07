import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'


const ShowTruthOrDare = ({route}) => {

  const { id , type } = route.params
  console.log("arrivé" , id , type)

  const [ShowTod, setShowTod] = useState()
  const { players , position } = useSelector(state=>state.player)

  const loadDatas = async () => {
    
    console.log("je suis ici !")
    const datas = await loadDataDareOrTruth()

    setShowTod(datas)

  }

  useEffect(() => {
    loadDatas()
  }, [])
  

  return (
    <View>
      <Text>ShowTruthOrDare</Text>
      <Text>{players[position].name}</Text>
      <Text>{ShowTod?.title}</Text>
      <NextPlayer id={id}/>
      <ResetGame/>
    </View>
  )
}

export default ShowTruthOrDare
