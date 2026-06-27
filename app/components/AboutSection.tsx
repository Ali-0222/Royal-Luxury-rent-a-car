'use client';

interface AboutSectionProps {
  whatsappLink: string;
}

export function AboutSection({ whatsappLink }: AboutSectionProps) {
  return (
    <section id="about" className="section container about-grid" data-animate>
      <div className="about-preview">
        <img
          src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80"
          alt="BMW car front"
        />
        <img
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=560&q=80"
          alt="Black SUV"
          className="about-small"
        />
        <img
          src="https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=560&q=80"
          alt="Mercedes SUV"
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
