import { getTokenInfo, saveTokenInfo } from "../tokenStorage";

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


export const putTokenFromHeader = (headers: any) => {
  const token = getTokenInfo();

  if (!token) {
    saveTokenInfo(headers['access-token'])
  }
};
