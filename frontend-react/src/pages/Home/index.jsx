import React, { useState } from 'react'

import ProdutoBermuda from '../../components/ProdutoBermuda'
import ProdutoListaEsportivo from '../../components/ProdutoListaEsportivo'
import Footer from './../../components/Footer'
import ProdutoListaCamisa from '../../components/ProdutoListaCamisa'

const Home = () => {
 const [categoriaTab, setCategoriaTab] = useState('Camisa')

 const handleCategoriaChange = (categoria) => {
  setCategoriaTab(categoria)
 }

 const handleTabClick = (categoria, event) => {
  event.preventDefault()
  handleCategoriaChange(categoria)
 }

 return (
  <>
   <section className="header-banner flex justify-center items-center h-screen">
    <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-red-400 -mt-32 md:-mt-48 lg:-mt-60 text-center">
     Conjunto Sportswear de Treino Masculino!
    </h1>
   </section>
   <div></div>
   <div className="flex items-center justify-center space-x-6 py-12">
    <p
     className={
      categoriaTab === 'Camisa' ? 'active-menu-tab bg-primary' : 'menu-tab'
     }
     onClick={(e) => handleTabClick('Camisa', e)}
    >
     Camisa
    </p>
    <p
     className={
      categoriaTab === 'Bermuda' ? 'active-menu-tab bg-primary' : 'menu-tab'
     }
     onClick={(e) => handleTabClick('Bermuda', e)}
    >
     Bermuda
    </p>
    <p
     className={
      categoriaTab === 'Produtos Esportivos'
       ? 'active-menu-tab bg-primary'
       : 'menu-tab'
     }
     onClick={(e) => handleTabClick('Produtos Esportivos', e)}
    >
     Produtos Esportivos
    </p>
   </div>
   {categoriaTab === 'Camisa' && <ProdutoListaCamisa />}
   {categoriaTab === 'Bermuda' && <ProdutoBermuda />}
   {categoriaTab === 'Produtos Esportivos' && <ProdutoListaEsportivo />}

   <Footer />
  </>
 )
}

export default Home
