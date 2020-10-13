import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type BodyType = {
  name: string,
  phone: string,
  email: string,
  comments: string,
}

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
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'mariane15@ethereal.email',
      pass: 'MyVGvSTWX2mK39z63v'
    }
  })

  transporter.sendMail({
    from: 'bot@morewine.ar',
    to: 'info@morewine.ar',
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
    res.status(500).json({
      status: 500,
      error,
    })
  })
}