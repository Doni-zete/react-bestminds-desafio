const express = require('express')
const app = express()

port = 5000

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a nossa loja ",
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
