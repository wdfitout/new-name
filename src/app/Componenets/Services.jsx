"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Concept Development & Menu Design",
      slug: "research-forward",
      description:
        "Market researches and feasibility plans for your F&B business.",
      bgImage: "/images/concep-dev.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "Financial Feasibility & Investment Analysis",
      slug: "interior-design",
      description:
        "Creative and functional interior designs for hospitality projects.",
      bgImage: "/images/financial.png",
      alt: "Interior design example",
    },
    {
      title: "Location Assessment",
      slug: "menu-engineering",
      description:
        "Strategic menu engineering that improves sales mix and profitability.",
      bgImage: "/images/location.png",
      alt: "Menu design image",
    },
    {
      title: "Interior Design",
      slug: "research-forward",
      description:
        "Market researches and feasibility plans for your F&B business.",
      bgImage: "/images/interior-design.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "Kitchen Design & Tender",
      slug: "interior-design",
      description:
        "Creative and functional interior designs for hospitality projects.",
      bgImage: "/images/kitchen.png",
      alt: "Interior design example",
    },
    {
      title: "Menu Engineering",
      slug: "menu-engineering",
      description:
        "Strategic menu engineering that improves sales mix and profitability.",
      bgImage: "/images/menu.png",
      alt: "Menu design image",
    },
    {
      title: "HR Support",
      slug: "research-forward",
      description:
        "Market researches and feasibility plans for your F&B business.",
      bgImage: "/images/hr.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "OS & E Advice",
      slug: "interior-design",
      description:
        "Creative and functional interior designs for hospitality projects.",
      bgImage: "/images/ose.png",
      alt: "Interior design example",
    },
    {
      title: "SOP’S & Staff Training",
      slug: "menu-engineering",
      description:
        "Strategic menu engineering that improves sales mix and profitability.",
      bgImage: "/images/sops.png",
      alt: "Menu design image",
    },
  ];

  return (
    <section id="services" className="bg-white text-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            HOSPITALITY SERVICES
            <br className="hidden md:block" /> PRE-OPENING OPERATIONS
          </h2>
        </div>

      {/* Responsive, controllable card width via minmax */}
<div className="
  grid gap-6
  grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]     /* base: min card width ~256px */
  sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]  /* sm+: ~288px */
  lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]  /* lg+: ~320px */
">
  {services.map((service, index) => (
    <Link key={index} href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        className="bg-[#F5F5F7] overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Image: aspect keeps it proportional to width */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={service.bgImage}
            alt={service.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Bottom Content */}
        <div className="p-5 flex flex-col">
          <h3 className="text-base font-extrabold text-gray-900 mb-2 uppercase">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}
