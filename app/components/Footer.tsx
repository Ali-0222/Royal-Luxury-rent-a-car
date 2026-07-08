'use client';

import { useState } from 'react';
import { GalleryModal } from '@/app/components/GalleryModal';
import { CONTACT_EMAIL, WHATSAPP_LINK, PHONE_NUMBER } from '@/app/data/contact';
import { fleet } from '@/app/data/fleet';

const extraGalleryImages = [
  { name: 'Royal Luxury vehicle 1', image: '/images/1 car.jpeg' },
  { name: 'Royal Luxury vehicle 2', image: '/images/2 car.jpeg' },
  { name: 'Royal Luxury vehicle 3', image: '/images/3 car.jpeg' },
];

export function Footer() {
  const galleryCars = [...fleet, ...extraGalleryImages];
  const galleryImages = galleryCars.map((car) => car.image);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const isGalleryOpen = selectedImageIndex !== null;

  const showPreviousImage = () => {
    setSelectedImageIndex((current) =>
      current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
  };

  return (
    <>
      <div className="prefooter">
        <div className="container prefooter-inner">
          <img src="/images/logo.jpeg" alt="Royal Luxury Rent a Car logo" />
          <strong>Save big with our cheap car rental</strong>
        </div>
      </div>
      <footer className="footer" data-animate>
        <div className="container footer-grid">
          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <p>{CONTACT_EMAIL}</p>
            <p>Phone / WhatsApp: {PHONE_NUMBER}</p>
            <p>Office 404, 4th floor, Gulistan Khan House, AKM Fazl-ul-Haq Rd, Block E, G 6/2 Blue Area, Islamabad, 44000</p>
          </div>
          <div className="footer-column footer-links">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#fleet">Cars Rental</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Services
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Contact
            </a>
          </div>
          <div className="footer-column footer-gallery">
            <h4>Gallery</h4>
            <div className="footer-gallery-grid">
              {galleryCars.map((car, index) => (
                <button
                  key={car.name}
                  className="footer-gallery-button footer-gallery-image"
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Open ${car.name} image`}
                >
                  <img src={car.image} alt={car.name} />
                </button>
              ))}
              <button
                className="footer-gallery-button footer-gallery-more"
                type="button"
                onClick={() => setSelectedImageIndex(8)}
                aria-label="Show more gallery images"
              >
                Show More
              </button>
            </div>
          </div>
          <div className="footer-column footer-newsletter">
            <h4>Newsletter</h4>
            <form className="footer-newsletter" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Email" />
              <button type="submit" className="button button-primary">Send</button>
            </form>
          </div>
        </div>
        <div className="container footer-bottom">
          <small>&copy; {new Date().getFullYear()} Royal Luxury Rent a Car. All rights reserved.</small>
        </div>
      </footer>
      <GalleryModal
        isOpen={isGalleryOpen}
        images={galleryImages}
        currentIndex={selectedImageIndex ?? 0}
        onClose={() => setSelectedImageIndex(null)}
        onPrev={showPreviousImage}
        onNext={showNextImage}
      />
    </>
  );
}
