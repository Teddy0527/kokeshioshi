import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import { ProductDetailContent } from '@/components/product-detail-content';

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
