import { all, spawn } from 'redux-saga/effects';
import usersSaga from './users/saga';
import studentsSaga from './students/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield all([
      spawn(usersSaga),      
      spawn(studentsSaga),      
      spawn(authSaga)
  ]);
}
