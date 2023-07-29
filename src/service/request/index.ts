import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestConfig, Interceptors } from './type'

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class Request {
  instance: AxiosInstance
  interceptors?: Interceptors
  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )

    // 针对特定的Request实例添加拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestSuccessFn,
      this.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: RequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单词响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(url: string, config?: RequestConfig<T>) {
    return this.request({ ...config, url, method: 'GET' })
  }
  post<T = any>(url: string, data: any, config: RequestConfig<T>) {
    return this.request({ ...config, url, data, method: 'POST' })
  }
  delete<T = any>(url: string, config: RequestConfig<T>) {
    return this.request({ ...config, url, method: 'DELETE' })
  }
  patch<T = any>(url: string, data: any, config: RequestConfig<T>) {
    return this.request({ ...config, url, data, method: 'PATCH' })
  }
}

export default Request
