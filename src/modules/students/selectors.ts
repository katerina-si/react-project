import { store } from "../../App";

export const studentList = (state: ReturnType<typeof store.getState>) => state.students.data;
export const studentListError = (state: ReturnType<typeof store.getState>) => state.students.error;

export const modalType = (state: ReturnType<typeof store.getState>) => state.students.modalType;
export const modalProps = (state: ReturnType<typeof store.getState>) => state.students.modalProps;