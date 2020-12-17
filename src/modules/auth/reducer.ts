import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';
import { IStudent } from '../../services/models/Student.interface';

const initialState = {
  loading: false,
  profile: null,
  userIsRegistred: false,
  error: null,
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type AuthState = Readonly<typeof initialState>

const authReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST: {
      console.log(payload);
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
      console.log(payload);
      return {
        ...state,
        error: payload.message,
        loading: false,
      };
    }



    case types.SIGN_UP_REQUEST: {
      console.log(payload);
      return {
        ...state,
        ...payload,        
        loading: true,
      };
    }
    case types.SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        userIsRegistred: true,
        error: null
      };
    }
    case types.SIGN_UP_ERROR: {
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

export default authReducer;
