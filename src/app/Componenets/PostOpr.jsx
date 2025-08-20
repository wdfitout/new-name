"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "OPERATION MANAGEMENT",
    img: "/images/opertaion-mgmt.png",
    desc: "Luxury villa interior design in Dubai tailored to your lifestyle by experts at WE DO interior design and fitout.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "HR MANAGEMENT",
    img: "/images/hr-mgmt.png",
    desc: "Smart, elegant, and space-optimized apartment interior design and fit-out crafted for modern Dubai living.",
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "ACCOUNTS & COST CONTROL",
    img: "/images/accounts.png",
    desc: "Premier landscape company in Dubai offering bespoke landscape design in Dubai for villas, gardens, and outdoor spaces.",
    link: "/landscape-design-dubai",
  },
  {
    title: "IT SUPPORT",
    img: "/images/it.png",
    desc: "Customized restaurant interior design services in Dubai, crafting unique dining atmospheres. Experts in restaurants & café interior design.",
    link: "/restaurant-interior-design",
  },
];

const PostOpr = () => {
  return (
    <section id="features" className="bg-[#f6f1eb] py-0 md:py-16
     bg-[url('/images/bg-f-m.webp')] 
    sm:bg-[url('/images/bg-f-d.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-black 
    overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <h2 className="mt-6 md:mt-10 mb-10 font-semibold text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
          POST-OPENING OPERATIONS MANAGEMENT
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="text-left group cursor-pointer">
                {/* Title */}
                <h3 className="text-[12px] md:text-sm font-semibold uppercase tracking-wide mb-2">
                  {card.title}
                </h3>

                {/* Gradient line */}
                <div className="w-72 h-[2px] bg-gradient-to-r from-[#7D090F]/60 via-[#7D090F] to-[#7D090F]/30 mb-4" />


                {/* Image with hover effect */}
                <div className="overflow-hidden mb-4 rounded-lg">
                  <Image
                    src={card.img}
                    alt={card.title}
                    title={card.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Paragraph */}
                <p className="text-[12px] md:text-sm font-play leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostOpr;
