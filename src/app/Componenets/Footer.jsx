import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E001F] text-white pt-16 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm">
        {/* Company Info */}
        <div className="md:col-span-2 space-y-4">
          <Image
            src="/images/dice-logo-white.png"
            alt="Dice Logo"
            width={150}
            height={40}
          />
          <p className="text-gray-400">
            Transforming Ideas into Dining Excellence at Dice Hospitality. Elevate
            your Dining space with our luxury solutions and high end luxury services.
          </p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#7D090F]" /> info@dicehospitality.ae
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#7D090F]" /> +971 55 599 8866
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#7D090F]" /> OFFICE - WH-05 A, JABEL ALI
              INDUSTRIAL 1, DUBAI, UAE
            </li>
          </ul>
          <div className="flex gap-3 text-white text-lg pt-2">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGoogle />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/concept-development-menu-design" className="hover:text-white">
                concept-development
              </Link>
            </li>
            <li>
              <Link href="/financial-feasibility-investment-analysis" className="hover:text-white">
                financial-feeasibility
              </Link>
            </li>
            <li>
              <Link href="/location-assessment" className="hover:text-white">
                location-assessment
              </Link>
            </li>
            <li>
              <Link href="/restaurant-interior-design" className="hover:text-white">
                interior-design
              </Link>
            </li>
            <li>
              <Link href="/kitchen-design-tender" className="hover:text-white">
                kitchen-design-tender
              </Link>
            </li>
            <li>
              <Link href="/menu-engineering" className="hover:text-white">
                fit-out-tender
              </Link>
            </li>
            <li>
              <Link href="/hr-support" className="hover:text-white">
                hr-support
              </Link>
            </li>
            <li>
              <Link href="/os-e-advice" className="hover:text-white">
                ose-advice
              </Link>
            </li>
            <li>
              <Link href="/sops-staff-training" className="hover:text-white">
                staff-training
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-white font-semibold mb-4">Industries</h4>
          <ul className="text-gray-400 space-y-2">
            <li>B2B</li>
            <li>Retailers</li>
            <li>Restaurant</li>
            <li>Interior Design & Fit Out</li>
            <li>Technology</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
          <h4 className="text-white font-semibold mt-6 mb-2">Locations</h4>
          <p className="text-gray-400">Dubai, UAE</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs text-gray-400">
        <p>Copyright © 2025 Dice Hospitality, All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-4 md:mt-0">
          <Image src="/images/dice-logo-white.png" alt="Trust Badge" width={100} height={40} />
        </div>
      </div>
    </footer>
  );
}
