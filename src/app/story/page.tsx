import type { Metadata } from 'next';
import { storyTimeline } from '@/data/story';

export const metadata: Metadata = {
  title: 'Story | こけしの歩み',
  description: 'こけしの歴史と「後推し」への意味の更新をまとめています。'
};

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-6 py-16 md:py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">Story</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">こけしの継承と更新</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">歴史の節目ごとに、祈りの対象がどのように変わり、今の「後推し」に至ったかをご紹介します。</p>
      </header>
      <div className="space-y-8">
        {storyTimeline.map((item, index) => (
          <article key={item.year} className="washi-card rounded-soft border sumi-border-light p-8 md:p-10">
            <p className="text-xs uppercase tracking-wide-jp text-ink-light">STEP {index + 1}</p>
            <h2 className="mt-3 font-serif text-3xl tracking-relaxed-jp">{item.title}</h2>
            <p className="preserve-newlines mt-5 text-sm leading-loose-jp text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
