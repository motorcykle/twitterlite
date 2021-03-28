import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameCheck = async () => {
    // try {
    //   const usernameRes = await axios.get(`/users/search/${username}`);
    //   if (usernameRes.data) {
    //     alert("Username is taken.")
    //   } else {
    //     await axios.post('/users/register', { name, username, password })
    //     setName('');
    //     setUsername('');
    //     setPassword('');
    //     // setMethod('Login')
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <div>
      <h3 className="text-center my-3">
        Create an account.
      </h3>
      <Form>
        <Form.Group controlId="formSignupName">
          <Form.Control type="text" placeholder="Enter your name..." />
        </Form.Group>

        <Form.Group controlId="formSignupUsername">
          <Form.Control type="text" placeholder="Enter username..." />
        </Form.Group>

        <Form.Group controlId="formSignupPassword">
          <Form.Control type="password" placeholder="Choose a password..." />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
