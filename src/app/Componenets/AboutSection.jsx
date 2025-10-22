"use client";

import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const metrics = [
    { label: "EXPERIENCE", end: 25, suffix: "YEARS" },
    { label: "NO OF PROJECTS", end: 120, suffix: "+" },
    { label: "ROI PER YEAR", end: 25, suffix: "%" },
  ];

  return (
    <section className="bg-[#F6F1EB] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/img-1.png"
              alt="Team Collaboration"
              className="rounded-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-black bg-[#f5f5f7] py-6 px-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold leading-tight mb-4">
                Experience Culinary Excellence at Dice Hospitality.
              </h2>
              <p className="mb-3 text-lg font-">
                Welcome to Dice Hospitality, where every meal is a celebration of flavor, ambiance, and hospitality. Our passion for exquisite dining and exceptional service creates an unforgettable experience for every guest.
              </p>
              <p className="mb-3 text-lg">
                Founded on the values of taste, creativity, and warm hospitality, our team of chefs, hosts, and culinary experts is dedicated to crafting moments that delight the senses and nourish the soul.
              </p>
              <p className="mb-6 text-lg">
               oin us and indulge in a dining journey where every detail matters — from the ingredients we select to the atmosphere we create.
               <br />
               <br />
               <strong>Savor the art of dining. Experience perfection with us.</strong>
              </p>
              <Link href="/about-us" passHref>
                <button className="bg-[#7D090F] text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
                  About Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-3xl mx-auto">
            <motion.img
              src="/images/img-2.png"
              alt="Digital Excellence"
              className="rounded-xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.div
              className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-6 rounded-b-xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2">Our Values</h3>
              <p className="text-sm">
                At Dice Hospitality, we believe dining is an experience built on passion, quality, and care. Every dish reflects our commitment to flavor, creativity, and excellence, while our warm hospitality ensures every guest feels truly at home.
              </p>
              <Link href="/about-us" passHref>
                <button className="mt-4 bg-[#7D090F] px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
                  ABOUT US
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="bg-[#00000070] text-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-sm">
                To be the most admired name in the hospitality industry — creating exceptional dining experiences that inspire connection, joy, and lasting memories. We aim to redefine culinary excellence through innovation, passion, and heartfelt service.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#f5f5f7] text-black p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-sm">
                Our mission is to create unforgettable dining experiences through exceptional food, genuine hospitality, and a passion for excellence. We strive to bring people together, turning every meal into a moment worth remembering.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="rounded-xl grid grid-cols-2 sm:grid-cols-3 text-center bg-[#00000070] text-white p-6">
          {metrics.map((item, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="py-4"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h4 className="text-2xl text-black font-bold">
                  {inView ? (
                    <CountUp
                      end={item.end}
                      duration={1.5}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </h4>
                <p className="text-sm text-black">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
