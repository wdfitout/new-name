"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Kitchen Design, Tender Services in Dubai
  </h1>
</div>

{/* ================= Concept Section-1 ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Kitchen Designs Dubai
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      At Dice Hospitality Interior Design & Fitout, we provide end-to-end commercial kitchen design and consultancy in Dubai, combining creativity, functionality, and compliance with Dubai’s strict food safety regulations.Our F&B consultants and commercial kitchen consultants in Dubai collectively show their expertise in foodservice consultancy, kitchen design and hospitality consulting in Dubai while ensuring that your café, restaurant and hotels perform on highest standards.
      <br />
      <br />
      If you're planning a new business, renovating an existing restaurant or building a cloud kitchen in Dubai. Our team is capable enough to deliver kitchen planning and installation services along with custom stainless steel fabrication, and restaurant fit-out services which meet operational demands and enhance the client experiences.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/kdt-2.png"
      alt="Concept image"
      width={500}   // set your actual width
      height={700}  // set your actual height
      className="rounded"
    />
  </div>
</div>



      {/* ================= Cuisine Section-2 (texture bg) ================= */}
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
              Commercial Kitchen Design & Consultancy in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             Our commercial kitchen design services at Dice Hospitality are customized according to each client’s requirement. We understand that two F&B businesses can never be the same, that’s why our kitchen design and consultancy UAE team design the layouts and workflows to maximize safety, efficiency and compliance. From restaurant kitchen design in Dubai to hotel kitchen design and bakery kitchen design, we handle it all.
              <br />
              <br />
             We go beyond aesthetics—our consultancy ensures the best placement of equipment, ergonomic workflows, and smooth integration with service areas. From kitchen tender preparation UAE to commercial kitchen project management in Dubai, our solutions are designed to simplify your journey from concept to approval.
            </p>
          </div>

          {/* Two images */}
              <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
                      <div className="relative aspect-[16/9] overflow-hidden rounded">
                      <Image
                        src="/images/kdt-3.png"
                        alt="Cuisine dish 1"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      />
                      </div>
                      </div>
          
        </div>
      </div>

      {/* ================= Process Section-3 ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 sm:mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Restaurant Kitchen Layouts & Fit-Out Services
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
            well-executed kitchen layout is at the heart of any successful restaurant. Our restaurant kitchen design and fit-out services in Dubai cover every stage, from initial kitchen layouts and equipment planning to final execution. We provide:
            <br />
            
          <div className="max-w-2xl order-1">
          <ol className="list-disc list-inside text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 space-y-2">
          <li><strong>Commercial kitchen fabrication in Dubai</strong> with custom stainless steel work tables, sinks, and bespoke furniture.</li>

          <li><strong>Kitchen refurbishments in Dubai, UAE</strong> for existing outlets looking to upgrade efficiency.</li>

          <li><strong>Restaurant fit-out services & contractors in Dubai</strong> for turnkey projects.</li>

          <li><strong>Cloud kitchen fit-out in Dubai,</strong> designed for delivery-focused operations.</li>
          </ol>
          </div>
          </p>
          </div>

        {/* Two images */}
            <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded">
                    <Image
                      src="/images/kdt-4.png"
                      alt="Cuisine dish 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    </div>
                    </div>
       
      </div>
       <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 px-4 md:px-8 mt-4 items-center">
            Our team ensures compliance with Dubai Municipality and Civil Defense by providing complete kitchen approvals in Dubai and installing fire suppression systems for commercial kitchens.
            </p>
  
 {/* ================= Cuisine Section-4 (texture bg) ================= */}
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
             F&B Restaurant Consulting & Hospitality Services
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             Other than Kitchen Design, Dice hospitality is known as the best hospitality consulting company in Dubai specializing in F&B restaurant consulting services in UAE. We help and guide entrepreneurs, investors and brands to improve or enhance their food and beverage concepts while ensuring that their offerings match with target audiences.
              <br />
              <br />
             As the trusted F&B consultants and strategists in Dubai, we understand your visions and then design a profitable model for your business. From menu engineering to operational workflows, our restaurant consulting services in UAE covers everything which is necessary and needed to establish or expand your F&B business successfully in Dubai.
                <br />
              <br />
             Our F&B interior design consultants in Dubai collaborate with our design and build team to create the interiors that match with the personality of our client and business while supporting efficient operations. This integrated approach ensures your concept flows seamlessly from the kitchen to the dining area.
            </p>
          </div>

          {/* Two images */}
            <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded">
                    <Image
                      src="/images/kdt-5.png"
                      alt="Cuisine dish 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    </div>
                    </div>
        </div>
      </div>

{/* ================= Concept Section-5 ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
    Kitchen Tender Consultancy & Project Management    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      Navigating tenders and approvals can be complex in Dubai’s hospitality industry. That’s why we provide expert kitchen tender consultancy in Dubai and UAE, preparing all technical documentation, drawings, and compliance reports. Our team handles the full commercial kitchen project management in Dubai, ensuring your project runs smoothly from design to build.
      <br />
      <br />
      We manage everything from kitchen design, joinery, and approvals to coordination with local authorities for licensing and safety certifications. This reduces delays and ensures your restaurant or cloud kitchen launches on schedule.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/kd-8.png"
      alt="Concept image"
      width={500}   // set your actual width
      height={700}  // set your actual height
      className="rounded"
    />
  </div>
</div>

      {/* ================= Process Section-6 ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 sm:mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Why Choose Dice Hospitality Interior Design & Fitout
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
        <div className="max-w-2xl order-1">
        <ol className="list-disc list-inside text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 space-y-2">
        <li>Dice Hospitality is one of the <strong>best commercial kitchen consultants in Dubai</strong> with several years of proven expertise.</li>

        <li>Most Trusted <strong>restaurant interior fit-out contractors in Dubai, UAE</strong> who turnkey F&B solutions.</li>

        <li>End-to-end services covering <strong>kitchen design, fabrication, installation, approvals, and project management.</strong></li>

        <li>Integrated <strong>hospitality consulting in Dubai with F&B services</strong> according to the Dubai market.</li>
        </ol>
        </div>
          </p>
        </div>

        {/* Two images */}
        <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded">
                <Image
                  src="/images/kdt-6.png"
                  alt="Cuisine dish 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                </div>
                </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 md:pt-16">
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
    With Dice Hospitality Interior Design & Fitout, you gain more than a design and build partner—you gain a strategic ally dedicated to the long-term success of your F&B business.
    </p>
</div>
 {/* ================= Cuisine Section-7 (texture bg) ================= */}
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
              End-to-End Restaurant Kitchen & F&B Solutions in Dubai
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             From conceptualizing your food and beverage concept to executing detailed restaurant kitchen layouts, installing commercial kitchen equipment in Dubai, and ensuring full approvals, Dice Hospitality provided end to end restaurant kitchen services in Dubai. Our all rounders team ensure that the project is not only functional but also strategically positioned for profitability.
              <br />
              <br />
             No matter if its café, restaurant , hotel kitchen, bakery or cloud kitchen design in Dubai,our F&B consultants, strategists, and kitchen design specialists are always active and present to deliver excellence in Dubai.
            </p>
          </div>

          {/* Two images */}
             <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
                     <div className="relative aspect-[16/9] overflow-hidden rounded">
                     <Image
                       src="/images/kd-1.png"
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
