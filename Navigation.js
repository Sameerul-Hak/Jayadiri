import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './Screeens/Home1';
import Home2 from './Screeens/Home2';
import Alumini from './Screeens/Alumini';
import Sucess from './Screeens/Sucess';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SucessReadmore from './Screeens/SucessReadmore';
import RegisterAlumini from './Screeens/RegisterAlumini';
import RegisterClass from './Screeens/RegisterClass';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Home1Stack()
{
    return(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="sucessreadmore" component={SucessReadmore} />
        <Stack.Screen name="registeralumini" component={RegisterAlumini} />
        <Stack.Screen name="registerclass" component={RegisterClass} />
    </Stack.Navigator>
    )
}
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home1" component={Home1Stack} />
      <Tab.Screen name="Home2" component={Home2} />
      <Tab.Screen name="Alumini" component={Alumini} />
      <Tab.Screen name="Sucess" component={Sucess} />
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  )
}