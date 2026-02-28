import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ass-sicurity.de"),
  title:
    "Sicherheitsdienst Dresden | A.S.S Security - Ihr Partner für Wachschutz",
  description:
    "A.S.S Security: Ihr führender Sicherheitsdienst in Dresden. Wir bieten zertifizierten Objektschutz, Baustellenbewachung & Veranstaltungsschutz. 24/7 Leitstelle & IHK-geprüftes Personal für Ihre Sicherheit in Sachsen.",
  keywords: [
    "Sicherheitsdienst Dresden",
    "Wachschutz Dresden",
    "Objektschutz Dresden",
    "Baustellenbewachung Dresden",
    "Veranstaltungsschutz Dresden",
    "Sicherheitsfirma Dresden",
    "Personenschutz Dresden",
    "A.S.S Security",
  ],
  alternates: {
    canonical: "https://ass-sicurity.de",
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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ass-sicurity.de",
    title: "Sicherheitsdienst Dresden | A.S.S Security",
    description:
      "Zertifizierter Sicherheitsdienst in Dresden. Objektschutz, Baustellenbewachung & Eventschutz. 24/7 Service.",
    siteName: "A.S.S Security",
    images: [
      {
        url: "/logotip-dark.svg", // Fallback to logo if no OG image
        width: 1200,
        height: 630,
        alt: "A.S.S Security Dresden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sicherheitsdienst Dresden | A.S.S Security",
    description:
      "Zertifizierter Sicherheitsdienst in Dresden. Objektschutz, Baustellenbewachung & Eventschutz. 24/7 Service.",
    images: ["/logotip-dark.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};
