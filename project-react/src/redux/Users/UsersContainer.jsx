import React from "react";
import { connect } from "react-redux";
import { followACSuccess,
    FollowingType, getUsersThunkCreator,
    InitialStateType, setCurrentPageAC, toogleFollowingProgresAC, unFollowACSuccess} from "../users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import {withAuthNavigate} from "../../Components/Profile/hoc/withAuthNavigate.js";
import {
    getCurrentPage,
    getFolliwingInPorgress,
    getIsFetching,
    getPageSize,
    getTOtalUsersCount,
    getUsers
} from "../../redux/Users/users-selectors.jsx"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
        
    onPageChanged = (currentPage) => {
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
         <Users
          onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgres={this.props.followingInProgres}
        /> 
        </>
    }
    
}

const  mapStateToProps = (state) => {

return {
    usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTOtalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFolliwingInPorgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId)); 
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
// setTotalUsersCount:(totalCount) => {
//                 dispatch(setUsersTotalCountAC(totalCount))
//             },
//             toggleIsFetching:(isFetching)=> {
//                 dispatch(toggleIsFetchingAC(isFetching))
//             }
//         }
//     }


const mapDispatchToPRops = (dispatch) => {
    return {
        follow: (usersIdr) => {
            dispatch(followACSuccess(usersId))
        },
        unfollow: (userId) => {
            dispatch(unFollowACSuccess(userId))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toogleFollowingProgres: (isFetching, userId) => {
            dispatch(toogleFollowingProgresAC(isFetching, userId))
        },
        getUsersThunkCreator: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToPRops),
)(UsersContainer);