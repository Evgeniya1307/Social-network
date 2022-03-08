import * as axios from "axios";


const instance=axios.create({
        withCredentials: true,
        basseURL:"https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY":"1bf83505-ac02-4585-b963-22997b15c5e8"
        }
});




export const usersAPI ={
  getUsers (currentPage=1, pageSize=10) {
   return instance.get( `users?page=${currentPage}&count=${pageSize}`
   )
.then(response => {
    return response.data
})
}
}







