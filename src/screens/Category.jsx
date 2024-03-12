import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { loadData } from '../commonjs/db'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoading } from '../redux/loading'
import { ActivityIndicator } from 'react-native-paper'



var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

    dispatch(updateLoading(true))

    const dataCategories = await loadData('categorie')
    console.log("dataCategories" , dataCategories)

    setCategories(dataCategories) ;

    dispatch(updateLoading(false))
  }

  useEffect(() => {
    loadCategory()
  }, [])

  return (
       
          <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
            {categories.map(data=> <View key={data.id} testID="Slide" style={styles.slide}>
              <Text style={{fontFamily: 'Fredericka the Great' , fontSize: 64 , color: 'white' , fontWeight: 400}} onPress={()=>play(data.id)}>{data.name}</Text>
              {/* <Image src={data?.image}/> */}
            </View>)}
          </Swiper>
        
      
    
  )
}


export default Category