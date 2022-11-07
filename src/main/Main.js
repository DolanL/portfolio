import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Title from "../title/Title";


const Main = () => {
    return (
        <div className={style.main}>
            <Title title={'about me'}/>
            <div className={styleContainer.container}>
                <div className={style.description}>
                    <span>Hi there</span>
                    <h2 className={style.title}>I am Lakshinov Dolan</h2>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>
                    <img src='' alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;