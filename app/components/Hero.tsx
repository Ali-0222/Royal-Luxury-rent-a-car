'use client';

import { heroSlides } from '@/app/data/hero';

interface HeroProps {
  slideIndex: number;
  showCallMenu: boolean;
  onToggleCallMenu: () => void;
  whatsappLink: string;
}

export function Hero({ slideIndex, showCallMenu, onToggleCallMenu, whatsappLink }: HeroProps) {
  const slide = heroSlides[slideIndex];

  return (
    <section className="hero" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="hero-overlay" />
      <div className="hero-copy" data-animate>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <button className="hero-contact-toggle" onClick={onToggleCallMenu}>
          Contact Options
        </button>
        {showCallMenu && (
          <div className="call-menu" data-animate>
            <a href="tel:+923001234567" className="call-menu-item">
              Call +92 300 1234567
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="call-menu-item">
              WhatsApp Message
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
