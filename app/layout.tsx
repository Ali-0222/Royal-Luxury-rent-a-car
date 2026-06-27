import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

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
  metadataBase: new URL('https://royalluxuryrentacar.com'),
  openGraph: {
    title: 'Royal Luxury Rent a Car | Islamabad Luxury Car Rental',
    description:
      'Premium luxury car rental in Islamabad. Rent a car, Royal Luxury car, Royal Car, Rent A Car, rent a car in Islamabad.',
    url: 'https://royalluxuryrentacar.com',
    siteName: 'Royal Luxury Rent a Car',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
