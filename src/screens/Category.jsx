import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { loadData } from '../commonjs/db'
import { useSelector } from 'react-redux'
import AppIntroSlider from 'react-native-app-intro-slider'
import Loading from '../components/Loading'
import loading from '../redux/loading'



const RenderItem = ({item , navigation}) => {
  console.log("item" , item)
  
  const play = (id) => { 

    navigation.navigate('TruthOrDare' , {id: id})
    console.log("id" , id)
  }

  return (
      
      <TouchableOpacity onPress={()=>play(item.id)} style={{flex: 1}}>
        <ImageBackground
          style={{ flex: 1 }}
          source={{uri : item.image}}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Fredericka the Great', 
            fontSize: 64,
            fontWeight: 400,
            marginTop: 265
            }}

            onPress={()=>play(data.id)}
          >
            {item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    )
}

const Category = () => {

  const navigation = useNavigation()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const loadCategory = async () => { 

    setLoading(true) // Début du loading

    const dataCategories = await loadData('categorie')
    console.log("dataCategories" , dataCategories)

    setCategories(dataCategories) ;

    setLoading(false) // Fin du téléchargement
  }

  useEffect(() => {
    loadCategory()
  }, [])

  return (
    <>    
      {loading ? <Loading/> : <AppIntroSlider
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><RenderItem item={item} navigation={navigation}/>}
        data={categories}
      /> }
    </>  
  )
}


export default Category