import { ADICIONAR_PRODUTO, REMOVER_PRODUTO } from './actionsType'

// -----------------------------------------

export const adicionarProduto = (listaProdutos) => {
  return { type: ADICIONAR_PRODUTO, listaProdutos }
}

export const removerProduto = (listaProdutos) => {
  return { type: REMOVER_PRODUTO, listaProdutos }
}
