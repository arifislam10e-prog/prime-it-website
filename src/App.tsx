import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingControls from '@/components/FloatingControls';
import ScrollProgress from '@/components/ScrollProgress';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();
  const [modalPackage, setModalPackage] = useState<string | undefined>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const openModal = (service?: string, pkg?: string) => {
    setModalService(service);
    setModalPackage(pkg);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />

      {/* Mouse glow */}
      <div
        className="mouse-glow hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <Navbar onAuditClick={() => openModal()} />

      <main>
        <Hero onOrderClick={openModal} />
        <About />
        <Services onOrderClick={openModal} />
        <WhyUs />
        <Pricing onOrderClick={openModal} />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA onOrderClick={() => openModal()} />
        <Contact />
      </main>

      <Footer />

      <FloatingControls />

      <OrderModal
        open={modalOpen}
        onClose={closeModal}
        initialService={modalService}
        initialPackage={modalPackage}
      />
    </>
  );
}
