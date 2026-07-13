'use client';

import { useState } from 'react';

export function HomeVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="home-video-section" aria-label="Royal Luxury Rent a Car video" data-animate>
      <div className="container home-video-grid">
        <div className="home-video-copy">
          <span className="eyebrow dark">Premium Experience</span>
          <h2>Luxury rides, ready for every occasion</h2>
          <p>
            See the Royal Luxury Rent a Car experience in motion with our premium fleet, clean interiors,
            and smooth service for Islamabad and nearby trips.
          </p>
        </div>

        <div className="phone-video-frame">
          <video
            className="home-video"
            src="/vedios/Rentacarvedio.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
          />
          <button
            className="video-sound-toggle"
            type="button"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            aria-pressed={!isMuted}
            onClick={() => setIsMuted((muted) => !muted)}
          >
            <span className="sound-icon" aria-hidden="true">
              <span />
            </span>
            {isMuted ? 'Sound Off' : 'Sound On'}
          </button>
        </div>
      </div>
    </section>
  );
}
