import { ADICIONAR_PRODUTO } from './actionsType'

// -----------------------------------------

export const adicionarProduto = (listaProdutos) => {
  return { type: ADICIONAR_PRODUTO, listaProdutos }
}
