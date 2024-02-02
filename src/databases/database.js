const mysql = require('mysql2/promise');
require('dotenv').config();

async function connectToDatabase() {

    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
    };

    try {

        const connection = await mysql.createConnection(dbConfig);

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`);
        console.log('Banco de dados criado ou já existente.');


        await connection.end();


        const pool = mysql.createPool({
            ...dbConfig,
            database: process.env.DB_DATABASE,
        });


        const mainConnection = await pool.getConnection();

        console.log('MySQL conectado');

        return mainConnection;
    } catch (error) {
        console.error('Erro na conexão com o banco de dados MySQL:', error.message);
        throw error;
    }
}

module.exports = connectToDatabase;
