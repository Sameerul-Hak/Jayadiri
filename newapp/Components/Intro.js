import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors } from '../Styles';
import Logo from "../assets/logo.png";

const Intro = () => {
  return (
    <View style={styles.intro}>
      <StatusBar backgroundColor="white" />
      <View style={{backgroundColor:"black",flexDirection:"row",alignItems:"center",gap:10,height:70,}}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.Productname}>JayaDiri</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

logo:{
  width:"20%",
  height:"100%"
},
Productname:{
  width:"100%",
  fontSize:25,
  color:"white"
},

});
export default Intro