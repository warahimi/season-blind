import { Phone, Mail, MapPin } from "lucide-react";

import logo from "../assets/logo.jpeg";
import { brand } from "../data/siteData";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Zebra Blinds",
  "Roller Shades",
  "Honeycomb Shades",
  "Vertical Blinds",
  "Roman Shades",
  "Custom Installation",
];

const Footer = () => {
  return (
    <footer className="bg-[#5A3827] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Season Blinds Logo"
                className="h-16 w-16 rounded-full border-2 border-white object-cover"
              />

              <div>
                <h2 className="text-2xl font-extrabold">{brand.name}</h2>

                <p className="text-sm font-semibold tracking-widest text-orange-300">
                  WINDOW COVERING SUPPLY
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-orange-100">
              Professional custom blinds and shades with free measurement and
              expert installation.
            </p>

            {/* Social Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-[#F26A00]"
              >
                f
              </a>

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-[#F26A00]"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-orange-100 transition hover:text-[#F26A00]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold">Our Services</h3>

            <ul className="mt-6 space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-orange-100">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold">Contact Info</h3>

            <div className="mt-6 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 text-[#F26A00]" />

                <div>
                  <p className="font-semibold">Phone</p>

                  <p className="text-orange-100">{brand.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 text-[#F26A00]" />

                <div>
                  <p className="font-semibold">Email</p>

                  <p className="text-orange-100 break-all">{brand.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 text-[#F26A00]" />

                <div>
                  <p className="font-semibold">Address</p>

                  <p className="text-orange-100">{brand.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-orange-100">
            © {new Date().getFullYear()} Season Blinds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
