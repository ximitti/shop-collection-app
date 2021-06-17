import React from 'react'
import { Link } from 'react-router-dom'
import CardWrapper from './styles'

const Card = ({ produto }) => {
  const randomImage = Math.floor(Math.random() * produto.images.length)

  return (
    <CardWrapper>
      <header>
        <h1>{produto.title}</h1>

        <div>
          <img src={produto.images[randomImage]} alt={produto.title} width="230" height="200" />
        </div>
      </header>
      <main>
        <p>{produto.description}</p>
        <p>$ {produto.price}</p>
      </main>
      <footer>
        <Link to={`/produtos/${produto.id}`}>Detalhe</Link>
      </footer>
    </CardWrapper>
  )
}

export default Card
