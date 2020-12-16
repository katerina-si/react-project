import * as types from './constants';
import { TAction } from '../../utils/types';
import { IStudentParams } from './services';
import { IStudent } from '../../services/models/Student.interface';
import { ILoginForm } from '../../components/login-form/LoginForm';
import { IUser } from '../../services/models/User.interface';

export const loginRequest = (payload?: ILoginForm): TAction => ({
  type: types.LOGIN_REQUEST,
  payload,
});
export const loginSuccess = (payload: { profile: IUser[]}): TAction => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
export const loginError = (payload: { message: string, meta: any }): TAction => ({
  type: types.LOGIN_ERROR,
  payload,
});
