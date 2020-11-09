import { combineReducers } from 'redux';
import usersReducer, {UserListState} from './users/reducer';

export interface IRootState {
  readonly users: UserListState
}

const reducers = combineReducers<IRootState>({
  users: usersReducer,
});

export default reducers;
