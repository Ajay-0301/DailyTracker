import { useState } from 'react';
import { INTRO_IMAGE_SRC } from '../constants';

export default function Intro() {
  const [hasImageError, setHasImageError] = useState(false);
  const imageBackground = { backgroundImage: `url('${INTRO_IMAGE_SRC}')` };

  return (
    <div className="intro-stage" aria-hidden="true">
      {!hasImageError ? (
        <div className="intro-crack-scene">
          <div className="intro-panel intro-panel-left" style={imageBackground} />
          <div className="intro-panel intro-panel-right" style={imageBackground} />
          <div className="intro-seam-glow" />

          <img
            src={INTRO_IMAGE_SRC}
            alt=""
            className="intro-preload"
            onError={() => setHasImageError(true)}
          />
        </div>
      ) : (
        <div className="intro-image-fallback">Could not load the Cloudinary intro image</div>
      )}

      <div className="intro-title">
        <span>GOTHAM ACCESS</span>
        <strong>DailyTracker</strong>
      </div>
    </div>
  );
}