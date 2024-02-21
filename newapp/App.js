import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Context } from './Context';

export default function App() {
  const [user, setuser] = useState({ username: '', id: '', email: '', phonenumber: '' });
  return (
    <Context.Provider value={{user,setuser}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation/>
      </GestureHandlerRootView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
