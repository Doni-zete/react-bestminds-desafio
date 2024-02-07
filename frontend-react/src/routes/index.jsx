import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavMenu from '../components/NavMenu'
import Admin from '../pages/Admin'
import Sobre from '../pages/Sobre'
import AddProduto from '../pages/AddProduto'
import EditeProduto from '../pages/EditeProduto'
import ProdutoListaEsportivo from '../components/ProdutoListaEsportivo'
import NotFound from '../components/NotFound'

export default function Rotas() {
 return (
  <BrowserRouter>
   <NavMenu />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route
     path="/produto-lista-esportivo"
     element={<ProdutoListaEsportivo />}
    />
    <Route path="/admin/add-product" element={<AddProduto />} />
    <Route path="/admin/edit-product/:id" element={<EditeProduto />} />
    <Route path="/*" element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 )
}
