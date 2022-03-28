import * as axios from "axios";


const instance=axios.create({
        withCredentials: true,
        basseURL:"https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY":"54e6f081-35f8-4fd6-8c2a-4995248f8b93"
        }
});

export const usersAPI ={
  getUsers (currentPage=1, pageSize=10) {
   return instance.get( `users?page=${currentPage}&count=${pageSize}` )
.then(response => {
    return response.data
});
},
follow (userId) {
   return instance.post(`follow/${userId}`)
},
unfollow (userId) { 
    return instance.delete(`follow/${userId}`)
},
getProfile(userId){
   return instance.get(`profile/`+userId);
        }
}

export const authAPI= {
    me () {
     return instance.get(`auth/me`,{
        })
    }
}











