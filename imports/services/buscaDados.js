import axios from 'axios'

export const buscaDados = async () => {
  const response = await axios.get('https://ecomm-products.modus.workers.dev')
  const data = await response.data

  return data
}
