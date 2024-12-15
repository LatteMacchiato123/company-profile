"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ContactHero } from "@/components/ContactHero";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
 useEffect(() => { document.title = "Contact Us | Spaclean Laundry Services"; }, []);
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

  return (
    <div>
      <section>
        <ContactHero />
      </section>
      <section id="contact" className="bg-base-100 pb-10">
        <div className="max-w-screen-xl mx-auto text-center p-10">
          <div className="bg-base-100  rounded-lg p-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mb-8 bg-base-100 p-6 rounded-md"
            >
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl font-medium text-base-content">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-xl text-base-content font-medium ">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                ></textarea>
              </div>
              <button className="btn btn-primary w-full mt-4 bg-neutral hover:bg-accent rounded-md py-4 px-4">
                Submit
              </button>
            </form>
          </div>
          <div className="mt-10 mb-10">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent">
              Contact Us via WhatsApp
            </h3>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-transparent bg-green-600 hover:bg-green-700  items-center justify-center mx-auto text-white px-4 py-2 rounded-md"
            >
              <FaWhatsapp size={18} className="mr-2" />
              WhatsApp
            </a>
            <hr className="border-gray-300 border-t-2 w-full mt-4 mx-auto" />
          </div>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Map Section */}
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126340.48609574857!2d106.68942997338992!3d-6.229728144349459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e2631c3f19%3A0x5fdb7ff69dc5f39!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1682378967892!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                  title="Google Maps Location"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="bg-base-100  p-6 rounded-lg text-left text-base-content">
                <h3 className="text-3xl font-semibold mb-4">
                  Or You Can Find Us In:{" "}
                </h3>
                <hr className="border-gray-300 border-t-2 w-1/4 mb-6" />
                <p className="text-lg leading-relaxed  mb-4">
                  <span className="font-bold">Address:</span> Jalan Sudirman,
                  Jakarta, Indonesia
                </p>
                <p className="text-lg leading-relaxe mb-4">
                  <span className="font-bold">Phone:</span> +62 (81) 2345-678
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <span className="font-bold">Email:</span>{" "}
                  contact@spacleaning.com
                </p>
                <p className="text-lg leading-relaxed ">
                  <span className="font-bold">Working Hours:</span> Mon - Fri, 9
                  AM - 5 PM
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
