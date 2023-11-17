import React from 'react'
import "../styles/AboutPageStyle.scss"
import CardComponent from '../components/CardComponent'
import ViniIMG from "../assets/myimg.jpeg"
const AboutPage = () => {
    return (
        <section className='about'>
            <h1>Sobre mim</h1>
            <article className='about-content'>
                <img src={ViniIMG} alt="" height={200} width={200}/>
                <p>Olá, sou Vinicius Henrique, um jovem desenvolvedor web de 15 anos. Minha jornada no mundo da programação está apenas começando, a cada projeto, vejo uma oportunidade de crescimento e melhoria.</p>
            </article>
        </section>
    )
}

export default AboutPage