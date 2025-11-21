import Link from 'next/link';
import { products } from '@/data/products';

const heroStory = ['これまでのこけしは、こどもの無事な成長を祈って贈られるものでした。', '「こけし推し」は、その祈りの文化を引き継ぎながら、今を生きるあなたやあなたの事業の挑戦を、そっとそばで"後推し"するこけしブランドです。', '飾るだけではなく、あなたの日々の節目に立ち、静かに背中を押してくれる小さな相棒としてのこけしです。'];

export default function HomePage() {
  return (
    <div className="space-y-48 px-6 py-24 md:space-y-72 md:py-40">
      <section className="mx-auto max-w-4xl washi-card kinpaku-accent rounded-soft px-16 py-32 md:px-32 md:py-48">
        <div className="space-y-20 text-center">
          <div className="space-y-10">
            <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">Concept</p>
            <h1 className="ultra-luxury-text font-serif text-5xl text-sumi-deep md:text-6xl lg:text-7xl">
              こけし推し
            </h1>
            <div className="mx-auto h-px w-20 bg-gradient-to-r from-kinpaku/40 via-kinpaku/20 to-transparent" />
          </div>
          <div className="mx-auto max-w-3xl space-y-10 text-sm font-light leading-relaxed text-sumi/80 md:text-base md:leading-loose">
            {heroStory.map((line, index) => (
              <p key={line} className="tracking-wide transition-all duration-500" style={{ animationDelay: `${index * 0.15}s` }}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-12 text-sm">
            <Link
              href="/products"
              className="minimal-button text-sumi"
            >
              プロダクトを見る
            </Link>
            <Link
              href="/about"
              className="minimal-button text-ink-soft hover:text-sumi"
            >
              ブランドストーリーを読む
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <header className="mb-20 space-y-4 text-center">
          <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">Products</p>
          <h2 className="ultra-luxury-text font-serif text-3xl text-sumi-deep">プロダクトライン</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-kinpaku/40 to-transparent" />
        </header>
        <div className="grid gap-14 md:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.slug} className="group washi-card kinpaku-accent rounded-soft p-12" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-12 flex items-center justify-center bg-gradient-to-b from-sand-dark/20 to-transparent py-12">
                <img src={product.heroImage} alt={product.name} className="h-56 w-auto opacity-92 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="space-y-5">
                <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">{product.category}</p>
                <h3 className="font-serif text-2xl font-light tracking-wide-jp leading-relaxed-jp text-sumi">{product.name}</h3>
                <p className="text-sm font-light leading-loose-jp text-ink-soft">{product.tagline}</p>
                <p className="border-t border-kinpaku/10 pt-4 text-sm font-light tracking-wide-jp text-kinpaku-aged">{product.priceRange}</p>
                <Link href={`/products/${product.slug}`} className="minimal-button mt-6 inline-block text-ink-soft hover:text-sumi">
                  詳細へ
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl washi-card kinpaku-accent rounded-soft px-20 py-24 md:px-28 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:gap-24">
          <div className="flex-1 space-y-8">
            <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">Heritage</p>
            <h2 className="ultra-luxury-text font-serif text-3xl text-sumi-deep">継承と更新</h2>
            <p className="text-sm font-light leading-loose-jp text-ink">
              東北の温泉郷で育まれた木地師の技を<br />
              受け継ぎながら、現代の起業家や<br />
              クリエイターの挑戦に寄り添う<br />
              表現を探り続けています。<br />
              <span className="mt-4 block">詳細は文化ページでご紹介しています。</span>
            </p>
          </div>
          <div className="flex flex-col items-end justify-between border-l-2 border-kinpaku/20 pl-16 text-right text-sm md:w-80">
            <p className="font-light leading-loose-jp text-ink-soft">
              こけし文化のストーリーをより深く知りたい方は、
              <span className="mt-2 block text-kinpaku-aged">ブランドストーリーへ。</span>
            </p>
            <Link href="/about" className="minimal-button mt-10 text-ink-soft hover:text-sumi">
              Aboutページへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
