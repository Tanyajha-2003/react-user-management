import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/users'); 
      }
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="Heading">Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
