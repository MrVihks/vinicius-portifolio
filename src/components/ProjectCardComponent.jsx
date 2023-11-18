import React from 'react'
import "../styles/ProjectCardComponentStyle.scss"

const ProjectCardComponent = ({title, content, svg, link}) => {
  return (
    <article className='project-card'>
        <img src={svg} alt="" height={250} width={250}/>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} target='_blank'><button>Ver</button></a>
    </article>
  )
}

export default ProjectCardComponent