import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = () => {
  const [method, setMethod] = useState('Signup');
  const nextMethod = method === 'Signup' ? 'Login' : 'Signup';

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="forms__container p-4 bg-light rounded text-center shadow">
        <img className="mx-auto" height="35px" width="auto" src="http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s320/Twitter+logo+2012.png" alt="Workflow" />
        {method === 'Login' ? <Login /> : <Signup setMethod={setMethod} />}
        <Button variant="transparent" onClick={() => setMethod(nextMethod)}>{nextMethod} instead.</Button>
      </div>
    </div>
  );
}

export default Auth;
