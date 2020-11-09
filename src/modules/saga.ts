import { all, spawn } from 'redux-saga/effects';
import usersSaga from './users/saga';

export default function* rootSaga() {
  yield all([
      spawn(usersSaga)
  ]);
}
