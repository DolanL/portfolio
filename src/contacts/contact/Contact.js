import React from 'react';
import style from "./Contact.module.css";

const Contact = (props) => {
    return (
        <div className={style.contact}>
            <div>
                <img src={props.path} width={"50px"} height={'50px'} alt={'icon'}/>
            </div>
            <p className={style.title}>
                {props.title}
            </p>
            <span>
                {props.phone}
            </span>
        </div>
    );
};

export default Contact;