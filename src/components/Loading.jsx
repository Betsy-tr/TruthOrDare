import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator , MD2Colors} from 'react-native-paper'



const Loading = () => {
  return (

    <View style={{backgroundColor: '#DB00FF' , flex: 1}}>
        <ActivityIndicator animating={true} color={MD2Colors.white} style={{ marginTop : 250}} size={130} />
    </View>
  )
}

export default Loading