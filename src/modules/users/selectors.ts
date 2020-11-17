import { store } from "../../App";

export const usersList = (state: ReturnType<typeof store.getState>) => state.users.data;
export const usersListError = (state: ReturnType<typeof store.getState>) => state.users.error;
