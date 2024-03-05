import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ResetGame from '../components/game/ResetGame'
import { useSelector } from 'react-redux'
import NextPlayer from '../components/player/NextPlayer'
//import { loadDataDareOrTruth } from '../commonjs/db'

const ShowTruthOrDare = () => {

  const { players , position } = useSelector(state=>state.player)

  //const [ShowTod, setShowTod] = useState()

 /** const loadDareOrTruth = async () => {

    const dataTruthOrDare = await loadDataDareOrTruth(id , type)

    setShowTod(dataTruthOrDare)

  }

  useEffect(() => {

    loadDareOrTruth()

  }, []) */

  return (
    <View>
      <Text>ShowTruthOrDare</Text>
      <Text>{players[position].name}</Text>
      {/* <Text>{ShowTod?.title}</Text> */}
      <NextPlayer/>
      <ResetGame/>
    </View>
  )
}

export default ShowTruthOrDare
