import instance from "./settings";


const registerServices = (data) => {
  console.log("register>>>", data)
  return instance.post("api/auth/register", data)
}
const loginServices = (data) => {
  console.log("login>>>", data)
  return instance.post("api/auth/login", data)
}
const getMe=()=>{
  return instance.get("api/auth/me")
}

const createPosts=(data)=>{
  console.log("PostData>>>", data)
  return instance.post('posts/add', data)
}
const getPost=()=>{
  return instance.get('posts')
}

export const authServices = {
  registerServices,
  loginServices,
  getMe,
  createPosts,
  getPost
}