import { View, Text, Button, Touchable, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Intro from '../Components/Intro'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../Styles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Sucess({navigation}) {
  const successData = [
    {
      id: '1',
      image: require('../assets/human.png'),
      text: `Received the "Leadership Excellence Award" for initiating a sustainability drive within the company, reducing carbon footprint by 40%. This initiative not only achieved environmental goals but also inspired other teams to implement similar strategies, contributing to a more eco-conscious workplace.  
      `,
    },
    {
      id: '2',
      image: require('../assets/human.png'),
      text: `Developed a groundbreaking mobile application, reaching 1 million downloads within the first month of launch, earning rave reviews. The app's innovative features and user-friendly interface set new standards in the industry, resulting in widespread acclaim and recognition.`,
    },
    {
      id: '3',
      image: require('../assets/human.png'),
      text: `Achieved a personal milestone of running 5 marathons in a year, promoting fitness and raising $50,000 for charity. This journey was not only about physical endurance but also about making a positive impact by supporting charitable causes and encouraging a healthy lifestyle.`,
    },
    {
      id: '4',
      image: require('../assets/human.png'),
      text: `Started a mentorship program, guiding 50+ aspiring entrepreneurs to launch successful startups in various industries. This initiative aimed to share knowledge and experiences, empowering the next generation of leaders and fostering innovation and growth.`,
    },
    {
      id: '5',
      image: require('../assets/human.png'),
      text: `Organized a community outreach program, providing meals and educational support to 1000+ homeless individuals. This initiative brought together volunteers and resources to address societal challenges, aiming to create a positive impact and improve lives within the community.`,
    },
  ];
  const getBoxColor = (index) => {
    const colors = [Colors.box1, Colors.box2, Colors.box3, Colors.box1, Colors.box2]; // Add more colors if needed
    return colors[index % colors.length];
  };
  const renderItem = ({ item }) => (
    <View style={[styles.successItem, { backgroundColor: getBoxColor(parseInt(item.id) - 1) }]}>
      <Image source={item.image} style={styles.successImage} />
      <Text style={styles.successText}>{item.text}</Text>
      <TouchableOpacity style={styles.readmore}>
        <Text style={{ fontSize: 18 }}>Read more..</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{flex:1,backgroundColor:Colors.bgColor}}>
      <Intro/>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput placeholder='Search Success Stories..' style={styles.input}/>
          <TouchableOpacity><Ionicons name="search" size={30} color="black" /></TouchableOpacity>
        </View>
        <View>
        <View style={styles.success_stories_cont}>
        <View style={styles.register_stories}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:500}}>Sucess Stories</Text>
        </View>
            <FlatList
              data={successData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.successList}
            />
        </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  search:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    paddingVertical:"3%",
    alignItems:"center",
  },
  input:{
    borderWidth:0,
    borderRadius:10,
    width:"80%",
    alignItems:"center",
    padding:8,
    backgroundColor:"rgb(222,227,231)"
  },
  successImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius:100,
    backgroundColor:Colors.bgColor,
  },
  success_stories_cont:{
    backgroundColor:Colors.bgColor,
  },
  // successList: {
  //   paddingBottom: 20,
  // },
  successItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.box2,
    margin:10,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    gap:5,
    padding:"4%",
    paddingHorizontal:"5%",
    borderRadius:10,
  },
  successText:{
    textAlign:"justify",
    fontSize:hp("1.9%"),
    lineHeight:25,
  },
  readmore:{
    alignSelf:"flex-end",
    opacity:0.8
  }

})