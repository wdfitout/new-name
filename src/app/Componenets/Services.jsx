"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaChartLine,
  FaUserCog,
  FaChalkboardTeacher,
  FaBullhorn,
} from "react-icons/fa";
import {
  MdLocationSearching,
  MdOutlineArchitecture,
  MdMenuBook,
  MdInventory,
} from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";

export default function Services() {
  const services = [
    {
      title: "Concept Development & Menu Design",
      description:
        "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
      icon: <FaLightbulb className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Lightbulb symbolizing concept development",
    },
    {
      title: "Financial Feasibility & Investment Analysis",
      description:
        "Expand your brand’s reach and boost engagement with a compelling social media presence.",
      icon: <FaChartLine className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Graph icon representing financial feasibility",
    },
    {
      title: "Location Assessment",
      description:
        "Engage, inform, and convert your audience with high-quality, relevant content.",
      icon: <MdLocationSearching className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Location pin icon symbolizing assessment",
    },
    {
      title: "Interior Design",
      description:
        "From compelling logos and branding materials to eye-catching visuals that connect with your audience.",
      icon: <MdOutlineArchitecture className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Architecture icon representing interior design",
    },
    {
      title: "Kitchen Design & Tender",
      description:
        "Increase your brand’s visibility and drive organic traffic to your website with our cutting-edge SEO techniques.",
      icon: <GiCookingPot className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Cooking pot icon symbolizing kitchen design",
    },
    {
      title: "Menu Engineering",
      description:
        "Achieve better ROI with integrated, cost-effective PPC campaigns customized to your goals.",
      icon: <MdMenuBook className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Book icon representing menu engineering",
    },
    {
      title: "HR Support",
      description:
        "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
      icon: <FaUserCog className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Gear and person icon symbolizing HR support",
    },
    {
      title: "OS & E Advice",
      description:
        "Expand your brand’s reach and boost engagement with a compelling social media presence.",
      icon: <MdInventory className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Inventory icon symbolizing OS & E advice",
    },
    {
      title: "SOP’S & Staff Training",
      description:
        "Engage, inform, and convert your audience with high-quality, relevant content.",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      bgImage: "/images/B (1).jpg",
      alt: "Teacher icon representing staff training",
    },
  ];

  return (
    <section 
    id="services"
    className="bg-white text-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            HOSPITALITY SERVICES
            <br className="hidden md:block" /> PRE-OPENING OPERATIONS
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition text-white min-h-[260px] overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Background Image */}
              <Image
                src={service.bgImage}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority={false}
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>

              <button className="relative z-10 mt-6 bg-[#7D090F] text-white px-4 py-2 rounded-full text-sm font-semibold self-start">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Experience the magic of Buzz Digital Agency. Contact us to discuss your project.
            </h3>
            <p className="mb-6">
              At Dice Hospitality, we combine expert strategy with cutting-edge technology to deliver outstanding results. Our dedicated team excels in every facet of F&amp;B.
            </p>
            <button className="bg-[#7D090F] text-white px-6 py-3 rounded-full font-semibold">
              Get Started
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/team.webp"
              alt="Team discussion"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
