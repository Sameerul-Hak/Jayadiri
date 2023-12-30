import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Sucess({navigation}) {
  return (
    <View>
      <Text>Sucess</Text>
      <Button title='sus readmore' onPress={()=>navigation.navigate("sucessreadmore")}/>
    </View>
  )
}