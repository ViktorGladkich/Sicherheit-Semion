export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Leistungen" },
  { href: "#benefits", label: "Vorteile" },
  { href: "#approach", label: "Vorgehen" },
  { href: "#about", label: "Über Uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontakt" },
];
