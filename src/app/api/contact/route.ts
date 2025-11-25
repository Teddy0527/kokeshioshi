import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, inquiryType, products = [], budget, usage, deadline, message } = data;

  if (!name || !email || !inquiryType) {
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

  const inquiryTypeLabels: Record<string, string> = {
    purchase: '購入希望',
    partner: 'パートナー募集について',
    corporate: '企業からのお問い合わせ',
    other: 'その他'
  };

  const inquiryTypeLabel = inquiryTypeLabels[inquiryType] || inquiryType;

  let text = `お名前: ${name}
メール: ${email}
お問い合わせ種別: ${inquiryTypeLabel}
`;

  if (inquiryType === 'purchase') {
    const productList = Array.isArray(products) ? products.join(', ') : String(products ?? '未選択');
    text += `商品: ${productList}
予算: ${budget ?? '未入力'}
用途: ${usage ?? '未入力'}
希望納期: ${deadline ?? '未入力'}
`;
  }

  text += `メッセージ: ${message ?? ''}`;

  try {
    await transporter.sendMail({
      from: `${name} <${smtpUser}>`,
      replyTo: email,
      to,
      subject: `推しこけし【${inquiryTypeLabel}】${name}`,
      text
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] send error', error);
    const errorMessage = error instanceof Error ? error.message : '送信中にエラーが発生しました。';
    return NextResponse.json({
      error: '送信中にエラーが発生しました。',
      details: errorMessage
    }, { status: 500 });
  }
}
