import * as types from './constants';
import { TAction } from '../../utils/types';
import { IStudentParams } from './services';
import { IStudent } from '../../services/models/Student.interface';

export const allStudentsRequest = (payload?: IStudentParams): TAction => ({
  type: types.ALL_STUDENTS_REQUEST,
  payload,
});
export const allStudentsSuccess = (payload: { data: IStudent[], count: number }): TAction => ({
  type: types.ALL_STUDENTS_SUCCESS,
  payload,
});
export const allStudentsError = (payload: { message: string, meta: any }): TAction => ({
  type: types.ALL_STUDENTS_ERROR,
  payload,
});

export const studentCreateRequest = (payload: IStudent): TAction => ({
  type: types.STUDENT_CREATE_REQUEST,
  payload,
});
export const studentCreateSuccess = (): TAction => ({
  type: types.STUDENT_CREATE_SUCCESS,
});
export const studentCreateError = (payload: { message: string, meta: any }): TAction => ({
  type: types.STUDENT_CREATE_ERROR,
  payload,
});

export const studentUpdateRequest = (payload: IStudent): TAction => ({
  type: types.STUDENT_UPDATE_REQUEST,
  payload,
});
export const studentUpdateSuccess = (payload: IStudent): TAction => ({
  type: types.STUDENT_UPDATE_SUCCESS,
  payload,
});
export const studentUpdateError = (payload: { message: string, meta: any }): TAction => ({
  type: types.STUDENT_UPDATE_ERROR,
  payload,
});

export const studentDeleteRequest = (payload: string): TAction => ({
  type: types.STUDENT_DELETE_REQUEST,
  payload,
});
export const studentDeleteSuccess = (): TAction => ({
  type: types.STUDENT_DELETE_SUCCESS,
});
export const studentDeleteError = (payload: { message: string, meta: any }): TAction => ({
  type: types.STUDENT_DELETE_ERROR,
  payload,
});