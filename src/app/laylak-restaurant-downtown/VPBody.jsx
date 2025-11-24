"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white text-slate-800">
      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-24 pb-10">
        <h1 className="text-3xl sm:text-4xl mt-20 sm:mt-10 lg:text-5xl text-center text-[#0a4a63]">
          LAYLAK RESTAURANT DOWNTOWN
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
              Laylak Restaurant Downtown was developed by Dice Hospitality’s advanced <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/concept-development-menu-design">Restaurant Concept Development and menu design services</a></b> by combining strategic storytelling, market analysis, and global brand positioning. As a leading Dubai-based hospitality agency and one of the top Restaurant Concept Development Consultants in Dubai, Dice crafted a concept that reflects innovative F&B concepts.
              <br /><br /> Our expert restaurant concept consultants ensured a cohesive identity showcasing our strength in Restaurant Concept Creation, restaurant concept development Dubai, and shaping new brands for international success with the same precision used for UAE Top Food Brands.
</p>
        
          </div>

          {/* Image 1 */}
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/laylak-2.jpg"
                alt="Dining space at La Maison Ani"
                fill
                className="object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* CUISINE SECTION */}
      <section className="w-full bg-[#f2d4e6ba] bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[size:32px_32px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
            {/* Images (2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/laylak-8.jpg"
                  alt="French dish at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/laylik-7.webp"
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
              The cuisine direction for Laylak Restaurant Downtown was shaped through Dice Hospitality’s specialised menu development and consultation services, delivering a food identity that aligns with both brand personality and market demand. As leaders in restaurant concept development and menu design services in Dubai, we crafted a signature menu through expert menu creation, supported by our skilled Restaurant Menu Designers in UAE. With a strong foundation in menu design services in Dubai and globally influenced culinary strategy, <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/">Dice Hospitality</a></b> ensured LAYLAK’s offering remains competitive, contemporary, and aligned with our reputation for premium Restaurant Menu Design Services by Dice.
              </p>
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
           LAYLAK’s atmosphere was guided by Dice Hospitality’s refined approach to <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/restaurant-interior-design">Restaurant Interior Design Services in Dubai</a></b> , creating a visually cohesive and immersive dining environment. Our interior strategy reflects the standards of the best restaurant interior design companies in Dubai, supported by our capability as experienced Restaurant Interior Design & Fit Out Contractors in Dubai. Laylak Restaurant Downtown has a strong Restaurant Design & Branding, This project highlights our expertise in Restaurant Consultancy, Restaurant consultant Dubai, and Restaurants Consulting Services in UAE, showing how thoughtful interior direction elevates the overall dining experience. </p>
          </div>

          {/* Images (2 in a row) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/laylak-1.jpg"
                alt="La Maison Ani interior 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/laylak-5.webp"
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
          Location
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Location Card */}
          
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm sm:text-base tracking-wide text-[#0a4a63] uppercase">
                Laylak Beirut Restaurant
              </p>
            </div>
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded">
              <iframe
                title="La Maison Ani Dubai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.561520183319!2d55.276386!3d25.184279399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69003fd9752d%3A0x125fc2b22d82d0f0!2sLaylak%20Beirut%20Restaurant!5e0!3m2!1sen!2sae!4v1763966103352!5m2!1sen!2sae"
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
