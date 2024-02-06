import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './../../components/Footer'
import { addProdutoEsportivoAPI } from '../../services/produtoEsportivoService'
import Modal from '../../components/ModalSucesso'

const AddProduto = () => {
 const [productForm, setProductForm] = useState({
  nome: '',
  descricao: '',
  preco: 0,
  imagem: '',
  codigo: 0,
  isProdutoEsportivo: false,
 })

 const [showModal, setShowModal] = useState(false)
 const [successMessage, setSuccessMessage] = useState('')
 const navigate = useNavigate()

 const handleChangeValues = (evento) => {
  setProductForm({
   ...productForm,
   [evento.target.name]: evento.target.value,
  })
 }

 const handleSubmit = async (evento) => {
  evento.preventDefault()

  const isProdutoEsportivo = productForm.isProdutoEsportivo
  const product = {
   ...productForm,
   preco: parseFloat(productForm.preco),
  }

  if (isProdutoEsportivo) {
   try {
    const response = await addProdutoEsportivoAPI(product)
    console.log(response)

    if (response.data && response.data.nome) {
     setSuccessMessage(`Produto ${response.data.nome} cadastrado com sucesso !`)
     setShowModal(true)
    } else {
     setSuccessMessage('Produto cadastrado com sucesso !')
     setShowModal(true)
    }
   } catch (error) {
    console.error('Erro ao cadastrar o produto:', error)
   }
  }
 }

 const handleModalClose = () => {
  setShowModal(false)
  navigate('/admin')
 }

 return (
  <>
   <Modal
    isOpen={showModal}
    onClose={handleModalClose}
    title="Sucesso!"
    message={successMessage}
    showButtons={true}
   />

   <section className="my-12 max-w-screen-xl mx-auto px-6">
    <div className="flex flex-col space-y-2">
     <h1 className="text-2xl text-gray-600">Cadastro de Produtos</h1>
    </div>
    <form
     onSubmit={handleSubmit}
     className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6"
    >
     <div className="flex flex-col space-y-4">
      <label htmlFor="nome" className="text-gray-500">
       Nome
      </label>
      <input
       type="text"
       id="nome"
       name="nome"
       required
       onChange={handleChangeValues}
       className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
      />

      <label htmlFor="descricao" className="text-gray-500">
       Descrição
      </label>
      <textarea
       name="descricao"
       id="descricao"
       cols="30"
       rows="5"
       onChange={handleChangeValues}
       className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
       required
      ></textarea>

      <label htmlFor="codigo" className="text-gray-500">
       Código de barras
      </label>
      <input
       type="text"
       id="codigo"
       name="codigo"
       onChange={handleChangeValues}
       required
       className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
      />
     </div>

     <div className="flex flex-col space-y-4">
      <label htmlFor="preco" className="text-gray-500">
       Preco
      </label>
      <input
       type="text"
       id="preco"
       name="preco"
       onChange={handleChangeValues}
       required
       className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
      />
      <label htmlFor="imagem" className="text-gray-500">
       Imagem
      </label>
      <input
       type="text"
       id="imagem"
       onChange={handleChangeValues}
       name="imagem"
       required
       className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
      />

      <div className="flex items-center">
       <input
        type="checkbox"
        id="isProdutoEsportivo"
        name="isProdutoEsportivo"
        required
        onChange={(evento) =>
         setProductForm({
          ...productForm,
          isProdutoEsportivo: evento.target.checked,
         })
        }
        className="ring-red-200 focus:ring-4 focus:outline-none transition duration-300 mr-2"
       />
       <label htmlFor="isProdutoEsportivo" className="text-gray-500">
        É um Produto Esportivo?
       </label>
      </div>
     </div>
     <button
      type="submit"
      className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300"
     >
      Adicionar
     </button>
    </form>
   </section>
   <Footer />
  </>
 )
}

export default AddProduto
