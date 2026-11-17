import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AMAZON_AFFILIATE_URL, BrandCategory } from '../data/product';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  onSelectCategory: (categoryId: BrandCategory['id']) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    categoryId?: BrandCategory['id']
  ) => {
    e.preventDefault();
    if (categoryId) {
      onSelectCategory(categoryId);
    }
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative md:sticky md:top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E5DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark + minimal floral emblem */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="inline-flex items-center gap-2.5 text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] rounded-md py-1"
        >
          <BrandMark className="w-7 h-7 shrink-0" />
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
            Bloom &amp; Bow
          </span>
        </a>

        {/* Zone 2: Primary navigation links (desktop) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A534D]"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="whitespace-nowrap shrink-0 hover:text-[#141413] underline-offset-4 hover:underline transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#categories"
            onClick={(e) => handleNavClick(e, 'categories', 'fashion')}
            className="whitespace-nowrap shrink-0 hover:text-[#141413] underline-offset-4 hover:underline transition-colors py-1"
          >
            Fashion
          </a>
          <a
            href="#featured-find"
            onClick={(e) => handleNavClick(e, 'featured-find', 'handbags')}
            className="whitespace-nowrap shrink-0 hover:text-[#141413] underline-offset-4 hover:underline transition-colors py-1"
          >
            Handbags
          </a>
          <a
            href="#categories"
            onClick={(e) => handleNavClick(e, 'categories', 'beauty')}
            className="whitespace-nowrap shrink-0 hover:text-[#141413] underline-offset-4 hover:underline transition-colors py-1"
          >
            Beauty
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="whitespace-nowrap shrink-0 hover:text-[#141413] underline-offset-4 hover:underline transition-colors py-1"
          >
            About
          </a>
        </nav>

        {/* Zone 3: Single primary action on desktop / menu trigger on mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={AMAZON_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
          >
            Shop on Amazon →
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#141413] hover:bg-[#EFE8DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#E5DDD2] bg-[#FAF7F2] px-4 py-4 space-y-1"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="py-3 px-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#EFE8DF] transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={(e) => handleNavClick(e, 'categories', 'fashion')}
              className="py-3 px-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#EFE8DF] transition-colors"
            >
              Fashion
            </a>
            <a
              href="#featured-find"
              onClick={(e) => handleNavClick(e, 'featured-find', 'handbags')}
              className="py-3 px-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#EFE8DF] transition-colors"
            >
              Handbags
            </a>
            <a
              href="#categories"
              onClick={(e) => handleNavClick(e, 'categories', 'beauty')}
              className="py-3 px-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#EFE8DF] transition-colors"
            >
              Beauty
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-3 px-3 text-base font-medium text-[#141413] rounded-lg hover:bg-[#EFE8DF] transition-colors"
            >
              About
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E5DDD2]">
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-colors"
            >
              SHOP ON AMAZON →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
