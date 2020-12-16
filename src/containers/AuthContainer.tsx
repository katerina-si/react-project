import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../services/models/User.interface';
import { LoginForm, ILoginForm } from '../components/login-form/LoginForm';
import { SignUpForm } from '../components/sign-up-form/SignUpForm';

type Props = {
  type: 'login' | 'signUp',
}
const AuthContainer = ({ type }: Props) => {
  let history = useHistory();

  const onLogin = (form: ILoginForm) => {
    console.log(form)
    history.push('/users');
  }

  const onSignUp = (form: IUser) => {
    console.log(form)
    history.push('/users');
  }

  return (
    <div>
      {
        type == 'login' && <LoginForm onSendForm={onLogin} /> ||
        type == 'signUp' && <SignUpForm onSendForm={onSignUp} />
      }
    </div>
  );
}

export { AuthContainer };
