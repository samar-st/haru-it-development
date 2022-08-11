import React from "react";
import './projects.css'
import ProjectLink from '../../../assets/circletext.svg';
import ProjectsImg from '../../../assets/example.png';
import { IoIosArrowDown } from 'react-icons/io';


const Projects = () => {
    return(
        <div className="container projects">
            <div className="projects__left">
                <div className="projects__text">
                <h3>Наши проэкты:</h3>
                <p>Здесь должен был какойто тест, но это не точно, я тут добавлю немного текста чтобы казалось много бла бла бла </p>
            </div>
            <div className="projects__item">
                <div className="projects__item-text">
                    <h3>бла бла бла</h3>
                    <p>бла бла бла бла бла </p>
                </div>
                <div className="projects__img">
                    <img src={ProjectsImg} alt="img"/>
                    <div className="projects__link">
                        <img src={ProjectLink} alt="asd"></img>
                        <div className="project__link-cub"></div>,
                        <IoIosArrowDown className="project__link-icon"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="projects__right">
            <div className="projects__item">
                <div className="projects__item-text">
                    <h3>бла бла бла</h3>
                    <p>бла бла бла бла бла </p>
                </div>
                <div className="projects__img">
                    <img src={ProjectsImg} alt="img"/>
                    <div className="projects__link">
                        <img src={ProjectLink} alt="asd"></img>
                        <div className="project__link-cub"></div>,
                        <IoIosArrowDown className="project__link-icon"/>
                    </div>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Projects