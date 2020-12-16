import React from 'react';
import { AuthContainer } from '../containers/AuthContainer';

const Login = () => {
  return (
    <div className='AuthForm'>
      <AuthContainer type='login'/>
    </div>
  );
}

export default Login;
