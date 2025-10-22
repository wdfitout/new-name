"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Concept Development & Menu Design",
      slug: "concept-development-menu-design",
      description:
        "Transform your restaurant's concept and menu into a culinary masterpiece with our expert development and design services.",
      bgImage: "/images/concep-dev.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "Financial Feasibility & Investment Analysis",
      slug: "financial-feasibility-investment-analysis",
      description:
        "Unlock smart investment opportunities with our meticulous financial feasibility and investment analysis services, designed to mitigate risk and optimize returns.",
      bgImage: "/images/financial.png",
      alt: "Interior design example",
    },
    {
      title: "Location Assessment",
      slug: "location-assessment",
      description:
        "Make informed decisions about your next location with our comprehensive assessment services, evaluating demographics, market trends, and site potential.",
      bgImage: "/images/location.png",
      alt: "Menu design image",
    },
    {
      title: "Interior Design",
      slug: "restaurant-interior-design",
      description:
        "Bring your vision to life with our creative interior design services, expertly blending aesthetics and functionality to create spaces that inspire and delight.",
      bgImage: "/images/interior-design.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "Kitchen Design & Tender",
      slug: "kitchen-design-tender",
      description:
        "Maximize your kitchen's potential with our comprehensive design and tender services, expertly crafting spaces that enhance productivity, safety, and culinary creativity.",
      bgImage: "/images/kitchen.png",
      alt: "Interior design example",
    },
    {
      title: "Menu Engineering",
      slug: "menu-engineering",
      description:
        "Unlock menu magic with our expert menu engineering services, optimizing profitability and delighting customers with every bite.",
      bgImage: "/images/menu.png",
      alt: "Menu design image",
    },
    {
      title: "HR Support",
      slug: "hr-support",
      description:
        "Expert HR support for a productive and compliant workplace.",
      bgImage: "/images/hr.png",
      alt: "Books symbolizing research forward",
    },
    {
      title: "OS & E Advice",
      slug: "os-e-advice",
      description:
        "Optimize your operations with expert OS&E advice, streamlining efficiency and productivity.",
      bgImage: "/images/ose.png",
      alt: "Interior design example",
    },
    {
      title: "SOP’S & Staff Training",
      slug: "sops-staff-training",
      description:
        "Train to perfection with customized SOPs and staff training solutions that drive consistency and excellence.",
      bgImage: "/images/sops.png",
      alt: "Menu design image",
    },
  ];

  return (
    <section id="services" className="bg-white text-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            HOSPITALITY SERVICES
            <br className="hidden md:block" /> PRE-OPENING OPERATIONS
          </h2>
        </div>

        <div
          className="
            grid gap-6
            grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]
            sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]
            lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]
          "
        >
          {services.map((service, index) => (
            <Link key={index} href={`/${service.slug}`} className="block h-full">
              <motion.div
                className="bg-[#F5F5F7] overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={service.bgImage}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

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
