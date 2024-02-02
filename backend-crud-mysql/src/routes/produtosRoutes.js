import express from 'express'
import  produtoController  from '../controllers/produtoController.js'

const router = express.Router()

router.get("/", produtoController)

export default router