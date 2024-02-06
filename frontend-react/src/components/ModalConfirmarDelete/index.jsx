import React from 'react'

const ModalConfirmarDelete = ({ isOpen, title, message, onOk, onCancel }) => {
 return (
  <>
   {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
     <div className="bg-white p-6 rounded-md shadow-lg">
      <p className="text-gray-800 text-lg font-semibold mb-4">{title}</p>
      <p className="text-gray-700 mb-6">{message}</p>
      <div className="flex justify-end">
       <button
        onClick={onOk}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4"
       >
        Ok
       </button>
       <button
        onClick={onCancel}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
       >
        Cancelar
       </button>
      </div>
     </div>
    </div>
   )}
  </>
 )
}

export default ModalConfirmarDelete
