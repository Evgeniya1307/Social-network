import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css";
import {LogOut} from "../../redux/auth-reducer";

export const Header = (props) => {
  return (
    <header className={s.header}>
    <img src='https://themified.com/friend-finder/images/logo.png'/>
    <div className={s.login_block}>
        {props.isAuth ? <div>{props.Login} - <button onClick={props.LogOut}>Log out</button> </div>:
            <NavLink to={'/login'}>Login</NavLink>}
    </div>
</header>
)
}

export default Header;