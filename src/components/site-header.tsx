'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { mainNav } from '@/lib/navigation';
import Image from 'next/image';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b sumi-border-light backdrop-blur-lg shadow-washi transition-all duration-500" style={{ backgroundColor: 'rgba(255, 254, 249, 0.98)' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-7">
        <Link href="/" className="group transition-all duration-700" onClick={() => setOpen(false)}>
          {/* ロゴ画像を追加 */}
          <div className="relative h-20 w-60 transition-opacity duration-700 group-hover:opacity-80">
            <Image
              src="/images/logo.png"
              alt="推しこけし"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        <button
          className="h-10 w-10 border-none text-xs font-light tracking-ultra-wide-jp text-ink-soft transition-all duration-700 hover:text-sumi md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? '閉' : '開'}
        </button>
        <nav className={`absolute left-0 top-full w-full border-b sumi-border-light backdrop-blur-lg transition-all duration-500 md:static md:w-auto md:border-none md:bg-transparent ${open ? 'opacity-100' : 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100'}`} style={{ backgroundColor: open ? 'rgba(255, 254, 249, 0.98)' : undefined }}>
          <ul className="flex flex-col gap-6 px-8 py-10 text-sm font-light text-ink-soft md:flex-row md:items-center md:gap-12 md:p-0">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative inline-flex items-center gap-1 pb-1 tracking-ultra-wide-jp transition-all duration-700 ${pathname === item.href ? 'text-sumi' : 'hover:text-sumi'}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-kinpaku via-kinpaku to-transparent transition-all duration-700 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
