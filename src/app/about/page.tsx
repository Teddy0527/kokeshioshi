import type { Metadata } from 'next';
import Link from 'next/link';
import { storyTimeline } from '@/data/story';

export const metadata: Metadata = {
  title: 'About | 推しこけしについて',
  description: '推しこけしとして、こけし文化の背景、職人チームについてご紹介します。'
};

const pillars = [
  {
    title: '後推し',
    subtitle: '(Back Support)',
    description:
      '背中にそっと添えるような距離感を大切にしています。視界の片隅にいるだけで勇気がほどける存在を目指しています。'
  },
  {
    title: '静かな佇まい',
    subtitle: '(Quiet Presence)',
    description:
      '余白と縦のライン、ゆるやかな光を大切にし、派手な演出を抑えることで空間の呼吸を整えます。'
  },
  {
    title: '継承と更新',
    subtitle: '(Heritage & Update)',
    description:
      '地域の木地師や塗師とともに伝統技法を守りながら、現代のワークスタイルに合う要素を研究しています。'
  }
];


export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 md:py-24">
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">About</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">推しこけしとして</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">
          推しこけしは、挑戦を続けるすべての人へ贈る「後推し」の象徴です。
          <br />
          花束のように華美ではなく、しかし確かな質感で空間に佇む存在。
          <br />
          忙しい日々の中でふと視線を向けると、ゆっくりと呼吸を整えてくれるパートナーでありたいと考えています。
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="luxury-heading font-serif text-3xl">3つのブランドコア</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="washi-card flex min-h-[280px] flex-col rounded-soft border sumi-border-light p-8 md:p-10"
            >
              <div className="mb-6">
                <h3 className="font-serif text-2xl tracking-relaxed-jp leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm tracking-wide-jp text-ink-light">
                  {pillar.subtitle}
                </p>
              </div>
              <p className="text-sm leading-loose-jp text-ink-soft">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="luxury-heading font-serif text-3xl">こけし文化と"後推し"へのアップデート</h2>
        <div className="space-y-8">
          {storyTimeline.map((story) => (
            <div key={story.year} className="washi-card rounded-soft border sumi-border-light p-8 md:p-10">
              <p className="text-xs uppercase tracking-wide-jp text-ink-light">{story.year}</p>
              <h3 className="mt-3 font-serif text-2xl tracking-relaxed-jp">{story.title}</h3>
              <p className="mt-5 text-sm leading-loose-jp text-ink-soft">{story.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="luxury-heading font-serif text-3xl">職人とパートナー</h2>
        <div className="washi-card rounded-soft border sumi-border-light p-8 md:p-10">
          <h3 className="font-serif text-2xl tracking-relaxed-jp">パートナー募集中</h3>
          <div className="mt-6 space-y-4 text-sm leading-loose-jp text-ink-soft">
            <p>
              推しこけしでは、伝統技法を守りながら現代のワークスタイルに合う製品を共に創り上げていただける、職人とパートナーを募集しています。
            </p>
            <p className="pt-4">
              ご興味のある方は、ぜひお気軽にお問い合わせください。
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-soft border sumi-border-light bg-washi-cream px-8 py-3 text-sm transition hover:bg-ink/5"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  );
}
