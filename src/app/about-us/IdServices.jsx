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
          <p>OUR OUTPUTS</p>
          <h2 className="text-xl sm:text-2xl tracking-widest font-conthrax text-start mb-14">
            Our output helps our clients to deliver stronger asset performance
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
                Strategic Positioning
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Develop a clear vision for new or converted assets, ensuring the
                right strategy is in place to create high-performing propositions
                that respond and adapt to change.
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
                Commercial Space Planning
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Determine the optimal quantity and composition of commercial space
                across different formats and categories, the suitability of
                commercial offers, and the commercial potential of design plans.
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
                Target Mix & Brands
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Identify the optimum tenant, concession, or brand mix of an
                asset, so valuable and sustainable occupiers are attracted that
                generate greater revenue and engagement from consumers.
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
                Revenue Potential
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Develop high-performing business models, which fulfil trading
                potential, maximise market opportunity, and deliver sustainable
                performance for investors, operators, asset managers, and
                customers.
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
