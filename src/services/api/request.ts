import axios, {
  AxiosError, AxiosInstance,
  AxiosResponse, AxiosRequestConfig
} from "axios"
import get from "lodash/get"
import { formatTokenHeader } from "./headers"

const request: AxiosInstance = axios.create()

request.interceptors.response.use(
  (config: AxiosResponse): AxiosResponse => config,
  (error: AxiosError): Promise<AxiosError> => {
    if ([403].includes(get(error, "response.status"))) {
     // need to implement
    }
    return Promise.reject(error)
  },
)


const setPathUrl = (url: string): string => url

function handleResponse<R>(data: AxiosResponse<R>): R {
  return data.data
}

class Request {
  static get<R>(url: string, config?: AxiosRequestConfig) {
    return request.get<R>(setPathUrl(url), {
      ...config,
      headers: formatTokenHeader(get(config, "headers"))
    }).then(handleResponse)
  }

  static post<T, R>(url: string, data: T, config?: AxiosRequestConfig) {
    return request.post<R>(setPathUrl(url), data, {
      ...config,
      headers: formatTokenHeader(get(config, "headers"))
    }).then(handleResponse)
  }

  static put<T, R>(url: string, data: T, config?: AxiosRequestConfig) {
    return request.put<R>(setPathUrl(url), data, {
      ...config,
      headers: formatTokenHeader(get(config, "headers"))
    }).then(handleResponse)
  }

  static patch<T, R>(url: string, data: T, config?: AxiosRequestConfig) {
    return request.patch<R>(setPathUrl(url), data, {
      headers: formatTokenHeader(get(config, "headers"))
    }).then(handleResponse)
  }

  static delete<R>(url: string, config?: AxiosRequestConfig) {
    return request.delete<R>(setPathUrl(url), {
      ...config,
      headers: formatTokenHeader(get(config, "headers"))
    }).then(handleResponse)
  }
}

export function getInstance(): AxiosInstance {
  return request
}

export default Request
