import React from "react";
import s from "./SideBarFriends.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const FriendsItem = (props) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const SideBarFriends = () => {
    const profilePage = useSelector<AppRootStateType(state => state.sidebarReducer)
    const bigFriends = profilePage.SideBar.map(s => <FriendsItem  name={s.name} id={s.id} />)
    return (
        <nav className={s.sideBar}>

            <div className={s.content}>
                Friends online
                <NavLink to="/friends" activeClassName={s.active}>{bigFriends}</NavLink>
            </div>
        </nav>
    )
}


export default SideBarFriends;