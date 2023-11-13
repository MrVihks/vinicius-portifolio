import React from 'react'
import "../styles/HomePageStyle.scss"
import ViniIMG from "../assets/myimg.jpeg"
import ProgrammingIMG from "../assets/programming.svg"

const HomePage = () => {
    return (
        <section className='home'>
            <article className='home-header'>
            <img src={ProgrammingIMG} alt="" height={300} width={300} />
        
                <p>Seja bem-vindo ao meu portifólio meu nome é </p>
                <h1><span>Vinicius Henrique</span>, e sou Desenvolvedor Web</h1>
        
              
            </article>

        </section>
    )
}

export default HomePage