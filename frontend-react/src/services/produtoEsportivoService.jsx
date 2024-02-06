import api from './api'

const addProdutoEsportivoAPI = (product) =>
 api
  .post('/produto/create', product)
  .then((response) => response)
  .catch((err) => err)

const findAllProducts = () =>
 api
  .get('/produto/findAll')
  .then((response) => response)
  .catch((err) => err)

const findProductById = (id) =>
 api
  .get(`/produto/find/${id}`)
  .then((response) => response)
  .catch((err) => err)

const updateProductById = async (id, productEdit) => {
 console.log('Dados para atualização:', id, productEdit)

 try {
  const response = await api.put(`/produto/update/${id}`, productEdit)
  console.log('Response:', response)
  return response.data
 } catch (error) {
  console.error('Error updating product:', error)
  throw error
 }
}

const deleteProduct = (id) =>
 api
  .delete(`/produto/delete/${id}`)
  .then((response) => response)
  .catch((err) => err)

const findAllProductsByCategory = async (categoria) => {
 try {

  const response = await findAllProducts()

  const produtosFiltrados = response.data.filter(
   (produto) => produto.categoria === categoria
  )

  return produtosFiltrados
 } catch (error) {
  throw error
 }
}

export {
 addProdutoEsportivoAPI,
 findAllProducts,
 findProductById,
 updateProductById,
 deleteProduct,
 findAllProductsByCategory,
}
