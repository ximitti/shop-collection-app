import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../components/Card'

import ProdutosWrapper from './styles'

// --------------------------------
const Produtos = () => {
  const produtosLista = useSelector((store) => store.produtos)

  return (
    <ProdutosWrapper>
      <ul>
        {produtosLista.map((item) => (
          <Card key={item.id} produto={item} />
        ))}
      </ul>
    </ProdutosWrapper>
  )
}

export default Produtos
