import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../services/models/User.interface';
import { LoginForm, ILoginForm } from '../components/login-form/LoginForm';
import { SignUpForm } from '../components/sign-up-form/SignUpForm';
import * as actions from '../modules/auth/actions';
import * as selectors from '../modules/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  type: 'login' | 'signUp',
}
const AuthContainer = ({ type }: Props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const authIsSuccessfull = useSelector(selectors.authIsSuccessfull);
  const userIsRegistred = useSelector(selectors.userIsRegistred);

  useEffect(() => {
    if(authIsSuccessfull){
      history.push('/users');
    }
    if(userIsRegistred){
      history.push('/login');
    }
  }, [authIsSuccessfull, userIsRegistred])

  const onLogin = (e: any, form: ILoginForm) => {
    console.log(form)
    dispatch(actions.loginRequest(form));
    console.log('form')
    e.preventDefault()
  }

  const onSignUp = (e: any, form: IUser) => {
    dispatch(actions.signUpRequest(form));
    console.log('form')
    e.preventDefault()
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
