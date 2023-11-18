import React from 'react'
import "../styles/ProjectsPageStyle.scss"
import ProjectCardComponent from '../components/ProjectCardComponent'

import TeacherSVG from "../assets/teacher-isometric.svg"

import SchoolSVG from "../assets/school-isometric.svg"
import LessonSVG from "../assets/online-lesson-isometric.svg"

const ProjectsPage = () => {
  return (
    <section className='projects'> 
        <article className='projects-content'>
            <h1>Projetos</h1>
            <article className='projects-container'>
                <ProjectCardComponent title="Catequese App" content="Um site feito por mim,  para a catequese da igreja" svg={TeacherSVG} link="https://catequese-sj.bohr.io/login"/>
                <ProjectCardComponent title="Criador de Ensalamentos" content="O Gerador de Ensalamentos está aqui para tornar a criação de ensalamentos muito mais fácil e eficiente"  svg={SchoolSVG} link="https://criador-ensalamentos.bohr.io/"/>
                <ProjectCardComponent title="Filosofa-ai" content="O Filosofa.ai é uma plataforma com objetivo de incentivar a filosofia e o pensamento crítico "  svg={LessonSVG} link="https://filosofa-ai.bohr.io/"/>
            </article>
        </article>
    </section>
  )
}

export default ProjectsPage