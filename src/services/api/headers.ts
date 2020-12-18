import { getTokenInfo, saveTokenInfo } from "../tokenStorage";
import { AxiosRequestConfig } from "axios";

export type HeadersType = {[key: string]: string}

export const formatTokenHeader = (customHeaders = {}) => {
  const token = getTokenInfo();
  const headers = {
    ...customHeaders,
    'content-type': 'application/json',
  };

  if (!token) {
    return headers;
  }
  return {
    ...headers,
    ['Access-token']: token,
  };
};


export const putTokenFromHeader = (config: AxiosRequestConfig, headers: any) => {
  const token = getTokenInfo();
  const isLogin = config.url === 'login';

  if (isLogin && !token) {
    saveTokenInfo(headers['access-token'])
  }
};
