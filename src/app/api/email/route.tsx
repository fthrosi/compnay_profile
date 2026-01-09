import { Resend } from 'resend';
import { EmailRequestBody } from '@/types/email.types';
import { NextRequest,NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json() as EmailRequestBody;

    const data = await resend.emails.send({
      from: 'Talenta Digis <info@talentadigis.com>', // Nanti bisa ganti pakai domain kamu
      to: ['talentadigis@gmail.com'], // Ganti dengan email tujuan
      subject: 'Pesan Baru dari Website',
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No HP:</strong> ${phone}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}