import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY_RESEND);

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ["victorcordeiro.devops@gmail.com"],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #007acc; text-align: center; margin-bottom: 20px;">New Message Received</h2>
          <p style="font-size: 16px; margin-bottom: 10px;">You have received a new message from your website contact form:</p>
          <div style="padding: 15px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #fff;">
            <p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 0; font-size: 14px;"><strong>From:</strong> ${email}</p>
            <p style="margin-top: 10px; font-size: 14px;">${message}</p>
          </div>
          <p style="font-size: 14px; margin-top: 20px; text-align: center; color: #666;">This message was sent from your website contact form.</p>
        </div>
      `
    });

    // Retorne a resposta de sucesso
    return NextResponse.json({ success: true });
  } catch (error) {
    // Retorne a resposta de erro
    return NextResponse.json({ status: 500 });
  }
}
