import * as types from './constants';
import { TAction } from '../../utils/types';

export const modalOpenning = (payload: { modalType: string, modalProps: any }): TAction => ({
  type: types.MODAL_OPENNING,
  payload,
});

export const modalClosing = (): TAction => ({
  type: types.MODAL_CLOSING,
});