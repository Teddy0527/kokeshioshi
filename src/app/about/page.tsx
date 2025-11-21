import type { Metadata } from 'next';
import { storyTimeline } from '@/data/story';

export const metadata: Metadata = {
  title: 'About | こけし推しについて',
  description: 'ブランドの思想、こけし文化の背景、職人チームについてご紹介します。'
};

const pillars = [
  {
    title: '後推し (Back Support)',
    description:
      '背中にそっと添えるような距離感を大切にしています。視界の片隅にいるだけで勇気がほどける存在を目指しています。'
  },
  {
    title: '静かな佇まい (Quiet Presence)',
    description:
      '余白と縦のライン、ゆるやかな光を大切にし、派手な演出を抑えることで空間の呼吸を整えます。'
  },
  {
    title: '継承と更新 (Heritage & Update)',
    description:
      '地域の木地師や塗師とともに伝統技法を守りながら、現代のワークスタイルに合う要素を研究しています。'
  }
];

const artisans = [
  {
    name: '遠刈田 木地工房',
    role: '木地師',
    detail: '樹齢80年以上のミズキ・イタヤを厳選し、縦目を活かす挽き方で芯の通ったフォルムを形づくる。'
  },
  {
    name: '鳴子 彩色室',
    role: '彩色・蒔絵',
    detail: '伝統模様に真鍮線や墨のストロークを掛け合わせ、現代の空間に馴染む質感を追求。'
  },
  {
    name: '都内デザインスタジオ',
    role: 'アートディレクション',
    detail: '起業家・クリエイターへのヒアリングを通じて、利用シーンのストーリーを設計。'
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 md:py-24">
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-wide-jp text-ink-light">About</p>
        <h1 className="luxury-heading font-serif text-4xl md:text-5xl">ブランドの思想</h1>
        <p className="text-sm leading-loose-jp text-ink-soft">
          こけし推しは、挑戦を続けるすべての人へ贈る「後推し」の象徴です。花束のように華美ではなく、
          しかし確かな質感で空間に佇む存在。忙しい日々の中でふと視線を向けると、ゆっくりと呼吸を整えてくれるパートナーでありたいと考えています。
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="luxury-heading font-serif text-3xl">3つのブランドコア</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="washi-card rounded-soft border sumi-border-light p-8">
              <h3 className="font-serif text-xl tracking-relaxed-jp">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-loose-jp text-ink-soft">{pillar.description}</p>
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
        <div className="grid gap-8 md:grid-cols-3">
          {artisans.map((artisan) => (
            <article key={artisan.name} className="washi-card rounded-soft border sumi-border-light p-8">
              <p className="text-xs uppercase tracking-wide-jp text-ink-light">{artisan.role}</p>
              <h3 className="mt-3 font-serif text-xl tracking-relaxed-jp">{artisan.name}</h3>
              <p className="mt-4 text-sm leading-loose-jp text-ink-soft">{artisan.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
