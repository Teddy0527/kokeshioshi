import Link from 'next/link';
import { ProductsGallery } from '@/components/products-gallery';
import { faqItems } from '@/data/faq';

const heroStory = ['これまでのこけしは、こどもの無事な成長を祈って贈られるものでした。', '「推しこけし」は、その祈りの文化を引き継ぎながら、今を生きるあなたやあなたの事業の挑戦を、そっとそばで"後推し"するこけしブランドです。', '飾るだけではなく、あなたの日々の節目に立ち、静かに背中を押してくれる小さな相棒としてのこけしです。'];

export default function HomePage() {
  return (
    <div className="space-y-48 px-6 py-24 md:space-y-72 md:py-40">
      <section className="mx-auto max-w-4xl washi-card kinpaku-accent rounded-soft px-12 py-20 md:px-24 md:py-32">
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">Concept</p>
            <h1 className="ultra-luxury-text font-serif text-4xl text-sumi-deep md:text-5xl lg:text-6xl">
              推しこけし
            </h1>
            <div className="mx-auto h-px w-20 bg-gradient-to-r from-kinpaku/40 via-kinpaku/20 to-transparent" />
          </div>
          <div className="mx-auto max-w-3xl space-y-6 text-sm font-light leading-relaxed text-sumi/80 md:text-base md:leading-loose">
            {heroStory.map((line, index) => (
              <p key={line} className="tracking-wide transition-all duration-500" style={{ animationDelay: `${index * 0.15}s` }}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
            <Link
              href="/about"
              className="minimal-button text-sumi"
            >
              ブランドストーリーを読む
            </Link>
            <Link
              href="/contact"
              className="minimal-button text-ink-soft hover:text-sumi"
            >
              お問い合わせ
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
        <ProductsGallery />
      </section>

      <section className="mx-auto max-w-4xl">
        <header className="mb-20 space-y-4 text-center">
          <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">FAQ</p>
          <h2 className="ultra-luxury-text font-serif text-3xl text-sumi-deep">よくある質問</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-kinpaku/40 to-transparent" />
        </header>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <details key={item.question} className="group washi-card kinpaku-accent rounded-soft p-10 transition-all duration-300 hover:shadow-washi_hover">
              <summary className="cursor-pointer font-serif text-lg font-light tracking-wide-jp text-sumi transition-colors duration-300 group-hover:text-kinpaku-dark md:text-xl">
                {item.question}
              </summary>
              <p className="mt-6 text-sm font-light leading-loose-jp text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
