import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type BodyType = {
  name: string,
  phone: string,
  email: string,
  comments: string,
}

const { EMAIL_USER, EMAIL_PASS } = process.env

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(404).end('')
  if (!req.body) return res.status(500).json({
    error: 'Invalid request'
  })

  const { name, phone, email, comments }: BodyType = req.body

  if (name.length < 0 || email.length < 0) return res.status(500).json({
    error: 'Invalid request'
  })

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  transporter.sendMail({
    from: 'bot@morewine.ar',
    to: 'morewine.ar@gmail.com',
    subject: 'Email de contacto',
    text: `
      Nombre y apellido:  ${name}
      Teléfono:           ${phone || '---'}
      Email:              ${email}
      Comentarios:        ${comments || '---'}
    `,
  }).then(() => {
    res.status(200).json({
      status: 200,
    })
  })
    .catch((error) => {
      console.error(error)
      res.status(500).json({
        status: 500,
        error,
      })
    })
}