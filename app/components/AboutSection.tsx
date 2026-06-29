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
          Founded in 2017, Royal luxury Rent a Car is redefining the car rental experience across Pakistan. Based in
          Islamabad, we offer a premium fleet of well-maintained vehicles — from sleek sedans to powerful SUVs and
          luxury models — all available at unbeatable prices.
        </p>
        <p>
          We don&apos;t just rent cars. We deliver trust, comfort, and convenience. Whether you&apos;re heading to a
          business meeting, exploring the city, or planning a weekend escape, our vehicles and services are tailored to
          match your lifestyle.
        </p>
        <p>
          With flexible booking options, professional support, and a customer-first approach, Royal luxury Rent a Car
          has quickly become a favorite among travelers and locals alike. Wherever the road takes you, we make sure you
          get there with ease.
        </p>
        <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Discover More
        </a>
      </div>
    </section>
  );
}
