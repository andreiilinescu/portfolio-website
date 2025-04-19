'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section className="flex w-full py-20 min-h-screen align-center justify-center">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <Image
                           src="/IMG_2400.jpeg"
                           // Replace with your image path
                        alt="Profile Image"
                        width={1200}
                        height={900}
                        className="rounded-lg shadow-xl"
                        priority
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
                    <p className="text-lg text-foreground mb-6">
                        I'm a passionate software developer with expertise in building modern web applications.
                        With a strong foundation in both front-end and back-end development, I create
                        seamless digital experiences that solve real-world problems.
                    </p>
                    <p className="text-lg text-foreground mb-8">
                        My journey in technology has led me to work with various cutting-edge tools
                        and frameworks, always staying at the forefront of innovation in the field.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-blue-600 text-foreground px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            View Projects
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;