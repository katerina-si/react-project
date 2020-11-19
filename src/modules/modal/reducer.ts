import * as types from './constants';
import * as actions from './actions';
import { InferValueTypes } from '../../utils/types';

const initialState = {
  modalType: null,
  modalProps: null,
  actionIsConfirmed: null
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

export type ModalState = Readonly<typeof initialState>

const modalReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;
  switch (type) {
    case types.MODAL_OPENNING: {
      console.log(payload)
      return {
        ...state,
        ...payload,
      };
    }
    case types.MODAL_CLOSING: {
      console.log(payload)
      return {
        ...state,
        ...payload,
        modalType: null,
        modalProps: null,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
