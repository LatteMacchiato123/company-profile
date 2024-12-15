import React from "react";

export function ContactHero() {
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
           CONTACT US
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg mt-5">
          Connect with Us: Want to schedule a pickup or delivery? Have questions or need assistance? Contact <b>Spaclean</b>, your trusted partner for professional garment care. Were here to serve you.
          </p>
        </div>
      </div>
    </div>
  );
}
