import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Privacy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    
    <div className="bg-gray-300 min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center animate-fade-in">
          Privacy Policy
        </h1>

        <p className="text-gray-800 mb-4 animate-fade-in-up transition-all duration-300 hover:text-gray-900">
          This Privacy Policy governs the manner in which Alankaar the Arts of Beads (alankaararts.com) (GSTIN : 08ALKPB9984H1ZK) collects, uses, maintains and discloses information collected from users (each, a "User") of the www.alankaararts.com website ("Site"). This Privacy Policy applies to this website, official social media pages / handles / channels and all products offered by Alankaar the Arts of Beads (alankaararts.com).
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Personal Identification Information</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, submit style preferences, submit feedback forms, write reviews and testimonials, place an order, subscribe to the newsletter, direct login using personal social media credentials, respond to a survey, and in connection with other activities, products, features or resources we make available on our Site.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Non-personal Identification Information</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">How We Use Collected Information</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 transition-all duration-300 hover:text-gray-900">
          <li>To improve customer service.</li>
          <li>To personalize user experience.</li>
          <li>To improve our Site.</li>
          <li>To process payments.</li>
          <li>To run promotions, contests, surveys, or other Site features.</li>
          <li>To send periodic emails.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Web Browser Cookies</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users can choose to set their web browser to refuse cookies, or to alert them when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">How We Protect Your Information</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Sharing Your Personal Information</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          We do not sell, trade, or rent Users' personal identification information to any other individual or parties.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Your Acceptance of These Terms</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          By using this Site, you signify your acceptance of this policy. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-up">Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          Alankaar the Arts of Beads (alankaararts.com) has the discretion to update this Privacy Policy at any time. We encourage Users to frequently check this page for any changes.
        </p>

        <p className="text-gray-700 mt-6 transition-all duration-300 hover:text-gray-900">
          If you have any questions about this Privacy Policy, please contact us through our ‘Contact Us’ page.
        </p>
      </div>
    </div>
    
    </>
  );
}
