import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { JobOpening } from "@/components/JobOpenings";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Careers page copy from provided hiring brief. */
export const careersContent = {
  meta: {
    title: "Medical Billing Careers",
    description:
      "Careers at Medical Billers. Join our medical billing, coding, credentialing and A/R teams. See open roles and how we hire.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Careers" },
    ],
    eyebrow: "Careers",
    headline: "Build a career in medical billing with Medical Billers.",
    subheadline:
      "Join a team that helps practices get paid for the care they deliver. We code, bill, follow up and credential so providers can focus on patients instead of paperwork.",
    distinction:
      "Whether you're an experienced professional or just starting your career, we believe great people create great solutions.",
    primaryCta: { label: "Explore Open Positions", href: "#openings" },
    secondaryCta: { label: "Send Your Resume", href: "/contact" },
    image: {
      src: "/brand/heroes/careers.jpg",
      alt: "Collaborative team working together in a modern workplace",
    },
  },
  whyJoin: {
    heading: "Why join Medical Billers?",
    subheading:
      "We're a team that values accuracy, collaboration and continuous learning.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Meaningful Impact",
        description:
          "Help practices recover revenue they've earned and keep their doors open for patients.",
      },
      {
        icon: "layers" as IconName,
        title: "Professional Growth",
        description:
          "Build depth across billing, coding, A/R, credentialing and compliance, with room to specialize.",
      },
      {
        icon: "users" as IconName,
        title: "Collaborative Environment",
        description:
          "Work alongside talented professionals who believe in sharing knowledge, supporting one another, and achieving success together.",
      },
      {
        icon: "code" as IconName,
        title: "Always Improving",
        description:
          "We keep looking for better ways to prevent denials and speed up payments.",
      },
    ] satisfies FeatureItem[],
  },
  whatWeDo: {
    heading: "What we do",
    subheading:
      "Every role contributes to the same goal: clean claims, fewer denials and faster payments for the practices we serve.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Medical Billing",
        href: "/services/medical-billing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle Management",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: "Medical Coding",
        href: "/services/medical-coding",
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing & Contracting",
        href: "/services/credentialing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: "Medical Billing Audit",
        href: "/services/medical-audit",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Accounts Receivable Operations",
        href: "/services/ar-follow-up",
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  life: {
    heading: "Life at Medical Billers",
    paragraphs: [
      "We believe the best ideas come from people who are encouraged to grow, collaborate, and innovate.",
      "We're committed to creating an environment where every team member can do their best work while continuing to develop personally and professionally.",
    ],
  },
  culture: {
    heading: "Our culture is built on",
    items: [
      {
        icon: "users" as IconName,
        title: "Collaboration",
        description: "We share knowledge and succeed as a team.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description: "We own our work and follow through for clients and teammates.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Continuous Learning",
        description: "We keep growing skills as healthcare and technology change.",
      },
      {
        icon: "activity" as IconName,
        title: "Innovation",
        description: "We look for better ways to solve real practice problems.",
      },
      {
        icon: "handshake" as IconName,
        title: "Respect",
        description: "We treat colleagues, clients and patients' data with care.",
      },
      {
        icon: "layers" as IconName,
        title: "Professional Development",
        description: "We invest in people who want to build lasting careers here.",
      },
    ] satisfies FeatureItem[],
  },
  benefits: {
    heading: "Benefits",
    subheading: "What we offer teammates who join Medical Billers.",
    items: [
      {
        icon: "check" as IconName,
        title: "Competitive Compensation",
        description: "Pay that reflects the skill and responsibility of the role.",
      },
      {
        icon: "mapPin" as IconName,
        title: "Flexible Working Environment",
        description: "Ways of working that support focus and real life.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Professional Development",
        description: "Opportunities to deepen healthcare and technology skills.",
      },
      {
        icon: "activity" as IconName,
        title: "Career Growth",
        description: "Paths to take on more scope as you grow with the team.",
      },
      {
        icon: "users" as IconName,
        title: "Collaborative Team Culture",
        description: "A workplace built on shared goals, not siloed handoffs.",
      },
      {
        icon: "monitor" as IconName,
        title: "Modern Tools & Technology",
        description: "The systems and stack you need to do high-quality work.",
      },
      {
        icon: "handshake" as IconName,
        title: "Performance Recognition",
        description: "Credit for strong work that helps practices and teammates.",
      },
      {
        icon: "layers" as IconName,
        title: "Learning & Training Programs",
        description: "Structured learning for role skills and compliance readiness.",
      },
    ] satisfies BenefitItem[],
  },
  openings: {
    heading: "Current openings",
    subheading: "We're always looking for talented individuals to join our growing team.",
    footerNote:
      "Don't see a role that matches your skills? We'd still love to hear from you.",
    footerCta: { label: "Send Your Resume", href: "/contact" },
    items: [
      {
        title: "Medical Billing Specialist",
        description:
          "Support healthcare providers through accurate billing and revenue cycle management.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Medical Coding Specialist",
        description:
          "Ensure accurate coding while supporting compliance and reimbursement processes.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "A/R & Denials Specialist",
        description:
          "Work aging balances, appeal denials and recover underpayments for client practices.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Business Development Executive",
        description:
          "Help more practices find a billing partner they can count on.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
    ] satisfies JobOpening[],
  },
  hiring: {
    heading: "Our hiring process",
    subheading: "A clear path from application to your first day on the team.",
    steps: [
      {
        title: "Submit Your Application",
        description: "Send us your resume along with a brief introduction.",
      },
      {
        title: "Initial Review",
        description: "Our hiring team reviews your experience and qualifications.",
      },
      {
        title: "Interview",
        description:
          "Meet with our team to discuss your skills, experience, and career goals.",
      },
      {
        title: "Final Evaluation",
        description:
          "We'll assess technical and cultural fit before making a decision.",
      },
      {
        title: "Welcome to Medical Billers",
        description:
          "Begin your journey with onboarding, training, and support from our team.",
      },
    ] satisfies ProcessStep[],
  },
  values: {
    heading: "Our values",
    subheading:
      "These values guide everything we build, every solution we deliver, and every relationship we create.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Innovation",
        description: "We look for better ways to solve healthcare challenges.",
      },
      {
        icon: "shield" as IconName,
        title: "Integrity",
        description: "We communicate honestly and handle work and data with care.",
      },
      {
        icon: "users" as IconName,
        title: "Collaboration",
        description: "We succeed by working across disciplines, not in silos.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description: "We own outcomes for clients and for each other.",
      },
      {
        icon: "handshake" as IconName,
        title: "Customer Success",
        description: "We measure ourselves by how well practices succeed with us.",
      },
      {
        icon: "layers" as IconName,
        title: "Continuous Improvement",
        description: "We keep refining our billing workflows and how we work.",
      },
    ] satisfies FeatureItem[],
  },
  finalCta: {
    heading: "Ready to join our team?",
    subheading:
      "If you care about accurate billing and helping practices get paid, we'd love to hear from you. Whether you're experienced or just beginning, Medical Billers offers opportunities to learn, grow, and make a lasting impact.",
    cta: { label: "Apply Now", href: "/contact" },
  },
};
