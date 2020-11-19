import { store } from "../../App";

export const studentList = (state: ReturnType<typeof store.getState>) => state.students.data;
export const studentListError = (state: ReturnType<typeof store.getState>) => state.students.error;
