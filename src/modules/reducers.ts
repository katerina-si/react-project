import { combineReducers } from 'redux';
import usersReducer, {UserListState} from './users/reducer';
import studentsReducer, { StudentListState } from './students/reducer';
import modalReducer, { ModalState } from './modal/reducer';
import authReducer, { AuthState } from './auth/reducer';

export interface IRootState {
  readonly users: UserListState
  readonly students: StudentListState
  readonly modal: ModalState
  readonly auth: AuthState
}

const reducers = combineReducers<IRootState>({
  users: usersReducer,
  students: studentsReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default reducers;
