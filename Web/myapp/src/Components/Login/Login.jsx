import React, { useState } from 'react';
import axios from "axios";
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Correct spelling

    console.log('heyy');

    try {
      const response = await axios.post(`http://localhost:5000/home/login`, {
        "email": email,
        "password": password
      });

      if (response.status === 200) {
        console.log(response.data.user);
        navigate('/home', {userdata:response.data.user});
      } else if (response.status === 401) {
      }
    } catch (error) {
      console.error('Login error:', error);
    }

  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
