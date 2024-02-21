import { View, Text, StatusBar, Button, StyleSheet, Image, TouchableOpacity, ScrollViewBase } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '../Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Intro from '../Components/Intro';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Context } from '../Context';

const Home1 = ({ navigation }) => {
  const {user,setuser}=useContext(Context);
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
 

  return (
    <View style={styles.container}>
      <Intro/>
      <Text>{user.username}</Text>
      <Text>{user.id}</Text>
     
      <View style={styles.Button_container}>
        <View style={styles.button_cont1}>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("Home2")}}>Home</Text>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("registerclass")}}>Register for SMTP</Text>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("registeralumini")}}>Register for Alumini</Text>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("Sucess")}}>Sucess Stories</Text>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("Alumini")}}>Alumini Profile</Text>
            <Text style={styles.home_button} onPress={()=>{navigation.navigate("MyEvent")}}> My Event</Text>
        </View>
      </View>
      {/* <YoutubePlayer
      height={500}
      play={true}
      videoId='mLI_QxszYrU'
      
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:Colors.bgColor,
},
Button_container:{
  flex:1,
  // backgroundColor:"red",
  justifyContent:"center",
  alignItems:"center",
},
button_cont1:{
flex:1,
// backgroundColor:"yellow",
width:"100%",
justifyContent:"center",
alignItems:"center"

},
home_button:{
  backgroundColor:"#2196f3",
  margin:10,
  padding:30,
  borderRadius:20,
  alignItems:"center",
  justifyContent:"center",
  textAlign:"center",
  width:"90%",
  // borderWidth:2,
  // borderColor:"black"

}

});

export default Home1;
