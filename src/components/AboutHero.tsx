import React from "react";

export function Hero() {
  return (
    <div
      className="hero min-h-96"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-80"></div>
      <div className="hero-content text-base-content">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="mb-5 text-5xl font-extrabold">
            ABOUT US
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg mt-5">
            Your premier laundry delivery service in Jakarta. We are dedicated to providing exceptional laundry services, ensuring your garments are treated with the utmost care and attention.
          </p>
        </div>
      </div>
    </div>
  );
}
