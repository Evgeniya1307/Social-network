import { usersAPI } from '../api/api'
import { Dispatch } from 'react'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 50,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
      case SET_USERS: {
        console.log(action.users);
        const test = action.users.reverse()
        console.log(action.users.reverse())
        return {...state, users: action.users}
    }
    
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_USERS_TOTAL_COUNT: {
      return {...state, totalUserCount: action.totalCount}
  }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.isFetching ?
                    [...state.followingInProgres, action.userId] :
                    [...state.followingInProgres.filter(id => id != action.userId)]
            }
        }
        default:
            return state;
      }
    }
 

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setUsersTotalCount = (setUsersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, count: setUsersTotalCount })
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching })
export const toggleIsFetching = (isFetching, userId) => ({ type: TOGGLE_IS_FETCHING, isFetching, userId })

// подготовили внизу ThunkCreator который можем задиспатчить из вне сюда
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setUsersTotalCount(data.totalCount))
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode == 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode == 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
}
export default usersReducer;
