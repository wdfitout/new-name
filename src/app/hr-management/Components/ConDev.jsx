"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    HR Management Services for Restaurants in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
     Leading a successful business in Dubai is more than just a great menu or designing a beautiful place. The backbone of every hospitality business is its staff and people like chefs, managers, waiters, baristas and support staff who bring your brand to life. At Dice hospitality, we provide specialized HR services for the restaurant industry in Dubai which ensures that you have the right staff, the right processes, and the right systems to achieve excellence in your business.
      <br />
      <br />
      DICE is known as one of the best HR consulting firms for restaurants in Dubai because we offer the complete restaurant HR services Dubai and hospitality HR solutions Dubai tailored restaurant HR services Dubai and hospitality HR solutions Dubai.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/hr.png"
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
              Why HR Management Matters in the F&B Industry
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              The food & beverage (F&B) sector in Dubai is among the most competitive industries across the world. With new cafés, restaurants and fine dining concepts opening every month, securing and retaining the expert staff has become a tough challenge for many business owners. This is where our expertise comes in, we help restaurants and  F&B businesses streamline HR,payroll, compliance,recruitment and training so they can focus easily on providing memorable dining experiences to their customers.
              <br />
              <br />
               Whether you’re a small café or a luxury hotel dining concept, our HR management solutions in Dubai are designed exactly according to your needs.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-3.png"
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
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 sm:py-10 md:py-14 items-center">
        {/* Text first */}
        <div className="">
          <h2 className="text-2xl text-center sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Our HR Services for Restaurants & F&B Businesses
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          We provide end-to-end HR solutions for restaurants in Dubai, covering everything from hiring to compliance, training to payroll.
          </p>
         
          <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            Recruitment & Staffing Services
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          We provide hospitality recruitment services in Dubai to help the cafes and restaurants in Jumeirah, Business Bay and Dubai Marina to connect with skilled and expert waiters, chefs, baristas and managers. As a trusted F&B recruitment agency in Dubai, Dice Hospitality support fine dining outlets, hotel restaurants  and casual dining with their trusted and reliable staffing solutions.
          </p>
               <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            HR Consultancy & Outsourcing
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          Our HR consultancy services in Dubai assist F&B businesses in areas like Al Wasl, Downtown Dubai, and Palm Jumeirah with complete HR management support. Through HR outsourcing in Dubai, we help restaurant owners and hospitality investors reduce costs and improve efficiency, making us a preferred restaurant HR consultancy in the UAE.
          </p>
          <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            Payroll & HR Administration
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          We deliver accurate payroll outsourcing services in Dubai for restaurants and hotels near Dubai Hills, Sheikh Zayed Road, and Al Barsha. From payroll management to HR administration, our restaurant payroll solutions in Dubai ensure compliance with UAE labor laws while keeping hospitality operations smooth.
          </p>
               <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            Training & Employee Development
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          Our restaurant staff training in Dubai builds skilled teams for cafés and hotels in Dubai Festival City, Al Safa, and Umm Suqeim. With customized SOPs and hospitality training programs, we focus on F&B employee development in Dubai, improving service standards, customer satisfaction, and staff retention.
          </p>
          <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            Staff Scheduling & Performance Management
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          We provide restaurant workforce management in Dubai, offering staff scheduling and performance monitoring systems for outlets in Dubai Knowledge Park, Dubai Creek Harbour, and Jumeirah Beach Residence (JBR). Our hospitality workforce solutions in Dubai help control labor costs while ensuring smooth restaurant operations.
          </p>
               <h3 className="text-1xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
            HR Compliance & Legal Support
          </h3>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
          Our HR compliance services in Dubai cover visa processing, contracts and UAE labor law compliance for several restaurants and hotels in Arabian Ranches, Al Quoz and Nad Al Sheba. As experts in restaurant HR compliance in Dubai, Dice ensures that hospitality businesses operate legally and meet all requirements of UAE’s government.
          </p>
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
             Why Choose DICE for HR Management?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              With decades of experience and expertise in hospitality staffing Dubai, DIce has successfully built a fine relationship with dining restaurants. casual dining chains, cafés, and hotel dining outlets to deliver end-to-end HR solutions. Our proven track record in hospitality HR management Dubai reflects our ability to streamline recruitment,payroll outsourcing, staff scheduling and compliance management for Food and Beverage businesses in Dubai. 
              <br />
              <br />
              Unlike many restaurant recruitment Dubai agencies, we don’t just focus on filling positions — we specialize in building strong, motivated teams through restaurant employee training Dubai and F&B staffing services Dubai, ensuring long-term efficiency and retention. At DICE, our goal is to provide restaurants and hospitality businesses with expert HR support that transforms their workforce into a reliable asset for delivering excellence every day.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-7.png"
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
            Who We Serve
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            At DICE, our HR management services for restaurants in Dubai are trusted by a large number of clients across the hospitality sector. Our expertise also supports aspiring F&B entrepreneurs in Dubai launching new dining concepts, ensuring they have access to professional restaurant recruitment services and HR frameworks from the very beginning. 
            <br />
            <br />
            For hospitality investors expanding in the UAE, we assist hotels and resorts in Dubai with expert dining staff services, helping them recruit and retain skilled servers, chefs and hospitality professionals who deliver continuous excellence.By offering tailored hospitality HR management Dubai, DICE has become the trusted partner for businesses seeking sustainable workforce growth in the competitive F&B industry.
            <br />
            <br />
          </p>
        </div>

        {/* Two images */}
        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-4.png"
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
             Elevate Your Restaurant Operations with Expert HR Support
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              At DICE Hospitality Solutions,we clearly know that HR is not just about paperwork, in fact it's about building an environment of excellence in your restaurant.  From recruitment and payroll to restaurant HR support in Dubai,our services give you peace of mind while your team will be trained enough to focus on delivering unforgettable guest experiences.
              <br />
              <br />
              Whether you run a fine dining restaurant, a trendy café, or a high-volume quick-service brand, our HR solutions for restaurants in Dubai are designed to help you grow sustainably.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/hrs-1.png"
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
