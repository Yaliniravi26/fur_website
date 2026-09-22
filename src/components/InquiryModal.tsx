import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'Residential Interior',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService,
    budget: '₹50L – ₹1 Crore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] text-[#1F1B18] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D9] my-6">
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-[#F5F2EB]">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
              INITIAL CONSULTATION
            </span>
            <h2 className="font-serif text-2xl text-[#1F1B18] font-normal">
              Start Your Project
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EAE3D9] text-[#1F1B18] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#F5F2EB] text-[#C5A880] flex items-center justify-center mx-auto border border-[#C5A880]/30 shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F1B18]">
                Thank you, {formData.name}
              </h3>
              <p className="text-sm text-[#6B6156] font-light max-w-sm mx-auto">
                We have received your briefing notes. Our principal architect will contact you within 24 business hours to schedule an introductory call.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#1F1B18] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#342D28] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@address.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans cursor-pointer"
                  >
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="Custom Furnishing">Custom Furnishing</option>
                    <option value="Renovation & Styling">Renovation & Styling</option>
                    <option value="Casa Aurelia Villa Style">Casa Aurelia Villa Style</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans cursor-pointer"
                  >
                    <option value="₹25L – ₹50 Lakhs">₹25L – ₹50 Lakhs</option>
                    <option value="₹50L – ₹1 Crore">₹50L – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹3 Crores">₹1 Crore – ₹3 Crores</option>
                    <option value="₹3 Crores +">₹3 Crores +</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8C8072] uppercase tracking-wider mb-1.5">
                  Brief Project Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Location, approximate area, timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-sm font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 rounded-full bg-[#1F1B18] hover:bg-[#342D28] text-[#FAF8F5] text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
              >
                <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                <Send className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
