"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    OS&E Advice – Dice Hospitality
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
     At Dice hospitality, our team specializes in delivering the expert OS&E Advice in Dubai that empowers resorts, hotels, restaurants and the serviced apartments to enhance their operation efficiency, consistency and excellence. Our role goes beyond the simple procurement, Dice is your strategic partner while ensuring that every step of your Operating Supplies & Equipment (OS&E) is planned, well sourced and implemented with accuracy.
      <br />
      <br />
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/ose-1.jpg"
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
              What is OS&E in Hospitality?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Operating Supplies & Equipment (OS&E) is the day-to-day essentials that ensures hassle-free operations in the hospitality industry. It encompasses guestroom items like linens, toiletries, hangers, and kettles; housekeeping equipment like laundry items and cleaning trolleys; front office items like key cards and bag trolleys; and restaurant and bar supplies like crockery, cutlery, glasses, and bar machinery.
              <br />
              <br />
              In leisure facilities OS&E covers pool towels, spa robes and more. Although these items can be compared with furniture or décor, they are the backbone of operational excellence and guest satisfaction.
              <br />
              <br />
            </p>
          </div>

     {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/ose-2.png"
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
            Why OS&E Advice Matters
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            That’s where our Hospitality OS&E Consultancy adds real value. We understand that poor planning of your restaurant can result in cost overruns, delays, or service inconsistencies. Through our OS&E Advisory Services, we align every choice with your brand standards, budget, and operational needs.
            <br />
            <br />
          Whether it’s OS&E for Hotels & Resorts, Restaurant OS&E in Dubai, or fully furnished serviced apartments, our team ensures your property is equipped for success from day one.
            <br />
            <br />
          </p>
        </div>

       
     {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/ose-3.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>

      </div>
       {/* ================= Cuisine Section------ (texture bg) ================= */}
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
              Our Approach to OS&E Advisory Services
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              At Dice Hospitality, our approach to OS&E Advisory Services is built on efficiency, quality, and sustainability. We make sure that every detail of Operating Supplies & Equipment (OS&E) is dealt with precision through an organized approach:
              
               <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Needs Assessment & Planning</strong> – We analyze your project needs to craft a full OS&E plan to suit hotels, resorts, or restaurants.</li>

         <li><strong>Budget Optimization </strong>– As the <strong>Best Procurement Management Consultant in Dubai</strong>, we align OS&E sourcing with your budget while maintaining superior quality.</li>

         <li><strong>Supplier Network Access</strong> – With firm relationships with international and local partners, we offer seamless access to high-quality hotel operating supplies and equipment.</li>

         <li><strong>Customized Procurement Solutions</strong> – From restaurant OS&E planning and buying to Hotel OS&E in Dubai, we tailor our services to your unique operations.</li>
       
         <li><strong>Consistency Across Properties</strong> – We ensure that supplies and equipment are as premium as your brand standards, providing a consistent guest experience.</li>

         <li><strong>Sustainability & Quality Control</strong> – We choose sustainable, long-lasting products and adhere to international hospitality standards.</li>

         <li><strong>End-to-End Implementation Support</strong> – From procurement to delivery, we handle timelines and logistics to have your property operational-ready.</li>
       
       </ul>
            </p>
          </div>

          
       {/* One image (same settings, no changes) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[4/5] overflow-hidden rounded">
    <Image
      src="/images/ose-4.png"
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
            End-to-End OS&E Procurement Services in Dubai
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            From initial planning to budgeting, choosing suppliers, and implementation, we are your OS&E Consultant in UAE, leading you every step of the way.
            <br />
            <br />
            Our experience means that guest rooms are comfortable, kitchens are well-equipped, staff have consistent tools, and every operational nuance is attended to. That's why we are the Best Procurement Management Consultant in Dubai, trusted by luxury hotels, boutique hotels, and top restaurant groups.
            <br />
            <br />
          </p>
        </div>

        
   {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/ose-5.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
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
              Hospitality OS&E Solutions for Every Sector
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Dice Hospitality provides more than just Hospitality OS&E Solutions—we deliver long-term operational success. Our services are designed to simplify complex procurement processes, minimize costs, and enhance guest satisfaction.
              <br />
              <br />
              Whether it’s sourcing hotel OS&E in Dubai or providing OS&E consultancy for luxury hotels in Dubai, we ensure your brand is positioned to deliver world-class experiences every single day.
              <br />
              <br />
            </p>
          </div>

         
        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/ose-6.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>

        </div>
      </div>

      {/* ================= Cuisine Section (texture bg) ================= */}
           <div
             className="w-full py-10 sm:py-12 md:py-16">
             <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
               {/* Text first on mobile, right on desktop */}
     
            <div className="order-1">
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4">
         Partner with the Best OS&E Advisory Company in Dubai
       </h2>
       <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       If you are looking for expert OS&E advice for hospitality projects, partner with Dice Hospitality. We provide end-to-end OS&E solutions for hotels, restaurants, resorts, and serviced apartments, making sure your project is not only operationally ready but also aligned with your vision and brand promise.
       <br />
       <br />
       Get in touch with Dice Hospitality today and discover why leading operators trust us as their preferred partner for Operating Supplies & Equipment Advisory in Dubai and across the UAE.
       
        </p>
     </div>
     
     
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/ose-7.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>
  
             </div>
           </div>


    </section>
  );
}
