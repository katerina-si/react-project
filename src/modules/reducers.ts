import { combineReducers } from 'redux';
import usersReducer, {UserListState} from './users/reducer';
import studentsReducer, { StudentListState } from './students/reducer';

export interface IRootState {
  readonly users: UserListState
  readonly students: StudentListState
}

const reducers = combineReducers<IRootState>({
  users: usersReducer,
  students: studentsReducer,
});

export default reducers;
