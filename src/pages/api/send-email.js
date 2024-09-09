import nodemailer from 'nodemailer'
import { useState } from 'react'

export default async function handler(req, res) {


    if (req.method === 'POST') {
        const { option, message, date } = req.body

        // const formattedQuantities = Object.entries(quantities)
        // .map(([product , quantity]) => `${product} : ${quantity}`)
        // .join('\n')



        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rustmovbunyamin@gmail.com',
                pass: 'Bunyami02r'
            }
        })




        try {
            const mailOptions = {
                from: 'rustmovbunyamin@gmail.com',
                to: 'Bunyamin02r',
                subject: 'Title test !',
                text: `Date : ${date} \nOption : ${option}\nNotes : ${message}`
            }

            await transporter.sendMail(mailOptions)
            res.status(200).json({ message: 'Email sent successfully !' })
        } catch (error) {
            res.status(500).json({ error: 'Erros sending email', details: error.message })
        }
    } else {
        console.log(quantities)
        res.status(405).json({ message: 'Only POST requests are allowed !' })
    }
}