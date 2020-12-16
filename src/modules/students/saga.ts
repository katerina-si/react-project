import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import { allStudentsSuccess, allStudentsError, studentCreateSuccess, studentUpdateSuccess, studentCreateError, studentUpdateError, studentDeleteSuccess, studentDeleteError } from './actions'
import { mapStudentsFromServer, mapStudentToServer } from './mappers'
import { IStudent } from '../../services/models/Student.interface'
import { PayloadAction } from '@reduxjs/toolkit'
import ApiService, { IStudentParams } from './services'


function* AllStudentsRequest(data: PayloadAction<IStudentParams>) {
  try {
    const response = yield call(ApiService.fetchStudentsRequest, data.payload)
    yield put(allStudentsSuccess(mapStudentsFromServer(response)))
  } catch (e) {
    yield put(allStudentsError(e))
  }
}

function* StudentCreateRequest(data: PayloadAction<IStudent>) {
  try {    
    const model = yield mapStudentToServer(data.payload)
    yield call(ApiService.postStudentRequest, model)
    yield put(studentCreateSuccess())
  } catch (e) {
    yield put(studentCreateError(e))
  }
}

function* StudentUpdateRequest(data: PayloadAction<IStudent>) {
  try {
    const model = yield mapStudentToServer(data.payload)
    const response = yield call(ApiService.putStudentRequest, model)
    yield put(studentUpdateSuccess(response.data))
  } catch (e) {
    yield put(studentUpdateError(e))
  }
}

function* StudentDeleteRequest(data: PayloadAction<string>) {
  try {
    yield call(ApiService.deleteStudentRequest, data.payload)
    yield put(studentDeleteSuccess())
  } catch (e) {
    yield put(studentDeleteError(e))
  }
}

export default function* saga() {
  yield all([
    takeEvery(types.ALL_STUDENTS_REQUEST, AllStudentsRequest),
    takeEvery(types.STUDENT_CREATE_REQUEST, StudentCreateRequest),
    takeEvery(types.STUDENT_CREATE_SUCCESS, AllStudentsRequest),
    takeEvery(types.STUDENT_UPDATE_REQUEST, StudentUpdateRequest),
    takeEvery(types.STUDENT_DELETE_REQUEST, StudentDeleteRequest),
    takeEvery(types.STUDENT_DELETE_SUCCESS, AllStudentsRequest),
  ]);
}