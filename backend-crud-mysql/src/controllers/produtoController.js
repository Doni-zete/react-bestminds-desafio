import { connectToDatabase } from '../databases/database.js'
const selectProdutoController = async (req, res) => {
    try {
        const connection = await connectToDatabase()
        const [selecionaProdutos] = await connection.query('SELECT * FROM produtos')
        connection.release()

        res.json({ produtos: selecionaProdutos })
    } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error.message)
        res.status(500).json({ error: `Erro interno do servidor ${error}` })
    }
}

const deleteProdutoController = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const produtoId = req.params.id;

        const [produtoExist] = await connection.query('SELECT 1 FROM produtos WHERE id = ?', [produtoId]);

        if (!produtoExist.length) {

            connection.release();
            return res.status(404).json({ message: `Produto com ID ${produtoId} não encontrado` });
        }

        await connection.query('DELETE FROM produtos WHERE id = ?', [produtoId]);

        connection.release();
        return res.json({ message: `Produto com ID ${produtoId} excluído com sucesso` });
    } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error.message);
        res.status(500).json({ error: `Erro interno do servidor ${error}` });
    }
};



const produtoController = { selectProdutoController, deleteProdutoController }

export default produtoController
