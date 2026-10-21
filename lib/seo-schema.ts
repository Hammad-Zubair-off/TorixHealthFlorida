import type { BreadcrumbItem } from "@/components/Hero";
import type { FAQItem } from "@/components/FAQAccordion";
import { siteContact } from "@/lib/site-contact";
import {
  absoluteSiteUrl,
  defaultDescription,
  ogImagePath,
  siteName,
  siteUrl,
} from "@/lib/site";

const areaServed = { "@type": "State", name: "Florida" };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    areaServed,
    knowsAbout: [
      "Medical billing",
      "Medical coding",
      "Revenue cycle management",
      "Provider credentialing",
      "Denial management",
    ],
    logo: absoluteSiteUrl(ogImagePath),
    email: siteContact.email.label,
    telephone: siteContact.phone.label,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteContact.phone.label,
      contactType: "customer service",
      email: siteContact.email.label,
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

/** Service schema for a service page; the name is the breadcrumb's last label. */
export function serviceSchema(
  breadcrumb: BreadcrumbItem[],
  description: string,
  path: string,
) {
  const name = breadcrumb[breadcrumb.length - 1]?.label ?? siteName;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteSiteUrl(path),
    areaServed,
    provider: { "@id": `${siteUrl}/#organization` },
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: BreadcrumbItem[],
  currentPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const href = isLast ? currentPath : item.href || currentPath;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: absoluteSiteUrl(href),
      };
    }),
  };
}
