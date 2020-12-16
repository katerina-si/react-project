import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';
import { IStudent } from '../../services/models/Student.interface';

const initialState = {
  loading: false,
  data: {},
  count: 0,
  error: null,
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type StudentListState = Readonly<typeof initialState>

const studentsReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_STUDENTS_REQUEST: {
      return {
        ...state,
        ...payload,        
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

    case types.STUDENT_CREATE_REQUEST: {
      return {
        ...state,   
        loading: true,
      };
    }
    case types.STUDENT_CREATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }
    case types.STUDENT_CREATE_ERROR: {
      return {
        ...state,
        error: payload.message,
        loading: false,
      };
    }

    case types.STUDENT_UPDATE_REQUEST: {
      return {
        ...state,   
        loading: true,
      };
    }
    case types.STUDENT_UPDATE_SUCCESS: {
      if(payload && payload.uuid){
        Object(state.data)[payload.uuid] = payload;
      }
      return {
        ...state,
        loading: false,
        error: null
      };
    }
    case types.STUDENT_UPDATE_ERROR: {
      return {
        ...state,
        error: payload.message,
        loading: false,
      };
    }

    case types.STUDENT_DELETE_REQUEST: {
      return {
        ...state,   
        loading: true,
      };
    }
    case types.STUDENT_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }
    case types.STUDENT_UPDATE_ERROR: {
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
