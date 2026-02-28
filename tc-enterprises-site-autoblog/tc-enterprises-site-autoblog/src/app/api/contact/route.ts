import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    // Accept either application/json or form-data from the client
    let name = ''
    let email = ''
    let message = ''
    let company = ''
    let projectType = ''
    let budget = ''
    let timeline = ''
    let honeypot = '' // actual honeypot field
    let ts = 0

    const contentType = (req.headers.get('content-type') || '').toLowerCase()
    if (contentType.includes('application/json')) {
      const body = await req.json().catch(() => ({})) as any
      name = (body.name || '').toString().trim()
      email = (body.email || '').toString().trim()
      message = (body.message || '').toString().trim()
      company = (body.company || '').toString().trim()
      projectType = (body.projectType || '').toString().trim()
      budget = (body.budget || '').toString().trim()
      timeline = (body.timeline || '').toString().trim()
      honeypot = body.honeypot || ''
      ts = Number(body.ts || 0)
    } else {
      const form = await req.formData()
      name = String(form.get('name') || '').trim()
      email = String(form.get('email') || '').trim()
      message = String(form.get('message') || '').trim()
      company = String(form.get('company') || '').trim()
      projectType = String(form.get('projectType') || '').trim()
      budget = String(form.get('budget') || '').trim()
      timeline = String(form.get('timeline') || '').trim()
      honeypot = String(form.get('honeypot') || '')
      ts = Number(form.get('ts') || 0)
    }

    // Honeypot & time-to-submit
    if (honeypot) return NextResponse.json({ ok: true }) // silently pretend success

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields.' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO || 'contact@tc-enterprises.com'
    const from = process.env.RESEND_FROM || 'noreply@tc-enterprises.com'

    await resend.emails.send({
      to,
      from,
      subject: `Website Contact: ${name} - ${projectType || 'General Inquiry'}`,
      replyTo: email,
      text: `From: ${name} <${email}>
Company: ${company}
Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}`,
      html: `
<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Project Type:</strong> ${projectType}</p>
<p><strong>Budget:</strong> ${budget}</p>
<p><strong>Timeline:</strong> ${timeline}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g,'<br/>')}</p>
`
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'Email failed.' }, { status: 500 })
  }
}
