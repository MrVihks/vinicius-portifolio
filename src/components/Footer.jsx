import React from 'react'
import GithubSVG from "../assets/github-icon.svg"
import "../styles/FooterStyle.scss"


const Footer = () => {
    return (
        <footer className="footer">
            <article>
                <h1>Vinicius Henrique</h1>
                <a href="https://github.com/MrVihks/" target='_blank'><img src={GithubSVG} height={50} width={50} /></a>
            </article>
        </footer>
    )
}

export default Footer