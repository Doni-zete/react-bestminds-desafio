import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../../componets/Footer'

const Admin = () => {
 const [products] = useState([])
 const navigate = useNavigate()

 return (
  <>
   <section className="my-12 max-w-screen-xl mx-auto px-6">
    <div className="sticky bottom-7 right-0">
 
     <button
      onClick={() => navigate('/admin/add-product')}
      className="w-30 px-1 sm:rounded-lg py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 rounded-lg transition duration-300 poppins"
      style={{
       
       marginLeft: '70px',
      }}
     >
      Adicionar Produto
     </button>
    </div>
    <div className="sticky bottom-7 right-0"></div>
    <div className="flex flex-col my-8">
     <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
       <div className="overflow-hidden sm:rounded-lg shadow-md">
        <table className="min-w-full">
         <thead className="bg-primary">
          <tr>
           <th
            scope="col"
            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
           >
            Imagem
           </th>
           <th
            scope="col"
            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
           >
            Nome
           </th>
           <th
            scope="col"
            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
           >
            Preco
           </th>
           <th
            scope="col"
            className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
           >
            Código de Barras
           </th>
           <th scope="col" className="relative px-6 py-3">
            <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
             Ações
            </span>
           </th>
          </tr>
         </thead>
         <tbody>
          {products.map((product) => (
           <tr key={product._id} className="bg-white border-b">
            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
             <img
              className="w-1/2 transition duration-700 hover:scale-105"
              src={product.imagem}
              alt={product.nome}
             />
            </td>
            <td className="px-12 py-4 whitespace-nowrap text-xl text-gray-700 font-medium">
             {product.nome}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-xl  text-gray-700 font-medium">
             {product.precoUnitario}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-700 font-medium">
             {product.codigoBarra}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
             <div className="flex items-center justify-center space-x-3">
              <Link to={`/admin/edit-product/${product._id}`}>
               <FaEdit className="cursor-pointer text-2xl text-blue-400" />
              </Link>
              <MdDelete
               
               className="cursor-pointer w-20 text-2xl text-red-600"
              />
             </div>
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </div>
   </section>

   <Footer />
  </>
 )
}

export default Admin
