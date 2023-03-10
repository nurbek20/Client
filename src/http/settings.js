import axios from 'axios'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
      },
  baseURL: 'http://localhost:5556/'
})
// https://animated-praline-671c56.netlify.app/

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('userData'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})


export default instance;