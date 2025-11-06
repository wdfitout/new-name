"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Food & Beverage (F&B) HR Consulting & Staffing Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      HR Consulting & Staffing Services Concept
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
     The Food and Beverage industry in Dubai is among the most growing and competitive sectors, with attractive destinations like Palm Jumeirah, Downtown Dubai, Dubai Marina, Business Bay, , Jumeirah Beach and DIFC who are attracting the visitors in millions each year. For cafés, hotels,restaurants and F&B brands who want to succeed in this business can only be successful if they have the right strategies, people and operations. It is the point where Dice Hospitality’s F&B HR consulting services in Dubai help business owners.
      <br />
      <br />
      At Dice Hospitality, our expertise include F&B HR solutions, restaurant consulting, hospitality support and staffing services which help business to boost across Al Barsha, Arabian Ranches and other high end locations in Dubai
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/hrs-1-.png"
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
              Comprehensive HR Solutions for the Food & Beverage Industry in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              The success of a cafe, restaurant or a bar in the elite areas of Dubai like, La mer Beach, Jumeirah, Downtown Dubai or Dubai hills are not just because of the great interior designs they have, it requires more than the interiors which includes a good, dedicated and well trained team members. Our F&B HR consulting in Dubai covers every step of HR management, including the payroll, recruitment, employee relations and ongoing performance management.
              <br />
              <br />
              Dice hospitality helps the F&B business in Dubai near Jumeirah Islands, Dubai Creek Harbour and Emirates Hills by offering our end-to-end hospitality HR solutions and managing their work effectively while minimizing their operational challenges.
              <br />
              <br />
            </p>
          </div>

         {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-2-.png"
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
            F&B Staffing Services Tailored to Dubai’s Hospitality Sector
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            In the dynamic city of Dubai, finding the right staff members is so challenging, especially in the busy areas such as Dubai Marina, Business Bay and Jumeirah Village Circle. Our F&B staffing services in Dubai ensure that hotels, cafes, restaurants and catering businesses always avail the services of baristas,skilled chefs, waiters, kitchen staff,managers and supervisors.
            <br />
            <br />
           Dice Hospitality specialize in hiring staff for fine-dining restaurants in Palm Jumeirah,boutique cafés in Al Safa, casual dining spots in Karama and luxury hospitality venues in DIFC and
          Downtown Dubai. No matter if you need permanent hires or temporary staff for events, our restaurant consultancy company in Dubai ensures seamless operations.
            <br />
            <br />
          </p>
        </div>

        
   {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-3-.png"
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
              Restaurant Consulting & Hospitality Strategy in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              The Food & Beverages Sector in Dubai is formed by innovation, trends and customer expectations.With so many dining places across Jumeirah Bay,Nad Al Sheba and Al Manara, the businesses must be successful. Our restaurant consulting services in Dubai contain concept development, pricing strategies, menu engineering, operations management and staff training.
              <br />
              <br />
              We are among the leading F&B consultants and strategists in Dubai,we help restaurants in Dubai Festival City, Town Square and Sheikh Zayed Road align their restaurants with the customer’s requirements. Our Restaurant consultancy services include cost optimization, supply chain management and creating SOPs (Standard Operating Procedures) to ensure our client’s success.
              <br />
              <br />
            </p>
          </div>

      {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-4-.png"
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
            Food & Beverage Concept Development in Dubai
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            Every premium restaurant or café starts with a strong base and concept. From luxury fine dining experience near Atlantis The Royal to trendy cafés in Al Quoz and family-friendly eateries in Mirdif City Centre, the food and beverage concept development in Dubai by Dice Hospitality helps business owners to build unique and profitable brands.
            <br />
            <br />
            Our experts design F&B concepts by our team is customized according to Dubai market, while ensuring that they connect with locals and tourists alike in areas such as La Mer Beach, Jumeirah Park, and Dubai Creek Harbour.
            <br />
            <br />
          </p>
        </div>

      {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-5-.png"
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
              Hospitality Training & SOP Development in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Hiring staff is only the first step—training them to deliver exceptional guest experiences is what sets successful restaurants apart. We provide F&B training services in Dubai, covering customer service, hygiene, food safety, and brand-specific service standards.
              <br />
              <br />
              For restaurants in Burj Khalifa community, Sur La Mer, and Green Community, we create customized SOPs and staff training programs that enhance consistency and service quality. From fine dining in Emirates Hills to casual eateries in Al Barsha, our training ensures every guest leaves satisfied.
              <br />
              <br />
            </p>
          </div>

        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-6-.png"
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
         Why Choose Us for F&B HR Consulting in Dubai?
       </h2>
       <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>ELocal Expertise:</strong> With deep knowledge of Dubai’s hospitality landscape, from <strong>Downtown Dubai to Dubai Marina,</strong> we provide tailored HR and staffing solutions.</li>

         <li><strong>Full Spectrum Services:</strong> From HR consulting and staffing for F&B to restaurant concept creation and hospitality training, we have every business covered.</li>

         <li><strong>Trusted by Top Brands:</strong> Our services range from luxury hotels in Palm Jumeirah, DIFC, and Business Bay to family restaurants in Al Furjan and Jumeirah Village Triangle.</li>

         <li><strong>Compliance & Reliability:</strong> We take care of UAE labor law compliance, DHA requirements where necessary, and industry regulation so companies can concentrate on expanding.</li>
       </ul>
        </p>
     </div>
     
     
               {/* Two images */}
             {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-7-.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>

        
     
             </div>
               <p className="text-slate-700 px-4 md:px-8 mt-6 text-base sm:text-[17px] leading-7 md:leading-8">
                  The Food and Beverage sector in Dubai is not only about serving a good meal, it's about delivering experiences. From <strong>Jumeirah Village Circle to Palm Jumeirah , Dubai Marina to Deira,</strong> every dining space requires the right HR strategies, staffing solutions, and operational expertise to succeed.
                   </p>
                   <p className="text-slate-700 px-4 md:px-8 mt-6 text-base sm:text-[17px] leading-7 md:leading-8">
                   At Dice Hospitality, we empower F&B businesses with specialized HR consulting, staffing, training, and restaurant consulting services tailored to Dubai’s dynamic hospitality market.</p>
                  
                   <p className="text-slate-700 px-4 md:px-8 mt-6 text-base sm:text-[17px] leading-7 md:leading-8">
                   <strong>Partner with us today to elevate your F&B business in Dubai’s most competitive areas.</strong></p>
           </div>


    </section>
  );
}
