import Link from 'next/link';
import type { Product } from '@/data/products';

const accentMap = {
  oshikokeshi: 'from-accent-oshikokeshi/30 to-sand-dark/20',
  shachokokeshi: 'from-accent-shachokokeshi/25 to-sand-dark/20',
  ochokokeshi: 'from-accent-story/30 to-sand-dark/20'
} as const;

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col washi-card kinpaku-accent rounded-soft p-12 transition-all duration-1000">
      <div className={`mb-12 rounded-soft bg-gradient-to-br ${accentMap[product.accent]} p-10 transition-all duration-700 group-hover:shadow-kinpaku`}>
        <img src={product.heroImage} alt={product.name} className="mx-auto h-56 w-auto opacity-92 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
      </div>
      <div className="flex-1 space-y-5">
        <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">{product.category}</p>
        <h3 className="font-serif text-2xl font-light tracking-wide-jp leading-relaxed-jp text-sumi">{product.name}</h3>
        <p className="preserve-newlines text-sm font-light leading-loose-jp text-ink">{product.tagline}</p>
        <p className="border-t border-kinpaku/10 pt-4 text-sm font-light tracking-wide-jp text-kinpaku-aged">{product.priceRange}</p>
      </div>
      <Link
        href={`/products/${product.slug}`}
        className="minimal-button mt-8 inline-flex items-center gap-2 text-ink-soft hover:text-sumi"
      >
        詳細を見る →
      </Link>
    </article>
  );
}
