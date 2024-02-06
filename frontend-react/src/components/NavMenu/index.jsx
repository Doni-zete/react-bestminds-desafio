import React, { useState } from 'react'
import bolaLogo from '../../assets/bola1.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'

const NavMenu = () => {
 const navigate = useNavigate()
 const [cartItemCount] = useState(0)
 const [activeButtonAdmin, setActiveButtonAdmin] = useState('admin')

 return (
  <header className="bg-transparent z-50 w-full bg-nav py-1 text-center text-white">
   <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
    <div className="flex items-center w-full md:w-auto">
     <img
      onClick={() => navigate('/')}
      src={bolaLogo}
      alt="Logo"
      className="w-20 cursor-pointer"
     />
     <h1 className="text-center text-3xl font-semibold text-white-700 ml-2 md:ml-0">
      Nunes Sport
     </h1>
    </div>

    <div className="flex items-center ml-auto space-x-4 mt-3 md:mt-0">
     <div className="relative flex cursor-pointer">
      <span className="bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2">
       {cartItemCount}
      </span>

      <Link
       to="/cart"
       className="bg-primary px-4 py-2 text-white rounded-full transition duration-700 hover:scale-105"
      >
       <BsCart className="w-6 h-6 cursor-pointer text-white" />
      </Link>
     </div>

     <img src="" alt="" />
     <p className="text-3xl font-semibold text-white-700 ml-2 md:ml-0 hidden md:block"></p>
     <button
      onClick={() => {
       navigate('/admin')
       setActiveButtonAdmin('admin')
      }}
      className={`bg-primary px-4 py-2 text-white rounded-full transition duration-700 hover:scale-105 ${
       activeButtonAdmin === 'admin'
        ? 'border border-white bg-white text-gray-700 rounded-md'
        : ''
      } hidden md:inline-block`}
     >
      Admin
     </button>
     <button
      onClick={() => {
       navigate('/sobre')
       setActiveButtonAdmin('sobre')
      }}
      className={`bg-primary px-4 py-2 text-white rounded-full transition duration-700 hover:scale-105 ${
       activeButtonAdmin === 'sobre'
        ? 'border border-white bg-white text-gray-700 rounded-md'
        : ''
      } hidden md:inline-block`}
     >
      Sobre
     </button>
    </div>
   </nav>
  </header>
 )
}

export default NavMenu
