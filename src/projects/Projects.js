import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import photo_social_network from "../imgs/social_network.jpg"
import photo_todolist from "../imgs/todolist.jpg"
import Project from "./project/Project";
import Title from "../title/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"projects"}/>
                <div className={style.projects}>
                    <Project photo={photo_social_network} title={"SOCIAL NETWORK"}/>
                    <Project photo={photo_todolist} title={"TODOLIST"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;