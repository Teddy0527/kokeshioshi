import type { ProductCategory } from '@/lib/navigation';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  concept?: string;
  features?: string[];
  howToOrder?: string;
  priceRange: string;
  size: string;
  material: string;
  origin: string;
  leadTime: string;
  customization: string;
  accent: 'oshikokeshi' | 'shachokokeshi' | 'ochokokeshi';
  heroImage: string;
  detailImages: string[];
  useScenes: string[];
};

export const productCategories: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'すべて', value: 'all' },
  { label: '推しこけし', value: '推しこけし' },
  { label: '社長こけし', value: '社長こけし' },
  { label: 'おちょこけし', value: 'おちょこけし' }
];

export const products: Product[] = [
  {
    slug: 'oshikokeshi',
    name: '推しこけし',
    category: '推しこけし',
    tagline: '自分の"推し"がこけしになる',
    description:
      'あなたの大切な"推し"を、伝統こけしの技法で形にします。\n写真をお送りいただき、職人が一体一体、丁寧に仕上げます。',
    concept: 'アイドル、アーティスト、キャラクター、大切な人。あなたの"推し"を、東北の伝統工芸であるこけしの形で表現します。こけしは本来、子どもの成長を願う「祈りの人形」でした。推しこけしは、その伝統を受け継ぎながら、あなたの応援する気持ちを形にする新しいこけしです。',
    features: [
      '写真を元に職人が手作業で制作',
      '伝統的なこけしの技法を使用',
      '表情や衣装の特徴を丁寧に再現',
      '世界に一つだけのオリジナル'
    ],
    howToOrder: 'お問い合わせフォームから、推しの写真（正面・全身が望ましい）と、ご希望の特徴（衣装の色、表情など）をお送りください。職人と相談の上、デザインを決定し制作に入ります。',
    priceRange: '【要相談】※デザインの複雑さにより変動',
    size: '高さ150mm〜200mm（ご希望に応じて調整可）',
    material: 'ミズキ、顔料、植物性オイル',
    origin: '東北各地の伝統こけし工人',
    leadTime: '打ち合わせ後、約6〜8週間',
    customization: '写真を元に完全オーダーメイド制作',
    accent: 'oshikokeshi',
    heroImage: '/images/product-oshikokeshi.svg',
    detailImages: [],
    useScenes: ['推し活の記念品', '誕生日プレゼント', 'ファンイベントの特別グッズ', 'デスクやお部屋の飾り']
  },
  {
    slug: 'shacho-kokeshi',
    name: '社長こけし',
    category: '社長こけし',
    tagline: '会社の成長を静かに見守る',
    description:
      '従来のこけしが子どもの成長を見守ったように、社長こけしは会社の成長を見守ります。\n経営者の想い、企業の理念を形にした、オフィスの守り神。',
    concept: '昔、こけしは子どもの無事な成長を願って贈られる「祈りの人形」でした。社長こけしは、その伝統を受け継ぎ、会社の発展と挑戦を静かに見守る存在です。創業者の想い、企業理念、大切にしている価値観を、伝統工芸の技で形にします。',
    features: [
      '企業の理念や価値観を表現',
      '社長の似顔絵や特徴を再現可能',
      '会社のロゴや色を反映',
      '創業記念、周年記念に最適'
    ],
    howToOrder: '企業様のご要望をヒアリングし、デザインを提案いたします。社長の写真、企業ロゴ、コーポレートカラーなどをご提供ください。',
    priceRange: '【要相談】※デザインの複雑さにより変動',
    size: '高さ180mm〜250mm（ご希望に応じて調整可）',
    material: 'イタヤカエデ、漆、顔料',
    origin: '東北各地の伝統こけし工人',
    leadTime: '打ち合わせ後、約8〜10週間',
    customization: '企業ロゴ、社章、台座への社名・理念刻印',
    accent: 'shachokokeshi',
    heroImage: '/images/product-shacho.svg',
    detailImages: [],
    useScenes: ['創業記念', '周年記念', 'オフィスの受付', '経営者の執務室', '株主総会の記念品']
  },
  {
    slug: 'ochokokeshi',
    name: 'おちょこけし',
    category: 'おちょこけし',
    tagline: '飾る工芸と使う酒器がひとつになった、新しいこけしのかたち',
    description:
      '東北で受け継がれてきた伝統こけしのフォルムをベースに、おちょこになる構造を採用した木製の酒器。\n普段は一体のこけしとして棚に飾り、食卓やカウンターでの一杯の時間には、おちょことして使うことができます。',
    concept: '昔のこけしは、子どもの無事な成長を願って贈られる「祈りの人形」でした。「おちょこけし」は、その祈りを受け継ぎながら、今を生きる大人の挑戦やご縁を、一杯のお酒でそっと後押しする存在です。使わないときは飾って愛で、飲むときは手にとって酌み交わす。飾る工芸と使う酒器がひとつになった、新しいこけしのかたちです。',
    features: [
      '伝統こけしのフォルムをベースにした木製酒器',
      '頭部と胴体が分かれ、おちょことして使用可能',
      '飾る時は一体のこけし、使う時は酒器として',
      '木の温もりを感じる手触り',
      '使い込むほどに味わいが増す'
    ],
    howToOrder: 'お問い合わせフォームよりご注文ください。デザインや木材の種類をお選びいただけます。',
    priceRange: '【要相談】',
    size: '高さ120mm〜150mm / おちょこ部分 直径45mm',
    material: 'ミズキ、サクラ、イタヤカエデなど（選択可）、植物性オイル仕上げ',
    origin: '東北各地の伝統こけし工人',
    leadTime: '受注後約6〜8週間',
    customization: '木材の種類、模様のデザイン、台座への名入れ',
    accent: 'ochokokeshi',
    heroImage: '/images/product-ochokokeshi.svg',
    detailImages: [],
    useScenes: ['晩酌の一杯', '大切な人との乾杯', '新生活のお祝い', 'お酒好きへのギフト', '和の空間の飾り']
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
