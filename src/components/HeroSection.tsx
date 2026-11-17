import React, { useState } from 'react';
import { AMAZON_AFFILIATE_URL, FEATURED_PRODUCT } from '../data/product';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToFeatured = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('featured-find');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5DDD2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left editorial copy column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#8C4A51] tracking-wide mb-4">
              <span>Bloom &amp; Bow</span>
              <span aria-hidden="true">·</span>
              <span>Discover Your Everyday Favorites</span>
            </div>

            <h1 className="font-serif text-[clamp(2.35rem,4.5vw,3.85rem)] leading-[1.08] font-semibold text-[#141413] tracking-tight [text-wrap:balance] mb-5">
              Little Finds. Beautiful Discoveries.
            </h1>

            <p className="text-base sm:text-lg text-[#5A534D] leading-relaxed max-w-xl mb-8">
              Explore stylish fashion, everyday accessories, and beauty favorites worth discovering.
            </p>

            {/* Primary above-the-fold CTA + secondary anchor */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full shadow-sm hover:bg-[#2E2B28] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
              >
                EXPLORE OUR FINDS
              </a>

              <a
                href="#featured-find"
                onClick={scrollToFeatured}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-[#141413] hover:text-[#8C4A51] underline underline-offset-4 decoration-[#D8A7AA] transition-colors whitespace-nowrap shrink-0"
              >
                View Featured Bag ↓
              </a>
            </div>

            {/* Clean metadata strip with hairline top border (no pills) */}
            <div className="pt-6 border-t border-[#E5DDD2] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xs text-[#5A534D] mb-1">Featured Find</p>
                <p className="text-lg sm:text-xl font-serif font-semibold text-[#141413] tabular-nums">
                  {FEATURED_PRODUCT.price}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5A534D] mb-1">Supplied Rating</p>
                <p className="text-lg sm:text-xl font-serif font-semibold text-[#141413] tabular-nums">
                  4.8 / 5
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5A534D] mb-1">Design</p>
                <p className="text-sm sm:text-base font-medium text-[#141413]">
                  Convertible Carry
                </p>
              </div>
            </div>
          </div>

          {/* Right lifestyle photograph column */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#EFE8DF] border border-[#E5DDD2] shadow-sm min-h-[340px] sm:min-h-[420px] lg:min-h-full">
              {!imgError ? (
                <img
                  src="/assets/aistudio/image_4cb8f24b.png"
                  alt="Steve Madden Bevelyn Convertible Crossbody Bag styled on a sunlit light wood table with everyday essentials"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full min-h-[360px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F7ECEC] to-[#EFE8DF]">
                  <p className="font-serif text-xl font-semibold text-[#141413]">
                    {FEATURED_PRODUCT.name}
                  </p>
                  <p className="text-sm text-[#5A534D] mt-1">{FEATURED_PRODUCT.price}</p>
                </div>
              )}

              {/* Subtle bottom gradient scrim for legible editorial caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141413]/80 via-[#141413]/40 to-transparent p-5 sm:p-6 flex items-end justify-between gap-4">
                <div className="text-[#FAF7F2]">
                  <p className="text-xs text-[#EBCED0] font-medium mb-0.5">
                    {FEATURED_PRODUCT.priceLabel}
                  </p>
                  <p className="font-serif text-base sm:text-lg font-medium leading-snug">
                    {FEATURED_PRODUCT.name}
                  </p>
                </div>
                <a
                  href={AMAZON_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="shrink-0 px-4 py-2 text-xs font-semibold bg-[#FAF7F2] text-[#141413] rounded-full hover:bg-[#EBCED0] transition-colors whitespace-nowrap"
                >
                  {FEATURED_PRODUCT.price} · Shop →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
