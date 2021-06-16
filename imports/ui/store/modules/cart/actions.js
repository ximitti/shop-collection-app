import { ADICIONAR_PRODUTO, REMOVER_PRODUTO } from './actionsType'

// -----------------------------------------

export const adicionarCart = (listaProdutos) => {
  return { type: ADICIONAR_PRODUTO, listaProdutos }
}

export const removerCart = (listaProdutos) => {
  return { type: REMOVER_PRODUTO, listaProdutos }
}
