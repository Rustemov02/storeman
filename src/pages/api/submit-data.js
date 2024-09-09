import mysql from 'mysql2/promise'




export default async function handler(req, res) {

    const host = process.env.NEXT_PUBLIC_DB_HOST;
    const user = process.env.NEXT_PUBLIC_DB_USER;
    const password = process.env.NEXT_PUBLIC_DB_PASSWORD;
    const database = process.env.NEXT_PUBLIC_DB_NAME;

    if (req.method === 'POST') {
        const { option, quantities, message } = req.body

        res.status(200).json({ message: "Data received succesfully" })

        try {
            const connection = await mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            })

            // Join all of products 
            const products = Object.entries(quantities).map(([productName, quantity]) => {
                return `${productName} : ${quantity}`
            }).join(', ')

            console.log('Formatted products :' + products)

            // for (const [productName, quantity] of Object.entries(quantities)) {
            const [result] = await connection.execute(
                'INSERT INTO orders (`option`,`products`,`message`) VALUES (? , ? , ?)',
                [option, products, message]
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
