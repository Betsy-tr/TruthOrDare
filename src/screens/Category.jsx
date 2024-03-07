import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { loadData } from '../commonjs/db'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoading } from '../redux/loading'


var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

const Category = () => {

  const navigation = useNavigation()

  const [categories, setCategories] = useState([])
  const loading = useSelector(state=>state.loading)

  const dispatch = useDispatch()

  const play = (id) => { 

    navigation.navigate('TruthOrDare' , {id: id})
    console.log("id" , id)

  }

  const loadCategory = async () => { 

    dispatch(updateLoading())

    const dataCategories = await loadData('categorie')

    setCategories(dataCategories) ;

    dispatch(updateLoading())
  }

  useEffect(() => {

    loadCategory()

  }, [])

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      {categories.map(data=> <View key={data.id} testID="Slide1" style={styles.slide1}>
        <Text style={styles.text} onPress={()=>play(data.id)}>{data.name}</Text>
      </View>)}
      
    </Swiper>

  )
}


export default Category