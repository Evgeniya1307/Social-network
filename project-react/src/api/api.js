import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
  headers: {
    'API-KEY': '54e6f081-35f8-4fd6-8c2a-4995248f8b93'
  },
});

export const usersAPI = {

  getUsers(currentPage, pageSize){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
  },

  unfollow(userId){
      return instance.delete(`follow/${userId}`)
          .then(response => {
              return response.data
          })
  },

  follow(userId){
      return instance.post(`follow/${userId}`)
          .then(response => {
              return response.data
          })
  },

  getProfile(userId){
      console.warn('Obsolete method. Please use ProfileAPI object');
      return profileAPI.getProfile(userId);
  },

}

export const profileAPI = {

  getProfile(userId){
      return instance.get(`profile/${userId}`)
          .then(response => {
              return response.data
          })
  },

  getStatus(userId){
      return instance.get(`profile/status/${userId}`)
      .then(response => {
          return response.data
      })
  },

  updateStatus(status){
      return instance.put(`profile/status`, { status: status });
  }

}


export const authAPI = {
  me(){
      return instance.get(`auth/me`)
      .then(response => {
          return response.data
      })
  },

  login(email, password, rememberMe = false){
      return instance.post(`auth/login`,{ email, password, rememberMe })
  },
  logout(){
      return instance.delete(`auth/login`)
  }

}