
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../Styles';
const Alumini = () => {
  const [articles, setArticles] = useState([
    {
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "John Doe",
       "age":18,
      "title": "Software Engineer",
      "description": "John Doe   "
    },
    {
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "John Doe",
      "age":18,

      "title": "Software Engineer",
      "description": "John Doe ."
    },
    {
      "image": { uri: "https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_1280.jpg" },
      "name": "John Doe",
      "title": "Software Engineer",
      "age":18,
      "description": "John Doe "
    },
    
   
    
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.subcont}>
            <View style={styles.image}>
              <Image source={item.image} style={styles.imageStyle} />
            </View>
            <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
          <Text style={{fontSize:23,color:Colors.button,fontWeight:'bold'}}>Age:<Text style={styles.age}> {item.age}</Text> </Text>    
           <Text style={{fontSize:23,color:Colors.button,fontWeight:'bold'}}>schoolname:<Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:23,color:Colors.button,fontWeight:'bold'}}>year STPM:<Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:23,color:Colors.button,fontWeight:'bold'}}>current Status<Text style={styles.school}>{item.description}</Text></Text>  
           <Text style={{fontSize:23,color:Colors.button,fontWeight:'bold'}}>Additional info:<Text style={styles.school}>{item.description}</Text></Text>  
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcont: {
    width: "90%",
    // height: 300,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'gray',
    margin:10,
    padding:20
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    // marginTop: 40,
    // marginLeft: 55,
  },
  imageStyle: {
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
    fontSize: 28,
    fontWeight: 'bold',
    color: "white"
  },
  age: {
    fontSize: 23,
    color:Colors.bgColor
  },
  school :{
    fontSize: 23,
    color:Colors.bgColor

  }
  
});

export default Alumini;

