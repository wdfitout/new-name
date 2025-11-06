"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Restaurant IT Support Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Restaurant Technology Solutions Tailored for Hospitality Businesses
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
     Running a successful restaurant in Dubai means more than just great food it requires reliable technology to keep operations smooth and customers happy. At DICE Hospitality, we provide Restaurant IT Support Dubai services specially designed for fine dining, QSRs, cafés, and lounges. From Wi-Fi Solutions for Restaurants Dubai to POS Support Dubai, our skills and experience ensures that your systems run smoothly, with maximum efficiency and minimal downtime.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/its-1.png"
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
              Why Does IT Support for Restaurants in Dubai Matters?
            </h2>
       <p className="text-slate-900 text-base sm:text-[17px] leading-7 md:leading-8 mt-4">
       <ul className="list-disc pl-5 space-y-2 mt-2">
        The Dynamic Food & Beverage sector in Dubai depends heavily on advanced digital systems for orders, reservations, payments, and customer engagement. With Hospitality IT Support Dubai by Dice, you gain:
         <li>24/7 reliable technical assistance. </li>
         
         <li>Secure restaurant network setup Dubai. </li>
         
         <li>Stable guest Wi-Fi and free networks in Dubai’s restaurants and cafés. </li>
         
         <li>Data protection through backup & recovery for restaurants. </li>
         
         <li>Reduced downtime and higher and enhanced operational efficiency. </li>
         </ul>
         When your IT systems work flawlessly and smoothly, you can focus on delivering long lasting and beautiful dining experiences.
        </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/its-2.png"
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Our Specialized Restaurant IT Services in Dubai
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
           <ol className="list-decimal pl-6 space-y-4 mt-2">
  <li>
    <strong>POS & KDS Support</strong>
    <ul className="list-disc pl-6 space-y-1 mt-1">
      <li>Restaurant POS System Support – installation, integration, and troubleshooting.</li>
      <li>Kitchen Display System (KDS) Support Dubai – streamlined kitchen operations for faster service.</li>
    </ul>
  </li>

  <li>
    <strong>Network & Wi-Fi Solutions</strong>
    <ul className="list-disc pl-6 space-y-1 mt-1">
      <li>Wi-Fi Solutions for Restaurants Dubai – secure guest networks and staff connectivity.</li>
      <li>Wi-Fi for Restaurants and Cafés & Wi-Fi Services Dubai – complete setup with seamless coverage.</li>
    </ul>
  </li>

  <li>
    <strong>IT Infrastructure & Security</strong>
    <ul className="list-disc pl-6 space-y-1 mt-1">
      <li>IT Infrastructure for Restaurants Dubai – structured cabling, hardware setup, CCTV & surveillance.</li>
      <li>Restaurant Network Setup Dubai – strong and secure internal networks.</li>
      <li>Data Backup & Recovery for Restaurants – cloud & onsite protection against data loss.</li>
    </ul>
  </li>

  <li>
    <strong>Restaurant Operations & Call Center Support</strong>
    <ul className="list-disc pl-6 space-y-1 mt-1">
      <li>Restaurant Operations and Management Solutions – IT-driven efficiency for smoother workflows.</li>
      <li>Restaurant Call Center Solution & Call Center Management for Restaurants in UAE – centralized customer engagement systems.</li>
    </ul>
  </li>

  <li>
    <strong>Restaurant Technology & Software Development</strong>
    <ul className="list-disc pl-6 space-y-1 mt-1">
      <li>Restaurant Software Development Services in Dubai – customized tools for ordering, reservations, and staff management.</li>
      <li>Restaurant Solutions and Support – end-to-end technology and IT support packages.</li>
      <li>Expert IT Support and Maintenance Services in Dubai – proactive monitoring and emergency support.</li>
    </ul>
  </li>
</ol>
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
              Localized IT Support Across Dubai’s Key Hospitality Hubs
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Our restaurant IT services in Dubai is famous across the most popular destinations of the city, ensuring that every restaurant or hospitality business has trusted technology to meet the needs of operations. We at DICE hospitality provide Restaurant IT Support in Downtown Dubai while delivering high end services for upscale lounges and fine-dining venues. In Dubai Marina, our team specializes in efficient IT solutions for restaurants, including POS integration and Wi-Fi setup tailored for high-traffic areas.
              <br />
              <br />
              For hospitality IT support in Palm Jumeirah and Jumeirah, Dice design advanced technology systems that align with exclusive dining experiences offered in these iconic areas and destinations. Businesses in Business Bay benefit from our reliable, fast restaurant IT services.Meanwhile, in DIFC, we focus on secure, high-performance IT support for restaurants, ensuring seamless operations for high-end corporate dining spots.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[4/5] overflow-hidden rounded">
    <Image
      src="/images/its-3.png"
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
            Why Choose DICE for Restaurant IT Support in Dubai?
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            Choosing the right partner for restaurant IT support in Dubai is very important to ensure seamless customer experience and smooth operations. At DICE Hospitality, we are skilled in hospitality IT support and F&B technology solutions, giving cafés,restaurants, and hotels across Dubai.Our team is available 24/7 with both remote and onsite assistance, ensuring issues are resolved quickly with minimal downtime.
            <br />
            <br />
            With years of experience in restaurant operations management and restaurant technology solutions. We design reliable systems that increase efficiency and improve service quality. Trusted by leading hospitality businesses across Dubai, other than IT we also offer expert hospitality consulting and F&B services, helping restaurants grow with both operational and technological support.
            <br />
            <br />
          </p>
        </div>

        {/* Two images */}
        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/its-4.png"
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
              Get Expert Restaurant IT Solutions in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              At DICE, we go beyond simple troubleshooting—we deliver complete restaurant IT solutions Dubai that support growth, customer satisfaction, and operational excellence. Whether you need restaurant IT services Dubai, restaurant call center solutions, or expert hospitality consulting, our team ensures your technology always works for you.
              <br />
               Contact us today for tailored restaurant solutions and support that keep your business running without disruption.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
          {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/its-6.png"
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
