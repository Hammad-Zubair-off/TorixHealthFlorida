import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo-schema";
import {
  defaultDescription,
  ogImagePath,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Medical Billing Company in Florida`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Medical Billing Company in Florida`,
    description: defaultDescription,
    images: [
      {
        url: ogImagePath,
        width: 64,
        height: 64,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Medical Billing Company in Florida`,
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
