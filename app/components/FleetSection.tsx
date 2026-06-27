'use client';

interface FleetSectionProps {
  fleetCards: React.ReactNode;
}

export function FleetSection({ fleetCards }: FleetSectionProps) {
  return (
    <section id="fleet" className="section container" data-animate>
      <div className="section-copy fleet-heading">
        <h2>Our Rent A Car Offers in Pakistan</h2>
      </div>
      <div className="grid fleet-grid">{fleetCards}</div>
      <div className="fleet-more">
        <a className="button button-secondary button-small" href="#fleet">See all Cars</a>
      </div>
    </section>
  );
}
