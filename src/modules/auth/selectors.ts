import { store } from "../../App";

export const authIsSuccessfull = (state: ReturnType<typeof store.getState>) => state.auth.profile ? true : false;
export const userIsRegistered = (state: ReturnType<typeof store.getState>) => state.auth.userIsRegistered;
