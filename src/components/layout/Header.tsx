"use client";
import React, { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

// Config & Hooks
import { NAV_ITEMS } from "./header/header-config";
import { useActiveSection } from "../../hooks/useActiveSection";

// Sub-components
import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { Hamburger } from "./header/Hamburger";
import { MobileMenu } from "./header/MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Extract ID list from config
  const sectionIds = NAV_ITEMS.map((item) => item.href);
  const activeHref = useActiveSection(sectionIds);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-6 left-0 right-0 z-99 px-4 md:px-8 flex items-center justify-between pointer-events-none w-full"
        role="banner"
      >
        {/* LEFT: Logo */}
        <Logo />

        {/* CENTER: Desktop Nav Pill */}
        <nav className="pointer-events-auto z-100">
          <DesktopNav items={NAV_ITEMS} activeHref={activeHref} />
        </nav>

        {/* RIGHT: Controls */}
        <div className="flex items-center gap-3 pointer-events-auto z-100">
          {/* Theme Toggle */}
          <div className="bg-black/5 dark:bg-white/10 backdrop-blur-3xl rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black/10 dark:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-300 pointer-events-auto">
            <ThemeToggle />
          </div>

          {/* Hamburger Button */}
          <Hamburger isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={NAV_ITEMS}
        activeHref={activeHref}
        onClose={closeMobileMenu}
      />
    </>
  );
};

export default Header;
