"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Restaurant SOP Implementation & Staff Training in Dubai, UAE
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
    At Dice, we don’t just design restaurants — we help operators set up efficient systems that keep everything running smoothly. Through SOP implementation – Restaurant Staff Training, we create a complete Restaurant Operations Manual with SOPs, checklists, and training procedures that improve efficiency, compliance, and customer satisfaction.
      <br />
      <br />
      Our goal is to ensure your team understands daily restaurant operations, food safety, hygiene, and service excellence while mastering modern tools like POS system proficiency.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/st-1.png"
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
              Why SOPs are Essential for Restaurants
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Every successful dining business is backed by well-structured Restaurant Standard Operating Procedures. SOPs outline the restaurant staff responsibilities, lead the team members through food preparation SOPs, comply with health & safety in restaurants, and ensure accuracy and consistency in both kitchen and service operations.
              <br />
              <br />
              With a strong restaurant operations manual, managers are able to monitor performance, enforce quality control in restaurants, and use a restaurant audit checklist for assessing compliance.
              
            </p>
          </div>

        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/st-2.png"
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
            SOP Template & Staff Training
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            We develop SOP templates customized to your restaurant concept — from fine dining to cafés. These SOPs cover:
            <ul className="list-disc pl-5 space-y-2 mt-2">
         <li>Food safety SOPs – covering food safety training, proper food handling, and restaurant compliance. </li>

         <li>Kitchen SOPs – food preparation, cooking methods, plating standards, and cleaning routines. </li>

         <li>Restaurant hygiene SOPs & Cleaning SOPs – ensuring cleanliness in back and front of house SOPs. </li>

         <li>Customer service SOPs – improving hospitality standards through customer service training and soft skills training for restaurant staff. </li>

         <li>Inventory management SOPs – systematic stock control, purchasing guidelines, and waste reduction. </li>
        
       </ul>
       These SOPs for restaurants form the backbone of staff training programs and ongoing performance management.
       </p>
        </div>

        {/* Two images */}
        {/* One image (same settings, no changes) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[4/5] overflow-hidden rounded">
    <Image
      src="/images/st-3.png"
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
              Restaurant Staff Training UAE – Building Skilled & Motivated Teams
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             At Dice, we specialize in restaurant staff training in the UAE, helping restaurants in Dubai and across the Emirates build skilled, motivated, and efficient teams. We train all phases of workforce development, from restaurant onboarding in the UAE for effective assimilation of new recruits, to restaurant customer service training based on guest interaction, upselling skills, and all-around customer experience. We offer food safety training in the UAE, making teams familiar with hygiene protocols, HACCP rules, and everything related to health & safety in restaurants. For managers and supervisors, our restaurant team management UAE programs are aimed at leadership development, while staff productivity training helps improve efficiency, speed, and consistency in everyday operations. 
              <br />
              <br />
              We also offer restaurant technology training, including POS system proficiency, online ordering, and digital reporting tools, ensuring staff are aligned with modern operations. Complementing these, our hospitality training UAE refines professionalism and service excellence, while our effective staff training methods and mentorship programs work to reduce staff turnover in restaurants and keep employees motivated for long-term success.
              <br />
              <br />
            </p>
          </div>

      
{/* One image (same settings, no changes) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[4/5] overflow-hidden rounded">
    <Image
      src="/images/st-.png"
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
            Restaurant Training Techniques & Programs
          </h2>
      
        <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
        Our restaurant training programs UAE are designed to elevate both individual skills and team collaboration. We focus on:
        <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>Staff training services that align with brand values. </li>
        <li>Upselling techniques for restaurant staff to increase revenue. </li>
        <li>Employee motivation in restaurants through recognition and growth opportunities. </li>
        <li>Restaurant workforce training Dubai to standardize performance across all branches. </li>
        <li>Staff training & recruitment strategies that build long-term talent pipelines. </li> 
       </ul>
       By integrating restaurant training techniques with best practices for restaurants, we help owners achieve operational consistency and service excellence.
        </p>
        </div>

        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/st-5.png"
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
              Mastering Restaurant SOPs for Long-Term Success
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              When your team undergoes restaurant SOP training in UAE, operations become seamless and highly efficient. By implementing a robust restaurant checklist for every department, managers can easily track progress, ensure compliance, and maintain quality control in restaurants. This structured approach improves overall efficiency in daily restaurant operations in Dubai and across the UAE, guarantees consistent food and service standards, and drives higher customer satisfaction. At the same time, it ensures compliance with UAE restaurant regulations while supporting restaurant staff retention in UAE through confidence building, accountability, and a culture of service excellence.
            
            </p>
          </div>

          {/* Two images */}
         {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/st-6.png"
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
         Partner with Experts in SOP Implementation & Staff Training
       </h2>
       <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       At Dice, we don’t just create beautiful dining spaces — we help you operate them successfully. From Restaurant Standard Operating Procedures to Restaurant Staff Training to Improve Efficiency, our tailored programs empower your workforce and strengthen your business foundation.
       <br />
       <br />
       If you’re ready to transform your operations with Standard Operating Procedures for restaurants, book a consultation with us today.
        </p>
     </div>
     
     
               {/* Two images */}
               {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/st-7.png"
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
