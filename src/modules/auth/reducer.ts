import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';
import { IStudent } from '../../services/models/Student.interface';

const initialState = {
  loading: false,
  profile: {},
  error: null,
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type StudentListState = Readonly<typeof initialState>

const studentsReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        ...payload,        
        loading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null
      };
    }
    case types.LOGIN_ERROR: {
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
