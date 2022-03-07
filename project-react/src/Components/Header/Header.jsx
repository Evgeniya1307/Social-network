import React from "react";
import s from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
    <header className={s.header}>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/002/280/804/small/lavender-flower-logo-symbol-template-free-vector.jpg' alt='flowers'/>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login
        : <Link to="/login">Login</Link>}
    </div>
    </header>
    )
}


export default Header;