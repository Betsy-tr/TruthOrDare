import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator , MD2Colors} from 'react-native-paper'



const Loading = () => {
  return (

    <ActivityIndicator animating={true} color={MD2Colors.blue300} style={{ marginTop : 250}} size={130} />

  )
}

export default Loading