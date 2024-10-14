import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Terms() {
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
    
    <div className="min-h-screen bg-gray-300 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Amendments to Terms and Conditions</h2>
          <p className="text-gray-700 leading-relaxed">
            Alankaar the Arts of Beads (GSTIN: 08ALKPB9984H1ZK) (Website: www.alankaararts.com)
            reserves the right to amend the Terms and Conditions at any time without any prior
            notice. All amendments will be applicable immediately after the updates are made on this
            site. You are encouraged to visit the Terms and Conditions each time you sign up/sign in
            for our services and products to remain updated on the amendments, if any.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Online Account</h2>
          <p className="text-gray-700 leading-relaxed">
            As a registered user, you can login to www.alankaararts.com using your email ID and a
            password of your choice. You will be solely responsible to keep your password
            confidential and safe. Any order placed from your login ID will be considered as an
            order placed by you and will be fulfilled accordingly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Terms of Operations</h2>
          <p className="text-gray-700 leading-relaxed">
            www.alankaararts.com in its sole discretion reserves the right to suspend or cancel any
            of its services at any time without any prior notice. All outstanding orders will,
            however, be fulfilled or fully refunded. www.alankaararts.com reserves the rights to
            refuse services to anyone at any time without assigning any reasons for the decision.
            www.alankaararts.com will not be responsible for any damage caused to anyone by the use
            of its website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Warranty and Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            www.alankaararts.com will not be responsible for any damage arising out of the use of
            the products shipped to the members or the products bought through “www.alankaararts.com”.
            We accept no liability for any delay or failure to perform our obligation under these
            Terms and Conditions if such a delay or failure is due to circumstances beyond our
            reasonable control.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Restriction on Commercial Exploitation of the Content</h2>
          <p className="text-gray-700 leading-relaxed">
            This site is designed, updated, and managed independently by www.alankaararts.com. You
            should not copy, modify, publish, transfer, sell, reproduce, distribute, display, or in
            any way commercially exploit the content of www.alankaararts.com, failing which suitable
            legal actions will be taken under the exclusive jurisdiction of Jaipur Courts.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Damaged Products</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team carries out rigorous quality checks before shipping out the products to our
            customers. However, damages caused in transit after the product has been shipped are
            beyond our control. If you receive a damaged product, we will replace it with another
            piece of the same or similar kind based on our stock. Kindly email us at
            shikha.b79@gmail.com along with a package opening video within 48 hours from receiving
            your order, and we will explain the next steps. We will not entertain claims for damages
            reported after 48 hours.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Missed Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Our logistics partners attempt twice to deliver your shipment. Orders not collected will
            be returned to us. We will re-ship the order at your request for an additional ₹250. All
            Cash-on-Delivery orders that are returned will be re-shipped only after the payment is
            made online, including shipping charges.
          </p>
        </section>
      </div>
    </div>
    
    </>
  );
}
