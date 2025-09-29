import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const name = (form.get('name') as string || '').trim()
    const email = (form.get('email') as string || '').trim()
    const message = (form.get('message') as string || '').trim()
    const company = (form.get('company') as string || '') // honeypot
    const ts = Number(form.get('ts') || 0)

    // Honeypot & time-to-submit
    if (company) return NextResponse.json({ ok: true }) // silently pretend success
    if (!ts || Date.now() - ts < 2000) return NextResponse.json({ ok: false, error: 'Please try again.' }, { status: 400 })

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const to = process.env.CONTACT_TO || process.env.SMTP_USER
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER

    await transporter.sendMail({
      to,
      from,
      subject: `Website Contact: ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>

${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g,'<br/>')}</p>`
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'Email failed.' }, { status: 500 })
  }
}