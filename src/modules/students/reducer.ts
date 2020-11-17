import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';

const initialState = {
  loading: false,
  data: [],
  page: 0,
  count: 0,
  limit: 0,
  error: null
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type StudentListState = Readonly<typeof initialState>

const studentsReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_STUDENTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.ALL_STUDENTS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null
      };
    }
    case types.ALL_STUDENTS_ERROR: {
      return {
        ...state,
        error: payload.message,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default studentsReducer;
