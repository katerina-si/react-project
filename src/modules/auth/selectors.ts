import { store } from "../../App";

export const studentList = (state: ReturnType<typeof store.getState>) => Object.values(state.students.data).map((item: any) => item)
export const allStudentCount = (state: ReturnType<typeof store.getState>) => state.students.count;
export const studentListError = (state: ReturnType<typeof store.getState>) => state.students.error;
