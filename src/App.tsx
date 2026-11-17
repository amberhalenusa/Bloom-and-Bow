import { useState } from 'react';
import { BrandCategory } from './data/product';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { TrustAndSpecsSection } from './components/TrustAndSpecsSection';
import { BrandDiscoverySection } from './components/BrandDiscoverySection';
import { Footer, FooterModalType } from './components/Footer';
import { InfoModal } from './components/InfoModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<BrandCategory['id']>('handbags');
  const [activeModal, setActiveModal] = useState<FooterModalType>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#141413]">
      <Header onSelectCategory={setActiveCategory} />

      <main className="flex-1">
        <HeroSection />
        <FeaturedProductSection />
        <TrustAndSpecsSection />
        <BrandDiscoverySection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </main>

      <Footer onOpenModal={setActiveModal} />
      <MobileStickyBar />
      <InfoModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
