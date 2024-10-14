import React, { useEffect, useState } from "react";
import footerLogo from "../../assets/website/logo.jfif";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope, // Importing the email icon
} from "react-icons/fa";
import axios from "axios";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Footer() {
  const [category, setCategory] = useState([]);
  async function getCategory() {
    let result = await axios.get('https://actl.co.in/sikha/categoryget')
    setCategory(result.data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src={footerLogo}
                alt="Footer Logo"
                className="max-w-[100px]" // Adjusted the width here
              />
            </h1>

            <p>
              © <a href="https://techxpert.in/" className="underline">Techxpert.in</a> | All rights reserved
            </p>
          </div>

          {/* Footer as */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Section 1 - Important as */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Information
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/">Home</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/about">About Us</a>
                  </li>
                  {category &&
                    category.map((item) => (
                      <li>
                        <a href={`/view/${item.categoryName}`} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">{item.categoryName}</a>
                      </li>
                    ))
                  }
                
                  
                </ul>
              </div>
            </div>

            {/* Section 2 - Other as */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Support
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/shipping">Shipping And Delivery</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/return">Cancellation & Refund Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/terms">Terms And Conditions</a>
                  </li>


                </ul>
              </div>
            </div>

            {/* Section 3 - Social as & Contact */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Connect with us
                </h1>
                <div className="flex items-center gap-3 mt-6">
                  <a href="mailto:shikha.b79@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-3xl" /> {/* Email icon */}
                  </a>
                  <a
                    href="https://www.instagram.com/alankaar_the_art_of_beads?utm_source=qr&igsh=MW9ocWFoaDF4M212bw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/iGTQXELidLDFrxsW/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Flat 401, JC HEIGHTS 7, PLOT no 16-17, Hanuman Vatika 1, Heerapura, Near KD TOWER, 200 Feet Bypass Ajmer road, Jaipur, 302021</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 9712982168</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}