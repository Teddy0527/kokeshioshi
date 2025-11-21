'use client';

import { ReactNode, useState } from 'react';
import { products } from '@/data/products';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const selected = formData.getAll('products');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, products: selected })
      });

      if (!res.ok) {
        throw new Error('送信に失敗しました');
      }

      setStatus('success');
      setMessage('送信が完了しました。担当よりご連絡いたします。');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : '送信に失敗しました');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2">
        <FormField label="お名前" required>
          <input name="name" required className="input" placeholder="山田 太郎" />
        </FormField>
        <FormField label="メールアドレス" required>
          <input name="email" type="email" required className="input" placeholder="hello@example.com" />
        </FormField>
      </div>
      <FormField label="ご希望の商品（複数選択可）">
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <label key={product.slug} className="flex items-center gap-4 text-sm font-light tracking-wide-jp text-ink-soft transition-all duration-500 hover:text-sumi">
              <input type="checkbox" name="products" value={product.name} className="rounded-subtle border-kinpaku/30 text-kinpaku-dark focus:ring-kinpaku/30" />
              {product.name}
            </label>
          ))}
        </div>
      </FormField>
      <div className="grid gap-8 md:grid-cols-3">
        <FormField label="個数 / 予算感">
          <input name="budget" className="input" placeholder="例：2体 / 10万円" />
        </FormField>
        <FormField label="用途">
          <select name="usage" className="input">
            <option>ご自身用</option>
            <option>ギフト</option>
            <option>法人利用</option>
          </select>
        </FormField>
        <FormField label="希望納期">
          <input name="deadline" className="input" placeholder="例：6月中旬" />
        </FormField>
      </div>
      <FormField label="メッセージ">
        <textarea name="message" rows={6} className="input resize-none" placeholder="用途や背景についてお聞かせください。" />
      </FormField>
      <button
        type="submit"
        className="group relative overflow-hidden rounded-subtle border-2 border-sumi/80 bg-sumi px-12 py-5 text-sm font-light tracking-ultra-wide-jp text-sand-silk shadow-deep transition-all duration-700 hover:border-kinpaku-dark hover:bg-sumi-deep hover:shadow-kinpaku disabled:opacity-50"
        disabled={status === 'loading'}
      >
        <span className="relative z-10">{status === 'loading' ? '送信中...' : '送信する'}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-kinpaku/10 via-kinpaku/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </button>
      {message && (
        <p className={`text-sm font-light leading-loose-jp tracking-wide-jp ${status === 'success' ? 'text-koke' : 'text-accent-oshikokeshi'}`}>{message}</p>
      )}
    </form>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-4 text-sm font-light tracking-wide-jp text-sumi">
      <span className="flex items-center gap-2">
        {label}
        {required && <span className="text-xs text-kinpaku-dark">*</span>}
      </span>
      {children}
    </label>
  );
}
