import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64EB16'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2FF00'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F71AAA'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A1EFB'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

const Category = () => {

  const navigation = useNavigation()

  const play = () => { 

    navigation.navigate('TruthOrDare')

  }

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      <View testID="Slide1" style={styles.slide1}>
        <Text style={styles.text} onPress={play}>DRÔLE</Text>
      </View>
      <View testID="Slide2" style={styles.slide2}>
        <Text style={styles.text} onPress={play}>GÊNANTE</Text>
      </View>
      <View testID="Slide3" style={styles.slide3}>
        <Text style={styles.text} onPress={play}>SOIRÉE</Text>
      </View>
      <View testID="Slide4" style={styles.slide4}>
        <Text style={styles.text} onPress={play}>COUPLE</Text>
      </View>
    </Swiper>
  )
}


export default Category