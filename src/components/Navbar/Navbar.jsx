import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/Profile" activeClassName={s.active__link}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Dialogs" activeClassName={s.active__link}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/News" activeClassName={s.active__link}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.active__link}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.active__link}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;