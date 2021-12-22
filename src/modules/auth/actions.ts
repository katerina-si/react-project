import * as types from './constants';
import { TAction } from '../../utils/types';
import { ILoginForm } from '../../components/login-form/LoginForm';
import { IUser } from '../../services/models/User.interface';

export const loginRequest = (payload?: ILoginForm): TAction => ({
  type: types.LOGIN_REQUEST,
  payload,
});
export const loginSuccess = (payload: { profile: IUser}): TAction => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
export const loginError = (payload: { message: string, code: number }): TAction => ({
  type: types.LOGIN_ERROR,
  payload,
});


export const signUpRequest = (payload?: IUser): TAction => ({
  type: types.SIGN_UP_REQUEST,
  payload,
});
export const signUpSuccess = (payload: { profile: IUser}): TAction => ({
  type: types.SIGN_UP_SUCCESS,
  payload,
});
export const signUpError = (payload: { message: string, code: number }): TAction => ({
  type: types.SIGN_UP_ERROR,
  payload,
});
