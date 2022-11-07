import React from 'react';
import style from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectContainer}>
                <div>
                    <img className={style.photo} width={"250px"} height={"250px"} src={props.photo} alt=""/>
                </div>
                <div className={style.textContainer}>
                    <h3>{props.title}</h3>
                    <p>Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the relationship that exists. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti dicta eius iusto magnam nemo nihil nobis reiciendis! Dolorem minus natus omnis quas quia sed sequi voluptatem voluptatum. Dolores, eaque!</p>
                    <a href="" className={style.readmore}>Read more</a>
                </div>
            </div>
        </div>
    );
};

export default Project;