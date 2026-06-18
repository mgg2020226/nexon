"use client";

import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScroll } from "@/lib/useScroll";

interface NavLink {
  label: string;
  href: string;
}

interface HeroNavProps {
  links: NavLink[];
  cta: string;
}

export function Header({ links, cta }: HeroNavProps) {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(200);

  return (
    <nav className={`fixed inset-x-0 top-4 z-50 mx-auto w-full lg:max-w-[calc(100%-4rem)] transition-all duration-300 ${
      scrolled ? "backdrop-blur-lg bg-white/80 border-b border-gray-200 rounded-lg shadow-lg" : ""
    }`}>
      <div className="mx-auto px-6 lg:px-8">
        {/* Main bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Image
            src={scrolled ? "/logotipo_black.svg" : "/logotipo_white.svg"}
            alt="Nexon logo"
            width={120}
            height={120}
            className="rounded-lg flex-shrink-0 transition-opacity duration-300"
          />

          {/* Desktop nav — centered absolutely */}
          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`cursor-pointer text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/5 block ${
                    scrolled ? "text-gray-700 hover:bg-gray-100 hover:bg-blue/5 block" : ""
                  }`}
                  style={{ color: scrolled ? undefined : "rgba(252, 253, 253, 0.75)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="https://api.whatsapp.com/send/?phone=573229603465&text=Hello%2C+I%E2%80%99m+interested+in+exploring+how+Nexon+can+help+our+company+enter+and+grow+in+the+Colombian+market.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hidden md:flex flex-shrink-0">
            <Button
              className="font-semibold text-sm h-9 px-4 gap-2 rounded-lg border-0"
              style={{
                background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(80,206,255,0.30)",
              }}
            >
              <MessageSquare className="w-4 h-4" />
              {cta}
            </Button>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/5"
            }`}
            style={{ color: scrolled ? undefined : "rgba(253, 253, 253, 0.75)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden rounded-xl transition-all duration-300 ease-in-out md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "rgba(17,17,17,0.97)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2.5 border-b border-white/5 last:border-0"
                style={{ color: "rgba(255, 255, 255, 0.75)" }}
              >
                {item.label}
              </a>
            ))}
            <a href="https://api.whatsapp.com/send/?phone=573229603465&text=Hello%2C+I%E2%80%99m+interested+in+exploring+how+Nexon+can+help+our+company+enter+and+grow+in+the+Colombian+market.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="w-fit mt-3">
              <Button
                className="font-semibold text-sm h-9 px-4 gap-2 rounded-lg border-0 w-fit"
                style={{
                  background: "linear-gradient(135deg, #133ED8 0%, #50CEFF 100%)",
                  color: "#ffffff",
                }}
              >
                <MessageSquare className="w-4 h-4" />
                {cta}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
