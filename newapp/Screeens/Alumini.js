
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../Styles';
import Intro from '../Components/Intro';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Alumini = () => {
  const [articles, setArticles] = useState([
    {id:1,
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "John Doe",
       "age":18,
      "title": "Software Engineer",
      "description": "John Doe   "
    },
    {id:2,
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "Samual",
      "age":18,

      "title": "Software Engineer",
      "description": "John Doe ."
    },
    {id:3,
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "Arun kumar",
      "title": "Software Engineer",
      "age":18,
      "description": "John Doe "
    },
    
   
    
  ]);
  const getBoxColor = (index) => {
    const colors = [Colors.box1, Colors.box2, Colors.box3, Colors.box1, Colors.box2]; // Add more colors if needed
    return colors[index % colors.length];
  };
  return (
    <View  style={{flex:1,backgroundColor:Colors.bgColor}} >
      <Intro/>
      <View style={styles.container}>
      <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Our Top Alumini's</Text>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.subcont, { backgroundColor: getBoxColor(parseInt(item.id) - 1) }]}>
            <View style={styles.bgc}></View>
            <View style={styles.image}>
              <Image source={item.image} style={styles.imageStyle} />
            </View>
            <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
          <Text style={{fontSize:hp("2.5%"),color:Colors.button,fontWeight:'bold'}}>Age: <Text style={styles.age}> {item.age}</Text> </Text>    
           <Text style={{fontSize:hp("2.5%"),color:Colors.button,fontWeight:'bold'}}>schoolname : <Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:hp("2.5%"),color:Colors.button,fontWeight:'bold'}}>year STPM : <Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:hp("2.5%"),color:Colors.button,fontWeight:'bold'}}>current Status : <Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:hp("2.5%"),color:Colors.button,fontWeight:'bold'}}>Additional info : <Text style={styles.school}>{item.description}</Text></Text>  
            </View>
          </View>
        )}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.bgColor,
    width:"100%"
    // backgroundColor:"red",
  },
  subcont: {
    // height: 300,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: Colors.box3,
    margin:10,
    padding:20,
    backgroundColor:"grey",
    width:"100%",
    position:"relative"
  },
  image: {
    width: wp("50%"),
    height: hp("20%"),
    backgroundColor: 'red',
    zIndex:999
    // marginTop: 40,
    // marginLeft: 55,
  },
  imageStyle: {
    position:"absolute",
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    padding:12
  },
  name: {
    fontSize: wp("8%"),
    fontWeight: 'bold',
    color: "black"
  },
  age: {
    fontSize:hp("2.5%"),
    color:Colors.button
  },
  school :{
    fontSize:hp("2.5%"),
    color:Colors.button
  },
  bgc:{
    width:"100%",
    backgroundColor:"white",
    height:"40%",
    zIndex:-1,
    position:"absolute",
    top:10,
  }
  
});

export default Alumini;

