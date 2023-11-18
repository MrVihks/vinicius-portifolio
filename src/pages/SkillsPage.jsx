import React from 'react'
import "../styles/SkillsPageStyle.scss"
import CardComponent from '../components/CardComponent'
import JsSVG from "../assets/javascript-isometric.svg"
import CssSVG from "../assets/css-isometric.svg"
import HtmlSVG from "../assets/html-isometric.svg"
import ReactSVG from "../assets/react.svg"
import PhpSVG from "../assets/php.svg"


import NextSVG from "../assets/nextjs.svg"

import SassSVG from "../assets/sass.svg"
import TailwindSVG from "../assets/tailwind-css.svg"
import FirebaseSVG from "../assets/firebase.svg"



const SkillsPage = () => {
  return (
    <section className='skills'>
       <h1>Hard-SKills</h1>
       <article className='skills-content'>
        <CardComponent title="JavaScript" content="Conhecimento em JavaScript" svg={JsSVG}/>
        <CardComponent title="HTML5" content="Conhecimento em HTML" svg={HtmlSVG}/>
        <CardComponent title="CSS3" content="Conhecimento em CSS" svg={CssSVG}/>
        <CardComponent title="ReactJS" content="Conhecimento em ReactJS" svg={ReactSVG}/>
        <CardComponent title="NextJS" content="Conhecimento em NextJS" svg={NextSVG}/>
        <CardComponent title="PHP" content="Conhecimento em PHP" svg={PhpSVG}/>
        <CardComponent title="Sass" content="Conhecimento em Sass" svg={SassSVG}/>
        <CardComponent title="Tailwind" content="Conhecimento em Tailwind" svg={TailwindSVG}/>
        <CardComponent title="Firebase" content="Conhecimento em Firebase" svg={FirebaseSVG}/>
       </article>
    </section>
  )
}

export default SkillsPage