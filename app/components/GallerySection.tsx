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
          src="/images/1 Rolls Royce.jpeg"
          alt="Gallery preview"
          onClick={onOpen}
        />
      </div>
    </section>
  );
}
