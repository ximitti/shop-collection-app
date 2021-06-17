import { adicionarProduto, removerProduto } from './actions'

// --------------------------------

export const adicionarProdutoThunk = (lista) => {
  return (dispatch) => {
    console.log('passou pelo thunks')

    dispatch(adicionarProduto(lista))
  }
}

export const removerProdutoThunk = () => {
  return (dispatch) => {
    const lista = []
    dispatch(removerProduto(lista))
  }
}
