import React from 'react';
import { motion } from 'framer-motion';

import AOS from "aos";
import "aos/dist/aos.css";
import img from '../../assets/aboutimage.jpeg';
import img1 from '../../assets/aboutimage1.jpeg';
import Testimonials from '../Testimonials/Testimonials';

export default function About() {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            
            <div className="min-h-screen lg:h-[80vh] transition-all duration-700 ease-in-out shadow-lg bg-gray-100">
                <div className="h-32 flex items-center justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4 hover:text-yellow-300 transition duration-300 ease-in-out"
                    >
                        Who We Are
                    </motion.h2>
                </div>

                {/* Container for the content */}
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    
                    {/* Image Section - two images on the left side */}
                    <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-8 overflow-hidden">
                        <motion.img
                            src={img}
                            alt="Indian Rasoi Dish 1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0" // Increased height
                        />
                        <motion.img
                            src={img1}
                            alt="Indian Rasoi Dish 2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0" // Increased height
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-4xl font-bold text-black mb-6"
                        >
                            Welcome to Alankaar The Art Of Beads
                        </motion.h1>

                        <div className="space-y-4"> {/* Add space between paragraphs */}
                            {[
                                "Based in Jaipur, the heart of Rajasthan, our journey began with a passion for artisan craftsmanship and a desire to bring timeless beauty to life. Each piece in our collection is meticulously crafted, embodying the rich cultural heritage and vibrant artistry of our region.",

                                "At Alankaar The Art Of Beads, we believe in the power of jewelry to tell stories, evoke emotions, and celebrate individuality. Our team of skilled artisans combines traditional techniques with modern design, ensuring that every item is not just an accessory but a work of art.",

                                "Our Indo-Western jewelry seamlessly bridges the gap between classic and contemporary, making it perfect for any occasion and versatile enough to pair with any outfit. Say goodbye to one-time-use pieces; our designs are meant to be cherished and worn time and again.",
                                
                                "We are committed to sustainability and ethical practices, sourcing materials responsibly and promoting fair trade. Our mission is to offer exquisite, high-quality jewelry that resonates with elegance and authenticity",
                                "Whether you're searching for a statement piece or a personalized gift, we invite you to explore our collection and find something truly special.",
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 + index * 0.3 }} // Add staggered delay
                                    className="text-black leading-relaxed mb-4"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials/>

            
        </>
    );
}
