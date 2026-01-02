"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
 
  // 👉 keep adding type/location/year/scope for other items as you want
 { img: "/images/laylak-1.jpg", 
    alt: "Apartment Interior Design", 
    title: "LAYLAK",
     type: "RESTAURANT",
    location: "Financial District, Toronto, Downtown, Oakville,Canada",
    year: "2023",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",  
  }, 
  
{ img: "/images/code8.avif", 
    alt: "Code Eight Cafe lounge and restaurant Design", 
    title: "CODE 8 LOUNGE",
    type: "RESTAURANT & LOUNGE",
    location: "Mercure Hotel, SZR, Dubai",
    year: "2022",
    scope: "FULL CONCEPT CREATION",
    href: "/mercure-hotel-restaurant",   
  },

  { img: "/images/nurai.webp", 
    alt: "Apartment Interior Design", 
    title: "NURAI CAFE",
    type: "RESTAURANT & CAFE",
    location: "Business Bay, Motor City",
    year: "2021",
    scope: "CONCEPT DEVELOPMENT",
    href: "/business-bay-restaurant",   
  }, 

 {
    img: "/images/baytw.webp",
    alt: "Bayt Ward Interior",
    title: "BAYT WARD",
    type: "LEBANESE RESTAURANT",
    location: "Sheikh Mohamed Boulevard, Dubai,",
    year: "2021",
    scope: "CONCEPT DEVELOPMENT",
    href: "/laylak-restaurant-downtown",   
  },

  
  { img: "/images/sahelnomx.avif", 
    alt: "Apartment Interior Design", 
    title: "SAH EL NOM EXPRESS",
    type: "RESTAURANT & CAFE",
    location: "street Food Business Bay, Dubai",
    year: "2020",
    scope: "FULL CONCEPT CREATION & CONCEPT DEVELOPMENT",
    href: "/laylak-restaurant-downtown",   
  },

  { img: "/images/midhat.avif", 
    alt: "Apartment Interior Design", 
    title: "MIDHAT PASHA", 
    type: "CAFE",
    location: "Business Bay, Dubai",
    year: "2020",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 


  { img: "/images/crazymask.avif", 
    alt: "Apartment Interior Design", 
    title: "CRAZY MASK",
    type: "LEBANESE RESTAURANT BAR & CIGAR LOUNGE",
    location: "JBR, Dubai",
    year: "2020",
    scope: "FULL CONCEPT CREATION & CONCEPT DEVELOPMENT",
    href: "/laylak-restaurant-downtown",   
  },
    

  { img: "/images/charcoal.avif", 
    alt: "Apartment Interior Design", 
    title: "CHARCOAL GARDEN",
    type: "RESTAURANT",
    location: "Media City, Dubai",
    year: "2019",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/samoon.jpg", 
    alt: "Apartment Interior Design", 
    title: "SAMOON",
    type: "FAST FOOD",
    location: "Media City, Dubai",
    year: "2019",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/estikana.jpeg", 
    alt: "Apartment Interior Design", 
    title: "ESTIKANA",
    type: "CAFE",
    location: "Business Bay,Dubai",
    year: "2018",
    scope: "F&B CONSULTANCY",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/above.avif", 
    alt: "Apartment Interior Design", 
    title: "ABOVE",
    type: "NIGHT CLUB",
    location: "DuSofitel DT, Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

   { img: "/images/gal.avif", 
    alt: "Apartment Interior Design", 
    title: "BALCON",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai Marine Resort, Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 


  { img: "/images/sahelz.avif", 
    alt: "Apartment Interior Design", 
    title: "SAHEL NOM ZAMAN",
    type: "RESTAURANT & LOUNGE",
    location: "Bluewaters Island,Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/karamna.avif", 
    alt: "Apartment Interior Design", 
    title: "KARAMNA AL KHALEEJ",
    type: "RESTAURANT",
    location: "Downtown, Dubai",
    year: "2018",
    scope: "CONCEPT UPGRADED",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/sahelnom.avif", 
    alt: "Apartment Interior Design", 
    title: "SAH EL NOM",
    type: "CAFE & RESTAURANT",
    location: "Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/pit.avif", 
    alt: "Apartment Interior Design", 
    title: "THE PIT",
    type: "RESTAURANT",
    location: "Jumeirah, Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/lua.avif", 
    alt: "Apartment Interior Design", 
    title: "LUA",
    type: "RESTAURANT",
    location: "Sofitel Hotel, The Palm HOTEL,Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",    
  }, 

    { img: "/images/traffic.avif", 
    alt: "Apartment Interior Design", 
    title: "TRAFFIC",
    type: "NIGHTCLUB",
    location: "Dubai Marine Resort,Dubai",
    year: "2016",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  },

 { img: "/images/times-of-arabia.avif", 
    alt: "Apartment Interior Design", 
    title: "TIMES OF ARABIA",
    type: "RESTAURANT",
    location: "Souk Mafinat Jumeirah, Dubai",
    year: "2014",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  },

    { img: "/images/cash.avif", 
    alt: "Apartment Interior Design", 
    title: "CASH",
    type: "NIGHTCLUB",
    location: "Movenpick Ibn Battuta,Dubai",
    year: "2013",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",    
  }, 

  { img: "/images/montegorlo.avif", 
    alt: "Apartment Interior Design", 
    title: "MONTECARLO",
    type: "RESTAURANT & CAFE",
    location: "Marina Walk, Dubai",
    year: "2013",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  },

  { img: "/images/ward.webp", 
    alt: "Apartment Interior Design", 
    title: "WARD",
    type: "CAFE & RESTAURANT",
    location: "Marina, Dubai",
    year: "2013",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/OWN-Restaurant-2.avif", 
    alt: "Apartment Interior Design", 
    title: "OWN",
     type: "CAFE & RESTAURANT",
    location: "JLT, Dubai",
    year: "2013",
    scope: "F&B CONSULTANCY",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/balcony.avif",
    alt: "Apartment Interior Design", 
    title: "OCEAN CLUB CASINO",
    type: "BAR & RESTAURANT",
    location: "Airport Road, Damascus",
    year: "2011",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/elegante.avif", 
    alt: "Apartment Interior Design", 
    title: "ELEGANTE",
    type: "NIGHTCLUB",
    location: "Royal Ascot Hotel, Dubai",
    year: "2007",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",   
  }, 

  { img: "/images/times.avif", 
    alt: "Apartment Interior Design", 
    title: "TIMES",
    type: "RESTAURANT & LOUNGE",
    location: "Media City, Dubai",
    year: "2003",
    scope: "FULL CONCEPT CREATION",
    href: "/laylak-restaurant-downtown",    
  },
  // ...
];

const PProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white mt-20 md:mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">

        {/* Section Title */}
        <div className="relative mb-6 sm:mb-12 mt-6 sm:mt-12">
          <h2 className="text-lg sm:text-xl text-black font-bold tracking-wider text-center">
            OUR CLIENTS IN DUBAI
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <Link
              key={index}
              href={card.href || "#"}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer w-full block"
            >
              {/* Background image */}
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Center content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[0.2em] mb-4">
                  {card.title}
                </h3>

                {card.type && (
                  <p className="text-xs sm:text-sm tracking-[0.25em] mb-1">
                    {card.type}
                  </p>
                )}

                {card.location && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mb-1">
                    {card.location}
                  </p>
                )}

                {card.year && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mb-1">
                    {card.year}
                  </p>
                )}

                {card.scope && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mt-2">
                    {card.scope}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PProjects;
