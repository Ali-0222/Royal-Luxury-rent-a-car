'use client';

export function ModelsSection() {
  const models = [
    ['Sedan', 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=460&q=80'],
    ['Sports', 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=460&q=80'],
    ['Jeep', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=460&q=80'],
    ['SUV', 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=460&q=80'],
    ['Luxury', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=460&q=80'],
    ['Luxury', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=460&q=80'],
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
