import React from "react";

export default function Preloader() {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src="https://img.icons8.com/fluent/48/000000/around-the-globe.png"
        alt="AdminLTELogo"
        height={60}
        width={60}
      />
    </div>
  );
}
