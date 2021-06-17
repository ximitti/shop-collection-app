import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../components/Card'

import ProdutosWrapper from './styles'

// --------------------------------
const Produtos = () => {
  const { produtos } = useSelector((store) => store)

  return (
    <ProdutosWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ul>
        {produtos.map((item) => (
          <Card key={item.id} produto={item} />
        ))}
      </ul>
    </ProdutosWrapper>
  )
}

export default Produtos
