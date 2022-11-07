import React from 'react';
import style from "./Skill.module.css"


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <img src={props.photo} alt="" style={{marginRight: '1px'}} width={"25px"}/>
            <img src={props.photo2} width={"25px"} alt=""/>
            <h3>{props.title}</h3>
            <span>{props.text}</span>
        </div>
    );
};

export default Skill;