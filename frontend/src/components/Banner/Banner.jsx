import React from "react";
import videoBanner from "../../assets/whatsapp.mp4"; // Import the video from assets
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

export default function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* video section */}
          <div data-aos="zoom-in">
            <video
              src={videoBanner} // Path to the video
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
               // Optional: You can add autoplay, loop, and muted if needed
              autoPlay
              loop
              muted
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Handcrafted Beauty
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Celebrate every moment with our exquisite handmade jewelry.
              Whether it's a special occasion or everyday wear, find the perfect
              piece at Alankaar - The Art of Beds. Explore our collection or
              contact us for a custom creation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
