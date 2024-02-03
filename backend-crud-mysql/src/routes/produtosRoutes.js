// produtosRoutes.js
import express from 'express';
import produtoController from '../controllers/produtoController.js';

const router = express.Router();


router.delete('/produtos/:id', produtoController.deleteProdutoController)
router.get('/produtos', produtoController.selectProdutoController);


export default router;
