

import React from "react";

const CircleSVG = () => {
  return (
    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
      <svg
        viewBox="0 0 88 88"
        className="w-full max-w-screen-xl text-indigo-100"
      >
        <circle fill="currentColor" cx="44" cy="44" r="15.5" />
        <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
        <circle
          fillOpacity="0.2"
          fill="currentColor"
          cx="44"
          cy="44"
          r="37.5"
        />
        <circle
          fillOpacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="29.5"
        />
        <circle
          fillOpacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="22.5"
        />
      </svg>
    </div>
  );
};

export default CircleSVG;