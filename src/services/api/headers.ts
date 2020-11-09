import { getTokenInfo } from "../tokenStorage";

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
