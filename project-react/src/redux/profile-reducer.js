import { Dispatch } from "redux";
import { profileAPI, userAPI } from "../API/API";


const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_STATUS = "SET-STATUS";

export const initialState = {
  MyPostsData: [
      { id: 1, message: "Hello my friend", LikesCount: "12" },
      { id: 2, message: "This is my first post", LikesCount: "10" },
      { id: 3, message: "DaDa", LikesCount: "10" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: new Date().getTime(),
                message: action.myPosts,
                LikesCount: "0",
            };
      
            return {
              ...state,
              MyPostsData: [...state.MyPostsData, newPost],
          };
      }
    
      case SET_STATUS: {
        return {
            ...state,
            status: action.status,
        };
    }
    case SET_USERS_PROFILE: {
        return { ...state, profile: action.profile };
    }
    default:
        return state;
}
};

export const addPostActionCreator = () => ({ type: "ADD_POST "});
export const setUserProfileAC = (profile) => ({ type: "SET-USERS-PROFILE", profile });
export const onPostChangeActionCreator=(newText)=>({type: "UPDATE_NEW_POST_TEXT", newText});
export const setStatusAC=(status)=>({tepe: "SET-STATUS", status})


export const getUsersProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfileAC(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatusAC(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
          dispatch(setStatusAC(status));
      }
  });
};

export default profileReducer;
