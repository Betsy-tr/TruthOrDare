import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'


import styleShowTruthOrDare from '../styles/styleShowTruthOrDare'

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
    <View style={styleShowTruthOrDare.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bg.png')}
      >
        <Text style={styleShowTruthOrDare.namePlayer}>{players[position].name}</Text>
      <Text>{ShowTod?.title}</Text>
        <Text style={styleShowTruthOrDare.content}>{ShowTod?.title}</Text>
        <NextPlayer id={id}/>
        <ResetGame/>
      </ImageBackground> 
    </View>
  )
}

export default ShowTruthOrDare
