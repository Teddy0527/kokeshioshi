import { ReactNode } from 'react';

export function SectionHeading({ title, eyebrow, description }: { title: string; eyebrow?: string; description?: ReactNode }) {
  return (
    <div className="mb-20 space-y-6 text-center">
      {eyebrow && <p className="text-xs font-light uppercase tracking-ultra-wide-jp text-kinpaku-aged">{eyebrow}</p>}
      <h2 className="ultra-luxury-text font-serif text-3xl text-sumi-deep md:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-6 max-w-3xl text-sm font-light leading-loose-jp text-ink">{description}</p>}
      <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-kinpaku/40 to-transparent" />
    </div>
  );
}
