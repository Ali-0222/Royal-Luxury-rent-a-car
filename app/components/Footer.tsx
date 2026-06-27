'use client';

import { CONTACT_EMAIL, WHATSAPP_LINK, PHONE_NUMBER } from '@/app/data/contact';

export function Footer() {
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
            <p>{PHONE_NUMBER}</p>
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
              <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=200&q=80" alt="Gallery car" />
              <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=200&q=80" alt="Gallery car" />
              <img src="https://images.unsplash.com/photo-1549921296-3a4a3e28b615?auto=format&fit=crop&w=200&q=80" alt="Gallery car" />
              <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=200&q=80" alt="Gallery car" />
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
          <small>© {new Date().getFullYear()} Royal Luxury Rent a Car. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
