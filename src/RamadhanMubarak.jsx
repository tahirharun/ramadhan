import { useRef } from "react";

export default function RamadhanMubarak() {
  const audioRef = useRef(null);

  const playNasheed = () => {
    audioRef.current.play();
  };

  return (
    <div className="ramadhan-container">
      <div className="moons">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="moon">☪</span>
        ))}
      </div>

      <h1 className="ramadhan-title">🌙 Ramadhan Mubarak</h1>

      <p className="ramadhan-text">
        May this holy month bring peace, mercy, and blessings to you and your family 🤍
      </p>

      <button className="nasheed-btn" onClick={playNasheed}>
        ▶ Play Nasheed
      </button>

      <audio ref={audioRef} loop>
        <source src="/nasheed.mp3" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </div>
  );
}