import type { Metadata } from 'next';
import { ProductsGallery } from '@/components/products-gallery';

export const metadata: Metadata = {
  title: 'Products | こけし推しのプロダクト',
  description: '推しこけし・社長こけしなど、カテゴリ別のラインナップをご紹介します。'
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16 md:py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">Products</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">プロダクト一覧</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">カテゴリを切り替えると、シーンに合わせたこけしをご覧いただけます。</p>
      </header>
      <ProductsGallery />
    </div>
  );
}
