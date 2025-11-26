"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white text-slate-800">
      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-24 pb-10">
        <h1 className="text-3xl sm:text-4xl mt-20 sm:mt-10 lg:text-5xl text-center text-[#0a4a63]">
          MERCURE HOTEL RESTAURANT
        </h1>
      </div>

      {/* CONCEPT SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6">
            Restaurant Concept Development
            </h2>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              At DICE Hospitality, our work on Code Eight – Restaurant & Lounge at Mercure Hotel, SZR, Dubai stands as a benchmark in <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/">Hospitality Consulting in Dubai</a></b> and Hospitality Management Services Dubai. The complete concept our team of Leading F&B Consulting Dubai specialists developed for this project merges modern dining culture with increased lounge-style comfort. <br /><br />Having established ourselves as Hospitality Consultants in Dubai, we were able to shape a vision that enhances the guest experience and strengthens the operational flow for long-term success of this restaurant in Dubai. The full concept development for CODE 8 included <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/concept-development-menu-design">Restaurant Concept Creation</a></b>, brand positioning, and market-proof planning backed by Hospitality Management Services in Dubai. 
             </p>
        
          </div>

          {/* Image 1 */}
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/code8-1.webp"
                alt="Dining space at La Maison Ani"
                fill
                className="object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* CUISINE SECTION */}
      <section className="w-full bg-[#ea642f30] bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[size:32px_32px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
            {/* Images (2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/code8-2.webp"
                  alt="French dish at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/code8-3.webp"
                  alt="Dessert at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-4">
              <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6 text-left">
             Mercure Hotel Restaurant Cuisine
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
             The culinary direction for Code Eight was supported by our expertise in menu development solutions, <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/menu-engineering ">Menu Engineering Services in Dubai</a></b>, and Consulting Services for Menu Engineering. As trusted Restaurant Menu Development Consultants in Dubai, we crafted a menu that perfectly matches the lounge atmosphere while meeting the dining expectations of Dubai. Every dish was curated using proven menu development and engineering principles to boost profitability and guest satisfaction for this lounge. Through our Restaurant Menu Development & Engineering framework, the cuisine concept integrates global favorites with refined presentation.</p>
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
              Mercure Hotel Restaurant Interior Design 

            </h2>
            <p className="leading-relaxed text-sm sm:text-base">
            The interior design work of CODE 8 clearly reflects the work of Professional Restaurant Design Services in Dubai combined with the creativity of <b className="text-[#0a4a63]"><a href="https://dicehospitality.ae/restaurant-interior-design">Restaurants & Lounge Interior Designers in UAE</a></b>. As the best restaurant interior design in Dubai for modern lifestyle dining, the concept enhances every guest touchpoint through ambiance, visual identity, and space planning.
<br /> <br />As a leading Restaurant Interior Design & Fit Out Contractor in Dubai, Dice Hospitality executed an interior design that merges comfort with elegance. Our interior design work also extends to restaurant fit-out Dubai, ensuring technical precision, high-quality materials, and a cohesive aesthetic across the entire lounge and restaurant.

</p>
          </div>

          {/* Images (2 in a row) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/code8-5.webp"
                alt="La Maison Ani interior 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/code8-6.webp"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231259.57594600125!2d55.03636682812501!3d25.08727192684533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b071eb530a1%3A0xda3e87f6beb4b709!2sCode%20Eight%20Mixo%20Lounge!5e0!3m2!1sen!2s!4v1764154592148!5m2!1sen!2s"
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
