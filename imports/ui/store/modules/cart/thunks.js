import { adicionarCart, removerCart } from './actions'

// --------------------------------

export const adicionarCartThunk = () => {
  return (dispatch) => {
    const lista = []
    dispatch(adicionarCart(lista))
  }
}

export const removerCartThunk = () => {
  return (dispatch) => {
    const lista = []
    dispatch(removerCart(lista))
  }
}
