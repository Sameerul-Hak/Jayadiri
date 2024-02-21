import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/home/register`, {
        "name": name,
        "email": email,
        "password": password,
        "phonenumber": phonenumber
      });

      if (response.status === 201) {
        // Successful registration
        alert('Registration Successful. You can now log in.');  
        // Navigate to the login page if you have a routing mechanism
        // Example using React Router: history.push('/login');
      } else {
        // Handle unsuccessful registration (e.g., display an error message)
        alert('Registration Failed. Email is already registered.');
      }
    } catch (error) {
      console.error('Registration error:', error);

      // Handle other errors (e.g., network issues)
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <input
        style={styles.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        autoComplete="off"
      />
      <input
        style={styles.input}
        placeholder="Phone Number"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        type="tel"
      />
      <input
        style={styles.input}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button style={styles.registerButton} onClick={()=>handleRegister}>
        Register
      </button>
      <p style={styles.loginText}>
        Already have an account? <span style={{ color: "blue", cursor: "pointer" }}>Log in here</span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    backgroundColor: 'green',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 16,
    cursor: 'pointer',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
  },
  loginText: {
    color: 'black',
    fontSize: 14,
  },
};

export default Register;
