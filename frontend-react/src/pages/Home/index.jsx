import React, { useState } from 'react'
import ProdutoCamisaGola from '../../componets/ProdutoCamisaGola'
import ProdutoBermuda from '../../componets/ProdutoBermuda'
import Footer from './../../componets/Footer'


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
      categoriaTab === 'Camisa'
       ? 'active-menu-tab bg-primary'
       : 'menu-tab'
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
   </div>
   {categoriaTab === 'Camisa' && <ProdutoCamisaGola />}
   {categoriaTab === 'Bermuda' && <ProdutoBermuda />}

   <Footer />
  </>
 )
}

export default Home
