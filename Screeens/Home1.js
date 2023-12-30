import { View, Text, StatusBar, Button, StyleSheet, Image, TouchableOpacity, ScrollViewBase } from 'react-native';
import React from 'react';
import { Colors } from '../Styles';
import Logo from "../assets/logo.png";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import human from "../assets/human.png"
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Home1 = ({ navigation }) => {
  const successData = [
    {
      id: '1',
      image: require('../assets/human.png'), // Replace with your image path
      text: 'Text for item 1...',
    },
    {
      id: '2',
      image: require('../assets/human.png'), // Replace with your image path
      text: 'Text for item 2...',
    },
    // Add more items as needed
  ];
  const renderItem = ({ item }) => (
    <View style={styles.sucess_container_main}>
      <Image source={item.image} style={styles.humanimg} />
      <Text style={styles.textachievement}>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="white" />
      <View style={styles.main}>
         {/* <Text>Home1</Text> */}
       {/*  <Button title='register for class' onPress={()=>navigation.navigate("registerclass")}/>
        <Button title='register for alu' onPress={()=>navigation.navigate("registeralumini")}/> */}
        <View style={styles.logo_name}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.Productname}>JayaDiri</Text>
        </View>
       <View style={styles.title_registration_cont}>
          <TouchableOpacity  onPress={()=>navigation.navigate("sucessreadmore")} style={styles.registrationalumini}><Text>Alumini Registration</Text></TouchableOpacity>
        <Text style={styles.center_title}>
              Sucess Stories
          </Text>
       </View>
        <View  style={styles.sucess_container}>
            <View style={styles.sucess_container_main}>
              <FlatList
              data={successData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
            </View>
            <View style={styles.sucess_container_main}>

            </View>
        </View>
      </View>
      <View style={styles.registerclass}>
          <Button title='Register'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // backgroundColor: Colors.bgColor,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
 
  logo_name:{
    flex:0.1,
    width:"100%",
    backgroundColor:"yellow",
    flexDirection:"row",
    alignItems:"center",
    position:"fixed"

  },
  sucess_container:{
    flex:0.9,
    backgroundColor:"blue",
    width:"100%"
  },
   logo: {
    width: 50,
    height: 50,
    // Adjust width and height as needed
  },
  center_title:{
    fontSize:hp('4%'),
    alignSelf:"center"
  },
  Productname:{
    
    fontSize:hp('3%'),
    marginLeft:"5%"
    // fontSize:wp("0%"),

  },
  title_registration_cont:{
    width:"100%"
  },
  registrationalumini:{
    alignSelf:"flex-end"
  },
  registerclass:{
    position:"absolute",
    bottom:"10%",
    right:"3%"
  },
  sucess_container_main:{
    flex:1,
    backgroundColor:"green",
    margin:10,
    alignItems:"center",
    justifyContent:"center",
  },
  humanimg:{
    width:"30%",
    height:"50%",
    backgroundColor:"red",
    borderRadius:20
  },
  textachievement:{
    textAlign:"justify",
    alignSelf:"center",

  }

});

export default Home1;
