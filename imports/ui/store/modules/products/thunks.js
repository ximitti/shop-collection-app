import { adicionarProduto } from './actions'

// --------------------------------

export const adicionarProdutoThunk = (lista) => {
  return (dispatch) => {
    dispatch(adicionarProduto(lista))
  }
}
