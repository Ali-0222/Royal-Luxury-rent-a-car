'use client';

interface GallerySectionProps {
  onOpen: () => void;
}

export function GallerySection({ onOpen }: GallerySectionProps) {
  return (
    <section className="section section-gallery" data-animate>
      <div className="gallery-header">
        <h2>Explore Gallery</h2>
        <p>Click any car image in the footer to view a larger gallery with navigation.</p>
      </div>
      <div className="footer-gallery-preview">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery preview"
          onClick={onOpen}
        />
      </div>
    </section>
  );
}
