import mysql from 'mysql2/promise'


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { option, quantities, message, date } = req.body


        res.status(200).json({ message: "Data received succesfully" })

        try {
            const connection = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1008',
                database: 'user_data'
            })

            // Join all of products 
            const products = Object.entries(quantities).map(([productName, quantity]) => {
                return `${productName} : ${quantity}`
            }).join(', ')

            console.log('Formatted products :' + products)

            // for (const [productName, quantity] of Object.entries(quantities)) {
            const [result] = await connection.execute(
                'INSERT INTO orders (`date`,`option`,`products`,`message`) VALUES (? , ? , ? , ?)',
                [date, option, products, message]
            );
            // }


            await connection.end();
            // res.status(200).json({ message: 'User added successfully', id: result.insertId })


        } catch (error) {
            console.error('Database connection error', error)
            res.status(500).json({ message: 'Database error', error: error.message })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed !' })
    }
} 
