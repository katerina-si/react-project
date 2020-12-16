import React from 'react';
import { AuthContainer } from '../containers/AuthContainer';

const SignUp = () => {
  return (
    <div className='AuthForm'>
      <AuthContainer type='signUp'/>
    </div>
  );
}

export default SignUp;
