import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** Medical Billing — full-cycle billing from scheduling through final payment. */
export const medicalBillingContent = {
  meta: {
    title: "Medical Billing Services in Florida",
    description:
      "Medical billing services for Florida practices: eligibility checks, scrubbed claims, payment posting, denial follow-up and patient billing, handled end to end.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Billing" },
    ],
    eyebrow: "Medical Billing Services",
    headline: "Medical billing services that get Florida practices paid.",
    subheadline:
      "We take over billing from the moment a patient is scheduled until the last dollar is paid: checking insurance before the visit, submitting clean claims, posting payments, fixing denials and billing patient balances. One team owns every step, so nothing gets lost between your front desk and the insurer.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "Compare with full RCM",
      href: "/services/revenue-cycle-management",
    },
    image: {
      src: "/brand/heroes/medical-billing.jpg",
      alt: "Healthcare professional reviewing patient information on a tablet during an office visit",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Eligibility through patient responsibility — handled end to end so revenue isn't left uncollected.",
    footerNote:
      "For complete revenue cycle management from registration through collections as one coordinated process, see Revenue Cycle Management. For KPI and performance analysis, see Medical Billing Audit.",
    items: [
      {
        icon: "check" as IconName,
        title: "Eligibility & Benefits Verification",
        description:
          "Patient coverage, copays, deductibles and authorization requirements are confirmed before the appointment, so claims aren't denied for avoidable reasons.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Charge Entry & Claim Submission",
        description:
          "Visits are coded and submitted to the correct payer within 24-48 hours, minimizing delays in reimbursement.",
      },
      {
        icon: "fileText" as IconName,
        title: "Claim Scrubbing",
        description:
          "Every claim is checked for errors before submission to cut first-pass denials and speed up payment.",
      },
      {
        icon: "activity" as IconName,
        title: "Payment Posting & Reconciliation",
        description:
          "Insurance payments and adjustments are posted accurately against each claim, so your books always match what was actually paid.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Responsibility Billing",
        description:
          "After insurance pays, remaining patient balances are billed and followed up on, so revenue isn't left uncollected.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "What's the difference between Medical Billing and Revenue Cycle Management?",
        answer:
          "Medical Billing covers the claim itself: eligibility, coding, submission, payment posting, denial rework and patient balances. Revenue Cycle Management covers the whole cycle around it, from scheduling and registration through credentialing, claims and collections, so nothing falls between stages.",
      },
      {
        question: "How is Medical Billing different from Medical Billing Audit?",
        answer:
          "Medical Billing operates your day-to-day claims. Medical Billing Audit analyzes KPIs, denial patterns, and productivity against benchmarks and returns corrective actions. Many practices use both.",
      },
      {
        question: "Do we have to use your software?",
        answer:
          "No. The billing service works with the system you already run. Our software is available where it helps, but adopting it is optional.",
      },
      {
        question: "Will switching billing partners interrupt our cash flow?",
        answer:
          "We run a parallel period with your current process. Your existing submissions keep going while we take over queue by queue, and legacy A/R is worked rather than abandoned.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing is quoted per practice after the assessment, based on volume, payer mix and specialty. The number and the scope go in writing before anything starts.",
      },
      {
        question: "Why are my medical claims being denied?",
        answer:
          "Claims may be denied because of eligibility issues, coding errors, missing authorizations, incorrect payer information, documentation requirements, or other billing issues. We identify the cause and manage the appropriate correction or follow-up.",
      },
      {
        question: "Can Medical Billers manage my entire medical billing process?",
        answer:
          "Yes. We can support the complete billing cycle, including eligibility verification, claims submission, payment posting, denial management, AR follow-up, and reporting.",
      },
      {
        question: "How can I reduce my outstanding accounts receivable?",
        answer:
          "Our billing team reviews unpaid claims, prioritizes outstanding balances, follows up with payers, and works on eligible claims and denials to help improve collections and reduce aging AR.",
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
