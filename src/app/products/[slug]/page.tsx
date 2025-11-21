import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'プロダクト | こけし推し',
      description: 'こけし推しのプロダクト'
    };
  }
  return {
    title: `${product.name} | こけし推し`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:py-24">
      <Link href="/products" className="text-sm tracking-wide-jp text-ink-light transition-colors duration-300 hover:text-ink">← プロダクト一覧へ戻る</Link>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-wide-jp text-ink-light">{product.category}</p>
          <h1 className="luxury-heading font-serif text-4xl md:text-5xl">{product.name}</h1>
          <p className="preserve-newlines text-sm leading-loose-jp text-ink-soft">{product.tagline}</p>
          <p className="preserve-newlines text-sm leading-loose-jp text-ink-soft">{product.description}</p>
          <p className="pt-4 text-sm tracking-wide-jp text-ink-light">価格帯：{product.priceRange}</p>
        </div>
        <div className="washi-card rounded-soft border sumi-border-light p-10 text-center">
          <Image src={product.heroImage} alt={product.name} width={360} height={360} className="mx-auto" />
        </div>
      </div>

      <section className="washi-card grid gap-8 rounded-soft border sumi-border-light p-10 md:grid-cols-2 md:gap-12 md:p-12">
        <dl className="space-y-5 text-sm text-ink-soft">
          <div>
            <dt className="tracking-wide-jp text-ink">サイズ</dt>
            <dd className="mt-2 leading-loose-jp">{product.size}</dd>
          </div>
          <div>
            <dt className="tracking-wide-jp text-ink">素材</dt>
            <dd className="mt-2 leading-loose-jp">{product.material}</dd>
          </div>
          <div>
            <dt className="tracking-wide-jp text-ink">製造地 / 作り手</dt>
            <dd className="mt-2 leading-loose-jp">{product.origin}</dd>
          </div>
          <div>
            <dt className="tracking-wide-jp text-ink">カスタマイズ</dt>
            <dd className="mt-2 leading-loose-jp">{product.customization}</dd>
          </div>
        </dl>
        <div className="space-y-6 text-sm text-ink-soft">
          <div>
            <h2 className="font-serif text-xl tracking-relaxed-jp text-ink">利用シーン</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-loose-jp">
              {product.useScenes.map((scene) => (
                <li key={scene}>{scene}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs tracking-wide-jp text-ink-light">納期目安：{product.leadTime}</p>
          <Link
            href={`/contact?product=${product.name}`}
            className="mt-4 inline-flex items-center justify-center rounded-subtle border sumi-border bg-sumi px-8 py-4 text-sm tracking-wide-jp text-sand-light shadow-washi transition-all duration-300 hover:bg-ink-soft hover:shadow-washi_hover"
          >
            この商品について問い合わせる
          </Link>
        </div>
      </section>
    </div>
  );
}
