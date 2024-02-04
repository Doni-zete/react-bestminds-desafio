import React, { useState, useEffect } from 'react'
import ProdutosEsportivos from '../../components/ProdutosEsportivos'
import { findAllProducts } from '../../services/produtoCamisaService'

const ProdutoListaEsportivo = () => {
 const [categoriaTab, setCategoriaTab] = useState('Produto')
 const [products, setProducts] = useState([])

 useEffect(() => {
  getAllProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [categoriaTab])
 const getAllProducts = async () => {
  try {
   const response = await findAllProducts(categoriaTab)

   if (Array.isArray(response.data.produtos)) {
    setProducts(response.data.produtos)
   } else {
    console.error(
     'O servidor não retornou um array de produtos:',
     response.data
    )
    setProducts([])
   }
  } catch (error) {
   setProducts([])
  }
 }

 return (
  <section className="my-12 max-w-screen-xl mx-auto px-3">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
    {products.map((product) => (
     <ProdutosEsportivos key={product._id} product={product} />
    ))}
   </div>
  </section>
 )
}

export default ProdutoListaEsportivo
