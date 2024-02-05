import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavMenu from '../components/NavMenu'
import Admin from '../pages/Admin'
import Sobre from '../pages/Sobre'
import AddProduto from '../pages/AddProduto'
import ProdutoListaEsportivo from '../components/ProdutoListaEsportivo'

export default function Rotas() {
 return (
  <BrowserRouter>
   <NavMenu />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/produto-lista-esportivo" element={<ProdutoListaEsportivo />} />
    <Route path="/admin/add-product" element={<AddProduto />} />
   </Routes>
  </BrowserRouter>
 )
}
