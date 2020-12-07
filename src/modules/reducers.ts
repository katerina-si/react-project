import { combineReducers } from 'redux';
import usersReducer, {UserListState} from './users/reducer';
import studentsReducer, { StudentListState } from './students/reducer';
import modalReducer, { ModalState } from './modal/reducer';

export interface IRootState {
  readonly users: UserListState
  readonly students: StudentListState
  readonly modal: ModalState
}

const reducers = combineReducers<IRootState>({
  users: usersReducer,
  students: studentsReducer,
  modal: modalReducer
});

export default reducers;
