const express = require('express')
const app = express()
const connectToDatabase = require('./src/databases/database')

port = 5000

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
