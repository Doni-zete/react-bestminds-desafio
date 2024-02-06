import React, { useEffect } from 'react'

const ModalSucesso = ({ isOpen, onClose, title, message }) => {
 useEffect(() => {
  let timeoutId
  if (isOpen) {
   timeoutId = setTimeout(() => {
    onClose()
   }, 2000)
  }
  return () => {
   clearTimeout(timeoutId)
  }
 }, [isOpen, onClose])

 return (
  <>
   {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
     <div className="bg-green-100 border-2 border-green-800 p-6 rounded-md shadow-lg">
      <p className="text-green-800 text-center">{title}</p>
      <p className="text-center">{message}</p>
     </div>
    </div>
   )}
  </>
 )
}

export default ModalSucesso
