import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
// import localhost from '../Config';
import localhost from '../Config';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${localhost}/home/register`, {
        "name":name,
        "email":email,
        "password":password,
        "phonenumber":phonenumber
      });

      if (response.status === 201) {
        // Successful registration
        Alert.alert('Registration Successful', 'You can now log in.');
        navigation.navigate('Login');
      } else {
        // Handle unsuccessful registration (e.g., display an error message)
        Alert.alert('Registration Failed', 'Email is already registered');
      }
    } catch (error) {
      console.error('Registration error:', error);

      // Handle other errors (e.g., network issues)
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhonenumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? <Text style={{color:"blue"}}>Log in here</Text></Text>
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
    backgroundColor: '#f5f5f5',
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
    backgroundColor: 'white',
  },
  registerButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 16,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    color: 'black',
    fontSize: 14,
  },
});

export default Register;
