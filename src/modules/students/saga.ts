import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import { fetchStudentsRequest, IStudentParams } from "./services"
import { allStudentsSuccess, allStudentsError } from './actions'
import { mapStudentsFromServer } from './mappers'
import { IStudent } from '../../services/models/Student.interface'
import { PayloadAction } from '@reduxjs/toolkit'


function* AllStudentsRequest(data: PayloadAction<IStudentParams>) {
  try {
    const response = yield call(fetchStudentsRequest, data.payload)
    yield put(allStudentsSuccess(mapStudentsFromServer(response)))
  } catch (e) {
    yield put(allStudentsError(e))
  }

}

export default function* saga() {
  yield all([
    takeEvery(types.ALL_STUDENTS_REQUEST, AllStudentsRequest),
  ]);
}