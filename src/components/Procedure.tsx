import React from "react";
import { FaTruck, FaClock, FaClipboardList } from "react-icons/fa";

export function Procedure() {
  return (
    <div className="bg-base-100 text-base-content p-10">
      <h1 className="text-4xl font-bold text-center mb-10"></h1>
      <p></p>
      <div className="flex flex-wrap justify-center">
        <div className="card w-96 bg-base-100 mb-4 mx-2 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <FaClipboardList size={48} className="mb-4 text-primary" />
            <h2 className="card-title text-gradient underli">Choose Your Own Schedule</h2>
            <hr className="border-primary border-t-2 w-1/3 mb-3" />
            <p>
              Place your order through our online portal, social media, or by
              calling us. Select the services you need and schedule a pickup at
              your convenience.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 mb-4 mx-2 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl ">
          <div className="card-body items-center text-center">
            <FaTruck size={48} className="mb-4 text-primary" />
            <h2 className="card-title">We Process Your Laundry</h2>
            <hr className="border-primary border-t-2 w-1/3 mb-3"/>
            <p>
              Our team will clean and care for your laundry, ensuring it is
              handled with the utmost attention and quality.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 mb-4 mx-2 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <FaClock size={48} className="mb-4 text-primary" />
            <h2 className="card-title">We Deliver Your Laundry</h2>
            <hr className="border-primary border-t-2 w-1/3 mb-3"/>
            <p>
              Our driver will deliver your freshly cleaned laundry back to you
              at the scheduled time, so you can enjoy your free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
