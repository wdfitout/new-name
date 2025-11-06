"use client";

import Image from "next/image";

export default function ConDev() {
  return (
    <section className="bg-white text-[#0e3e4a] mt-16 sm:mt-20">
      {/* ================= Title ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center">
    Menu Engineering Services in Dubai
  </h1>
</div>

{/* ================= Concept Section ================= */}
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
  {/* Text first */}
  <div className="max-w-2xl order-1">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
      Menu Engineering Concept
    </h2>
    <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
      In today's competitive industry of hospitality, cafés and restaurants in Dubai need more than just interiors and good services, they need a strategic menu engineering to enhance their profit and to deliver a memorable experience to their guests. At Dice Hospitality, we specialize in Menu Engineering, Menu Development and F&B Consulting in Dubai. We are providing a well structured approach to help restaurants in designing profitable and customer oriented menus according to their brand identity.
      <br />
      <br />
      Our team of F&B consultants and strategists use their expertise in hospitality consulting in Dubai with a detailed research and understanding of food trends,menu psychology and customer behaviour. Every project at Dice hospitality starts with understanding the food and beverage concept of restaurants, followed by design, pricing, menu analysis,optimization and development. As a result the menu we create is not only appealing by its look but it also drives sales and profit.
    </p>
  </div>

  {/* Single image in original size */}
  <div className="order-2 flex justify-center md:justify-end">
    <Image
      src="/images/mmee-2.png"
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
             Expert Consulting Services for Menu Engineering
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
             Dice Hospitality provides end to end customized services according to the requirements of every cafe, restaurant and hospitality brand in Dubai:
             <br />
             <br />
             <strong>Menu Analysis</strong> – A thorough review of the current menu structure, the underperforming items, best sellers and the customer demands to identify the gaps and opportunities of the ongoing menu.
             <br />
             <br />
             <strong>Menu Design </strong>– Crafting layout and menu architecture that focuses high margin dishes, uses menu psychology effectively and improves the decision-making of guests.<br /> 
             <strong>Menu Pricing</strong> – Designing smart pricing strategies according to the food costs,market positioning, and customer perception to enhance profit without compromising value. <br />
             <strong>Menu Optimization</strong> – Refining the current menus with cost control, recipe adjustments, product specifications and tasting to boost the overall performance.<br /> 
             <strong>New Menu Development</strong> – Introducing innovative food and beverage offerings aligned with your brand identity, including recipe creation, dish costing, and product testing to ensure a smooth launch.
            </p>
          </div>

          
          {/* One image (same settings, no changes) */}
        <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded">
          <Image
          src="/images/mmee-1.png"
          alt="Cuisine dish 1"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>

        </div>

            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 px-4 md:px-8 items-center">
             This structured process makes us one of the most trusted names in restaurant consulting services in UAE.
             </p>
      </div>

      {/* ================= Process Section ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
        {/* Text first */}
        <div className="max-w-2xl order-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6">
            Why Menu Engineering is Essential?
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            A Good and Effective Menu is not just a list of dishes or food, it works as a marketing tool which directly affects your restaurant’s bottom line. Our F&B interior design consultants in Dubai UAE usually combine menu strategy with brand storytelling, while ensuring that the food concept,restaurant and hospitality feels cohesive.By focusing dish costing, menu psychology, menu optimization and profitability strategies, Dice Hospitality help their clients to achieve the desired results.
            <br /><br />
            From product specifications to staff training, every detail of our menu development process is according to your operational goals. Dice as hospitality consulting company ensures that new and established restaurants both can take benefit from innovative menu strategies designed to maximize sales while reducing waste.
          </p>
        </div>

        
       {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/mme-2.png"
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
              Driving Restaurant Success with F&B Strategy
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8">
              If you partner with Dice Hospitality, you will automatically get access to our team of restaurant consultants, F&B experts and hospitality strategists in Dubai, who understand the challenge of driving a successful food business in Dubai. Whether you need to launch a new café, optimize a casual dining menu or rebrand a dining restaurant, our food and beverage consulting, menu engineering and restaurant strategy ensure that your business stays competitive.
              <br />
              <br />
             Our restaurant consulting approach is data-driven yet creative and balanced with science of cost control with the art of culinary storytelling. By applying recipe creation, menu psychology, training and product testing, Dice hospitality give your Dubai restaurant the tools survive and thrive in a highly competitive market.
            </p>
          </div>

          {/* Two images */}
        {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/mmee-4.png"
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
            Elevate Your Restaurant with Professional Menu Consulting
          </h2>
          <p className="text-slate-700 text-base sm:text-[17px] leading-7 md:leading-8 mb-6">
            As one of the top companies offering F&B consulting and restaurant consulting services in UAE, we go beyond basic advice to deliver actionable strategies.From menu design and development to the pricing and profit analysis,every service we provide is aimed at improving financial performance and guest experience.
            <br /><br />
            If you are looking for trusted hospitality consulting in Dubai, or need F&B consultants and strategists who can bring your vision to life, our team is here to
            support your growth. With a proven track record in menu engineering, menu optimization, and restaurant success strategies, we help transform your food and beverage concept into a thriving business.
            <br /><br />
          </p>
        </div>

        {/* Two images */}
    {/* One image (landscape format, same styling) */}
<div className="order-2 md:order-1 grid grid-cols-1 gap-4">
  <div className="relative aspect-[16/9] overflow-hidden rounded">
    <Image
      src="/images/mmee-3.png"
      alt="Cuisine dish 1"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    />
  </div>
</div>

      </div>
    </section>
  );
}
