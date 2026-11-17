import React, { useState } from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import {
  AFFILIATE_DISCLOSURE,
  AMAZON_AFFILIATE_URL,
  FEATURED_PRODUCT,
} from '../data/product';

interface BenefitCard {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  objectMode: 'contain' | 'cover';
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    number: '01',
    title: 'Convertible Hand-Carry & Crossbody Styling',
    description:
      'Switch effortlessly between the structured top carry handle and two detachable strap options—including a sporty woven logo strap and a sleek black faux leather strap.',
    imageSrc: '/assets/aistudio/image_4b58174b.png',
    imageAlt: 'Steve Madden Bevelyn bag showing both detachable crossbody straps',
    objectMode: 'contain',
  },
  {
    number: '02',
    title: 'Two Compartments for Everyday Organization',
    description:
      'Designed with two dedicated interior compartments and a zippered pocket to keep your phone, compact wallet, keys, and lip gloss neatly separated on busy days.',
    imageSrc: '/assets/aistudio/image_b1fc1a64.png',
    imageAlt: 'Interior top-down view showing two spacious compartments',
    objectMode: 'contain',
  },
  {
    number: '03',
    title: 'Clip-On Accessory Pouch & Silver-Tone Hardware',
    description:
      'Finished in smooth black faux leather with polished silver-tone O-rings and a detachable zip pouch for earbuds, coins, or small daily essentials.',
    imageSrc: '/assets/aistudio/image_6e6de76e.png',
    imageAlt: 'Side close-up of silver hardware clasp and clip-on accessory pouch',
    objectMode: 'contain',
  },
];

export const TrustAndSpecsSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section
      id="trust-details"
      aria-labelledby="trust-section-heading"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E5DDD2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Product Benefits & Visual Detail Trio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8C4A51] mb-2">
              Closer Look &amp; Benefits
            </p>
            <h2
              id="trust-section-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tracking-tight [text-wrap:balance]"
            >
              Thoughtful Details Built for Everyday Carry
            </h2>
          </div>
          <p className="text-sm text-[#5A534D] max-w-sm">
            Every strap, clasp, and compartment is proportioned for compact, everyday wearability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {BENEFIT_CARDS.map((card) => (
            <article
              key={card.number}
              className="bg-[#EFE8DF]/45 rounded-2xl border border-[#E5DDD2] overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-white border-b border-[#E5DDD2] flex items-center justify-center p-5">
                {!imgErrors[card.number] ? (
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [card.number]: true }))
                    }
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#F7ECEC] text-sm text-[#5A534D]">
                    {card.title}
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-medium text-[#8C4A51] tabular-nums mb-2">
                  {card.number}. Feature Spotlight
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#141413] mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5A534D] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Repeated Conversion CTA right after Product Benefits */}
        <div className="bg-[#F7ECEC] rounded-2xl border border-[#EBCED0] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51] mb-1">
              {FEATURED_PRODUCT.priceLabel} · {FEATURED_PRODUCT.price}
            </p>
            <h3 className="font-serif text-2xl font-semibold text-[#141413]">
              Ready to add the {FEATURED_PRODUCT.name} to your rotation?
            </h3>
          </div>
          <a
            href={AMAZON_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
          >
            SHOP ON AMAZON →
          </a>
        </div>

        {/* Part 2: Specifications Table & Trust / Disclosure Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Product Specifications */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-semibold text-[#141413] mb-4">
              Product Specifications
            </h3>
            <div className="bg-white rounded-2xl border border-[#E5DDD2] divide-y divide-[#E5DDD2]">
              {FEATURED_PRODUCT.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                >
                  <dt className="text-sm font-medium text-[#5A534D]">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-[#141413] sm:text-right tabular-nums">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Supplied Rating & Clear Affiliate Disclosure */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#EFE8DF]/55 rounded-2xl border border-[#E5DDD2] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[#141413] mb-3">
                <Star className="w-5 h-5 fill-[#141413]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold">Product Rating</h3>
              </div>
              <p className="font-serif text-3xl font-semibold text-[#141413] tabular-nums mb-1">
                4.8 out of 5 stars
              </p>
              <p className="text-sm text-[#5A534D] leading-relaxed">
                Rating reflects supplied product information for the{' '}
                {FEATURED_PRODUCT.name} (ASIN {FEATURED_PRODUCT.asin}).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5DDD2] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[#141413] mb-3">
                <ShieldCheck className="w-5 h-5 text-[#8C4A51]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold">Affiliate Disclosure</h3>
              </div>
              <p className="text-sm font-medium text-[#141413] mb-2">
                {AFFILIATE_DISCLOSURE}
              </p>
              <p className="text-sm text-[#5A534D] leading-relaxed">
                Bloom &amp; Bow curates everyday fashion, handbag, and beauty finds across the
                United States. When you click our Amazon links, your purchase price remains the same,
                and we may earn a small commission at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
