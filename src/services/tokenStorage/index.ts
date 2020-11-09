import { local } from '../storage';
const AUTH_TOKEN_KEY = 'token-ts-app'

export const saveTokenInfo = (token: string): void => local.setItem(AUTH_TOKEN_KEY, token);

export const getTokenInfo = (): unknown => local.getItem(AUTH_TOKEN_KEY);

export const clearToken = (): void => local.clear(AUTH_TOKEN_KEY);
