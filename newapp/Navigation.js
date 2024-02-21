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
import { Ionicons } from '@expo/vector-icons';
import Login from './Screeens/Login';
import Register from './Screeens/Register';
import Events from './Screeens/Events';
import Myevents from './Screeens/Myevents';

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
        <Stack.Screen name="MyEvent" component={Myevents} />
    </Stack.Navigator>
    )
}
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home1') {
            iconName = focused ? 'home' : 'home-outline'; // Replace 'home' and 'home-outline' with your icon names
          } else if (route.name === 'Home2') {
            iconName = focused ? 'list' : 'list-outline'; // Example icon names for 'Home2'
          } else if (route.name === 'Alumini') {
            iconName = focused ? 'people' : 'people-outline'; // Example icon names for 'Alumini'
          } else if (route.name === 'Sucess') {
            iconName = focused ? 'trophy' : 'trophy-outline'; // Example icon names for 'Sucess'
          }
           else if (route.name === 'Events') {
            iconName = focused ? 'trophy' : 'trophy-outline'; // Example icon names for 'Sucess'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown:false,
      })}
      tabBarOptions={{
        activeTintColor: 'black', // Change the active icon color
        inactiveTintColor: 'gray', // Change the inactive icon color
      }}
    >
      <Tab.Screen name="Home1" component={Home1Stack} />
      <Tab.Screen name="Home2" component={Home2} />
      <Tab.Screen name="Alumini" component={Alumini} />
      <Tab.Screen name="Sucess" component={Sucess} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}
function HomeScreen()
{
  return(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
    )
}
export default function Navigation() {
  return (
    <NavigationContainer>
        <HomeScreen/>
    </NavigationContainer>
  )
}