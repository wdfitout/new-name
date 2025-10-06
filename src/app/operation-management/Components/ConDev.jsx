"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Restaurant Operations Management Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
    At Dice Hospitality, we are expert in providing restaurant operations management in Dubai which enhances the profitability, efficiency and client satisfaction level. As a trusted restaurant management consulting company in Dubai, our target is to provide you with customized operational and management solutions according to you the challenges of Dubai’s Dynamic Food & Beverage sector.
      <br />
      <br />
      As a best restaurant management consulting company in Dubai, our role is to support the business owners and operators to overcome the challenges they face such as strict food safety compliance in Dubai, high labor costs,  fluctuating supply chains and the expectations of the guests. With our advanced strategies,smart systems and experienced restaurant management consultants in Dubai, Dice helps in transforming your restaurant into a high performing, successful and profitable business.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/om-1.png"
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
              Experts in F&B Management
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              With our several years of experience in the food & beverage consultants in Dubai, we bring an advanced approach to restaurant management consulting services in the UAE. Our skilled team members of restaurant management consultants in Dubai work closely with you to align workflows , improve service standards and achieve consistent performance. From hospitality operations management in Dubai to F&B operations management in Dubai, Dice ensures that all the operations of your restaurants are running smoothly at every level.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/images/om-2.png", alt: "Cuisine dish 1" },
              { src: "/images/om-3.png", alt: "Cuisine dish 2" },
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
            Your Restaurant Consulting Services in the UAE
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            Dice as a leading hospitality consulting company provides expert restaurant consulting services in the UAE designed for both the new and the already settled business. Whether you’re starting a fine dining concept, running a fast-casual outlet,  our restaurant consulting services focus on growth and operational excellence.
            <br />
            <br />
           We provide:
           </p>
           <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Restaurant operations consulting in Dubai :</strong> tailored audits and strategy development.
        </li>

         <li><strong>Operational solutions to restaurants and hospitality businesses :</strong> 
         covering FOH, BOH, and kitchen workflows.</li>

         <li><strong>Hospitality management services in Dubai :</strong>  compliance, training, and performance monitoring.</li>
       </ul>
        </p>
        </div>

        {/* Two images */}
        <div className="order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/om-4.png", alt: "Process image 1" },
            { src: "/images/om-5.png", alt: "Process image 2" },
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
       {/* ================= Cuisine Section (texture bg) ================= */}
      <div
        className="w-full py-10 sm:py-12 md:py-16"
        style={{
          backgroundImage: "url(/images/texture-bg.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 items-center">
          {/* Text first on mobile, right on desktop */}
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4 text-center">
              Core Areas of Expertise
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Restaurant Inventory Management
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              We implement robust systems for restaurant inventory management in Dubai, reducing waste and controlling costs while ensuring product availability at all times.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
             Staff Scheduling & Training
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             Our staff scheduling for restaurants in Dubai helps optimize labor costs while ensuring smooth shift coverage. Through professional training and performance tracking, we build motivated teams that deliver consistent service.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              SOP Implementation
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              We design and roll out restaurant SOP implementation strategies that cover every aspect of operations—service standards, hygiene protocols, and guest interaction—to maintain consistency across shifts.
              <br />
              <br />
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Kitchen Operations Optimization
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             Through kitchen operations optimization, we improve workflow, layout and order management. This reduces wait times, enhances food quality, and boosts overall efficiency.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Cost Control & Budgeting
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Our restaurant cost control and budgeting services focus on monitoring expenses, reducing overheads, and increasing profitability without compromising quality.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
             Menu Engineering & Profitability
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              By applying menu engineering and profitability analysis, we understand and analyze your best performing items, redesign menus and maximize revenue per cover.
              <br />
              <br />
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Food Safety & Compliance
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              We pay attention to strict food safety compliance in Dubai with HACCP standards, regulatory approvals and hygiene training so your restaurant always meets UAE regulations.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Technology & System Integration
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              From POS system integration for restaurants to digital dashboards and CRM services, we help you to work with the latest technology that enhances decision-making and guest experience.
              <br />
              <br />
              </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
             Performance Metrics & KPI Tracking
            </h3>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
            Our consultants establish F&B performance metrics and restaurant KPI tracking systems, ensuring you have actionable insights into sales, service speed, customer satisfaction, and staff efficiency.
              <br />
              <br />
              </p>

          </div>

         
     
        </div>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Why Choose Dice Hospitality?
          </h2>
         <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Experts in F&B Management – Restaurant Management</strong></li>

         <li>Proven <strong>operational and management solutions</strong> tailored to Dubai’s hospitality industry.</li>

         <li>Trusted partner for <strong>United Arab Emirates restaurant consulting</strong> and <strong>hospitality management services in Dubai.</strong></li>

         <li>End-to-end support covering <strong>operations, compliance, technology, and staff management.</strong></li>
       </ul>
        </p>
        </div>

        {/* Two images */}
        <div className="order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/om-6.png", alt: "Process image 1" },
            { src: "/images/om-7.png", alt: "Process image 2" },
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
              Partner With Dubai’s Leading Restaurant Operations Consultants
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Whether you’re seeking restaurant operations management in Dubai or full hospitality consulting services in the UAE, Dice Hospitality is your partner in driving profitability and efficiency. We deliver sustainable operational solutions to restaurants and hospitality businesses, helping you stay competitive in Dubai’s fast-growing F&B industry.
              <br />
              <br />
              Contact Dice Hospitality today to learn how our restaurant consulting services in Dubai can transform your operations.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/images/om-8.png", alt: "Cuisine dish 1" },
              { src: "/images/om-9.png", alt: "Cuisine dish 2" },
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
    </section>
  );
}
