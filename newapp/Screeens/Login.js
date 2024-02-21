import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import localhost from '../Config';
import { Context } from '../Context';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setuser } = useContext(Context);


  const handleLogin = async () => {
    try {
        // navigation.navigate('Tabs');
      const response = await axios.post(`${localhost}/home/login`, {
        "email":email,
        "password":password
      });

      if (response.status === 200) {
        console.log(response.data.user);
        // {"__v": 0, "_id": "65b8a24f8f812d8e3f6c9fa3", "createdAt": "2024-01-30T07:16:31.403Z", "email": "sam@gmail.com", "isAdmin": false, "isSiteAdmin": false, "name": "Sam", "password": "Sam", "phonenumber": "9944012279"} 
        setuser({username:response.data.user.name,id:response.data.user._id,email:response.data.user.email,phonenumber:response.data.user.phonenumber})
        navigation.navigate('Tabs');
      } else if(response.status==401) {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);

      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? <Text style={{color:"blue"}}>Register here</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', // Use a light background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    color: 'black',
    backgroundColor: 'white', // Use a white background color for input
  },
  loginButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    // backgroundColor:"blue"
  },
  registerText: {
    color: 'black',
    fontSize: 14,
  },
});

export default Login;
