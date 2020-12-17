import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import {  mapProfileFromServer, mapNewUserToServer,  } from './mappers'
import { PayloadAction } from '@reduxjs/toolkit'
import ApiService, { IStudentParams } from './services'
import { ILoginForm } from '../../components/login-form/LoginForm'
import { loginSuccess, loginError, signUpSuccess } from './actions'
import { IUser } from '../../services/models/User.interface'


function* ProfileRequest(data: PayloadAction<ILoginForm>) {
  try {
    const response = yield call(ApiService.login, data.payload)
    yield put(loginSuccess(mapProfileFromServer(response)))
  } catch (e) {
    yield put(loginError(e))
  }
}



function* SignUpRequest(data: PayloadAction<IUser>) {
  try {
    const response = yield call(ApiService.signup, mapNewUserToServer(data.payload))
    yield put(signUpSuccess(response))
  } catch (e) {
    yield put(loginError(e))
  }
}

export default function* saga() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, ProfileRequest),
    takeEvery(types.SIGN_UP_REQUEST, SignUpRequest),
  ]);
}