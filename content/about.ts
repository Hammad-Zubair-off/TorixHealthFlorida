import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** About Us page copy — medical billing company. */
export const aboutContent = {
  meta: {
    title: "About Our Medical Billing Company",
    description:
      "Medical Billers runs medical billing, coding, credentialing and A/R follow-up for practices, with a named representative on every account.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About Us" },
    ],
    eyebrow: "Who we are",
    headline: "A medical billing company, and only that.",
    subheadline:
      "Medical Billers handles the billing side of your practice: coding, claims, payment posting, denials, A/R follow-up and credentialing. We focus on one thing so the money you've earned actually reaches your account.",
    distinction:
      "Our goal is simple: clean claims out the door, denials worked fast, and reporting you can read without calling us.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "Explore Services",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/about.jpg",
      alt: "Medical billing specialist reviewing a practice's claims",
    },
  },
  story: {
    heading: "Our story",
    paragraphs: [
      "Most practices don't lose revenue in one big mistake. They lose it in small ones: a missed eligibility check, a code the note doesn't support, a denial nobody had time to appeal, a credential that lapsed quietly.",
      "Medical Billers was founded to close those gaps. We take ownership of the full billing workflow so nothing falls between the front desk, the coder and the collections queue.",
      "Our commitment hasn't changed: fewer denials, faster payments, and less administrative work for your staff, so they can spend their time on patients.",
    ],
  },
  missionVision: {
    heading: "Mission & vision",
    subheading: "What we work toward with every engagement.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Our mission",
        description:
          "To help practices get paid accurately and on time by running their billing with the same care they'd give it themselves.",
      },
      {
        icon: "layers" as IconName,
        title: "Our vision",
        description:
          "To be the billing partner practices recommend to each other, because claims go out clean and nobody has to chase us for answers.",
      },
    ] satisfies BenefitItem[],
  },
  whyTech: {
    heading: "What we handle",
    subheading:
      "Every service is part of the same billing workflow, so handoffs between coding, claims and collections don't become gaps.",
    footerNote:
      "Need just one piece? Each service can run on its own or alongside the billing you already do in house.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Medical Billing",
        description: "Claim operations scoped to submission, posting and denial follow-up.",
        href: "/services/medical-billing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: "Medical Coding",
        description: "ICD-10 and CPT assignment with documentation support.",
        href: "/services/medical-coding",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle Management",
        description: "Full-cycle cash path from registration through collections.",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing & Contracting",
        description: "Enrollment, CAQH and recredentialing so providers can bill.",
        href: "/services/credentialing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: "Medical Billing Audit",
        description: "Independent documentation, coding and compliance review.",
        href: "/services/medical-audit",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Accounts Receivable Operations",
        description: "Aging balances, denials, appeals and underpayment recovery.",
        href: "/services/ar-follow-up",
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  values: {
    heading: "Our values",
    subheading: "How we show up for practices and for each other.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Transparency",
        description:
          "You see what was submitted, what paid, what was denied and what we're doing about it. No black box.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description:
          "Every account has a named representative who owns the outcome, not a ticket queue.",
      },
      {
        icon: "activity" as IconName,
        title: "Accuracy",
        description:
          "We'd rather catch a problem before the claim goes out than appeal it afterwards.",
      },
      {
        icon: "handshake" as IconName,
        title: "Partnership",
        description:
          "We work as an extension of your front office and billing staff, with long-term relationships rather than short-term contracts.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose Medical Billers",
    subheading: "What practices get when one team owns the whole billing workflow.",
    items: [
      {
        icon: "layers" as IconName,
        title: "End-to-end billing",
        description: "Coding, claims, posting, denials, A/R and credentialing handled by one team.",
      },
      {
        icon: "fileText" as IconName,
        title: "Works in your system",
        description: "We bill inside the EHR and practice management system you already use.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-conscious operations",
        description: "A signed BAA before any PHI moves, with access and handling documented.",
      },
      {
        icon: "activity" as IconName,
        title: "Scalable for practices of all sizes",
        description: "Engagements scoped to solo providers and growing groups alike.",
      },
      {
        icon: "handshake" as IconName,
        title: "Dedicated client support",
        description: "A named representative you can call, not ticket-only support.",
      },
      {
        icon: "monitor" as IconName,
        title: "Reporting you can read",
        description: "Clear monthly numbers on collections, denials and A/R aging.",
      },
    ] satisfies FeatureItem[],
  },
  finalCta: {
    heading: "Let's fix what's slowing down your collections.",
    subheading:
      "Whether it's rising denials, aging A/R or credentialing delays, Medical Billers is here to help.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
