import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import {  mapProfileFromServer,  } from './mappers'
import { PayloadAction } from '@reduxjs/toolkit'
import ApiService, { IStudentParams } from './services'
import { ILoginForm } from '../../components/login-form/LoginForm'
import { loginSuccess, loginError } from './actions'


function* AllStudentsRequest(data: PayloadAction<ILoginForm>) {
  try {
    const response = yield call(ApiService.login, data.payload)
    yield put(loginSuccess(mapProfileFromServer(response)))
  } catch (e) {
    yield put(loginError(e))
  }
}

export default function* saga() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, AllStudentsRequest),
  ]);
}