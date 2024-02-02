// produtoController.js
import connectToDatabase from '../databases/database.js';

const produtoController = async (req, res) => {
    try {
        // Conecta ao banco de dados
        const connection = await connectToDatabase();

        // Realiza a consulta
        const [selecionaProdutos] = await connection.query('SELECT * FROM produtos');

        // Fecha a conexão
        connection.release();

        // Envia a resposta para o cliente
        res.json({ produtos: selecionaProdutos });
    } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error.message);
        res.status(500).json({ error: `Erro interno do servidor ${error}` });
    }
};

export default produtoController;
