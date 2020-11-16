import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';

const initialState = {
  loading: false,
  data: []
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type UserListState = Readonly<typeof initialState>

const userReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.ALL_USERS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
