import React from 'react';
import { AFFILIATE_DISCLOSURE, AMAZON_AFFILIATE_URL } from '../data/product';
import { BrandMark } from './BrandMark';

export type FooterModalType = 'about' | 'contact' | 'privacy' | 'disclosure' | null;

interface FooterProps {
  onOpenModal: (type: FooterModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#FAF7F2] pb-24 md:pb-12 pt-12 sm:pt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#E5DDD2]">
          {/* Brand Lockup */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5">
              <BrandMark className="w-6 h-6" />
              <span className="font-serif text-xl font-semibold text-[#141413]">
                Bloom &amp; Bow
              </span>
            </div>
            <p className="text-sm text-[#5A534D]">
              &ldquo;Discover Your Everyday Favorites.&rdquo;
            </p>
          </div>

          {/* Required Footer Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#5A534D]"
          >
            <button
              type="button"
              onClick={() => onOpenModal('about')}
              className="hover:text-[#141413] underline-offset-4 hover:underline transition-colors"
            >
              About Us
            </button>
            <span aria-hidden="true" className="text-[#D8A7AA]">|</span>
            <button
              type="button"
              onClick={() => onOpenModal('contact')}
              className="hover:text-[#141413] underline-offset-4 hover:underline transition-colors"
            >
              Contact
            </button>
            <span aria-hidden="true" className="text-[#D8A7AA]">|</span>
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="hover:text-[#141413] underline-offset-4 hover:underline transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#D8A7AA]">|</span>
            <button
              type="button"
              onClick={() => onOpenModal('disclosure')}
              className="hover:text-[#141413] underline-offset-4 hover:underline transition-colors"
            >
              Affiliate Disclosure
            </button>
          </nav>
        </div>

        {/* Bottom Legal & Affiliate Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5A534D]">
          <p>{AFFILIATE_DISCLOSURE}</p>
          <div className="flex items-center gap-4">
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-medium text-[#141413] hover:text-[#8C4A51] underline underline-offset-4"
            >
              Featured Find on Amazon →
            </a>
            <span>&copy; {new Date().getFullYear()} Bloom &amp; Bow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
