import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CONTACT_EMAIL } from '@/app/config';
import './globals.css';

const siteUrl = 'https://royalluxuryrentacar.com';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'Royal Luxury Rent a Car',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.PNG`,
  image: `${siteUrl}/images/logo.PNG`,
  email: CONTACT_EMAIL,
  telephone: '+923368018945',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office #3, Floor #3, Corporate Centre, Block B, Gulberg Greens',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+923368018945',
      contactType: 'customer service',
      areaServed: 'PK',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+923342428554',
      contactType: 'customer service',
      areaServed: 'PK',
    },
  ],
  description: 'Royal Luxury Rent a Car offers premium luxury car rental services in Islamabad, Pakistan.',
  areaServed: {
    '@type': 'City',
    name: 'Islamabad',
  },
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Luxury car rental',
    },
  },
};

export const metadata: Metadata = {
  title: 'Royal Luxury Rent a Car | Islamabad Luxury Car Rental',
  description:
    'Royal Luxury Rent a Car offers premium luxury car rental in Islamabad. Rent a car, Royal Car, Royal Luxury car, Rent A Car, rent a car in Islamabad. Call or WhatsApp now.',
  keywords: [
    'Royal Luxury Rent a Car',
    'Royal Car',
    'Royal Luxury car',
    'rent a car',
    'rent a car in Islamabad',
    'luxury car rental Islamabad',
    'Pakistan car rental',
    'luxury car search',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Royal Luxury Rent a Car | Islamabad Luxury Car Rental',
    description:
      'Premium luxury car rental in Islamabad. Rent a car, Royal Luxury car, Royal Car, Rent A Car, rent a car in Islamabad.',
    url: siteUrl,
    siteName: 'Royal Luxury Rent a Car',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.PNG',
    apple: '/images/logo.PNG',
    shortcut: '/images/logo.PNG',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}