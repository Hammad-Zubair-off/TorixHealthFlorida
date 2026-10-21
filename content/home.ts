import type { FAQItem } from "@/components/FAQAccordion";
import type { OverviewCard } from "@/components/ServicesOverview";
import type { TrustItem } from "@/components/TrustBar";
import type { IconName } from "@/components/icons";

/** Homepage copy from referenceUI Nocturne Light, with em-dash phrasing cleaned up. */
export const homeContent = {
  meta: {
    title: "Medical Billing Company in Florida",
    description:
      "Medical billing company for Florida practices: coding, claims, denials, A/R follow-up and credentialing, with a named rep and a signed BAA from day one.",
  },
  hero: {
    eyebrow: "Medical billing company serving Florida",
    headline: "Medical billing for Florida practices, done right.",
    highlightWord: "done right.",
    subheadline:
      "Denied claims, slow insurers and aging A/R add up to money your practice has already earned but never collects. We handle the coding, claims, payment posting, denials and credentialing for you, working with Medicare, Florida Medicaid plans and commercial payers like Florida Blue, so you get paid faster and your staff stop chasing insurers.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See how billing works",
      href: "/services/medical-billing",
    },
    consultationNote:
      "A consultation is a conversation about your current denials and A/R. Not a sales call.",
  },
  trust: [
    {
      icon: "shield" as IconName,
      label: "Signed BAA Before Day One",
      description: "No PHI moves without it",
    },
    {
      icon: "check" as IconName,
      label: "Every Claim Scrubbed",
      description: "Errors caught before payers see them",
    },
    {
      icon: "clock" as IconName,
      label: "20 Specialties Supported",
      description: "From family medicine to cardiology",
    },
    {
      icon: "headphones" as IconName,
      label: "Named Account Representative",
      description: "One person who knows your practice",
    },
  ] satisfies TrustItem[],
  split: {
    heading: "Billing work done for you, with the tools included.",
    subheading:
      "We run your billing operation end to end. If you need better billing software, it comes with the service at no extra cost.",
    servicesCard: {
      kicker: "Billing Services",
      title: "We run the billing operation",
      description:
        "Claims, coding, credentialing, audits and full revenue cycle management, performed by our team on your behalf.",
      cta: { label: "Explore Services", href: "/services/medical-billing" },
    },
    solutionsCard: {
      kicker: "Included Software",
      title: "Billing software at no extra cost",
      description:
        "Billing automation, claim tracking and readable reporting, bundled free with our Medical Billing service. Or keep the system you already use.",
      cta: { label: "See the software", href: "/solutions/medical-billing-software" },
    },
  },
  overview: {
    servicesHeading: "Medical billing services",
    servicesNote:
      "Services are work we do on your behalf. Every engagement is assigned a named representative before it starts.",
    solutionsHeading: "Included with your billing service.",
    services: [
      {
        icon: "fileText",
        title: "Medical Billing",
        description:
          "Full-cycle billing from scheduling to final insurance and patient payment — eligibility, claims, posting, and patient balances handled end to end.",
        href: "/services/medical-billing",
        ctaLabel: "Medical Billing",
      },
      {
        icon: "activity",
        title: "Revenue Cycle Management",
        description:
          "Everything working together from patient scheduling to final payment — so nothing falls through the cracks between coding, claims, credentialing, and collections.",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Revenue Cycle Management",
      },
      {
        icon: "clipboard",
        title: "Medical Coding",
        description:
          "ICD-10 and CPT assignment at the point of entry, with documentation queries raised when the note doesn't support the code.",
        href: "/services/medical-coding",
        ctaLabel: "Medical Coding",
      },
      {
        icon: "check",
        title: "Medical Billing Audit",
        description:
          "Revenue cycle KPIs, denial patterns, and provider productivity — analyzed against benchmarks with corrective actions you can act on.",
        href: "/services/medical-audit",
        ctaLabel: "Medical Billing Audit",
      },
      {
        icon: "activity",
        title: "Accounts Receivable Operations",
        description:
          "AR follow-up, denial resolution, appeals and payment recovery — worked inside your system, with a named representative you can call.",
        href: "/services/ar-follow-up",
        ctaLabel: "Accounts Receivable Operations",
      },
      {
        icon: "building",
        title: "Credentialing & Contracting",
        description:
          "Get enrolled with the insurances that matter, keep CAQH current, and renew credentials before you lose network status.",
        href: "/services/credentialing",
        ctaLabel: "Credentialing & Contracting",
      },
    ] satisfies OverviewCard[],
    solutions: [
      {
        icon: "monitor",
        title: "Medical Billing Software",
        description:
          "Bundled at no cost with the Medical Billing service. Less manual entry, shorter billing cycles, and reporting you can actually read.",
        href: "/solutions/medical-billing-software",
        tag: "Free",
        ctaLabel: "Request a Demo",
      },
      {
        icon: "layers",
        title: "Works With Your EHR",
        description:
          "No rip-and-replace. We bill inside the EHR and practice management system you already run, so your staff keep the tools they know.",
        href: "/services/medical-billing",
        tag: "Integration",
        ctaLabel: "See how billing works",
      },
      {
        icon: "lock",
        title: "HIPAA-Compliant Software",
        description:
          "Role-based access control, audit logging, encryption in transit and at rest, and a signed Business Associate Agreement. Documented in detail rather than asserted in a badge.",
        href: "/solutions/hipaa-compliant-software",
        tag: "Compliance",
        ctaLabel: "Read the detail",
      },
    ] satisfies OverviewCard[],
  },
  faqs: {
    heading: "Questions we get asked first",
    items: [
      {
        question:
          "What's the difference between Medical Billing and Revenue Cycle Management?",
        answer:
          "Medical Billing covers the claim itself: eligibility, coding, submission, payment posting, denial rework and patient balances. Revenue Cycle Management covers the whole cycle around it, from scheduling and registration through credentialing, claims and collections, so nothing falls between stages.",
      },
      {
        question: "Will switching billing partners interrupt our cash flow?",
        answer:
          "We run a parallel period with your current process. Your existing submissions keep going while we take over queue by queue, and legacy A/R is worked rather than abandoned.",
      },
      {
        question: "Do you sign a Business Associate Agreement?",
        answer:
          "Yes, and before any protected health information is exchanged. The HIPAA-Compliant Software page sets out how PHI is stored, logged and transmitted.",
      },
      {
        question: "Do we have to use your software?",
        answer:
          "No. The billing service works with the system you already run. The free Medical Billing Software is there if you want it, not a condition of working with us.",
      },
      {
        question: "How much do medical billing services cost?",
        answer:
          "Billing companies usually charge either a percentage of what they collect or a fee per claim. We quote each practice after reviewing your claim volume, payer mix and specialty, and the price and scope go in writing before anything starts. The first review is free.",
      },
      {
        question: "Do you bill Florida Medicaid and its managed care plans?",
        answer:
          "Yes. Most Florida Medicaid patients are enrolled in Statewide Medicaid Managed Care (SMMC) plans, and each plan has its own authorization and claim rules. We work each plan's requirements separately instead of treating Medicaid as one payer.",
      },
      {
        question: "Who handles Medicare claims in Florida?",
        answer:
          "First Coast Service Options is the Medicare Administrative Contractor for Florida (Jurisdiction N). We submit Part B claims to First Coast and check documentation against its local coverage determinations (LCDs) before claims go out.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Start with a conversation about your current billing.",
    subheading:
      "Bring a recent remittance and your A/R ageing. We'll tell you what we'd change, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
