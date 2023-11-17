import React from 'react'
import "../styles/CardComponentStyle.scss"

const CardComponent = ({title, content, svg}) => {
  return (
    <article className='card'>
        <img src={svg} alt="" height={200} width={200}/>  
        <h2>{title}</h2>
        <p>{content}</p>
    </article>
  )
}

export default CardComponent