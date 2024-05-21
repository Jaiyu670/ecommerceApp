import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    if (username === 'admin' && password === 'jaimin') {
      onLogin();
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h2>Please login to continue....</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username : *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username...."
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <br/>
        <br/>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password : *</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password...."
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <br/>
        <br/>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
