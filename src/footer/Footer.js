import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"
import vk from "../imgs/vk.png"
import github from "../imgs/github.png"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <a href={'#'}><img src={vk} style={{width: '25px', height: '25px'}} alt={'vk icon'}/></a>
                    <a href={'#'}><img src={github} style={{width: '25px', height: '25px'}} alt={'github icon'}/></a>
                </div>
                <div>
                    <span>© 2022. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;