import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Return() {
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
    <div>
      
      <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center animate-fade-in">
      RETURN & CANCELLATION POLICY
    </h1>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      At Alankaar The Art of Beads (<a href="https://alankaararts.com" className="text-blue-500 underline hover:text-blue-700">alankaararts.com</a>), we want you to be completely satisfied with your purchase. We understand that sometimes items may need to be returned or exchanged, and we're here to help make that process as easy as possible.
    </p>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      We assure our customers that we thoroughly check the quality of our products at the time of shipping and also confirm safe packing for damage-free shipping. Yet if you receive any damaged goods, or if you receive an incorrect product, or if you're simply not satisfied with what you've received, we would be happy to give you the following alternatives:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      <li>Exchange the goods for an alternative of your choice to equal value.</li>
      <li>Give you a full refund for the price you paid for the goods.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
      Refund/Replacement Guarantee
    </h2>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      All products sold at <a href="https://alankaararts.com" className="text-blue-500 underline hover:text-blue-700">alankaararts.com</a> are covered under our 7 Day Refund/Replacement Guarantee. To be eligible for a return, your item must be unused and in the same condition that you received it with price tags. It must also be in the original packaging. Please note that Gift cards, Jewelry items purchased during sale or under any other offer are totally Non-returnable items.
    </p>
    
    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 animate-fade-in-up">
      For replacing a defective/unused item:
    </h3>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      Send us a mail at <a href="mailto:shikha.b79@gmail.com" className="text-blue-500 underline hover:text-blue-700">shikha.b79@gmail.com</a>, within 7 days from the date of delivery. Do attach the original receipt as proof of purchase. It is mandatory to make a video of unboxing of your order and send it to us along with your return/replacement request.
    </p>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      The defective/unused product will be recalled, and a replacement will be shipped immediately if available. Return charges are payable by us for domestic (India) shipments and by the customer for International shipments.
    </p>

    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 animate-fade-in-up">
      Return Delivery Address:
    </h3>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      Flat No. 401, 4th Floor, JC Heights 7, Plot No. 16-17, Hanuman Vatika 1, Heerapura, Nr KD Tower, 200Ft Bypass, Ajmer Road, Jaipur, 302021, Rajasthan. Contact: 9712982168.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
      Refund
    </h2>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      If you are unhappy with your purchase and want a refund/replacement, please write to us at <a href="mailto:shikha.b79@gmail.com" className="text-blue-500 underline hover:text-blue-700">shikha.b79@gmail.com</a>. Alankaar The Art Of Beads will process your refund within 7 days of receiving the products back at our warehouse.
    </p>

    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 animate-fade-in-up">
      Shipping Charges for Returns:
    </h3>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      <strong>Local Return:</strong> If the return location is within India, we will cover the return shipping costs.<br />
      <strong>International Return:</strong> If the return location is outside India, the customer will cover the return shipping charges.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
      Cancellation
    </h2>
    <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
      Send us a mail within 24 hours of placing your order at <a href="mailto:shikha.b79@gmail.com" className="text-blue-500 underline hover:text-blue-700">shikha.b79@gmail.com</a>, stating that you are canceling your order. We will refund your amount within 48 hours of cancellation.
    </p>

    <p className="text-gray-700 mt-8 transition-all duration-300 hover:text-gray-900">
      For more queries, just drop us a mail at <a href="mailto:shikha.b79@gmail.com" className="text-blue-500 underline hover:text-blue-700">shikha.b79@gmail.com</a>. We would be more than happy to help you.
    </p>
  </div>
</div>


      
    </div>
  );
}
