import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '送信完了 | 推しこけし',
  description: 'お問い合わせありがとうございました。'
};

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-40">
      <div className="washi-card kinpaku-accent rounded-soft px-12 py-20 md:px-20 md:py-32">
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-kinpaku/40 to-transparent" />
            <h1 className="ultra-luxury-text font-serif text-4xl text-sumi-deep md:text-5xl">
              送信完了
            </h1>
            <div className="mx-auto h-px w-20 bg-gradient-to-r from-kinpaku/40 via-kinpaku/20 to-transparent" />
          </div>

          <div className="space-y-6 text-sm font-light leading-loose-jp text-sumi/80 md:text-base">
            <p className="tracking-wide-jp">
              お問い合わせありがとうございました。
            </p>
            <p className="tracking-wide-jp">
              担当よりご連絡いたしますので、
              <br />
              今しばらくお待ちくださいませ。
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link
              href="/"
              className="minimal-button text-sumi"
            >
              トップページへ
            </Link>
            <Link
              href="/about"
              className="minimal-button text-ink-soft hover:text-sumi"
            >
              ブランドストーリーを読む
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
