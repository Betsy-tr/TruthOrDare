import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'



const ShowTruthOrDare = ({route}) => {

  const { id , type } = route.params
  //console.log("arrivé" , "categorie :" , id , "type :" , type)

  // Déclaration de mes variables d'état
  const [ShowTod, setShowTod] = useState()
  const { players , position } = useSelector(state=>state.player)

  const loadDatas = async () => {
    
    console.log("je suis ici dans la fonction loadDatas")
    console.log(id , type)
    const datas = await loadDataDareOrTruth("DareOrTruth" , id , type)
    console.log("datas" , datas)

    // choisir un nombre aléatoire
    const index = getRandomInt(0 , datas.length)

    setShowTod(datas[index])

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
