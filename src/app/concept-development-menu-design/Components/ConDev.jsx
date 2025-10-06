"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Restaurant Concept Development & Menu Design Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Concept
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      A perfectly successful restaurant starts with two key foundations: a
      strong concept and a well-engineered menu. At Dice Hospitality, we are
      professional restaurant consultants in Dubai, providing restaurant concept
      development and menu design services in Dubai that turn concepts into
      reality and maximize long-term profitability.
      <br />
      <br />
      As top-rated hospitality consultants in Dubai, we know that every
      successful F&amp;B business begins with a clear vision, solid research,
      and a brand identity that speaks to its target audience. From the
      restaurant concept creation in UAE to menu development and consultation,
      our services address every aspect of opening, operating, and establishing
      a restaurant in the UAE market.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/cd-1.png"
      alt="Concept image"
      width={500}   // set your actual width
      height={700}  // set your actual height
      className="rounded"
    />
  </div>
</div>



      {/* ================= Cuisine Section (texture bg) ================= */}
      <div
        className="w-full py-10 sm:py-12 md:py-16"
        style={{
          backgroundImage: "url(/images/texture-bg.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
          {/* Text first on mobile, right on desktop */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4">
              Why Concept Development Matters?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              In today's dynamic food and beverage world, an idea alone is not enough to succeed.
              Our restaurant concept development Dubai offering turns your vision into a ready-to-launch
              business model with informed research and planning behind it.<br /><br />
              We study the UAE dining culture, review market research for restaurants UAE, and examine
              competitors in order to find gaps and opportunities. This ensures your concept is aligned
              with consumer demands, location-based needs, and current industry trends.<br /><br />
              Our approach combines restaurant management consulting expertise with creative brand and
              menu creation, ensuring your business is positioned for long-term success. Whether you’re
              developing a high-end fine dining venue, casual café, or franchise-ready concept, our
              restaurant consultancy services in Dubai provide a complete, sustainable solution.
            </p>
          </div>

          {/* Two images */}
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/images/dev1.png", alt: "Cuisine dish 1" },
              { src: "/images/dev2.png", alt: "Cuisine dish 2" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Our Concept Development Process
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            The detailed process of concept development in restaurant hospitality by
            DICE ensures every stage of your Restaurant project is carefully planned
            and executed:
            <br /><br />
            <strong>Market Research &amp; Competitor Analysis – </strong>
            We conduct a deep Market Research for Restaurants in UAE including Dubai
            to evaluate the demand, trends, and competitors.
            <br /><br />
            <strong>Concept Definition &amp; Brand Positioning – </strong>
            We build your unique identity that differentiates your brand in the
            crowded and competitive F&amp;B landscape.
          </p>
        </div>

        {/* Two images */}
        <div className="order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/proc1.png", alt: "Process image 1" },
            { src: "/images/proc2.png", alt: "Process image 2" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
