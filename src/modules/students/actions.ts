import * as types from './constants';
import { TAction } from '../../utils/types';
import { IStudentParams } from './services';

export const allStudentsRequest = (payload?: IStudentParams): TAction => ({
  type: types.ALL_STUDENTS_REQUEST,
  payload,
});

export const allStudentsSuccess = (payload: { data: any[], [key: string]: any }): TAction => ({
  type: types.ALL_STUDENTS_SUCCESS,
  payload,
});

export const allStudentsError = (payload: { message: string, meta: any }): TAction => ({
  type: types.ALL_STUDENTS_ERROR,
  payload,
});
