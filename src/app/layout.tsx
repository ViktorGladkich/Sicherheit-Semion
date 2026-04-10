import { Metadata, Viewport } from "next";
import React from "react";
import { Providers } from "./providers";
import { ViewportFix } from "../components/layout/ViewportFix";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/layout/CookieConsent";
import BackToTopButton from "../components/layout/BackToTopButton";
import "../index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ass-security-ug.de"),
  title: {
    default: "A.S.S SECURITY UG | Professioneller Sicherheitsdienst in Dresden",
    template: "%s | A.S.S SECURITY UG",
  },
  description:
    "Ihr zuverlässiger Partner für Objektschutz, Veranstaltungsschutz und baustellensicherheit in Dresden und Umgebung. Vertrauen Sie auf diskrete und professionelle Sicherheit.",
  keywords: [
    "Sicherheitsdienst Dresden",
    "Objektschutz",
    "Veranstaltungsschutz",
    "Baustellensicherheit",
    "Security Firma Dresden",
    "A.S.S Security UG",
    "Personenschutz",
    "Revierdienst",
  ],
  authors: [{ name: "Semion Raskin" }],
  creator: "A.S.S SECURITY UG",
  publisher: "A.S.S SECURITY UG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ass-security-ug.de",
    siteName: "A.S.S SECURITY UG",
    title: "A.S.S SECURITY UG | Professioneller Sicherheitsdienst in Dresden",
    description:
      "Ihr zuverlässiger Partner für Objektschutz, Veranstaltungsschutz und baustellensicherheit in Dresden und Umgebung.",
    images: [
      {
        url: "/og-image.jpg", // We assume we'll use a generic one or they can add it later
        width: 1200,
        height: 630,
        alt: "A.S.S SECURITY UG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.S.S SECURITY UG | Professioneller Sicherheitsdienst in Dresden",
    description:
      "Ihr zuverlässiger Partner für Objektschutz, Veranstaltungsschutz und baustellensicherheit in Dresden und Umgebung.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans transition-colors duration-300 overflow-x-hidden relative min-h-screen flex flex-col">
        <Providers>
          <ViewportFix />
          <Header />
          <main className="grow relative">{children}</main>
          <Footer />
          <CookieConsent />
          <BackToTopButton />
        </Providers>
      </body>
    </html>
  );
}
