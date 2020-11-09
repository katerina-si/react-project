import { all, takeEvery, call } from 'redux-saga/effects'
import * as types from './constants'
import { fetchStudentsRequest } from "./services"
import { mapUsersFromServer } from "./mappers"

function* allUsersRequest() {
  try {
    const response = yield call(fetchStudentsRequest)
    mapUsersFromServer()
    console.log(response)
  } catch (e) {
    console.log(e)
  }

}
  
export default function* saga() {
  yield all([
    takeEvery(types.ALL_USERS_REQUEST, allUsersRequest),
  ]);
}