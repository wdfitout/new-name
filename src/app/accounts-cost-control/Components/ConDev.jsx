"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Accounts & Cost Control – DICE Hospitality
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
   
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
   At Dice Hospitality, we specialize in restaurant accounting and cost control services in Dubai, UAE, helping food and beverage businesses to achieve financial and operational efficiency. Our expert team provides customized solutions for cafes, restaurants and hotels while ensuring smooth operations and aligning with UAE regulations.
      <br />
      <br />
      Dice Hospitality totally understands the unique challenges of F&B industry. From daily transactions to detailed financial reporting, our services encourage restaurant owners with accurate insights, enabling them to optimize profitability and make strong business decisions.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/acc-1.png"
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
              Why Choose DICE Hospitality?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              Choosing Dice for your accounts and cost control management helps your restaurant save precious time, minimize calculation errors and stay compliant with UAE financial regulations. We have hands-on experience of managing 100+ projects of restaurants, cafes, lounges and clubs, our team of qualified accountants with F&B expertise deliver cost effective and customized services while providing transparent reporting which empower restaurant business owners to make strong financial decisions.
              <br />
              <br />
            </p>
          </div>

          {/* Two images */}
  
  <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-2.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
      />
    </div>
  ))}
</div>

        </div>
        <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
          <strong> Key advantages of partnering with us include:</strong>
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Expert handling of restaurant financial operations:</strong> Our team covers all aspects of accounting, from daily transactions to detailed financial reporting while ensuring restaurants finances are accurate and trustable.</li>

         <li><strong>Cost-effective and tailored accounting solutions:</strong> At Dice, we craft accounting solutions that suit the specific business requirements of our clients in Dubai, assisting you in maximizing resources and reducing wasteful spending.</li>

         <li><strong>Clear visibility of expenses and revenue:</strong> With detailed financial reports and information, you have a complete picture of how your restaurant is performing and can make wiser decisions to increase profitability.</li>

         <li><strong>Support for strategic growth and profitability:</strong> We provide financial guidance and analysis to help you plan expansions, control costs, and increase profit margins sustainably.</li>
       </ul>
        </p>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Core Accounting & Financial Management
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            Accurate bookkeeping is the foundation of strong financial management. At DICE Hospitality, we record every transaction with precision to maintain transparency and compliance.
        
          </p>
            <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
          <strong>Our core services include:</strong>
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li>Posting all <strong>sales and purchases</strong></li>

         <li>Recording <strong>cash and bank transactions</strong></li>

         <li>Managing the <strong>general ledger and inter-company accounts</strong></li>

         <li>Maintaining <strong>fixed assets</strong></li>

         <li>Preparing <strong>financial statements</strong> (Profit & Loss, Balance Sheet, Cash Flow)</li>
       </ul>
        </p>
        </div>

        {/* Two images */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-3.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
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
              Accounts Payable & Receivable
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
                 <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
          Managing supplier payments and customer collections is crucial for healthy cash flow and operational stability. We provide:
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li>Detailed <strong>AP/AR reports and aging analysis</strong></li>

         <li><strong>Corporate customer billing</strong></li>

         <li>Supplier and customer <strong>reconciliations</strong></li>

       </ul>
       These services ensure your restaurant operates efficiently with full financial transparency.
        </p>
            </p>
          </div>

          {/* Two images */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-4.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
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
            Reconciliation Services
          </h2>
       <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
          Daily, accurate reconciliations prevent financial discrepancies and protect profitability. Our reconciliation services include:
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Bank account reconciliations</strong></li>

         <li><strong>Daily sales and deposit verification</strong></li>

         <li><strong>Credit card statement reconciliation</strong></li>
        
        <li><strong>POS vs online channel reconciliation</strong>(Deliveroo, Zomato, Talabat, etc.)</li>

         <li><strong>VAT reconciliation</strong></li>
       </ul>
        </p> 
        </div>

        {/* Two images */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-5.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
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
              Managed Payroll & Compliance
            </h2>
             <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
         Efficient payroll management ensures smooth HR operations and compliance with UAE labor laws. Our services include:
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Master file maintenance</strong></li>

         <li><strong>Monthly payroll processing</strong></li>

         <li><strong>Leave pay and end-of-service benefits calculation</strong></li>
        
       </ul>
       We also manage VAT accounting and regulatory compliance, including return preparation, filing, refund submissions, and advisory support, keeping your business fully compliant.
        </p> 
          </div>

          {/* Two images */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-6.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
      />
    </div>
  ))}
</div>
        </div>
      </div>

      {/* ================= Cuisine Section (texture bg) ================= */}
           <div
             className="w-full py-10 sm:py-12 md:py-16">
             <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
               {/* Text first on mobile, right on desktop */}
     
            <div className="order-1">
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4">
         Cost Control & Financial Analysis
       </h2>
                 <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
         Optimizing profits requires effective cost control and actionable insights. We provide:
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li><strong>Break-even analysis reports</strong></li>

         <li><strong>Food and beverage cost tracking</strong></li>

         <li><strong>Profitability analysis by outlet or channel</strong></li>

         <li><strong>Financial presentations to management</strong></li>
        
       </ul>
      We monitor key metrics such as food cost %, prime costs, overhead rates, COGS, and gross profit to help restaurants reduce waste and maximize margins.
        </p> 
     </div>
     
     
               {/* Two images */}
                 <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-7.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
      />
    </div>
  ))}
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
              Additional Services
            </h2>
             <p className="text-slate-900 text-base sm:text-[17px] px-4 sm:px-8 leading-7 md:leading-8 mt-4">
         To support growth and strategic planning, we offer:
       <ul className="list-disc pl-5 space-y-2 mt-2">
         <li>External audit support for audit-ready statements</li>

         <li>Budgeting and forecasting for expansions or new outlets</li>

         <li><strong>Financial advisory and CFO services to guide business decisions and ROI analysis</strong></li>
        
       </ul>
       At DICE Hospitality, we are your reliable company for restaurant accounting and cost control in Dubai. No matter if you want to improve profitability or streamline costs, our skilled team is always ready to support you.
       <br />
       <br />
       Contact us and Visit Us today to know how we optimize accounting operations and help restaurants in Dubai to achieve financial success
        </p> 
          </div>

          {/* Two images */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
  {[
    { src: "/images/acc-8.png", alt: "Cuisine dish 1" },
  ].map((img, i) => (
    <div key={i} className="relative overflow-hidden rounded">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}   // same ideal width
        height={700}  // same ideal height
        className="rounded"
      />
    </div>
  ))}
</div>
        </div>
      </div>

           


    </section>
  );
}
