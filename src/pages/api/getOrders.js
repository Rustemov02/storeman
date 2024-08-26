import mysql from 'mysql2/promise'


export default async function handler(req, res) {


    if (req.method === 'GET') {
        try {
            const connection = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1008',
                database: 'user_data'
            })

            const [rows] = await connection.execute('SELECT * FROM orders')
            await connection.end()
            res.status(200).json(rows)
        } catch (error) {
            console.error('Database connected error' , error);
            res.status(500).json({message : 'Database error',error : error.message});
        }
    }else {
        res.status(405).json({message : 'Method not alloweed !'})
    }

}