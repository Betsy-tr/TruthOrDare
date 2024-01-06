import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AF16B'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F35558'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF346'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

const Category = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
      <View testID="Hello" style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View testID="Beautiful" style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View testID="Simple" style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
      <View testID="Test" style={styles.slide4}>
        <Text style={styles.text}>Test</Text>
      </View>
    </Swiper>
  )
}

export default Category