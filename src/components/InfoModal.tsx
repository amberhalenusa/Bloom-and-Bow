import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { AFFILIATE_DISCLOSURE } from '../data/product';
import { FooterModalType } from './Footer';

interface InfoModalProps {
  activeModal: FooterModalType;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ activeModal, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  }, [activeModal]);

  useEffect(() => {
    if (!activeModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141413]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FAF7F2] rounded-2xl border border-[#E5DDD2] shadow-lg p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#5A534D] hover:text-[#141413] hover:bg-[#EFE8DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413]"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'about' && (
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51]">
              Brand Story
            </p>
            <h2 id="modal-title" className="font-serif text-2xl font-semibold text-[#141413]">
              About Bloom &amp; Bow
            </h2>
            <p className="text-sm text-[#5A534D] leading-relaxed">
              Bloom &amp; Bow is a feminine lifestyle shopping discovery brand focused on stylish
              handbags, women&apos;s fashion, beauty essentials, and thoughtful lifestyle finds for
              women across the United States.
            </p>
            <p className="text-sm text-[#5A534D] leading-relaxed">
              Our mission is simple: help you discover polished, everyday pieces—like the Steve
              Madden Bevelyn Convertible Crossbody Bag—with clear details and transparent shopping
              links.
            </p>
          </div>
        )}

        {activeModal === 'disclosure' && (
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51]">
              Transparency
            </p>
            <h2 id="modal-title" className="font-serif text-2xl font-semibold text-[#141413]">
              Affiliate Disclosure
            </h2>
            <p className="text-sm font-semibold text-[#141413] bg-[#F7ECEC] p-4 rounded-xl border border-[#EBCED0]">
              {AFFILIATE_DISCLOSURE}
            </p>
            <p className="text-sm text-[#5A534D] leading-relaxed">
              Bloom &amp; Bow participates in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by
              advertising and linking to Amazon.com. Clicking an affiliate link never increases the
              price you pay.
            </p>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51]">
              Your Privacy
            </p>
            <h2 id="modal-title" className="font-serif text-2xl font-semibold text-[#141413]">
              Privacy Policy
            </h2>
            <p className="text-sm text-[#5A534D] leading-relaxed">
              Bloom &amp; Bow respects your privacy. This product discovery page does not sell
              personal data or require account registration to browse curated finds.
            </p>
            <p className="text-sm text-[#5A534D] leading-relaxed">
              When you select a shopping link to visit Amazon, your interaction on Amazon is
              governed by Amazon&apos;s own privacy policy and terms of service.
            </p>
          </div>
        )}

        {activeModal === 'contact' && (
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-[#8C4A51]">
              Get in Touch
            </p>
            <h2 id="modal-title" className="font-serif text-2xl font-semibold text-[#141413]">
              Contact Bloom &amp; Bow
            </h2>
            {submitted ? (
              <div className="bg-[#F7ECEC] border border-[#EBCED0] rounded-xl p-5 flex items-start gap-3">
                <Check className="w-5 h-5 text-[#8C4A51] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#141413]">Message received</p>
                  <p className="text-sm text-[#5A534D] mt-1">
                    Thank you for reaching out to Bloom &amp; Bow, {name}. We appreciate your note!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#141413] mb-1">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5DDD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#141413]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#141413] mb-1">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5DDD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#141413]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#141413] mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Questions or discovery suggestions..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5DDD2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#141413]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-5 text-xs font-semibold tracking-wider uppercase bg-[#141413] text-[#FAF7F2] rounded-full hover:bg-[#2E2B28] transition-colors"
                >
                  Send Note
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
