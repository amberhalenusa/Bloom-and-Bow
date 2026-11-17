export const AMAZON_AFFILIATE_URL = 'https://link.amazon/B0bm9HyJe';

export const AFFILIATE_DISCLOSURE =
  'As an Amazon Associate, I earn from qualifying purchases.';

export interface ProductAngle {
  id: string;
  label: string;
  src: string;
  alt: string;
  aspectClass?: string;
}

export const PRODUCT_ANGLES: ProductAngle[] = [
  {
    id: 'front',
    label: 'Front View',
    src: '/assets/aistudio/image_6ede7422.png',
    alt: 'Steve Madden Bevelyn Convertible Crossbody Bag in black faux leather showing front embossed logo, top handle, silver rings, and clip-on pouch',
  },
  {
    id: 'lifestyle',
    label: 'Styled View',
    src: '/assets/aistudio/image_4cb8f24b.png',
    alt: 'Steve Madden Bevelyn Convertible Crossbody Bag styled on a warm light wood tabletop beside everyday essentials',
  },
  {
    id: 'straps',
    label: 'Dual Straps',
    src: '/assets/aistudio/image_4b58174b.png',
    alt: 'Steve Madden Bevelyn Convertible Crossbody Bag displayed with two detachable crossbody straps and clip-on accessory pouch',
  },
  {
    id: 'interior',
    label: 'Interior',
    src: '/assets/aistudio/image_b1fc1a64.png',
    alt: 'Top-down interior view of the Steve Madden Bevelyn bag showing two organized compartments and silver zipper hardware',
  },
  {
    id: 'pouch',
    label: 'Side Pouch',
    src: '/assets/aistudio/image_6e6de76e.png',
    alt: 'Side profile of the Steve Madden Bevelyn bag highlighting the silver-tone clasp hardware and detachable zippered accessory pouch',
  },
  {
    id: 'back',
    label: 'Back Panel',
    src: '/assets/aistudio/image_2dea2e74.png',
    alt: 'Back view of the structured rectangular Steve Madden Bevelyn Convertible Crossbody Bag in black faux leather',
  },
];

export const FEATURED_PRODUCT = {
  brand: 'Steve Madden',
  name: 'Steve Madden Bevelyn Convertible Crossbody Bag',
  price: '$25.99',
  priceLabel: 'A Stylish Everyday Find',
  asin: 'B0BYYRRBNX',
  rating: 4.8,
  ratingText: '4.8 out of 5 stars',
  ratingNote: 'based on supplied product information',
  description:
    'A stylish black faux leather convertible handbag featuring a structured rectangular silhouette, top carry handle, detachable crossbody straps, silver-tone hardware, two compartments, and a compact everyday design.',
  highlights: [
    'Convertible hand-carry and crossbody styling.',
    'Two detachable strap options.',
    'Two compartments for everyday organization.',
    'Elegant black faux leather construction.',
    'Compact everyday handbag.',
    'Includes a clip-on accessory pouch.',
  ],
  specifications: [
    { label: 'Brand', value: 'Steve Madden' },
    { label: 'Product Name', value: 'Bevelyn Convertible Crossbody Bag' },
    { label: 'Product ASIN', value: 'B0BYYRRBNX' },
    { label: 'Color', value: 'Black' },
    { label: 'Material', value: 'Faux Leather' },
    { label: 'Hardware Finish', value: 'Silver-Tone' },
    { label: 'Organization', value: 'Two Main Compartments' },
    { label: 'Carrying Options', value: 'Top Carry Handle & Two Detachable Straps' },
    { label: 'Included Accessory', value: 'Clip-On Zippered Accessory Pouch' },
    { label: 'Supplied Rating', value: '4.8 out of 5 stars' },
  ],
};

export interface BrandCategory {
  id: 'handbags' | 'fashion' | 'beauty' | 'lifestyle';
  title: string;
  navMatch: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const BRAND_CATEGORIES: BrandCategory[] = [
  {
    id: 'handbags',
    title: 'Handbags & Accessories',
    navMatch: 'Handbags',
    subtitle: 'Structured silhouettes for daily ease',
    description:
      'From convertible crossbody bags with smart compartments to polished everyday totes, we spotlight versatile pieces that elevate simple outfits without stretching your budget.',
    highlights: [
      'Featured right now: Steve Madden Bevelyn Convertible Crossbody ($25.99)',
      'Convertible strap versatility for errands, brunch, and evening plans',
      'Clean hardware finishes and structured shapes that hold their form',
    ],
  },
  {
    id: 'fashion',
    title: "Women's Fashion",
    navMatch: 'Fashion',
    subtitle: 'Effortless wardrobe staples & refined layers',
    description:
      'Curated wardrobe essentials designed for modern American women aged 18–35—timeless knitwear, flattering silhouettes, and mix-and-match neutrals made for real-life schedules.',
    highlights: [
      'Elevated neutral palettes in warm ivory, soft beige, and classic black',
      'Day-to-night staples that pair effortlessly with structured handbags',
      'Thoughtfully vetted pieces prioritized for fabric feel and everyday wearability',
    ],
  },
  {
    id: 'beauty',
    title: 'Beauty & Skincare',
    navMatch: 'Beauty',
    subtitle: 'Soft-glow rituals & vanity favorites',
    description:
      'Accessible skincare routines, hydrating lip tints, and compact beauty essentials that fit neatly into a crossbody pouch for quick touch-ups wherever the day takes you.',
    highlights: [
      'Pocket-sized lip and cheek favorites suited for clip-on pouch carry',
      'Gentle daily skincare picks focused on luminous, hydrated skin',
      'Curated beauty discoveries chosen for reliable everyday performance',
    ],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Gift Finds',
    navMatch: 'Lifestyle',
    subtitle: 'Thoughtful touches for home & gifting',
    description:
      'Charming desk accents, morning ritual essentials, and thoughtful gift ideas under $30 that bring a quiet sense of warmth and polish to everyday routines.',
    highlights: [
      'Practical, gift-ready finds with elevated feminine presentation',
      'Curated picks tailored for birthdays, seasonal refreshes, and self-care',
      'Transparent product specs and direct Amazon shopping links',
    ],
  },
];
