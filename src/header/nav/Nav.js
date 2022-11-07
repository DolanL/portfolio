import React from 'react';
import style from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navItem} href="src/header/nav/Nav#">Главная</a>
            <a className={style.navItem} href="src/header/nav/Nav#">Скиллы</a>
            <a className={style.navItem} href="src/header/nav/Nav#">Проекты</a>
            <a className={style.navItem} href="src/header/nav/Nav#">Контакты</a>
        </div>
    );
};

export default Nav;