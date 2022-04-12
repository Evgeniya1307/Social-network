import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '54e6f081-35f8-4fd6-8c2a-4995248f8b93'
  },
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },

    getUsersFollow(id = 1) {
        return instance.post(`follow/${id}`);
    },

 getUsersUnFollow(id = 1) {
        return instance.delete(`follow/${id}`);
    },
  
    getProfile (userId) {
    console.warn("Absolute method. Please profileAPI object.");
    return instance.get(`profile/` + userId);
  },
};

export const profileAPI = {
    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },

  updateStatus (status) {
    return instance.put(`profile/status/`, {status: status});
    },
};
   
  export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

  login (email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
},
Logout() {
    return instance.delete(`auth/login`);
},
}

export const securityAPI = {
  getCaptchaUrl () {
    return instance.get('security/get-captcha-url')
  }
}
