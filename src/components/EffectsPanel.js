"use client";

import { useState, useEffect } from "react";

export default function EffectsPanel() {

  const [open, setOpen] = useState(true);

  const [effects, setEffects] = useState({
    floating: true,
    perspective: true,
    blur: true,
    animations: true,
    ambient: true,
  });

  useEffect(() => {

    const saved =
      localStorage.getItem("effects");

    if (saved) {
      setEffects(JSON.parse(saved));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "effects",
      JSON.stringify(effects)
    );

    document.body.dataset.floating =
      effects.floating;

    document.body.dataset.perspective =
      effects.perspective;

    document.body.dataset.blur =
      effects.blur;

    document.body.dataset.animations =
      effects.animations;

    document.body.dataset.ambient =
      effects.ambient;

  }, [effects]);

  const toggle = (key) => {

    setEffects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  };

  return (
    <div className="effects-wrapper">

      <button
        className="effects-toggle"
        onClick={() => setOpen(!open)}
      >
        ⚙ Effects
      </button>

      {open && (
        <div className="effects-panel">

          <button onClick={() => toggle("floating")}>
            Floating
          </button>

          <button onClick={() => toggle("perspective")}>
            Perspective
          </button>

          <button onClick={() => toggle("blur")}>
            Blur
          </button>

          <button onClick={() => toggle("animations")}>
            Animations
          </button>

          <button onClick={() => toggle("ambient")}>
            Ambient
          </button>

          <button
            className="hide-btn"
            onClick={() => setOpen(false)}
          >
            Hide
          </button>

        </div>
      )}
    </div>
  );
}