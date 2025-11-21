import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="text-xs uppercase tracking-wide-jp text-ink-light">404</p>
      <h1 className="luxury-heading font-serif text-4xl md:text-5xl">お探しのページが見つかりませんでした。</h1>
      <p className="text-sm leading-loose-jp text-ink-soft">URLが正しいかご確認いただくか、トップページへお戻りください。</p>
      <Link href="/" className="rounded-subtle border sumi-border bg-sumi px-8 py-4 text-sm tracking-wide-jp text-sand-light shadow-washi transition-all duration-300 hover:bg-ink-soft hover:shadow-washi_hover">
        トップへ戻る
      </Link>
    </div>
  );
}
