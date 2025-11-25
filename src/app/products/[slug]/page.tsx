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
      title: 'プロダクト | 推しこけし',
      description: '推しこけしのプロダクト'
    };
  }
  return {
    title: `${product.name} | 推しこけし`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16 md:py-24">
      <Link href="/products" className="text-sm tracking-wide-jp text-ink-light transition-colors duration-300 hover:text-ink">← プロダクト一覧へ戻る</Link>

      {/* ヘーダー & ヒーロー画像 */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-wide-jp text-ink-light">{product.category}</p>
          <h1 className="luxury-heading font-serif text-4xl md:text-5xl">{product.name}</h1>
          <p className="preserve-newlines text-base leading-loose-jp text-ink-soft">{product.tagline}</p>
          <p className="preserve-newlines text-sm leading-loose-jp text-ink-soft">{product.description}</p>
          <p className="pt-4 text-sm tracking-wide-jp text-ink-light">価格帯：{product.priceRange}</p>
        </div>
        <div className="washi-card rounded-soft border sumi-border-light p-10 text-center">
          <Image src={product.heroImage} alt={product.name} width={400} height={400} className="mx-auto" />
        </div>
      </div>

      {/* コンセプト */}
      {product.concept && (
        <section className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
          <h2 className="mb-6 font-serif text-2xl tracking-wide-jp text-ink">コンセプト</h2>
          <p className="preserve-newlines text-sm leading-loose-jp text-ink-soft">{product.concept}</p>
        </section>
      )}

      {/* 特徴 */}
      {product.features && product.features.length > 0 && (
        <section className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
          <h2 className="mb-6 font-serif text-2xl tracking-wide-jp text-ink">特徴</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm leading-loose-jp text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kinpaku" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 利用シーン */}
      {product.useScenes && product.useScenes.length > 0 && (
        <section className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
          <h2 className="mb-6 font-serif text-2xl tracking-wide-jp text-ink">こんなシーンに</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {product.useScenes.map((scene, index) => (
              <div key={index} className="rounded-subtle bg-sand-dark/20 p-4 text-sm leading-loose-jp text-ink-soft">
                {scene}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 製品仕様 */}
      <section className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
        <h2 className="mb-8 font-serif text-2xl tracking-wide-jp text-ink">製品仕様</h2>
        <dl className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-2">
            <dt className="text-sm tracking-wide-jp text-ink">サイズ</dt>
            <dd className="text-sm leading-loose-jp text-ink-soft">{product.size}</dd>
          </div>
          <div className="space-y-2">
            <dt className="text-sm tracking-wide-jp text-ink">素材</dt>
            <dd className="text-sm leading-loose-jp text-ink-soft">{product.material}</dd>
          </div>
          <div className="space-y-2">
            <dt className="text-sm tracking-wide-jp text-ink">製造地 / 作り手</dt>
            <dd className="text-sm leading-loose-jp text-ink-soft">{product.origin}</dd>
          </div>
          <div className="space-y-2">
            <dt className="text-sm tracking-wide-jp text-ink">納期目安</dt>
            <dd className="text-sm leading-loose-jp text-ink-soft">{product.leadTime}</dd>
          </div>
          <div className="space-y-2 md:col-span-2">
            <dt className="text-sm tracking-wide-jp text-ink">カスタマイズ</dt>
            <dd className="text-sm leading-loose-jp text-ink-soft">{product.customization}</dd>
          </div>
        </dl>
      </section>

      {/* ご注文方法 */}
      {product.howToOrder && (
        <section className="washi-card rounded-soft border sumi-border-light p-10 md:p-12">
          <h2 className="mb-6 font-serif text-2xl tracking-wide-jp text-ink">ご注文方法</h2>
          <p className="preserve-newlines mb-8 text-sm leading-loose-jp text-ink-soft">{product.howToOrder}</p>
          <Link
            href={`/contact?product=${product.name}`}
            className="inline-flex items-center justify-center rounded-subtle border sumi-border bg-sumi px-10 py-5 text-sm tracking-wide-jp text-sand-light shadow-washi transition-all duration-300 hover:bg-ink-soft hover:shadow-washi_hover"
          >
            この商品について問い合わせる
          </Link>
        </section>
      )}
    </div>
  );
}
