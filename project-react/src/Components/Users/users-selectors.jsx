



export const getUsers = (state) => {
    return state.users;
}

export const getPageSize = (state) => {
    return state.users.pageSize;
}
export const getTOtalUsersCount = (state) => {
    return state.users.totalUserCount;
}
export const getCurrentPage = (state) => {
    return state.users.currentPage;
}
export const getIsFetching = (state) => {
    return state.users.isFetching;
}
export const getFolliwingInPorgress = (state) => {
    return state.users.followingInProgres;
}

