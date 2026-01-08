"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white text-slate-800">
      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-24 pb-10">
        <h1 className="text-3xl sm:text-4xl mt-20 sm:mt-10 lg:text-5xl text-center text-[#0a4a63]">
          BUSINESS BAY RESTAURANT
        </h1>
      </div>

      {/* CONCEPT SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6">
             Concept Development
            </h2>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              NURAI Cafe was developed as a distinctive <b className="text-[#0a4a63]"
               ><a href="https://dicehospitality.ae/concept-development-menu-design">Business Bay Restaurant 
               concept Development</a></b> by Dice with contemporary modern café culture with a strong, market-ready brand identity. 
              Our expertise in Restaurant Concept Design & Development truly aligns with the  Food & Beverage trend 
              in Dubai  as well as local market expectations.
              <br /><br />
              Through structured Brand & Concept Development, our team worked on service style, guest 
              journey, and operational framework. This NURAI Cafe project shows Expert Restaurant 
              Concept Development for Your Success, answering What is Restaurant Concept Development?  
              As a trusted Hospitality Consultant Dubai, <b className="text-[#0a4a63]"
              ><a href="https://dicehospitality.ae/">Dice Hospitality</a></b> delivered a concept built for 
              long-term sustainability in the competitive Business Bay Restaurant landscape.
            </p>
           
          </div>

          {/* Image 1 */}
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/business-bay-nurai-restaurant.webp"
                alt="Dining space at La Maison Ani"
                fill
                className="object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* CUISINE SECTION */}
      <section className="w-full bg-[#fdf5f1] bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[size:32px_32px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
            {/* Images (2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/business-bay-nurai-restaurant-burger.webp"
                  alt="French dish at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/business-bay-nurai-restaurant-in-dubai.webp"
                  alt="Dessert at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-4">
              <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6 text-left">
              Cuisine
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
              The cuisine strategy for NURAI Cafe in Business Bay was designed in such a way to complement 
              its identity as a modern Business Bay Restaurant in Dubai. Dice’s F&B consultancy in Dubai is 
              genuinely focused on aligning menu direction with your customer preferences, service speed, 
              and operational practicality. As experienced Restaurant Consultants in Dubai, we developed a 
              food concept that enhances brand appeal while maintaining efficiency and profitability. 
              Supported by insights from Top Hospitality F&B Advisors, the culinary direction reflects 
              Dice Hospitality’s expertise in Hospitality Management Services Dubai, reinforcing the 
              café’s position within Dubai’s competitive Food & Beverage market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6">
              Restaurant Interior Design 

            </h2>
            <p className="leading-relaxed text-sm sm:text-base">
          The design direction for the interiors of NURAI Cafe was also strategically oriented to 
          reflect a sophisticated yet warm Business Bay Restaurant ambiance inspired by Modern Cafe 
          Interior Design Dubai. The design aimed to create an optimal space for not only swift 
          dining options but also for prolonged meals.
           <br /><br />
           Our concept brief is in line with the Professional Restaurant Design Services in Dubai, 
           providing cooperation with Café Fit-Out Experts and top Interior Fit Out Companies in 
           Dubai. Our design vision is in accordance with the concepts of the 
           <b className="text-[#0a4a63]"
          ><a href="https://dicehospitality.ae/restaurant-interior-design"> Restaurant Interior 
           Design & Fit Out Contractors in Dubai</a></b>  and Professional Restaurant Designers in the UAE, 
           incorporating designs that improve customer satisfaction and promote functionality.</p> 
           </div>

          {/* Images (2 in a row) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/modern-cafe-interior-design-business-bay.webp"
                alt="La Maison Ani interior 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/restaurant-interior-design-business-bay.webp"
                alt="La Maison Ani interior 2"
                fill
                className="object-cover"
              />
           </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-8 sm:mb-10">
         Project Location
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Location Card */}
          
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded">
              <iframe
                title="La Maison Ani Dubai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57770.480961965615!2d55.18870854863282!3d25.181122499999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69949d65ad97%3A0x3593f6af07e66bb1!2sCercina%20Tunisian%20Restaurant!5e0!3m2!1sen!2sae!4v1767362053502!5m2!1sen!2sae"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        
      </section>
    </section>
  );
};




export default VPBody;
