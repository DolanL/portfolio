import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import photo_html from "../imgs/html.png"
import photo_css from "../imgs/css-3.png"
import photo_react from "../imgs/react.png"
import photo_redux from "../imgs/redux.png"
import photo_git from "../imgs/git.png"
import photo_js from "../imgs/js.png"
import photo_ts from "../imgs/typescript.png"
import photo_unit from "../imgs/unit.png"
import photo_materialUI from "../imgs/material_ui.png"
import Title from "../title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'skills'}/>
                <div className={style.skills}>
                    <Skill photo={photo_html} photo2={photo_css} title={"HTML5/CSS3"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat illo iure iusto laborum mollitia neque non provident reprehenderit sapiente sed sequi, similique veniam vitae."}/>
                    <Skill photo={photo_react} photo2={photo_redux} title={"React/Redux"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat"}/>
                    <Skill photo={photo_git} photo2={""} title={"Git"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat"}/>
                    <Skill photo={photo_js} photo2={photo_ts} title={"JS/TS"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat"}/>
                    <Skill photo={photo_unit} photo2={""} title={"Unit tests"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat"}/>
                    <Skill photo={photo_materialUI} photo2={""} title={"Material UI"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, enim est exercitationem, explicabo fugiat"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;