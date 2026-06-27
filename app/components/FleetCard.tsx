'use client';

import { FleetCar } from '@/app/data/fleet';

interface FleetCardProps {
  car: FleetCar;
  whatsappLink: string;
  phone: string;
}

export function FleetCard({ car, whatsappLink, phone }: FleetCardProps) {
  return (
    <article className="fleet-card" data-animate>
      <img src={car.image} alt={car.name} />
      <div className="fleet-card-body">
        <h3>{car.name}</h3>
        <p>Price on call / WhatsApp</p>
        <div className="fleet-actions">
          <a href={`tel:${phone}`} className="button button-small button-call">
            Call Us
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-small button-whatsapp">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
