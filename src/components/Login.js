import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <div>
      <h3 className="text-center my-3">
        Login to your account
      </h3>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formLoginUsername">
          <Form.Control value={username} onChange={({target}) => setUsername(target.value)} type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formLoginPassword">
          <Form.Control value={password} onChange={({target}) => setPassword(target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
