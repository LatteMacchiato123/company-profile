import React from "react";

export function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-80 transition duration-300 ease-in-out hover:bg-opacity-90"></div>
      <div className="hero-content text-base-content p-5 md:p-10 lg:p-20 rounded-lg">
        <div className="max-w-screen-lg mx-auto text-left   ">
          <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold">
            YOUR PREMIUM LAUNDRY DELIVERY SERVICE IN JAKARTA
          </h1>
          <p className="mb-5 text-base md:text-lg lg:text-xl mt-5 md:mt-10">
            Enjoy the luxury of fresh, clean clothes without the hassle. Our
            laundry service offers fast, reliable, and top-quality cleaning for
            all your garments.
          </p>
          <button className="btn btn-primary"><a href="/about">About Us</a></button>
        </div>
      </div>
    </div>
  );
}
