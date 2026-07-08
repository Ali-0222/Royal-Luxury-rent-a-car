'use client';

import { CONTACT_EMAIL, WHATSAPP_LINK, PHONE_NUMBER } from '@/app/config';

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-top">
        <div className="topbar-top-left">☎ {PHONE_NUMBER}</div>
        <div className="topbar-top-right">✉ {CONTACT_EMAIL}</div>
      </div>

      <div className="topbar-main">
        <div className="topbar-left">
          <img src="/images/logo.PNG" alt="Royal Luxury Rent a Car logo" className="topbar-logo" />
        </div>

        <nav className="topbar-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#fleet">Cars</a>
          <a href="#about">About</a>
        </nav>

        <div className="topbar-right">
          <div className="call-pill">
            <span>Call Anytime</span>
            <strong>{PHONE_NUMBER}</strong>
          </div>
          <span className="search-icon">⌕</span>
          <a className="button button-primary button-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Find a Car
          </a>
        </div>
      </div>
    </header>
  );
}
