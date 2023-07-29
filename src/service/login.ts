import request from './service'

export const getQrCodeKey = () => {
  return request.get('/login/qr/key')
}

export const createQrCode = (key: string) => {
  return request.get(`/login/qr/create?key=${key}`)
}

export const checkQrCodeStatus = (key: string) => {
  return request.get(`/login/qr/check?key=${key}`)
}
