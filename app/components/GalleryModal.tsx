'use client';

interface GalleryModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }: GalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="gallery-modal" data-animate>
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      <div className="gallery-frame">
        <button className="gallery-nav" onClick={onPrev}>
          ‹
        </button>
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
        <button className="gallery-nav" onClick={onNext}>
          ›
        </button>
      </div>
    </div>
  );
}
