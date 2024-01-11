import { View, Text, FlatList } from 'react-native'
import React from 'react'
import StartGame from '../components/game/StartGame'
import ItemPlayer from '../components/player/ItemPlayer'
import EmptyPlayer from '../components/player/EmptyPlayer'
import AddPlayer from '../components/player/AddPlayer'
import ResetPlayer from '../components/player/ResetPlayer'
import { useSelector } from 'react-redux'

const Players = () => {

  const { players } = useSelector(state=>state.player)

  return (
    <View>
      <Text>Players</Text>
      <FlatList
        data={players}
        renderItem={({item})=><ItemPlayer player={item}/>}
        keyExtractor={item=>item.id}
        ListEmptyComponent={EmptyPlayer}
        ListHeaderComponent={AddPlayer}
      />
      <ResetPlayer/>
      <StartGame/>
    </View>
  )
}

export default Players