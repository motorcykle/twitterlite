import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h3 className="text-center my-3">
        Login to your account
      </h3>
      <Form>

        <Form.Group controlId="formLoginUsername">
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formLoginPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
