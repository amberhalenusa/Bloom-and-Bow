import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  AMAZON_AFFILIATE_URL,
  BRAND_CATEGORIES,
  BrandCategory,
  FEATURED_PRODUCT,
} from '../data/product';
import { BrandMark } from './BrandMark';

interface BrandDiscoverySectionProps {
  activeCategory: BrandCategory['id'];
  onSelectCategory: (categoryId: BrandCategory['id']) => void;
}

export const BrandDiscoverySection: React.FC<BrandDiscoverySectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const currentCategory =
    BRAND_CATEGORIES.find((c) => c.id === activeCategory) || BRAND_CATEGORIES[0];

  return (
    <section
      id="categories"
      aria-labelledby="discovery-heading"
      className="py-14 sm:py-20 bg-[#EFE8DF]/40 border-b border-[#E5DDD2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Interactive Brand Categories Explorer */}
        <div>
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8C4A51] mb-2">
              Curated Brand World
            </p>
            <h2
              id="discovery-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tracking-tight [text-wrap:balance]"
            >
              Everyday Categories Worth Exploring
            </h2>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="tablist"
            aria-label="Bloom and Bow discovery categories"
            className="flex flex-wrap gap-2 p-1.5 bg-[#EFE8DF] rounded-xl border border-[#E5DDD2] w-fit mb-8"
          >
            {BRAND_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectCategory(category.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] ${
                    isActive
                      ? 'bg-[#141413] text-[#FAF7F2] shadow-sm'
                      : 'text-[#5A534D] hover:text-[#141413] hover:bg-[#FAF7F2]/60'
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Active Category Showcase Panel */}
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#E5DDD2] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51]">
                {currentCategory.subtitle}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141413]">
                {currentCategory.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5A534D] leading-relaxed">
                {currentCategory.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {currentCategory.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#141413]">
                    <Check
                      className="w-4 h-4 text-[#8C4A51] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-[#EFE8DF]/55 rounded-xl border border-[#E5DDD2] p-6 flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-medium text-[#8C4A51] mb-1">
                  Today&apos;s Spotlight Find · {FEATURED_PRODUCT.price}
                </p>
                <p className="font-serif text-xl font-semibold text-[#141413] leading-snug mb-2">
                  {FEATURED_PRODUCT.name}
                </p>
                <p className="text-sm text-[#5A534D]">
                  A structured black faux leather crossbody designed for effortless daily wear.
                </p>
              </div>
              <a
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-colors whitespace-nowrap shrink-0"
              >
                <span>SHOP ON AMAZON →</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Bloom & Bow + Bottom Conversion Callout */}
        <div
          id="about"
          className="pt-10 border-t border-[#E5DDD2] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <BrandMark className="w-6 h-6" />
              <span className="text-xs font-medium tracking-wider uppercase text-[#8C4A51]">
                About Bloom &amp; Bow
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tracking-tight [text-wrap:balance]">
              Feminine Editorial Curation for Smart Everyday Shopping
            </h2>
            <p className="text-sm sm:text-base text-[#5A534D] leading-relaxed">
              Bloom &amp; Bow is a feminine lifestyle discovery destination created for women across
              the United States who appreciate thoughtful design without luxury markups. We focus on
              wearable handbags, refined wardrobe staples, gentle beauty favorites, and charming
              everyday finds—presented with honest specifications and zero clutter.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#141413] text-[#FAF7F2] rounded-2xl p-7 sm:p-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#EBCED0] mb-1.5">
                Bloom &amp; Bow · Featured Pick
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                Discover Your Everyday Favorites.
              </h3>
              <p className="text-sm text-[#E5DDD2] mt-2">
                {FEATURED_PRODUCT.name} — {FEATURED_PRODUCT.price} ({FEATURED_PRODUCT.priceLabel})
              </p>
            </div>
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#FAF7F2] text-[#141413] rounded-full hover:bg-[#EBCED0] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
            >
              <span>SHOP ON AMAZON →</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
