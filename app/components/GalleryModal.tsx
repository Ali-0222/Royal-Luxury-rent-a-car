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
    <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Car gallery">
      <button className="modal-close" type="button" onClick={onClose} aria-label="Close gallery">
        &times;
      </button>
      <div className="gallery-frame">
        <button className="gallery-nav" type="button" onClick={onPrev} aria-label="Previous image">
          &lsaquo;
        </button>
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
        <button className="gallery-nav" type="button" onClick={onNext} aria-label="Next image">
          &rsaquo;
        </button>
      </div>
    </div>
  );
}
