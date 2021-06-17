import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './routes'
import Navbar from './components/Navbar'
import { buscaDados } from '/imports/services/buscaDados'
import { adicionarProdutoThunk } from './store/modules/products/thunks'

// ------------------------
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    buscaDados().then((response) => dispatch(adicionarProdutoThunk(response)))
    console.log('passou pelo App')
  }, [])

  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
