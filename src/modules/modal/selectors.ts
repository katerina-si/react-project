import { store } from "../../App";

export const modalIsOpen = (state: ReturnType<typeof store.getState>) => state.modal.modalType ? true : false;
export const modalType = (state: ReturnType<typeof store.getState>) => state.modal.modalType;
export const modalProps = (state: ReturnType<typeof store.getState>) => state.modal.modalProps;