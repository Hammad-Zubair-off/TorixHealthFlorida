import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ContactDetail } from "@/components/ContactPanel";
import type { ContactServiceOption } from "@/components/ContactForm";
import type { IconName } from "@/components/icons";
import { siteContact } from "@/lib/site-contact";

/** Contact Us page — form posts to `/api/contact` (Resend). */
export const contactContent = {
  meta: {
    title: "Contact Us for a Free Billing Review",
    description:
      "Contact Medical Billers for a free review of your practice's billing, denials and A/R. Ask about billing, coding, credentialing or HIPAA.",
  },
  panel: {
    heading: "Talk to a medical billing specialist",
    subheading: "Call, email or send the form. Tell us about your denials and A/R, and we'll tell you what we'd change.",
    // Office address — West Jordan, UT
    details: [
      {
        icon: "mapPin" as IconName,
        label: "Office Address",
        value: "7533 S Center View Ct Ste N, West Jordan, UT 84084",
      },
      {
        icon: "headphones" as IconName,
        label: "Phone",
        value: siteContact.phone.label,
        href: siteContact.phone.href,
      },
      {
        icon: "fileText" as IconName,
        label: "Email",
        value: siteContact.email.label,
        href: siteContact.email.href,
      },
    ] satisfies ContactDetail[],
    hours: [
      { label: "Monday – Friday", value: "9:00 AM – 6:00 PM" },
      { label: "Saturday & Sunday", value: "Closed" },
    ],
    formHeading: "Send us a message",
    formIntro:
      "Tell us about your practice and what's slowing down your collections. A billing specialist will reply during business hours.",
  },
  serviceOptions: [
    { value: "medical-billing", label: "Medical Billing Services" },
    { value: "medical-coding", label: "Medical Coding" },
    { value: "rcm", label: "Revenue Cycle Management (RCM)" },
    { value: "credentialing", label: "Credentialing & Contracting" },
    { value: "medical-audit", label: "Medical Billing Audit" },
    { value: "ar-follow-up", label: "Accounts Receivable Operations" },
    { value: "billing-software", label: "Medical Billing Software" },
    { value: "hipaa", label: "HIPAA-Compliant Software" },
    { value: "general", label: "General Questions & Support" },
  ] satisfies ContactServiceOption[],
  whyContact: {
    heading: "Why contact Medical Billers?",
    subheading:
      "You'll talk to someone who works claims every day, not a salesperson. Bring a recent remittance or your A/R aging report and we'll give you straight answers, whether or not you hire us.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Improving revenue cycle performance",
        description: "Talk through denials, A/R and where cash gets stuck.",
      },
      {
        icon: "fileText" as IconName,
        title: "Reducing billing inefficiencies",
        description: "Clarify scope between billing, coding, A/R and RCM.",
      },
      {
        icon: "monitor" as IconName,
        title: "Getting providers credentialed",
        description: "Medicare, Florida Medicaid plans and commercial payer enrollment.",
      },
      {
        icon: "shield" as IconName,
        title: "Strengthening compliance practices",
        description: "Ask about HIPAA controls, BAAs and secure handling of PHI.",
      },
      {
        icon: "handshake" as IconName,
        title: "Technical and operational questions",
        description: "Get clear answers before you change vendors or systems.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "How quickly will I receive a response?",
        answer:
          "We reply to inquiries during business hours, Monday to Friday.",
      },
      {
        question: "Is the first consultation free?",
        answer:
          "Yes. We review your current denials and A/R and tell you what we'd change, whether or not you engage us.",
      },
      {
        question: "What should I bring to the consultation?",
        answer:
          "A recent remittance (ERA/EOB), your A/R aging report and a list of the payers you bill. That's enough for us to spot where revenue is getting stuck.",
      },
      {
        question: "Do you work with practices of different sizes?",
        answer:
          "Yes. We support healthcare organizations ranging from independent practices to growing medical groups.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes. We treat all inquiries with professionalism and follow secure practices when handling information shared with us.",
      },
    ] satisfies FAQItem[],
  },
};
