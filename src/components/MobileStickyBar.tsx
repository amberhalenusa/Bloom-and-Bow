import React from 'react';
import { AMAZON_AFFILIATE_URL, FEATURED_PRODUCT } from '../data/product';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-t border-[#E5DDD2] px-4 py-2.5 shadow-[0_-4px_16px_rgba(20,20,19,0.06)]">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[#141413] truncate">
            Steve Madden Bevelyn Bag
          </p>
          <p className="font-serif text-base font-semibold text-[#141413] tabular-nums leading-tight">
            {FEATURED_PRODUCT.price}
          </p>
        </div>

        <a
          href={AMAZON_AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
        >
          SHOP ON AMAZON →
        </a>
      </div>
    </div>
  );
};
