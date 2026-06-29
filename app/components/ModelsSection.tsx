'use client';

export function ModelsSection() {
  const models = [
    ['Sedan', '/images/12 Toyota Altis Grande.jpg'],
    ['Executive', '/images/5 Audi A6.jpg'],
    ['Jeep', '/images/10 Toyota Hilux Revo.jpg'],
    ['SUV', '/images/14 Kia Sportage.jpg'],
    ['Luxury', '/images/1 Rolls Royce.jpeg'],
    ['Premium', '/images/3 Mercedes-Benz.jpeg'],
  ];

  return (
    <section className="section container models-section" data-animate>
      <span className="eyebrow dark">Select Car Types</span>
      <h2>We&apos;re Offering Popular<br /> Cars Models</h2>
      <div className="grid model-grid">
        {models.map(([label, image], index) => (
          <div key={`${label}-${index}`} className="model-card" data-animate>
            <img src={image} alt={`${label} car`} />
            <div>
              <h3>{label}</h3>
              <p>Available for rent</p>
            </div>
          </div>
        ))}
      </div>
      <div className="model-cta">
        <span>Car rental services specifically for our customers.</span>
        <a className="button button-primary button-small" href="#fleet">Find a Car</a>
      </div>
    </section>
  );
}
