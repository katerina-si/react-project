import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';

const initialState = {
  modalType: null,
  modalProps: null,

};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type ModalState = Readonly<typeof initialState>

const modalReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.MODAL_OPENNING: {
      return {
        ...state,
        ...payload,
      };
    }
    case types.MODAL_CLOSING: {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
