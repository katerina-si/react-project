import * as types from './constants';
import { TAction } from '../../utils/types';
import { IUser } from '../../services/models/User.interface';

export const allUsersRequest = (): TAction => ({
  type: types.ALL_USERS_REQUEST,
});

export const allUsersSuccess = (payload: { data: IUser[]}): TAction => ({
  type: types.ALL_USERS_SUCCESS,
  payload,
});

export const allUsersError = (payload: { message: string, meta: any }): TAction => ({
  type: types.ALL_USERS_ERROR,
  payload,
});