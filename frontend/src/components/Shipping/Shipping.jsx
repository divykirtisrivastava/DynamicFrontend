import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Shipping() {
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
      
      <div className="bg-gray-200 min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center animate-fade-in">
          SHIPPING POLICY
        </h1>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 animate-fade-in-up">ETA: ESTIMATED TIME OF ARRIVAL:</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          Estimated time of arrival or delivery timeline will be between 4 to 5 working days from the date of order.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 animate-fade-in-up">
          DOMESTIC / LOCAL SHIPPING IN INDIA:
        </h2>
        <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          We understand how important it is for you to get your items quickly, so we make every effort to process your order within one business day.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          <li>All prepaid orders come with Free Shipping.</li>
          <li>Cash on delivery (COD) orders above ₹500 will get free shipping.</li>
          <li>Rs. 70 shipping will be applicable on COD orders below Rs. 500.</li>
          <li>Delivery usually takes 3 to 4 working days for domestic orders.</li>
          <li>All orders processed by the next business day.</li>
          <li>We ship by most reliable and popular shipping services.</li>
          <li>We do not have control over the shipment after it has left, but feel free to contact us for any inquiries.</li>
          <li>All orders come with shipment tracking numbers.</li>
          <li>Shipping times are subject to location, distance, and our logistics partners. Please order in advance to avoid any festival rush.</li>
          <li>If your location is not served by private courier companies, your order will be shipped by India Post.</li>
        </ul>

        <p className="text-gray-700 mt-6 transition-all duration-300 hover:text-gray-900">
          For more information, please contact us at <a href="mailto:shikha.b79@gmail.com" className="text-blue-500 underline hover:text-blue-700">shikha.b79@gmail.com</a>.
        </p>
      </div>
    </div>
      
    </div>
  )
}
