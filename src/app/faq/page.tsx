import type { Metadata } from 'next';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ | よくある質問',
  description: '納期・カスタマイズ・配送などのよくある質問をまとめました。'
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">FAQ</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">よくある質問</h1>
      </header>
      <div className="space-y-5">
        {faqItems.map((item) => (
          <details key={item.question} className="group washi-card rounded-soft border sumi-border-light p-8 transition-all duration-300 hover:shadow-washi_hover">
            <summary className="cursor-pointer font-serif text-xl tracking-relaxed-jp text-ink transition-colors duration-300 group-hover:text-wood-dark">
              {item.question}
            </summary>
            <p className="mt-5 text-sm leading-loose-jp text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
