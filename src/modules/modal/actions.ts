import * as types from './constants';
import { TAction } from '../../utils/types';

export const modalOpenning = (payload: { modalType: string, modalProps: any }): TAction => ({
  type: types.MODAL_OPENNING,
  payload,
});

export const modalClosing = (payload?: { actionIsConfirmed: boolean }): TAction => ({
  type: types.MODAL_CLOSING,
  payload,
});