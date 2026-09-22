import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { SignatureProjects } from './components/SignatureProjects';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DesignProcess } from './components/DesignProcess';
import { MaterialsSection } from './components/MaterialsSection';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { JournalSection } from './components/JournalSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { InquiryModal } from './components/InquiryModal';
import { PROJECTS_DATA } from './data/interiorImages';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryPrefilledService, setInquiryPrefilledService] = useState('Residential Interior');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = (serviceName?: string) => {
    if (serviceName) {
      setInquiryPrefilledService(serviceName);
    }
    setIsInquiryModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiryPrefilledService(serviceTitle);
    setIsInquiryModalOpen(true);
  };

  const handleInquireProject = (projectName: string) => {
    setInquiryPrefilledService(`Inquiry: ${projectName}`);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1B18] antialiased selection:bg-[#C5A880] selection:text-[#141210]">
      {/* Fixed Luxury Header */}
      <Header
        onStartProject={() => handleStartProject()}
        onNavigate={scrollToSection}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onStartProject={() => handleStartProject()}
        />

        {/* 2. Intro / Brand Philosophy */}
        <Philosophy />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Signature Projects */}
        <SignatureProjects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onViewAllProjects={() => scrollToSection('projects')}
        />

        {/* 5. Project Showcase (Casa Aurelia) */}
        <ProjectShowcase
          onInquireShowcase={() => handleInquireProject('Casa Aurelia')}
        />

        {/* 6. Design Process */}
        <DesignProcess />

        {/* 7. Materials & Details */}
        <MaterialsSection />

        {/* 8. Before / After Interactive Slider */}
        <BeforeAfter />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Journal / Design Inspiration */}
        <JournalSection />

        {/* 11. CTA Section (Dramatic Dark) */}
        <CtaSection
          onStartConversation={() => scrollToSection('contact')}
        />

        {/* 12. Contact Section */}
        <ContactSection />
      </main>

      {/* 13. Dark Elegant Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />

      {/* Quick Consultation / Start Project Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        prefilledService={inquiryPrefilledService}
      />
    </div>
  );
}
