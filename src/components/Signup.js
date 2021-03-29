import React, { useState } from 'react';
import axios from 'axios';
import Axios from '../Axios';
import { Form, Button } from 'react-bootstrap';

const Signup = ({ setMethod }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameCheck = async () => {
    try {
      const usernameRes = await Axios.get(`/api/users/search/${username.toLowerCase()}`);
      if (usernameRes.data) {
        alert("Username is taken.")
      } else {
        await Axios.post('/api/users/register', { name, username: username.toLowerCase(), password })
        setName('');
        setUsername('');
        setPassword('');
        setMethod('Login')
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    usernameCheck();
  }

  return (
    <div>
      <h3 className="text-center my-3">
        Create an account.
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSignupName">
          <Form.Control type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Enter your name..." />
        </Form.Group>

        <Form.Group controlId="formSignupUsername">
          <Form.Control type="text" value={username} onChange={({target}) => setUsername(target.value)} placeholder="Enter username..." />
        </Form.Group>

        <Form.Group controlId="formSignupPassword">
          <Form.Control type="password" value={password} onChange={({target}) => setPassword(target.value)}  placeholder="Choose a password..." />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
