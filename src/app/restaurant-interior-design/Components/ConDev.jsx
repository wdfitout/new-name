"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
   Restaurant Interior Design & Fit Out Contractors in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
    Restaurant Interior Design Concept in Dubai
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      At Dice Hospitality, we are restaurant interior design specialists in Dubai, designing spaces that convert dining into memory-making experiences. From fine dining restaurants to cafes, bakeries, lounges, and quick service restaurants, our team combines creativity, strategy, and technical expertise to produce interiors that take your brand to the next level and drive loyal customers to your door. As one of the best restaurant interior design companies in Dubai, UAE, we offer concept-to-execution services specifically designed for the hospitality industry.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/con2.png"
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
              Why Restaurant Interior Design Matters in Dubai?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
            In a city as dynamic as Dubai, with competition in the F&B industry is so tough, the look of your restaurant in Dubai is a crucial key to success. Ambiance, planning, illumination, and interior Designs are as important as the cuisine you serve to your customers. A well designed restaurant not only elevates the dining experience but also reinforces your restaurant branding through interiors. Whether it is a luxury restaurant interior in UAE or a family dining interior, we craft environments that engage the senses, reflect your brand identity, and ensure repeat visits.
            </p>
          </div>
      
          {/* One image (landscape format, same styling) */}
            <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded">
            <Image
              src="/images/rid-3.png"
              alt="Cuisine dish 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            </div>
            </div>
        </div>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Our Restaurant Interior Design Services in Dubai
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            We offer complete interior design and restaurant fit-out contracting in Dubai, providing solutions that are both practical and visually striking. Our services include:
            <br /><br />
            <div className="max-w-2xl order-1">
        <ol className="list-disc list-inside text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 space-y-2">
        <li>Conceptual design development aligned with your brand vision</li>
        <li>Space planning, seating plan, and workflow optimization</li>
        <li>3D visuals, mood boards, and execution drawings</li>
        <li>Furniture and décor design, selection, and sourcing</li>
        <li>Kitchen design and equipment layout</li>
        <li>Full MEP (Mechanical, Electrical & Plumbing) design</li>
        <li>Bill of Quantity preparation and tender documentation</li>
        <li>Contractor selection, project execution, and handover</li>
        </ol>
        </div>

          </p>
        </div>

        {/* Two images */}
        <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded">
            <Image
              src="/images/rid-1.png"
              alt="Cuisine dish 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            </div>
            </div>
      </div>
    </section>
  );
}
