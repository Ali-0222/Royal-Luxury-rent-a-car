'use client';

interface AboutSectionProps {
  whatsappLink: string;
}

export function AboutSection({ whatsappLink }: AboutSectionProps) {
  return (
    <section id="about" className="section container about-grid" data-animate>
      <div className="about-preview">
        <img
          src="/images/1 car.jpeg"
          alt="Royal Luxury Rent a Car vehicle 1"
        />
        <img
          src="/images/2 car.jpeg"
          alt="Royal Luxury Rent a Car vehicle 2"
          className="about-small"
        />
        <img
          src="/images/3 car.jpeg"
          alt="Royal Luxury Rent a Car vehicle 3"
          className="about-small"
        />
      </div>
      <div className="about-copy">
        <span className="eyebrow dark">Services with a wide range of cars</span>
        <h2>About Royal Luxury Rent a Car</h2>
        <h3>Drive with Confidence. Arrive in Style.</h3>
        <p>
          Founded in 2008, Royal Luxury Rent a Car is redefining the car rental experience across Pakistan. Based in
          Islamabad, we offer a premium fleet of well-maintained vehicles for business, leisure, and airport travel.
        </p>
        <p>
          Whether you&apos;re heading to a business meeting, exploring the city, or planning a weekend escape, our vehicles
          and support team make the road feel easy.
        </p>
        <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Discover More
        </a>
      </div>
    </section>
  );
}
