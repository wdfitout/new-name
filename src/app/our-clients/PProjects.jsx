"use client";

import React from "react";
import Image from "next/image";

const projects = [
 
  // 👉 keep adding type/location/year/scope for other items as you want
  {
    img: "/images/baytw.webp",
    alt: "Bayt Ward Interior",
    title: "BAYT WARD",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT",
  },

  { img: "/images/code8.avif", 
    alt: "Apartment Interior Design", 
    title: "CODE 8 LOUNGE",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  },

  { img: "/images/nurai.webp", 
    alt: "Apartment Interior Design", 
    title: "NURAI CAFE",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/baytw.webp", 
    alt: "Apartment Interior Design", 
    title: "BAYT WARD",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/crazymask.avif", 
    alt: "Apartment Interior Design", 
    title: "CRAZY MASK",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  },
    
  { img: "/images/sahelnomx.avif", 
    alt: "Apartment Interior Design", 
    title: "SAH EL NOM EXPRESS",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  },

  { img: "/images/midhat.avif", 
    alt: "Apartment Interior Design", 
    title: "MIDHAT PASHA", 
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT",
  }, 

  { img: "/images/charcoal.avif", 
    alt: "Apartment Interior Design", 
    title: "CHARCOAL GARDEN",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/samoon.jpg", 
    alt: "Apartment Interior Design", 
    title: "SAMOON",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/estikana.jpeg", 
    alt: "Apartment Interior Design", 
    title: "ESTIKANA",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/sahelz.avif", 
    alt: "Apartment Interior Design", 
    title: "SAHEK NOM ZAMAN",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/karamna.avif", 
    alt: "Apartment Interior Design", 
    title: "KARMANA AL KHALEEJ",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/sahelnom.avif", 
    alt: "Apartment Interior Design", 
    title: "SAH EL NOM",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/pit.avif", 
    alt: "Apartment Interior Design", 
    title: "THE PIT",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/lua.avif", 
    alt: "Apartment Interior Design", 
    title: "LUA",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT",
   }, 

  { img: "/images/montegorlo.avif", 
    alt: "Apartment Interior Design", 
    title: "MONTEGARLO",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT",
  },

  { img: "/images/eva.avif", 
    alt: "Apartment Interior Design", 
    title: "OCEAN CLUB CASINO",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/balcony.avif",
    alt: "Apartment Interior Design", 
    title: "OCEAN CLUB CASINO",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/ward.webp", 
    alt: "Apartment Interior Design", 
    title: "WARD",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/lylak.avif", 
    alt: "Apartment Interior Design", 
    title: "LAYLAK",
     type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/times-of-arabia.avif", 
    alt: "Apartment Interior Design", 
    title: "TIMES OF ARABIA",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  },

  { img: "/images/gal.avif", 
    alt: "Apartment Interior Design", 
    title: "BALCON",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/cash.avif", 
    alt: "Apartment Interior Design", 
    title: "CASH",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/traffic.avif", 
    alt: "Apartment Interior Design", 
    title: "TRAFFIC",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  },

  { img: "/images/elegante.avif", 
    alt: "Apartment Interior Design", 
    title: "ELEGANT",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/above.avif", 
    alt: "Apartment Interior Design", 
    title: "ABOVE",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT", 
  }, 

  { img: "/images/times.avif", 
    alt: "Apartment Interior Design", 
    title: "TIMES",
    type: "RESTAURANT & LOUNGE",
    location: "Dubai",
    year: "2021",
    scope: "INTERIOR DESIGN & FIT-OUT",
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
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden group cursor-default w-full"
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

              {/* Centered text block */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PProjects;
