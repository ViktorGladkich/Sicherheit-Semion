import React from "react";
import { Providers } from "./providers";
import { ViewportFix } from "../components/layout/ViewportFix";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/layout/CookieConsent";
import BackToTopButton from "../components/layout/BackToTopButton";
import "../index.css";

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
