import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import { ProductsCollection } from '/imports/api/ProductsCollection'

import Card from '../../components/Card'

import FavoritosWrapper from './styles'

// ---------------------------------
const Favoritos = () => {
  const produtos = useTracker(() => ProductsCollection.find({}).fetch())

  return (
    <FavoritosWrapper
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
    </FavoritosWrapper>
  )
}

export default Favoritos
