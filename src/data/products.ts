import type { ProductCategory } from '@/lib/navigation';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  priceRange: string;
  size: string;
  material: string;
  origin: string;
  leadTime: string;
  customization: string;
  accent: 'oshikokeshi' | 'shachokokeshi' | 'story';
  heroImage: string;
  detailImages: string[];
  useScenes: string[];
};

export const productCategories: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'すべて', value: 'all' },
  { label: '推しこけし', value: '推しこけし' },
  { label: '社長こけし', value: '社長こけし' },
  { label: '限定制作', value: '限定制作' }
];

export const products: Product[] = [
  {
    slug: 'oshikokeshi-classic',
    name: '推しこけし Classic',
    category: '推しこけし',
    tagline: '机の隅で静かに灯る決意の灯り',
    description:
      '明治期の型をベースに、挑戦する人の背筋をそっと伸ばすよう再構築した一体。\n木地の素肌を活かしつつ、首元には一本の真鍮線で「後押し」の気配を描きました。',
    priceRange: '38,000円〜',
    size: '高さ180mm / 直径40mm',
    material: 'ミズキ、真鍮、植物性オイル',
    origin: '宮城・鳴子温泉郷',
    leadTime: '受注後約4週間',
    customization: '半襟と帯の色替え、名入れ可',
    accent: 'oshikokeshi',
    heroImage: '/images/product-oshikokeshi.svg',
    detailImages: ['/images/product-detail-wood.svg'],
    useScenes: ['プロジェクトローンチ前夜', '推し活イベントの記念品', '大切な仲間への贈り物']
  },
  {
    slug: 'shacho-kokeshi',
    name: '社長こけし',
    category: '社長こけし',
    tagline: '会議室の空気を整える静謐な存在感',
    description:
      'CEOや経営チームの「後ろ盾」をテーマに、堂々とした直線構成で構えたモデル。\n漆の深い光沢と、冠の細い金線で覚悟の重さを受け止めます。',
    priceRange: '64,000円〜',
    size: '高さ210mm / 直径50mm',
    material: 'イタヤカエデ、漆、真鍮',
    origin: '宮城・遠刈田',
    leadTime: '受注後約6週間',
    customization: '社章の蒔絵、台座銘板',
    accent: 'shachokokeshi',
    heroImage: '/images/product-shacho.svg',
    detailImages: ['/images/product-detail-wood.svg'],
    useScenes: ['創業記念日', '来客応接室', '新オフィスの落成祝い']
  },
  {
    slug: 'balance-limited',
    name: 'Balance 限定制作',
    category: '限定制作',
    tagline: '伝統と挑戦の間に浮かぶ一本の呼吸',
    description:
      '伝統模様を極限までそぎ落とし、一本の赤い縦線だけを残した限定制作。\n静かな余白の中に、自身の未来を投影していただけます。',
    priceRange: '92,000円〜',
    size: '高さ240mm / 直径55mm',
    material: 'サクラ、墨、顔料',
    origin: '山形・肘折',
    leadTime: '受注後約8週間',
    customization: '台座のメッセージ刻印',
    accent: 'story',
    heroImage: '/images/product-balance.svg',
    detailImages: ['/images/product-detail-wood.svg'],
    useScenes: ['株主総会', '節目のリブランディング', '大切な人への門出祝い']
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
