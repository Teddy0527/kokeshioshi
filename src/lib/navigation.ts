export const mainNav = [
  { label: 'About', href: '/about' as const },
  { label: 'Products', href: '/products' as const },
  { label: 'Story', href: '/story' as const },
  { label: 'Contact', href: '/contact' as const },
  { label: 'FAQ', href: '/faq' as const }
];

export type ProductCategory = '推しこけし' | '社長こけし' | '限定制作';
