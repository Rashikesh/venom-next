"use client";

import { useEffect, useState } from "react";

export default function FontBar() {
  const DEFAULT_FONT = "'EB Garamond', Georgia, serif";

  const [font, setFont] = useState(DEFAULT_FONT);
  const [isEntered, setIsEntered] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("pf-font");

    if (saved) {
      setFont(saved);
      document.documentElement.style.setProperty("--font", saved);
    }
  }, []);

  const applyFont = (value) => {
    setFont(value);

    document.documentElement.style.setProperty("--font", value);

    localStorage.setItem("pf-font", value);
  };

  return (
    <div className="font-bar">
      <label>Font Family:</label>
      <select value={font} onChange={(e) => applyFont(e.target.value)}>
        <option value="'EB Garamond', Georgia, serif">EB Garamond</option>

        <option value="'Playfair Display', Georgia, serif">
          Playfair Display
        </option>

        <option value="'Lora', Georgia, serif">Lora</option>

        <option value="'Merriweather', Georgia, serif">Merriweather</option>

        <option value="'Source Serif 4', Georgia, serif">Source Serif 4</option>

        <option value="'Nunito', sans-serif">Nunito</option>

        <option value="Georgia, serif">Georgia</option>
      </select>
      <nav>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
        <a href="#interests">Interests</a>
      </nav>
    </div>
  );
}
