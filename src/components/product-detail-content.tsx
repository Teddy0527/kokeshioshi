'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';

type Props = {
  product: Product;
};

export function ProductDetailContent({ product }: Props) {
  const allImages = [product.heroImage, ...product.detailImages];
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'concept' | 'specs' | 'order'>('concept');

  return (
    <div className="min-h-screen bg-sand-light">
      {/* パンくずリスト */}
      <div className="border-b border-ink-light/10 bg-washi px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-3 text-sm text-ink-light md:text-base">
            <Link href="/" className="transition-colors hover:text-ink">
              トップ
            </Link>
            <span className="text-ink-light/70">＞</span>
            <Link href="/products" className="transition-colors hover:text-ink">
              プロダクト
            </Link>
            <span className="text-ink-light/70">＞</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {/* メイン商品表示エリア */}
        <div className="grid gap-14 lg:grid-cols-2">
          {/* 画像ギャラリー */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-soft border border-ink-light/10 bg-washi p-10">
              <div className="relative h-full w-full">
                <Image src={allImages[selectedImage]} alt={`${product.name}`} fill className="object-contain" />
              </div>
            </div>
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-subtle border-2 bg-washi p-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-ink shadow-md' : 'border-ink-light/20 hover:border-ink-light/40'
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-contain" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 商品情報 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-ink-light">{product.category}</p>
              <h1 className="luxury-heading font-serif text-[2rem] leading-tight md:text-[2.75rem]">{product.name}</h1>

              <div className="border-t border-ink-light/20 pt-5">
                <p className="text-lg font-light leading-relaxed tracking-wide-jp text-ink md:text-xl">{product.tagline}</p>
              </div>

              <div className="preserve-newlines space-y-4 text-sm leading-[1.85] tracking-wide-jp text-ink-soft md:text-base md:leading-[1.9]">
                {product.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="washi-card rounded-soft border border-ink-light/10 p-6 md:p-8">
              <div className="space-y-6">
                <div className="space-y-2 border-b border-ink-light/10 pb-6">
                  <p className="text-xs tracking-widest text-ink-light">価格</p>
                  <p className="font-serif text-[2rem] leading-none tracking-wide text-ink md:text-[2.25rem]">
                    {product.priceRange.split('※')[0].trim()}
                  </p>
                  {product.priceRange.includes('※') && (
                    <p className="pt-2 text-xs leading-relaxed text-ink-light">
                      ※{product.priceRange.split('※')[1].trim()}
                    </p>
                  )}
                </div>

                <Link
                  href={`/contact?product=${product.name}`}
                  className="block w-full rounded-subtle bg-sumi px-6 py-4 text-center text-sm tracking-widest text-sand-light shadow-washi transition-all duration-300 hover:bg-ink-soft hover:shadow-washi_hover md:text-base"
                >
                  この商品について問い合わせる
                </Link>

                <div className="space-y-4 border-t border-ink-light/5 pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-ink-light md:text-sm">納期目安</span>
                    <span className="text-sm text-ink md:text-base">{product.leadTime}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-ink-light md:text-sm">製造地</span>
                    <span className="text-sm text-right text-ink md:text-base">{product.origin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="mt-20">
          <div className="border-b border-ink-light/20">
            <nav className="flex flex-wrap gap-6 md:gap-10">
              <button
                onClick={() => setActiveTab('concept')}
                className={`relative pb-5 text-base tracking-widest transition-colors ${
                  activeTab === 'concept' ? 'text-ink' : 'text-ink-light hover:text-ink-soft'
                }`}
              >
                商品の特徴
                {activeTab === 'concept' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink" />}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`relative pb-5 text-base tracking-widest transition-colors ${
                  activeTab === 'specs' ? 'text-ink' : 'text-ink-light hover:text-ink-soft'
                }`}
              >
                仕様 / ご注文
              </button>
              <button
                onClick={() => setActiveTab('order')}
                className={`relative pb-5 text-base tracking-widest transition-colors ${
                  activeTab === 'order' ? 'text-ink' : 'text-ink-light hover:text-ink-soft'
                }`}
              >
                配送 / 返品
              </button>
            </nav>
          </div>

          {/* タブコンテンツ */}
          <div className="py-14">
            {activeTab === 'concept' && (
              <div className="space-y-12">
                {/* コンセプト */}
                {product.concept && (
                  <section>
                    <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">このプロダクトについて</h2>
                    <div className="preserve-newlines space-y-5 text-lg leading-loose-jp text-ink-soft md:text-xl">
                      {product.concept.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </section>
                )}

                {/* 利用シーン */}
                {product.useScenes && product.useScenes.length > 0 && (
                  <section>
                    <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">こんなシーンに</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      {product.useScenes.map((scene, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 rounded-subtle border border-ink-light/10 bg-washi p-6 text-base leading-loose-jp text-ink-soft md:text-lg"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-ink" />
                          <span>{scene}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 特徴 */}
                {product.features && product.features.length > 0 && (
                  <section>
                    <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">特徴</h2>
                    <ul className="space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4 text-base leading-loose-jp text-ink-soft md:text-lg">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-kinpaku" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-12">
                {/* 製品仕様 */}
                <section>
                    <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">製品仕様</h2>
                    <div className="washi-card rounded-soft border border-ink-light/10 p-8 md:p-10">
                    <dl className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                          <dt className="text-sm tracking-widest text-ink-light md:text-base">サイズ</dt>
                          <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.size}</dd>
                      </div>
                      <div className="space-y-3">
                          <dt className="text-sm tracking-widest text-ink-light md:text-base">素材</dt>
                          <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.material}</dd>
                      </div>
                      <div className="space-y-3">
                          <dt className="text-sm tracking-widest text-ink-light md:text-base">製造地 / 作り手</dt>
                          <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.origin}</dd>
                      </div>
                      <div className="space-y-3">
                          <dt className="text-sm tracking-widest text-ink-light md:text-base">納期目安</dt>
                          <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.leadTime}</dd>
                      </div>
                      <div className="space-y-3 md:col-span-2">
                          <dt className="text-sm tracking-widest text-ink-light md:text-base">カスタマイズ</dt>
                          <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.customization}</dd>
                      </div>
                    </dl>
                  </div>
                </section>

                {/* ご注文の流れ */}
                {product.orderFlow && product.orderFlow.length > 0 && (
                  <section>
                      <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">ご注文の流れ</h2>
                    <ol className="space-y-5">
                      {product.orderFlow.map((step, index) => (
                        <li key={index} className="flex gap-5">
                            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-ink-light/20 bg-washi text-lg font-light text-ink">
                            {index + 1}
                          </span>
                            <p className="pt-2 text-base leading-loose-jp text-ink-soft md:text-lg">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {/* お手入れ方法 */}
                {product.careInstructions && product.careInstructions.length > 0 && (
                  <section>
                      <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">お手入れ方法</h2>
                    <ul className="space-y-4">
                      {product.careInstructions.map((instruction, index) => (
                          <li key={index} className="flex items-start gap-4 text-base leading-loose-jp text-ink-soft md:text-lg">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-kinpaku" />
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'order' && (
              <div className="space-y-12">
                {/* 返品・交換について */}
                {product.returns && (
                  <section>
                      <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">返品・交換について</h2>
                    <div className="washi-card rounded-soft border border-ink-light/10 p-8 md:p-10">
                      <dl className="space-y-8">
                        <div className="space-y-3">
                            <dt className="text-sm tracking-widest text-ink-light md:text-base">返品ポリシー</dt>
                            <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.returns.policy}</dd>
                        </div>
                        <div className="space-y-3">
                            <dt className="text-sm tracking-widest text-ink-light md:text-base">不良品対応</dt>
                            <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.returns.defectHandling}</dd>
                        </div>
                        <div className="space-y-3">
                            <dt className="text-sm tracking-widest text-ink-light md:text-base">キャンセル</dt>
                            <dd className="text-base leading-loose-jp text-ink md:text-lg">{product.returns.cancellation}</dd>
                        </div>
                      </dl>
                    </div>
                  </section>
                )}

                {/* ご注文方法 */}
                {product.howToOrder && (
                  <section>
                      <h2 className="mb-8 font-serif text-[1.75rem] tracking-wide-jp text-ink md:text-[2.25rem]">ご注文方法・納期</h2>
                      <div className="preserve-newlines mb-8 space-y-5 text-lg leading-loose-jp text-ink-soft md:text-xl">
                      {product.howToOrder.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
