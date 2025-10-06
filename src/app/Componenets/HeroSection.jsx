"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
    id="hero-section"
    className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/0710.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-[radial-gradient(#A78BFA_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      {/* Welcome Badge */}
      <motion.div
        className="mb-4 relative z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="inline-block border border-white text-[12px] px-4 py-2 rounded-full tracking-widest">
          WELCOME TO DICE HOSPITALITY
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold leading-tight mb-2 relative z-20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Premiere B2B <br /> F & B CONSULTANCY
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="max-w-2xl text-sm md:text-base text-white mb-2 relative z-20 p-6 rounded-lg"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Finding the perfect place to enjoy exceptional food and a welcoming atmosphere can be a challenge — that’s where Dice Hospitality stands out. We combine culinary artistry with warm hospitality to create unforgettable moments for our guests. Every dish is thoughtfully prepared, every detail carefully considered, ensuring an experience that delights from start to finish.
      </motion.p>
    </section>
  );
}
