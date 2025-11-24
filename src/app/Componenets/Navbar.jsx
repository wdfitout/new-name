"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { title: "About Us", path: "/about-us" },
  {
    title: "Services",
    path: "#services",
    subItems: [
      { title: "Concept Development", path: "/concept-development-menu-design" },
      { title: "Financial Feasibility", path: "/financial-feasibility-investment-analysis" },
      { title: "Location Assessment", path: "/location-assessment" },
      { title: "Interior Design", path: "/restaurant-interior-design" },
      { title: "Kitchen Design & Tender", path: "/kitchen-design-tender" },
      { title: "Menu Engineering", path: "/menu-engineering" },
      { title: "HR Support", path: "/hr-support" },
      { title: "OS & E Advice", path: "/os-e-advice" },
      { title: "Staff Training", path: "/sops-staff-training" },
    ],
  },
  {
    title: "Post - Opening Operations Management",
    subItems: [
      { title: "Operations Management", path: "/operation-management" },
      { title: "HR Management", path: "/hr-management" },
      { title: "Accounts & Cost Control", path: "/accounts-cost-control" },
      { title: "IT Support", path: "/it-support" },
    ],
  },
  { title: "Our Clients", path: "/our-clients" },
  { title: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // NEW: scroll-based visibility
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at very top
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else {
        // If scrolling down and mobile menu is NOT open → hide
        if (currentScrollY > lastScrollY.current && !menuOpen) {
          setIsVisible(false);
        }
        // If scrolling up → show
        else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 shadow-md
        bg-black/60 text-white
        transition-colors duration-300
        transform transition-transform duration-300
        ${isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto px-6 py-0 flex items-center justify-between mt-8">
        {/* Logo */}
        <Link href="/" className="flex items-center pl-4">
          <Image
            src="/images/dice-logo-white.png"
            alt="Logo"
            width={100}
            height={100}
            className="mr-2 transition duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-10 items-center pl-40 pr-0 text-white">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div key={index} className="relative group">
                <button className="flex items-center gap-1 hover:text-red-400">
                  {item.title} <FaChevronDown className="text-xs mt-0.5" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 bg-black/80 text-white rounded shadow-lg w-52 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 z-50">
                  {item.subItems.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.path}
                      className="block px-4 py-2 hover:bg-black/60"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.path}
                className="hover:text-red-400"
              >
                {item.title}
              </Link>
            )
          )}
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="lg:hidden pr-20">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/80 text-white px-6 pt-6 pb-6 space-y-4 rounded-b-lg">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full flex justify-between items-center font-semibold text-left hover:text-red-300"
                  >
                    {item.title} <FaChevronDown className="text-xs" />
                  </button>

                  {activeDropdown === item.title && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.subItems.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.path}
                          className="block hover:text-red-400"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className="block font-semibold hover:text-red-400"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/get-started"
            className="inline-block bg-[#7D090F] text-white px-5 py-2 rounded-full font-semibold tracking-wide transition hover:opacity-90"
          >
            GET STARTED
          </Link>
        </div>
      )}

      {/* Silver Grey Bottom Line */}
      <div className="w-[70%] mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-[#bcbcbc] to-transparent opacity-70 mt-1" />
    </nav>
  );
}
