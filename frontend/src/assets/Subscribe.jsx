import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import img from "../../assets/billa1.png"; // Transparent PNG image
import img1 from "../../assets/quality1.png";
import img2 from "../../assets/quality2.avif";
import img3 from "../../assets/star.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Feature 1: Quality Assured */}
          <div className="flex flex-col items-center">
            <img
              src={img} // Transparent PNG image
              alt="Quality Assured"
              className="h-24 w-24 mb-4 filter-white" // Apply white filter class
            />
            <h3 className="text-white font-semibold text-lg">
              Quality Assured
            </h3>
          </div>

          {/* Feature 2: 100% Handmade */}
          <div className="flex flex-col items-center">
            <img
              src={img1}
              alt="100% Handmade"
              className="h-24 w-24 mb-4 filter-white"
            />
            <h3 className="text-white font-semibold text-lg">
              100% Handmade
            </h3>
          </div>

          {/* Feature 3: Social Responsibility */}
          <div className="flex flex-col items-center">
            <img
              src={img2}
              alt="Social Responsibility"
              className="h-24 w-24 mb-4 filter-white"
            />
            <h3 className="text-white font-semibold text-lg">
              Social Responsibility
            </h3>
          </div>

          {/* Feature 4: Fresh Designs Every Month */}
          <div className="flex flex-col items-center">
            <img
              src={img3}
              alt="Fresh Designs Every Month"
              className="h-24 w-24 mb-4 filter-white"
            />
            <h3 className="text-white font-semibold text-lg">
              Fresh Designs Every Month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
