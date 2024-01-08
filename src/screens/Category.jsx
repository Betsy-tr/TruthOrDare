import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

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
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
      <View testID="Slide1" style={styles.slide1}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View testID="Slide2" style={styles.slide2}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View testID="Slide3" style={styles.slide3}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
      <View testID="Slide4" style={styles.slide4}>
        <Text style={styles.text}>Slide 4</Text>
      </View>
    </Swiper>
  )
}

export default Category