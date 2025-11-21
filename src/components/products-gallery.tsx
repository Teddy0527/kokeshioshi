'use client';

import { useState } from 'react';
import { productCategories, products } from '@/data/products';
import { ProductCard } from '@/components/product-card';

export function ProductsGallery() {
  const [filter, setFilter] = useState<(typeof productCategories)[number]['value']>('all');
  const filtered = products.filter((product) => filter === 'all' || product.category === filter);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-4">
        {productCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => setFilter(category.value)}
            className={`rounded-subtle border px-6 py-3 text-sm tracking-wide-jp shadow-washi transition-all duration-300 ${filter === category.value ? 'border-sumi bg-sumi text-sand-light shadow-washi_hover' : 'border-ink-light/30 bg-white/95 text-ink-soft hover:border-ink-soft hover:shadow-washi_hover'}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
