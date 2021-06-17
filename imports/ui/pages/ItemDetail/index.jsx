import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'

import { ProductsCollection } from '/imports/api/ProductsCollection'

import ItemDetailWrapper from './styles'

// ----------------------------
const ItemDetail = () => {
  const { slug } = useParams()
  const produto = useSelector((store) => store.produtos.find((item) => item.id === slug))
  const produtoBanco = useTracker(() => ProductsCollection.findOne({ id: produto.id }))

  if (!produto) {
    return (
      <h1 style={{ fontSize: '2rem' }}>
        Nenhum produto carregado. <Link to="/">Voltar para início.</Link>
      </h1>
    )
  }

  const handleAddProduto = () => {
    ProductsCollection.insert(produto)
  }

  const handleRemoveProduto = () => {
    ProductsCollection.remove(produtoBanco._id)
  }

  const randomImage = Math.floor(Math.random() * produto.images.length)
  const randomTag = Math.floor(Math.random() * produto.tags.length)

  return (
    <ItemDetailWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <header>
        <h1>{produto.title}</h1>
        {!!produtoBanco ? (
          <button onClick={handleRemoveProduto}>Remover dos favoritos</button>
        ) : (
          <button onClick={handleAddProduto}>Adicionar aos favoritos</button>
        )}
      </header>
      <main>
        <div className="imagem">
          <img src={produto.images[randomImage]} alt={produto.title} />
        </div>
        <div className="texto">
          <p>{produto.description}</p>
        </div>
      </main>
      <footer>
        <div>
          $ <span>{produto.price}</span>
        </div>
        {!!produto.tags.length && <div># {produto.tags[randomTag]}</div>}
      </footer>
    </ItemDetailWrapper>
  )
}

export default ItemDetail
