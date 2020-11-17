import * as types from './constants';
import { TAction } from '../../utils/types';

export const allStudentsRequest = (): TAction => ({
  type: types.ALL_STUDENTS_REQUEST,
});

export const allStudentsSuccess = (payload: { data: any[], meta: any }): TAction => ({
  type: types.ALL_STUDENTS_SUCCESS,
  payload,
});

export const allStudentsError = (payload: { message: string, meta: any }): TAction => ({
  type: types.ALL_STUDENTS_ERROR,
  payload,
});