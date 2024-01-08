import axios from 'axios'
import type { AxiosInstance } from 'axios'
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 1000 * 60 * 2 //请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 返回的数据进行状态判断
    if (response.status === 200) {
      // 对数据进行number类型进行强制转化
      const _code = Number(res.code)
      // 判断状态码是不是200
      if (isNaN(_code) || _code === 200) {
        return response.data
      }
    }
    return Promise.reject(new Error('error'))
  },
  (error) => {
    Promise.reject(error)
  }
)

export default service
