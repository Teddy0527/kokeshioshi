import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';

const accentMap = {
  oshikokeshi: 'from-accent-oshikokeshi/30 to-sand-dark/20',
  shachokokeshi: 'from-accent-shachokokeshi/25 to-sand-dark/20',
  ochokokeshi: 'from-accent-story/30 to-sand-dark/20'
} as const;

export function ProductCard({ product }: { product: Product }) {
  const normalizedSrc = product.heroImage.split('?')[0];
  const isPhoto =
    normalizedSrc.endsWith('.jpg') ||
    normalizedSrc.endsWith('.jpeg') ||
    normalizedSrc.endsWith('.png') ||
    normalizedSrc.endsWith('.webp');

  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      <article className="group flex h-full flex-col washi-card rounded-soft p-8 transition-all duration-1000 hover:shadow-washi_hover">
        <div className="mb-8 overflow-hidden rounded-soft transition-all duration-700">
          {isPhoto ? (
            <div className="relative aspect-square w-full">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-contain opacity-95 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ) : (
            <img src={product.heroImage} alt={product.name} className="aspect-square w-full object-contain opacity-95 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
          )}
        </div>
        <div className="flex-1 space-y-5">
          <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">{product.category}</p>
          <h3 className="font-serif text-2xl font-light tracking-wide-jp leading-relaxed-jp text-sumi">{product.name}</h3>
          <p className="preserve-newlines text-sm font-light leading-loose-jp text-ink">{product.tagline}</p>
        </div>
        <div className="minimal-button mt-8 inline-flex items-center gap-2 text-ink-soft group-hover:text-sumi">
          詳細を見る →
        </div>
      </article>
    </Link>
  );
}
