import request from './service'

export const getAccount = () => {
  return request.get('/user/account')
}

export const getUserStatus = () => {
  return request.get('/user/status')
}

export const getUserDetail = (uid: number) => {
  return request.get('/user/detail', { params: { uid } })
}
