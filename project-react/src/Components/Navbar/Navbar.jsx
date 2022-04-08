import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <div className={s.item}>
        <Link to ="profile">Profile</Link>
    </div>
    <div className={s.item}>
    <Link to ="dialogs">Message</Link> 
    </div>
    <div className={s.item}>
    <Link to="news">News</Link>
    </div>
    <div className={s.item}>
    <Link to="music">Music</Link>
    </div>
      <div className={s.item}>
      <Link to="seting">Seting</Link>
      <div className={s.item}>
        <Link to="users">Users</Link>
        </div>
    </div>
    </nav>
    
    )
    
}

export default Navbar;