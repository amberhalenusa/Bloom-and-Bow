import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Check, ExternalLink } from 'lucide-react';
import {
  AFFILIATE_DISCLOSURE,
  AMAZON_AFFILIATE_URL,
  FEATURED_PRODUCT,
  PRODUCT_ANGLES,
} from '../data/product';

export const FeaturedProductSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeAngle = PRODUCT_ANGLES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PRODUCT_ANGLES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PRODUCT_ANGLES.length - 1 ? 0 : prev + 1));
  };

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="featured-find"
      aria-labelledby="featured-product-title"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E5DDD2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Intro */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-medium tracking-wider uppercase text-[#8C4A51] mb-2">
            Featured Everyday Find
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tracking-tight [text-wrap:balance]">
            Structured Polish Meets Hands-Free Versatility
          </h2>
        </div>

        {/* Contiguous Purchase Module: Gallery Left + Sticky Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Multi-Angle Authentic Reference Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-white rounded-2xl border border-[#E5DDD2] shadow-sm overflow-hidden aspect-[4/4] sm:aspect-[5/4] flex items-center justify-center">
              {!failedImages[activeAngle.id] ? (
                <img
                  key={activeAngle.id}
                  src={activeAngle.src}
                  alt={activeAngle.alt}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() => markImageFailed(activeAngle.id)}
                  className={
                    activeAngle.id === 'lifestyle'
                      ? 'w-full h-full object-cover transition-opacity duration-200'
                      : 'w-full h-full object-contain p-6 sm:p-10 transition-opacity duration-200'
                  }
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F7ECEC]">
                  <p className="font-serif text-lg font-semibold text-[#141413]">
                    {FEATURED_PRODUCT.name}
                  </p>
                  <p className="text-sm text-[#5A534D] mt-1">{activeAngle.label}</p>
                </div>
              )}

              {/* Angle Label Caption */}
              <div className="absolute top-4 left-4 text-xs font-medium text-[#5A534D] bg-[#FAF7F2]/90 px-3 py-1.5 rounded-md border border-[#E5DDD2]">
                {activeAngle.label} · {activeIndex + 1} / {PRODUCT_ANGLES.length}
              </div>

              {/* Gallery Navigation Controls */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous product angle"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 border border-[#E5DDD2] text-[#141413] flex items-center justify-center hover:bg-[#EFE8DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next product angle"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 border border-[#E5DDD2] text-[#141413] flex items-center justify-center hover:bg-[#EFE8DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div
              className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3"
              role="tablist"
              aria-label="Product angle selector"
            >
              {PRODUCT_ANGLES.map((angle, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={angle.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(idx)}
                    className={`group flex flex-col items-center rounded-xl p-1.5 bg-white border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] ${
                      isSelected
                        ? 'border-[#141413] ring-1 ring-[#141413]'
                        : 'border-[#E5DDD2] hover:border-[#8C4A51]'
                    }`}
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center mb-1.5">
                      {!failedImages[angle.id] ? (
                        <img
                          src={angle.src}
                          alt={angle.label}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={() => markImageFailed(angle.id)}
                          className={
                            angle.id === 'lifestyle'
                              ? 'w-full h-full object-cover'
                              : 'w-full h-full object-contain p-1.5'
                          }
                        />
                      ) : (
                        <span className="text-[11px] text-[#5A534D]">{angle.label}</span>
                      )}
                    </div>
                    <span
                      className={`text-[11px] leading-tight whitespace-nowrap truncate max-w-full ${
                        isSelected ? 'font-semibold text-[#141413]' : 'text-[#5A534D]'
                      }`}
                    >
                      {angle.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Purchase & Product Summary Module */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#EFE8DF]/55 rounded-2xl border border-[#E5DDD2] p-6 sm:p-8">
            {/* Clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A534D] mb-2">
              <span className="font-semibold text-[#141413]">{FEATURED_PRODUCT.brand}</span>
              <span aria-hidden="true">·</span>
              <span>Handbags &amp; Accessories</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">ASIN: {FEATURED_PRODUCT.asin}</span>
            </div>

            <h2
              id="featured-product-title"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#141413] leading-tight [text-wrap:balance] mb-4"
            >
              {FEATURED_PRODUCT.name}
            </h2>

            {/* Supplied Rating */}
            <div className="flex flex-wrap items-center gap-2 mb-5 pb-5 border-b border-[#E5DDD2]">
              <div className="flex items-center gap-0.5 text-[#141413]" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= 4 ? 'fill-[#141413] text-[#141413]' : 'fill-[#D8A7AA] text-[#141413]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#141413] tabular-nums">
                {FEATURED_PRODUCT.ratingText}
              </span>
              <span className="text-xs text-[#5A534D]">({FEATURED_PRODUCT.ratingNote})</span>
            </div>

            {/* Prominent Price Presentation */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tabular-nums">
                {FEATURED_PRODUCT.price}
              </span>
              <span className="text-sm font-medium text-[#8C4A51]">
                {FEATURED_PRODUCT.priceLabel}
              </span>
            </div>

            {/* Product Description */}
            <p className="text-sm sm:text-base text-[#5A534D] leading-relaxed mb-6">
              {FEATURED_PRODUCT.description}
            </p>

            {/* Product Highlights */}
            <div className="mb-7">
              <h3 className="font-sans text-xs font-semibold tracking-wider uppercase text-[#141413] mb-3">
                Product Highlights
              </h3>
              <ul className="space-y-2.5">
                {FEATURED_PRODUCT.highlights.map((item) => (
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

            {/* Primary Conversion CTA */}
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full shadow-sm hover:bg-[#2E2B28] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
            >
              <span>SHOP ON AMAZON →</span>
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            {/* Inline Affiliate Disclosure */}
            <p className="mt-3 text-xs text-center text-[#5A534D] leading-relaxed">
              {AFFILIATE_DISCLOSURE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
