import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, products = [], budget, usage, deadline, message } = data;

  if (!name || !email) {
    return NextResponse.json({ error: '必須項目が未入力です。' }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const to = process.env.CONTACT_TO;

  if (!smtpHost || !smtpUser || !smtpPass || !to) {
    return NextResponse.json({ error: 'メール送信設定が未完了です。' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const productList = Array.isArray(products) ? products.join(', ') : String(products ?? '未選択');

  const text = `お名前: ${name}
メール: ${email}
商品: ${productList}
予算: ${budget ?? '未入力'}
用途: ${usage ?? '未入力'}
希望納期: ${deadline ?? '未入力'}
メッセージ: ${message ?? ''}`;

  try {
    await transporter.sendMail({
      from: `${name} <${smtpUser}>`,
      replyTo: email,
      to,
      subject: `こけし推しお問い合わせ: ${name}`,
      text
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] send error', error);
    return NextResponse.json({ error: '送信中にエラーが発生しました。' }, { status: 500 });
  }
}
