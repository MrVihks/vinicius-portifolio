import React from 'react'
import "../styles/SkillsPageStyle.scss"
import CardComponent from '../components/CardComponent'
import JsSVG from "../assets/javascript-isometric.svg"
import CssSVG from "../assets/css-isometric.svg"
import HtmlSVG from "../assets/html-isometric.svg"

const SkillsPage = () => {
  return (
    <section className='skills'>
       <h1>Habilidades</h1>
       <article className='skills-content'>
        <CardComponent title="JavaScript" content="Conhecimento em JavaScript" svg={JsSVG}/>
        <CardComponent title="HTML5" content="Conhecimento em HTML" svg={HtmlSVG}/>
        <CardComponent title="CSS3" content="Conhecimento em CSS" svg={CssSVG}/>
       </article>
    </section>
  )
}

export default SkillsPage