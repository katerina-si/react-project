import { store } from "../../App";

export const modalType = (state: ReturnType<typeof store.getState>) => state.modal.modalType;
export const modalProps = (state: ReturnType<typeof store.getState>) => state.modal.modalProps;
export const actionIsConfirmed = (state: ReturnType<typeof store.getState>) => state.modal.actionIsConfirmed