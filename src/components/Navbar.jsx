"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/servizi", label: "Servizi" },
    { href: "/chi-sono", label: "Chi Sono" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Icona SVG */}
          <svg viewBox="0 0 80 80" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#00E89D" }} />
                <stop offset="100%" style={{ stopColor: "#0099FF" }} />
              </linearGradient>
            </defs>
            <path d="M28 8 L6 38 L28 68" fill="none" stroke="url(#navIconGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 8 L74 38 L52 68" fill="none" stroke="url(#navIconGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="31" y="29" width="18" height="18" rx="3" ry="3" transform="rotate(45, 40, 38)" fill="url(#navIconGrad)" opacity="0.9" />
          </svg>
          {/* Testo */}
          <span className="text-xl tracking-wide">
            <span className="font-light text-text">Lux</span>
            <span className="font-bold text-white">Code</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="text-sm font-bold text-background bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-lg hover:opacity-90 transition-opacity tracking-wide"
          >
            CONTATTAMI
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-text-secondary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-secondary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-secondary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-primary transition-colors py-2 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-center text-background bg-gradient-to-r from-primary to-secondary px-5 py-3 rounded-lg tracking-wide"
            >
              CONTATTAMI
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
