import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { brand } from "../data/siteData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Season Blinds Logo"
            className="h-12 w-12 rounded-full object-cover shadow-sm"
          />

          <div>
            <h1 className="text-lg font-extrabold tracking-wide text-[#5A3827]">
              {brand.name}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F26A00]">
              Window Covering Supply
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-[#F26A00]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#F26A00] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#d85f00]"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#5A3827] lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-gray-700 transition hover:bg-[#F7F1EA] hover:text-[#F26A00]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#F26A00] px-6 py-3 text-center font-bold text-white shadow-md"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
