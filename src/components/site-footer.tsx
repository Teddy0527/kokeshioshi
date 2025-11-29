import Link from 'next/link';
import { mainNav } from '@/lib/navigation';
import Image from 'next/image';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-48 border-t-2 border-kinpaku/10 bg-gradient-to-b from-sand-dark/20 to-sand-dark/40 md:mt-72">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-8 py-28 md:flex-row md:items-start md:justify-between md:py-36">
        <div className="space-y-10">
          <div className="relative h-32 w-72 opacity-90">
            <Image
              src="/images/logo.png"
              alt="推しこけし"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-light tracking-ultra-wide-jp text-kinpaku-aged">© {year} Oshikokeshi.</p>
            <p className="text-xs font-light leading-loose-jp tracking-relaxed-jp text-ink-light">伝統と挑戦を、静かに見守る。</p>
          </div>
        </div>
        <nav className="text-sm font-light text-ink-soft">
          <ul className="grid grid-cols-2 gap-6 md:flex md:flex-col md:gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group relative inline-block tracking-ultra-wide-jp transition-all duration-700 hover:text-sumi">
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-kinpaku to-transparent transition-all duration-700 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="col-span-2 mt-4 md:col-span-1 md:mt-6">
              <Link href="https://instagram.com" className="group relative inline-block tracking-ultra-wide-jp transition-all duration-700 hover:text-sumi">
                <span className="relative">
                  Instagram
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-kinpaku to-transparent transition-all duration-700 group-hover:w-full" />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-kinpaku/5 bg-sumi-fade py-6">
        <p className="text-center text-xs font-light tracking-ultra-wide-jp text-ink-light">日本の伝統を、現代の挑戦へ。</p>
      </div>
    </footer>
  );
}
