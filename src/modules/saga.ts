import { all, spawn } from 'redux-saga/effects';
import usersSaga from './users/saga';
import studentsSaga from './students/saga';

export default function* rootSaga() {
  yield all([
      spawn(usersSaga),      
      spawn(studentsSaga)
  ]);
}
