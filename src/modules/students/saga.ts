import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import { fetchStudentsRequest } from "./services"
import { allStudentsSuccess, allStudentsError } from './actions'
import { mapStudentsFromServer } from './mappers'


function* AllStudentsRequest() {
  try {
    const response = yield call(fetchStudentsRequest)
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