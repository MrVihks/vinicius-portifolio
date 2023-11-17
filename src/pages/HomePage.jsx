import React from 'react'
import "../styles/HomePageStyle.scss"
import ViniIMG from "../assets/myimg.jpeg"
import ProgrammingIMG from "../assets/programming.svg"

const HomePage = () => {
    return (
        <section className='home'>
             <img src={ProgrammingIMG} alt="" height={300} width={300} />
            <article className='home-header'>
                <p>Seja bem-vindo ao meu portifólio, meu nome é </p> <h1><span>Vinicius Henrique</span></h1><p> sou <span>Desenvolvedor Web</span></p>
            </article>

        </section>
    )
}

export default HomePage