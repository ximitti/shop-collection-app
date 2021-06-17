import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import Routes from './routes'
import Navbar from './components/Navbar'
import { buscaDados } from '/imports/services/buscaDados'
import { adicionarProdutoThunk } from './store/modules/products/thunks'

// ------------------------
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    buscaDados().then((response) => dispatch(adicionarProdutoThunk(response)))
  }, [])

  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter onExitComplete>
        <Routes />
      </AnimatePresence>
    </div>
  )
}

export default App
