import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface Interceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
}
