import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | お問い合わせ',
  description: '購入希望、パートナー募集、企業からのお問い合わせなど、各種ご相談はこちらからお送りください。'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">Contact</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">お問い合わせ</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">
          購入希望、パートナー募集、企業からのお問い合わせなど、お気軽にご連絡ください。
          <br />
          担当より2営業日以内にご返信いたします。
        </p>
      </header>
      <div className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
        <ContactForm />
      </div>
    </div>
  );
}
