'use client';

import { useState, useEffect } from 'react';
import { TopBar } from '@/app/components/TopBar';
import { Hero } from '@/app/components/Hero';
import { HomeVideo } from '@/app/components/HomeVideo';
import { FleetSection } from '@/app/components/FleetSection';
import { FleetCard } from '@/app/components/FleetCard';
import { StatsSection } from '@/app/components/StatsSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ModelsSection } from '@/app/components/ModelsSection';
import { Footer } from '@/app/components/Footer';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { heroSlides } from '@/app/data/hero';
import { fleet } from '@/app/data/fleet';
import { WHATSAPP_LINK, PHONE_NUMBER } from '@/app/data/contact';

const testimonials = [
  {
    name: 'Hammad.',
    quote:
      'The rental price was fair, and the car was well maintained. Pickup and drop-off were quick and easy. Highly recommended for anyone needing a reliable car rental service in Islamabad!',
  },
  {
    name: 'M Huzaifa',
    quote:
      'I was impressed by the professionalism and efficiency of Royal Luxury Rent a Car. The driver was very helpful and friendly, and the vehicle was in top condition.',
  },
  {
    name: 'Furqan Khanzada',
    quote:
      'I booked a car with Royal Luxury Rent a Car for my trip to Islamabad. Everything went perfectly. The car was clean, maintained, and exactly what I needed.',
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [showFloatingOptions, setShowFloatingOptions] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useScrollReveal();

  return (
    <main className="page-shell">
      <TopBar />

      <Hero
        slideIndex={slideIndex}
        showCallMenu={showCallMenu}
        onToggleCallMenu={() => setShowCallMenu((prev) => !prev)}
        whatsappLink={WHATSAPP_LINK}
      />

      {/* <HomeVideo /> */}

      <FleetSection
        fleetCards={fleet.map((car) => (
          <FleetCard key={car.name} car={car} whatsappLink={WHATSAPP_LINK} phone={PHONE_NUMBER} />
        ))}
      />

      <StatsSection />

      <AboutSection whatsappLink={WHATSAPP_LINK} />

      <ModelsSection />

      <section className="section testimonials" data-animate>
        <div className="container testimonial-grid">
          <div>
            <span className="eyebrow dark">Our Testimonials</span>
            <h2>What They&apos;re Talking About Royal Luxury Rent a Car</h2>
          </div>
          <p>
            Customers are raving about Royal Luxury Rent a Car&apos;s outstanding service and premium car selection.
            From a stress-free booking experience to professional support, every journey feels smooth.
          </p>
        </div>
        <div className="container review-row">
          {testimonials.map((testimonial) => (
            <article className="review-card" key={testimonial.name}>
              <div className="quote-mark">&ldquo;</div>
              <p>{testimonial.quote}</p>
              <div className="stars">★★★★★</div>
              <div className="review-person">
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>Customer</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={`floating-contact ${showFloatingOptions ? 'is-open' : ''}`} aria-label="Quick contact actions">
        {showFloatingOptions && (
          <>
          <a className="floating-action floating-call" href={`tel:${PHONE_NUMBER}`} aria-label="Call Royal Luxury Rent a Car">
            ☎
          </a>
          <a
            className="floating-action floating-whatsapp"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Royal Luxury Rent a Car"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M16 3.5A12.4 12.4 0 0 0 5.4 22.3L4 28.5l6.3-1.5A12.4 12.4 0 1 0 16 3.5Zm0 22.6c-2 0-3.8-.6-5.4-1.5l-.4-.2-3.6.9.9-3.5-.3-.5A10.2 10.2 0 1 1 16 26.1Zm5.8-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
            </svg>
          </a>
          </>
        )}
        <button
          className="floating-action floating-toggle"
          type="button"
          aria-label="Show quick contact actions"
          aria-expanded={showFloatingOptions}
          onClick={() => setShowFloatingOptions((open) => !open)}
        >
          ☎
        </button>
      </div>

      <Footer />
    </main>
  );
}
