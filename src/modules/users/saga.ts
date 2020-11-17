import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import { mapUsersFromServer } from "./mappers"
import { allUsersSuccess, allUsersError } from './actions'
import { fetchUsersRequest } from './services'


function* AllUsersRequest() {
  try {
    const response = yield call(fetchUsersRequest)
    yield put(allUsersSuccess(mapUsersFromServer(response)))
  } catch (e) {
    yield put(allUsersError(e))
  }

}

export default function* saga() {
  yield all([
    takeEvery(types.ALL_USERS_REQUEST, AllUsersRequest),
  ]);
}