import type { Metadata } from 'next';
import { ProductsGallery } from '@/components/products-gallery';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'プロダクト | こけし推し',
  description: '推しこけし、社長こけし、おちょこけし。伝統と挑戦を形にした、こけし推しのプロダクトラインナップ。'
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-24 px-6 py-16 md:py-24">
      <div className="space-y-8 text-center">
        <SectionHeading
          eyebrow="Products"
          title="プロダクトラインナップ"
        />
        <p className="mx-auto max-w-2xl text-sm leading-loose-jp tracking-wide-jp text-ink-soft">
          伝統こけしの技法を受け継ぎながら、<br className="hidden md:inline" />
          現代の挑戦を静かに後押しする、新しいこけしのかたち。
        </p>
      </div>

      <ProductsGallery />
    </div>
  );
}
