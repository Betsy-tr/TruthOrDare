import { View, Text, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import StartGame from '../components/game/StartGame'
import ItemPlayer from '../components/player/ItemPlayer'
import EmptyPlayer from '../components/player/EmptyPlayer'
import AddPlayer from '../components/player/AddPlayer'
import ResetPlayer from '../components/player/ResetPlayer'
import { useSelector } from 'react-redux'
import stylePlayers from '../styles/stylePlayers'

const Players = () => {

  const { players } = useSelector(state=>state.player)

  return (
    <View style={stylePlayers.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bg.png')}
      >
        <Text style={stylePlayers.title}>JOUEURS</Text>
        <FlatList
          data={players}
          renderItem={({item})=><ItemPlayer player={item}/>}
          keyExtractor={item=>item.id}
          ListEmptyComponent={EmptyPlayer}
          ListHeaderComponent={AddPlayer}
        />
        <ResetPlayer/>
        <StartGame/>
      </ImageBackground>
    </View>
  )
}

export default Players