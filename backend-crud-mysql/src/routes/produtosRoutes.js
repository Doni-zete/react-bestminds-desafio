import express from 'express'
import produtoController from '../controllers/produtoController.js'

const router = express.Router()

router.delete('/produtos/:id', produtoController.deleteProdutoController)
router.get('/produtos', produtoController.selectProdutoController)
router.put('/produtos/:id', produtoController.updateProdutoController)
router.post('/produtos/', produtoController.createProdutoController)

export default router
