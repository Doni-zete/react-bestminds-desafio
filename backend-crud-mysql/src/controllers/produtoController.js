import { connectToDatabase } from '../databases/database.js';
 const selectProdutoController = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [selecionaProdutos] = await connection.query('SELECT * FROM produtos');
        connection.release();

        res.json({ produtos: selecionaProdutos });
        
    } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error.message);
        res.status(500).json({ error: `Erro interno do servidor ${error}` });
    }
};

const produtoController = { selectProdutoController }

export default produtoController