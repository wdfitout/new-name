"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white text-slate-800">
      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-24 pb-10">
        <h1 className="text-3xl sm:text-4xl mt-20 sm:mt-10 lg:text-5xl text-center text-[#0a4a63]">
          Business Bay Restaurant
        </h1>
        <h2 className="text-2xl sm:text-3xl mt-10">Laylik Beirut Restaurant</h2>
      </div>

      {/* CONCEPT SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0a4a63] mb-4 sm:mb-6">
              Concept
            </h2>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              The core concept of Laylak is rooted in Lebanese heritage but elevated with a modern touch, offering a blend of authentic warmth and sophisticated dining. It was founded with a passion for sharing exceptional food and creating a family-like atmosphere where guests can enjoy meaningful meals. 
              
            </p>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              The name "Laylak" itself means lilac flower, symbolizing elegance, calm, and beauty. The restaurant aims to transport diners, offering a taste of Beirut in the heart of Dubai, and is designed to bring people together in a vibrant yet elegant space.
            </p>
        
          </div>

          {/* Images (3 in a row) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/laylik-4.webp"
                alt="La Maison Ani interior 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/laylik-5.webp"
                alt="La Maison Ani interior 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/laylik-3.webp"
                alt="Chef preparing food at La Maison Ani"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CUISINE SECTION */}
      <section className="w-full bg-[#e5eef1] bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[size:32px_32px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
            {/* Images (2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/laylik-2.webp"
                  alt="French dish at La Maison Ani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/laylik-1.webp"
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
                Laylak's cuisine is a rich blend of traditional Lebanese and international dishes, reimagined with modern flair and artistic plating. The menu focuses on authentic, high-quality ingredients and features a wide selection of hot and cold mezzeh, grilled meats, and unique signature dishes. Popular menu items include Chicken Taouk, Kafta Arayes, and "Lara's Favorite," a crunchy chicken dish. The dishes often incorporate a balance of sweet and savory flavors, like halloumi cheese rolls served with watermelon, creating a unique and memorable dining experience.
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
              Design
            </h2>
            <p className="leading-relaxed text-sm sm:text-base">
              The interior design of Laylak is characterized by modern elegance and thoughtful curation. The ambiance is warm and inviting, with a cozy atmosphere that is perfect for both casual dining and special occasions. Key design elements include a stunning canal or lakeside view in its Dubai location, comfortable seating like velvet banquettes, and intricate decorative touches that evoke a sense of refined taste. The design balances comfort with opulence, using splashes of the signature lilac hue in its decor to maintain brand identity and a visually appealing environment.
            </p>
          </div>

          {/* Images (2 wide) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/laylik-6.webp"
                alt="Dining space at La Maison Ani"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/laylik-7.webp"
                alt="Restaurant interior at La Maison Ani"
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
