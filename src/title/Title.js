import React from 'react';
import style from "./Title.module.css"

const Title = (props) => {
    return (
        <div className={style.titleContainer}>
            <h2 className={style.title}>{props.title}</h2>
        </div>
    );
};

export default Title;