import type { Metadata } from 'next';
import { usageScenes } from '@/data/usage';

export const metadata: Metadata = {
  title: 'Usage | 利用シーン',
  description: '創業、デスクワーク、ギフトなどの利用イメージをご紹介します。'
};

const beforeAfter = [
  {
    before: '大切な発表の朝、緊張で胸がざわつく。',
    after: '視線を移すと、背筋を伸ばすこけしが静かに佇んでいる。深呼吸を思い出す。'
  },
  {
    before: '仲間へのギフトを探すが、どれもピンとこない。',
    after: '挑戦の意味を添えて贈れる工芸品なら、言葉以上の想いが届く。'
  }
];

export default function UsagePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16 md:py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">Usage</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">利用シーン・ギフト提案</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">日々の挑戦や節目の日に寄り添うストーリーをご紹介します。</p>
      </header>
      <div className="grid gap-8 md:grid-cols-3">
        {usageScenes.map((scene) => (
          <article key={scene.title} className="washi-card rounded-soft border sumi-border-light p-8">
            <p className="text-xs tracking-wide-jp text-ink-light">{scene.detail}</p>
            <h2 className="mt-4 font-serif text-2xl tracking-relaxed-jp">{scene.title}</h2>
            <p className="preserve-newlines mt-4 text-sm leading-loose-jp text-ink-soft">{scene.description}</p>
          </article>
        ))}
      </div>
      <section className="washi-card space-y-6 rounded-soft border sumi-border-light p-10 md:p-12">
        <h2 className="luxury-heading font-serif text-3xl">Before / After の心情</h2>
        <div className="space-y-8">
          {beforeAfter.map((story, index) => (
            <div key={index} className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wide-jp text-ink-light">Before</p>
                <p className="mt-3 text-sm leading-loose-jp text-ink-soft">{story.before}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide-jp text-ink-light">After</p>
                <p className="mt-3 text-sm leading-loose-jp text-ink-soft">{story.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
