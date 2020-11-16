import { all, takeEvery, call, put } from 'redux-saga/effects'
import * as types from './constants'
import { fetchStudentsRequest } from "./services"
import { mapUsersFromServer } from "./mappers"


function* AllUsersRequest() {
  
  try {
    const response = yield call(fetchStudentsRequest)    
    const mappedUserList = mapUsersFromServer(response);
    yield put({type:types.ALL_USERS_SUCCESS, payload: mappedUserList})
    console.log(response)
  } catch (e) {
    console.log(e)
  }

}
  
export default function* saga() {
  yield all([
    takeEvery(types.ALL_USERS_REQUEST, AllUsersRequest),
  ]);
}