import { ADICIONAR_PRODUTO, REMOVER_PRODUTO } from './actionsType'

// -----------------------------

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADICIONAR_PRODUTO:
      return action.listaProdutos

    case REMOVER_PRODUTO:
      return action.listaProdutos

    default:
      return state
  }
}

export default productsReducer
