import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'https://lianghj.top:8888/api/private/v1/'
})

// 配置请求拦截器
request.interceptors.request.use(config => {
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断是否存在token，如果存在，将每次请求的header中都添加token
  if (tokenStr) {
    config.headers = {
      ...config.headers,
      Authorization: tokenStr
    }
  }
  return config
})

export default request
