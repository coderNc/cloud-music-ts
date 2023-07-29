import request from './service'

export const getTopBanners = () => {
  return request.get<any>('/banner')
}
