import { ImageBackground, View  } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/Home.png')}
      >
        <Button
          style={{
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'white',
            width: 205,
            height: 55,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 10,
            marginTop: 600,
          }} 
          labelStyle={{
            fontFamily: 'Handlee',
            color: 'white', 
            fontSize: 22,
          }} 
          onPress={() => navigation.navigate('Players')}
        >
          Commencer
        </Button>
        
        
      </ImageBackground>
    </View>
  )
}

export default Home
