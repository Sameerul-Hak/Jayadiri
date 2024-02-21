import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../Styles';
import Logo from "../assets/logo.png";
import Intro from '../Components/Intro';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import College from "../assets/college.jpg";
import { ScrollView } from 'react-native-gesture-handler';

const Home2 = () => {
  const ourCommitiee=[
    {
      id:1,
      img:require('../assets/human.png'),
      name:"Sameer"
    },
    {
      id:2,
      img:require('../assets/human.png'),
      name:"Vinay"
    },
    {
      id:3,
      img:require('../assets/human.png'),
      name:"Arun"
    },
    {
      id:4,
      img:require('../assets/human.png'),
      name:"Siva"
    },
    {
      id:5,
      img:require('../assets/human.png'),
      name:"Sheik"
    },
    {
      id:6,
      img:require('../assets/human.png'),
      name:"Madhan"
    },
  ]
  const ourTeachers=[
    {
      id:1,
      img:require('../assets/human.png'),
      name:"Ram"
    },
    {
      id:2,
      img:require('../assets/human.png'),
      name:"Vignesh"
    },
    {
      id:3,
      img:require('../assets/human.png'),
      name:"Kumar"
    },
    {
      id:4,
      img:require('../assets/human.png'),
      name:"Aravindh"
    },
    {
      id:5,
      img:require('../assets/human.png'),
      name:"Magesh"
    },
    {
      id:6,
      img:require('../assets/human.png'),
      name:"Pawan"
    },
  ]


  return (
    <View style={{flex:1,backgroundColor:Colors.bgColor}} >
        <Intro/>
        <ScrollView  contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.collegeImage}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Our College</Text>
            <Image source={College} style={styles.collegeimg} />
          </View>

          <View style={styles.PresidentNote}>
              <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Our President Note</Text>
              <Text style={styles.PresidentNotetext}>
                  This is a note from the President.
                  Please adhere to the guidelines and regulations for the betterment of our community.
                  Please adhere to the guidelines and regulations for the betterment of our community.
                  Please adhere to the guidelines and regulations for the betterment of our community.
                  Please adhere to the guidelines and regulations for the betterment of our community.
                  Please adhere to the guidelines and regulations for the betterment of our community.
                  Please adhere to the guidelines and regulations for the betterment of our community.
              </Text>
              <TouchableOpacity style={styles.readmore}>
                <Text style={{ fontSize: 18 }}>Read more..</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.AboutJayadiri}>
              <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Abour Jayadiri</Text>
              <Text  style={styles.PresidentNotetext}>
                  Jayadiri is committed to fostering a supportive environment for growth and collaboration.
                  Explore our initiatives and join us in creating a brighter future together.
                  Jayadiri is committed to fostering a supportive environment for growth and collaboration.
                  Explore our initiatives and join us in creating a brighter future together.
                  Jayadiri is committed to fostering a supportive environment for growth and collaboration.
                  Explore our initiatives and join us in creating a brighter future together.
                  Jayadiri is committed to fostering a supportive environment for growth and collaboration.
                  Explore our initiatives and join us in creating a brighter future together.
              </Text>
              <TouchableOpacity style={styles.readmore}>
                <Text style={{ fontSize: 18 }}>Read more..</Text>
              </TouchableOpacity>
          </View>


          <View style={styles.ourCommitiee}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Our Committee</Text>
            <View style={styles.committeeContainer}>
              {ourCommitiee.map((member) => (
                <View key={member.id} style={styles.committeeMember}>
                  <Image source={member.img} style={styles.committeeImg} />
                  <Text style={styles.name_cont}>{member.name}</Text>
                </View>
              ))}
            </View>
        </View>
        <View style={styles.ourCommitiee}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:500,margin:10}}>Our Teachers & Well Wishers</Text>
            <View style={styles.committeeContainer}>
              {ourTeachers.map((member) => (
                <View key={member.id} style={styles.committeeMember}>
                  <Image source={member.img} style={styles.committeeImg} />
                  <Text style={styles.name_cont}>{member.name}</Text>
                </View>
              ))}
            </View>
        </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
second_home_cont:{
  flex:1,
  bgc:"red",
  alignItems:"center",
  
},
scrollViewContent: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin:10,
  backgroundColor:Colors.bgColor,
},
committeeContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  backgroundColor:Colors.box2,
  padding:15
},
committeeMember: {
  alignItems: 'center',
  justifyContent:"center",
  margin: 10,
  width: '40%',
  backgroundColor: Colors.box1, 
  padding:10,
  margin:15,
  borderRadius:10,
},
committeeImg: {
  alignSelf: 'center',
  width: 100,
  height: 100,
  marginRight: 10,
  borderRadius:100,
  backgroundColor:Colors.bgColor,
},
PresidentNote:{
  width:"100%",
  backgroundColor:Colors.box1,
  padding:10,
  alignItems:"center",
  gap:hp("2%"),
  margin:"5%"
},
PresidentNotetext:{
  textAlign:"justify",
  fontSize:hp("2%"),
  lineHeight:24,
  
},
AboutJayadiri:{
  width:"100%",
  backgroundColor:Colors.box3,
  padding:10,
  alignItems:"center",
  gap:hp("2%"),
  margin:"5%"

},

name_cont:{
  fontSize:hp("2.5%"),
},
Title:{
  fontSize:25,
  alignSelf:"center",
  marginVertical:"5%",

}
,readmore:{
  alignSelf:"flex-end",
  opacity:0.8
}


});
export default Home2