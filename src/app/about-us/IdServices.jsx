"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ENABLE_CARD_LINKS = false; // set to true when you want to enable links

const cardData = [
  {
    title: "CONCEPT DEVELOPMENT",
    img: "/images/ab-1.png",
    alt: "concept development",
    desc: "We work with you to understand what your concept needs to do for you and then collaborate to create the business of your dreams while ensuring that it delivers your expectation.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "LANDLORD / PROPERTY DEVELOPERS",
    img: "/images/ab-2.png",
    alt: "Modern commercial space interior for urban offices",
    desc: [
      "We assist landlords by screening potential tenants, assessing current ones, and offering expert consulting to boost restaurant operations and profits.",
    ],
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "MENU DEVELOPMENT",
    img: "/images/ab-3.png",
    alt: "Restaurant fit-out showcasing elegant dining ambiance",
    desc: [
      "No matter how strong your design or location is, success comes from offering food and drinks your guests love—and want to pay for.",
    ],
    link: "/landscape-design-dubai",
  },
  {
    title: "RESCUE & REPOSITIONING",
    img: "/images/ab-4.png",
    alt: "Modern commercial space interior for urban offices",
    desc: [
      "Whether it’s a small tweak like switching fryers or a full brand overhaul, we’ll fix it and get your restaurant back on track to profit fast.",
    ],
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "MANAGEMENT AGREEMENTS",
    img: "/images/ab-5.png",
    alt: "Restaurant fit-out showcasing elegant dining ambiance",
    desc: [
      "Partnering with Dice Hospitality means shared goals: profitability, growth, and long-term success. We only succeed when you do—our earnings depend on yours.",
    ],
    link: "/landscape-design-dubai",
  },
];

function CardWrapper({ href, children, k }) {
  if (ENABLE_CARD_LINKS && href) {
    return (
      <Link href={href} key={k} className="block">
        {children}
      </Link>
    );
  }
  return (
    <div key={k} className="block">
      {children}
    </div>
  );
}

const IdServices = () => {
  return (
    <>
      {/* WHAT WE DO */}
      <section className="bg-[#F5F5F7] text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4">WHAT WE DO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cardData.map((card, index) => (
              <CardWrapper href={card.link} k={index}>
                <div className="group cursor-default md:cursor-pointer text-left transition-all duration-300 hover:opacity-90">
                  <div className="overflow-hidden rounded mb-4">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-conthrax uppercase tracking-wide mb-2">
                    {card.title}
                  </h3>
                  {Array.isArray(card.desc) ? (
                    card.desc.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm font-play leading-relaxed mb-2"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm font-play leading-relaxed">
                      {card.desc}
                    </p>
                  )}
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>WHO WE SERVE</p>
          <h2 className="text-xl sm:text-2xl tracking-widest font-conthrax text-start mb-14">
            Our Services help our clients to deliver stronger asset performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/strategic.png"
                  alt="Strategic design thinking process"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Investors
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Unleash the full potential of your hospitality business with Dice Hospitality. Using proven strategies developed by the best restaurants in the industry, we help you avoid costly mistakes and seize every opportunity for growth. Our expert team identifies operational challenges and provides practical solutions, elevating every detail without compromising quality. Discover how efficient operations, strategic planning, and meticulous attention to detail can translate into increased profits, higher customer satisfaction, and exceptional returns on your investment. At Dice Hospitality, your success is our specialty. Let us take your business to new heights.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/commercial-space-planning.png"
                  alt="Collaborative project delivery team working"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Food Service & Hospitality
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                In today's rapidly evolving food and hospitality sector, sustainable success is built on adaptability, creative thinking, and a deep understanding of guest needs. Dice Hospitality partners with restaurants, hotels, and food service providers to help them navigate industry challenges by providing strategic insights and practical solutions that deliver tangible results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/target-mix-brands.png"
                  alt="Strategic design thinking process"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Independent Operators
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                At Dice Hospitality, we know that operating independently can present unique challenges. That’s why our expert team is always available to answer your questions and tackle any issues you face. 
                <br/>
                <br/>
                Drawing from years of hands-on experience in the restaurant industry, we deliver high standards in management, actionable marketing strategies, and proven turnaround solutions. Our mission is to help independent operators resolve real-world problems, grow their restaurant business, and achieve lasting success—with dedicated support every step of the way.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/revnue-potential.png"
                  alt="Collaborative project delivery team working"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Multi-Unit Operations
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                A major challenge for multi-unit restaurant operators is ensuring consistent profitability across all locations. This issue often goes unaddressed until owners analyze whether their operational structure is truly optimized. At Dice Hospitality, our role is to assess key operational areas and implement actionable solutions designed to drive profitability for each restaurant in your group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-[#F5F5F7] text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl tracking-widest font-conthrax text-center mb-14">
            OUR IMPACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/business-outcomes.png"
                  alt="Completed interior showcasing brand success"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Measurable Business Outcomes
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                We design for performance — spaces that drive customer retention,
                improve team productivity, and increase revenue potential through
                strategic spatial planning and branding.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/emotional-value.png"
                  alt="Happy team collaborating in well-designed space"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Emotional & Experiential Value
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Our designs create spaces where people feel inspired, welcome, and
                connected. We blend aesthetics with functionality to enhance the
                emotional experience of every user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdServices;
