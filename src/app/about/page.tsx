import React from "react";
import Head from "next/head"; // Importing Head component for modifying <head> elements
import { Hero } from "@/components/AboutHero"; // Hero component displaying top section
import Image from "next/image"; // Next.js Image component for optimized images
import { ClientReview } from "@/components/ClientReview"; // Client reviews section
import { OurTeams } from "@/components/Teams"; // Our team section
import { FindUs } from "@/components/FindUs";

export default function AboutUs() {
  return (
    <div className="bg-base-100 text-base-content mt-16">
      <Head>
        <title>About Us | Eco Cleaning Services</title>
      </Head>

      <Hero />

      {/* Main Content Area */}
      <div className="max-w-screen-xl mx-auto text-center p-10 grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row mt-32 items-center">
          {/* Image of the team or service */}
          <Image
            src="/assets/about-us.jpg"
            alt="Our cleaning team at work"
            width={600}
            height={600}
            className="rounded-lg mb-6 md:mb-0 md:mr-6 transition duration-300 ease-in-out hover:scale-105"
            layout="intrinsic"
            loading="lazy"
          />

          {/* Description of the company or service */}
          <div className="card bg-base-100 flex-grow ">
            <div className="card-body text-left">
              <h2 className="text-5xl font-bold mb-12 text-gradient bg-gradient-to-r from-neutral via-accent to-base-content text-transparent bg-clip-text text-left">
                OUR MESSAGE
              </h2>
              <hr className="border-primary border-t-2 w-1/3 mt-2 mb-4" />
              <p className="text-2xl">
                <p className="text-xl mb-3">
                  At Spaclean, we foster a culture of creativity and innovation,
                  encouraging our team to think outside the box and explore new,
                  strategic solutions for both personal and professional growth.
                </p>
                <p className="text-xl">
                  We believe that by embracing fresh ideas and a bigger-picture
                  mindset, we can continue to evolve and provide the highest
                  level of service to our customers.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Reviews Section: Displays feedback from clients */}
      <div className="mt-32">
        <ClientReview />
      </div>

      <div className="mt-32">
        <OurTeams />
      </div>
      <div className="mt-32"><FindUs /></div>
    </div>
  );
}
