import React, { useState, useEffect } from "react";
import HeaderStyles from "../../header.module.scss";

const SOUND_MAP = {
  alarm: { name: "Alarm", file: "/Sound/alarm.mp3" },
  churchBell: { name: "Church Bell", file: "/Sound/church-bell.mp3" },
  copperBell: { name: "Copper Bell", file: "/Sound/copper-bell.mp3" },
};

const Audiosettings = () => {
  const [volume, setVolume] = useState(50);
  const [selectedSound, setSelectedSound] = useState("alarm");
  const [audioElement, setAudioElement] = useState(null);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleSoundChange = (event) => {
    const selectedSound = event.target.value;
    setSelectedSound(selectedSound);

    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  const playSound = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    const audio = new Audio(SOUND_MAP[selectedSound].file);
    audio.volume = volume / 100;
    audio.play();
    setAudioElement(audio);
  };

  const playDemoSound = () => {
    console.log("Playing demo sound");
  };

  useEffect(() => {
    if (selectedSound === "alarm") {
      playDemoSound();
    }
  }, [selectedSound]);

  return (
    <div className={HeaderStyles.audiosettings}>
      <h3>Audio Settings</h3>
      <div>
        <select value={selectedSound} onChange={handleSoundChange}>
          {Object.keys(SOUND_MAP).map((soundKey) => (
            <option key={soundKey} value={soundKey}>
              {SOUND_MAP[soundKey].name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="range"
          id="volumeControl"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{`${volume}%`}</span>
      </div>
      <div>
        <button onClick={playSound}>Play Sound Test</button>
      </div>
    </div>
  );
};

export default Audiosettings;
