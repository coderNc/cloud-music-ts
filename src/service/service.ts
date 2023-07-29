import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message as Message } from 'antd'
import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

console.log('BASE_URL', BASE_URL)

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      addTimestamp(config)
      return config
    },
    responseSuccessFn: (res) => {
      // console.log(res)

      if (res.status === 200) {
        return res.data
      } else {
        handleError(res)
      }
    }
  }
})

const getUrl = (url?: string) => {
  const ts = new Date().getTime()
  if (url) {
    return url.includes('?')
      ? url + '&timestamp=' + ts
      : url + '?timestamp=' + ts
  }
}

const addTimestamp = (config: AxiosRequestConfig) => {
  const timestamp = new Date().getTime()
  if (config.method === 'get') {
    config.url = getUrl(config.url)
  } else if (config.method === 'post') {
    config.data = { ...config.data, timestamp }
  }
}

const handleError = (res: AxiosResponse) => {
  if (res.config.url) {
    const message = `接口${res.config.url}错误,请稍后重试~`
    Message.error(message)
  }
}

export default request
