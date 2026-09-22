import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    budget: '₹50L – ₹1 Crore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>DIRECT INQUIRY</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08] mb-6">
                Let's Create <br />
                <span className="italic font-normal text-[#8C8072]">Something Beautiful</span>
              </h2>

              <p className="font-sans text-[#6B6156] text-sm sm:text-base font-light leading-relaxed mb-10">
                Whether you are breaking ground on a new villa or envisioning a serene renovation for your apartment, we welcome your inquiry with personalized attention.
              </p>

              {/* Direct Studio Credentials */}
              <div className="space-y-6 pt-4 border-t border-[#EAE3D9]">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#F5F2EB] text-[#C5A880] shrink-0 border border-[#EAE3D9]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-widest text-[#8C8072] uppercase">
                      STUDIO EMAIL
                    </div>
                    <a
                      href="mailto:hello@lumiereinteriors.com"
                      className="font-serif text-lg text-[#1F1B18] hover:text-[#C5A880] transition-colors"
                    >
                      hello@lumiereinteriors.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#F5F2EB] text-[#C5A880] shrink-0 border border-[#EAE3D9]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-widest text-[#8C8072] uppercase">
                      TELEPHONE
                    </div>
                    <a
                      href="tel:+919000000000"
                      className="font-serif text-lg text-[#1F1B18] hover:text-[#C5A880] transition-colors"
                    >
                      +91 90000 00000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#F5F2EB] text-[#C5A880] shrink-0 border border-[#EAE3D9]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-widest text-[#8C8072] uppercase">
                      STUDIO LOCATION
                    </div>
                    <div className="font-serif text-lg text-[#1F1B18]">
                      Chennai, Tamil Nadu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="mt-10 p-5 rounded-2xl bg-[#F5F2EB] border border-[#EAE3D9] flex items-center space-x-3 text-xs font-mono text-[#6B6156]">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>Monday – Saturday: 10:00 AM – 7:00 PM IST • By Appointment</span>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#EAE3D9] shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#F5F2EB] text-[#C5A880] flex items-center justify-center mx-auto border border-[#C5A880]/30 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#1F1B18] font-normal">
                    Thank You, {formData.name}
                  </h3>
                  <p className="font-sans text-sm text-[#6B6156] font-light max-w-md mx-auto leading-relaxed">
                    Your inquiry has been directly forwarded to our principal design team. We will review your vision and reply within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Residential Interior',
                        budget: '₹50L – ₹1 Crore',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#1F1B18] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#342D28] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ananya Roy"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans placeholder:text-[#A69B8F] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans placeholder:text-[#A69B8F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans placeholder:text-[#A69B8F] transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans transition-colors cursor-pointer"
                      >
                        <option value="Residential Interior">Residential Interior</option>
                        <option value="Space Planning">Space Planning</option>
                        <option value="Custom Furnishing">Custom Furnishing</option>
                        <option value="Renovation & Styling">Renovation & Styling</option>
                        <option value="Whole Villa Architecture">Whole Villa Architecture</option>
                      </select>
                    </div>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans transition-colors cursor-pointer"
                    >
                      <option value="₹25L – ₹50 Lakhs">₹25L – ₹50 Lakhs</option>
                      <option value="₹50L – ₹1 Crore">₹50L – ₹1 Crore</option>
                      <option value="₹1 Crore – ₹3 Crores">₹1 Crore – ₹3 Crores</option>
                      <option value="₹3 Crores +">₹3 Crores +</option>
                    </select>
                  </div>

                  {/* Tell us about your project */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#8C8072] uppercase mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your location, square footage, aesthetic goals, or specific architectural dreams..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F2EB] border border-[#E0D7CD] focus:border-[#C5A880] focus:outline-none text-[#1F1B18] text-sm font-sans placeholder:text-[#A69B8F] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#1F1B18] hover:bg-[#342D28] text-[#FAF8F5] font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-[#1F1B18]/20"
                  >
                    <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
