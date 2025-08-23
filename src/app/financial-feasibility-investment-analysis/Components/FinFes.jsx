"use client";

import Image from "next/image";

export default function FinFes() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Financial Feasibility & Investment
Analysis for Restaurants in Dubai –
DICE Hospitality
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Concept
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      At DICE Hospitality, we specialize in providing financial feasibility studies and market
strategy for restaurants, cafés, and hospitality projects across Dubai and the UAE. Our team is
Experienced as hospitality consultants in Dubai and food and beverage consultants
in Dubai. They help and guide entrepreneurs,investors and operators in making best business
decisions through their detailed investment analysis Dubai.

      <br />
      <br />
      Establishing a restaurant in Dubai needs more than passion—it takes financial transparency,
solid market research, and realistic expectations. That's where we step in as among the top
restaurant opening consultants in Dubai, providing expert feasibility study and
market research for restaurants to your business idea.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/con2.png"
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
              Why a Restaurant Financial Feasibility Study Is Important?

            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
          Prior to investing in a new F&B project, conducting a restaurant feasibility study in Dubai
guarantees your idea is financially sound and strategically located in the restaurant
management sector. DICE Hospitality provides a holistic approach encompassing:
          <br></br>
          <strong>Feasibility study for Dubai hospitality – </strong>tailored to restaurants, cafés, and high-end dining
          ventures
<br></br>
         <strong> Feasibility study for UAE fine-dining restaurants –</strong> comprehensive information on
          high-end dining investments.
<br></br>
          <strong>Business feasibility study UAE – </strong>precise information to determine profitability and
          viability.
<br></br>
          <strong>Market research Dubai – </strong>determining target markets, customer tastes, and competitive
          positioning.
<br></br>
          <strong>Financial feasibility study Dubai – </strong>overall cost estimates, cash flow analysis, and capital
          planning. With financial precision blended with strategic vision, we assist you in reducing risks,
optimizing ROI, and enticing investors with certainty.


           </p>
          </div>

          {/* Two images */}
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "/images/dev1.png", alt: "Cuisine dish 1" },
              { src: "/images/dev2.png", alt: "Cuisine dish 2" },
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
            What Our Financial Feasibility & Investment Analysis Includes
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            When you choose DICE Hospitality as your partner, you gain access to a full set of analytical
            and financial solutions, including:
          </p>
        <ol className="list-decimal list-inside text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 space-y-2">
        <li><strong> Break-even analysis –</strong> Identify when your restaurant will cover costs and start
              generating profit.</li>
        
        <li><strong>ROI forecast Dubai –</strong> Realistic return on investment calculations tailored to your
            restaurant type.</li>
        
        <li><strong> Restaurant accounting in Dubai UAE –</strong> Structured accounting solutions that align
            with local compliance standards.</li>
        
        <li><strong>PInvestor reports Dubai –</strong> Professional documents that present your concept’s
            financial viability to stakeholders and investors.</li>
        
        <li><strong>Market strategy –</strong> A practical roadmap to position your brand competitively in
            Dubai’s hospitality industry</li>
        
        <li><strong>All about starting a restaurant business in Dubai –</strong> Comprehensive guidance on
            licenses, approvals, and financial planning.</li>
        <li><strong>How to open a restaurant in Dubai –</strong> Step-by-step investment analysis, from
            concept to execution.
</li>
        </ol>
        </div>

        {/* Two images */}
        <div className="order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/proc1.png", alt: "Process image 1" },
            { src: "/images/proc2.png", alt: "Process image 2" },
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

     {/* ================= Process Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  
  <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
What Our Financial Feasibility & Investment Analysis Includes
  </h2>
</div>




    
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      When you choose DICE Hospitality as your partner, you gain access to a full set of analytical
      and financial solutions, including:
    </p>

    <ol className="list-decimal list-inside text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 space-y-2">
      <li><strong>Break-even analysis –</strong> Identify when your restaurant will cover costs and start generating profit.</li>
      <li><strong>ROI forecast Dubai –</strong> Realistic return on investment calculations tailored to your restaurant type.</li>
      <li><strong>Restaurant accounting in Dubai UAE –</strong> Structured accounting solutions that align with local compliance standards.</li>
      <li><strong>Investor reports Dubai –</strong> Professional documents that present your concept’s financial viability to stakeholders and investors.</li>
      <li><strong>Market strategy –</strong> A practical roadmap to position your brand competitively in Dubai’s hospitality industry.</li>
      <li><strong>All about starting a restaurant business in Dubai –</strong> Comprehensive guidance on licenses, approvals, and financial planning.</li>
      <li><strong>How to open a restaurant in Dubai –</strong> Step-by-step investment analysis, from concept to execution.</li>
    </ol>
 

    </section>
  );
}
