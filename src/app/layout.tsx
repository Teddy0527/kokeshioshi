import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Noto_Serif_JP, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400'], variable: '--font-playfair' });
const notoSans = Noto_Sans_JP({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-noto-sans' });
const notoSerif = Noto_Serif_JP({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-noto-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'こけし推し | 静かに挑戦を後押しするブランドサイト',
  description: '推しこけし・社長こけしを中心に、挑戦の節目を静かに支えるブランド「こけし推し」の世界観とプロダクトをご紹介します。',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'こけし推し',
    description: '静かに挑戦を後押しするブランド',
    url: 'https://example.com',
    siteName: 'こけし推し',
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'こけし推し',
    description: '挑戦の節目を静かに後押しするこけしブランド'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSans.variable} ${notoSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-sand-light text-ink"> 
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
