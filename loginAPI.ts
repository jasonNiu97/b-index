import request from './index'

export const loginAPI = (data:any) => {
  return request.post('login', data)
}
