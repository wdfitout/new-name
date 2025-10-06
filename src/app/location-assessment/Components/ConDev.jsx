"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
Location Assessment Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Introduction
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      Selecting the correct location is the most critical factor in determining the success of a restaurant, café, or hospitality business's success in Dubai. The vibrant F&B market in Dubai is very competitive, and a wrong location choice can make even the best idea fail. Dice Hospitality provides restaurant location analysis in Dubai to restaurateurs and hoteliers and assists them in finding profitable locations that appeal to the right audience.
      <br />
      <br />
      With years of experience in hospitality consultancy across the UAE, we blend local knowledge, local expertise, and influential industry networks. Our connections with top developers provide our clients with an unparalleled edge in determining the optimal spaces for their companies.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/la-1.png"
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
    Why Location Matters in Dubai’s Hospitality Industry?
  </h2>

  <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
    If we talk about restaurants and hospitality, then Dubai is one of the fastest growing cities in the world, with a dining theme and culture that blends international as well as local trends. In such a competitive and dynamic market, it's very important to select the best location for restaurants in Dubai that can directly inspire, attract, and influence footfall and long-term profitability.
  </p>

  <p className="text-slate-900 font-semibold text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
    A prime location should have:
  </p>

  <ul className="list-disc pl-5 space-y-2 mt-2">
    <li>Easy accessibility for target customers.</li>
    <li>Higher visibility in busy districts.</li>
    <li>Proximity to the right customer demographics.</li>
    <li>Long-term sustainability in a competitive landscape.</li>
  </ul>
</div>


          {/* Two images */}
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/images/la-2.png", alt: "Cuisine dish 1" },
              { src: "/images/la-3.png", alt: "Cuisine dish 2" },
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
          <p className="text-slate-700 px-4 md:px-8 mt-6 text-base sm:text-[17px] leading-7 md:leading-8">
             At Dice Hospitality, our Dubai restaurant market analysis indicated that the restaurants which are located in high end areas of Dubai like Dubai Marina,Downtown Dubai,Palm Jumeirah and Jumeirah Beach Residence (JBR) are more successful than those restaurants which are located in poor zones of Dubai. By combining market knowledge, tenacity and a deep understanding and research of UAE landscape, we help the emerging businesses in choosing the spaces that not align with their concept but also guarantee growth potential.
              </p>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Our Location Assessment Services
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            Our services go beyond simple recommendations — we provide a comprehensive location analysis in Dubai that covers every angle:
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
            { src: "/images/la-4.png", alt: "Process image 1" },
            { src: "/images/la-5.png", alt: "Process image 2" },
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
