import express from 'express'
const app = express()
import { connectToDatabase } from './src/databases/database.js';
import produtoRoute from './src/routes/produtosRoutes.js'

app.use(express.json());
const port = 5000

app.use('/api', produtoRoute)

connectToDatabase()
    .then((connection) => {

        console.log('Conexão com o banco de dados estabelecida')


        app.get('/', (req, res) => {
            res.json({
                message: 'Bem-vindo à nossa loja',
            })
        })

        // Iniciar o servidor Express
        app.listen(port, () => {
            console.log(`Servidor rodando em: http://localhost:${port}`)
        })
    })
    .catch((error) => {
        console.error('Erro na inicialização do servidor:', error)
    })
