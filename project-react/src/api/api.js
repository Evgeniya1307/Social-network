import * as axios from "axios";


const instance=axios.create() ({
        withCredentials: true,
        basseURL:"https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY":"c06fd40b-c806-4f8b-9902-a62b5c3a3c16"
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







