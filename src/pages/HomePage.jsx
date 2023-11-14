import React from 'react'
import "../styles/HomePageStyle.scss"
import ViniIMG from "../assets/myimg.jpeg"
import ProgrammingIMG from "../assets/programming.svg"

const HomePage = () => {
    return (
        <section className='home'>
             <img src={ProgrammingIMG} alt="" height={300} width={300} />
            <article className='home-header'>
                <p>Seja bem-vindo ao meu portifólio, meu nome é </p>
                <h1><span>Vinicius Henrique</span>, sou Desenvolvedor Web.</h1>
                <button> <a href='https://github.com/MrVihks' target='__blank'>Github</a></button>
            </article>

        </section>
    )
}

export default HomePage