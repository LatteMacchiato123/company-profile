"use client"
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pickupDate: "",
    pickupTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value, }); 
  }; 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    console.log("Form Submitted", formData); 
    alert("Your order has been submitted!"); 
    // Add additional actions like sending data to a server or clearing the form };
  };
  useEffect(() => { document.title = "Contact Us | Spaclean Laundry Services"; }, []);

  return (
    <div>
      <section id="order" className="bg-base-100 py-16">
        <div className="max-w-screen-xl mx-auto text-center p-10">
          <div className="bg-base-200 shadow-lg rounded-lg p-8">
            <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
              ORDER NOW
            </h2>
            <hr className="border-primary border-t-2 w-1/3 mb-12" />
            <form onSubmit={handleSubmit} className="grid grid-cols-1 bg-base-200 md:grid-cols-2 gap-6 mb-8 p-6 rounded-md">
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Your Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Your Address</label>
                <textarea
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="input input-bordered text-base-content w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">Preferred Pickup Time</label>
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="select select-bordered w-full text-base-content border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <button className="btn btn-primary w-full col-span-1 md:col-span-2 mt-4 bg-neutral hover:bg-accent rounded-md py-2 px-4">
                Submit
              </button>
            </form>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4 text-accent">Or Contact Us via WhatsApp</h3>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-transparent bg-green-600 hover:bg-green-700 flex items-center justify-center mx-auto text-white px-4 py-2 rounded-md"
            >
              <FaWhatsapp size={18} className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
