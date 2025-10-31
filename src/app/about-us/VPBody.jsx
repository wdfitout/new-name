"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Headings */}
      <div className="mb-6">
        <h1 className="text-sm sm:text-2xl md:text-3xl font-semibold text-[#7D090F] mt-1 leading-snug">
          We are the leading experts in commercial space planning for dining, leisure and hospitality
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 space-y-4 text-sm sm:text-lg leading-6 text-black font-play">
          <p>
          Dice Hospitality is a forward-thinking business conglomerate committed to excellence, innovation, and transformative experiences in the consultancy and hospitality sectors. With a deep-rooted passion for strategic growth and premium service, we empower businesses and create extraordinary experiences that leave a lasting impact.
          </p>
          <p>
          At Dice Hospitality, we go beyond conventional business practices—we craft tailored solutions, elevate brands, and redefine industry standards. Whether through strategic consultancy that drives business success or hospitality ventures that captivate and inspire, our commitment to quality, creativity, and excellence remains unwavering.
          </p>
       
          
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] lg:h-full min-h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/leading-experts.png"
              alt="Interior design project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>






    </section>
  );
};

export default VPBody;
