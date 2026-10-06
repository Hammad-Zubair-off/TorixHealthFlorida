import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";

type SplitCard = {
  kicker: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type SplitOfferingsProps = {
  heading: string;
  subheading: string;
  servicesCard: SplitCard;
  solutionsCard: SplitCard;
};

/** Asymmetric, gently rotated blob cards — Florida's split-offerings shape. */
export function SplitOfferings({
  heading,
  subheading,
  servicesCard,
  solutionsCard,
}: SplitOfferingsProps) {
  return (
    <Section band="paper" className="border-b border-divider">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mx-auto mb-3.5 max-w-[20ch] text-center text-[clamp(28px,3vw,38px)] text-text">
          {heading}
        </h2>
        <p className="mx-auto mb-12 max-w-[56ch] text-center text-[15px] text-neutral-600">
          {subheading}
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          <article className="card-lift card-lift-light relative flex -rotate-1 flex-col rounded-[32px] border border-divider bg-bg p-[32px] pt-12 shadow-sm">
            <span className="absolute -top-6 left-8 flex size-12 items-center justify-center rounded-full bg-accent text-white shadow-md font-[family-name:var(--font-heading)] text-[18px] font-semibold">
              1
            </span>
            <Kicker className="mb-2">{servicesCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-text">{servicesCard.title}</h3>
            <p className="mb-6 flex-1 text-[14px] leading-[1.55] text-neutral-600">
              {servicesCard.description}
            </p>
            <Button href={servicesCard.cta.href} variant="primary" arrow className="self-start">
              {servicesCard.cta.label}
            </Button>
          </article>

          <article className="card-lift card-lift-deep relative flex rotate-1 flex-col rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_120%_90%_at_20%_-10%,var(--color-section-glow),var(--color-section)_60%)] p-[32px] pt-12 shadow-md">
            <span className="absolute -top-6 left-8 flex size-12 items-center justify-center rounded-full bg-accent-2 text-white shadow-md font-[family-name:var(--font-heading)] text-[18px] font-semibold">
              2
            </span>
            <Kicker className="mb-2 text-white">{solutionsCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-band-deep-text">
              {solutionsCard.title}
            </h3>
            <p className="mb-6 flex-1 text-[14px] leading-[1.55] text-band-deep-muted">
              {solutionsCard.description}
            </p>
            <Button href={solutionsCard.cta.href} variant="secondary" className="self-start">
              {solutionsCard.cta.label}
            </Button>
          </article>
        </div>
      </Container>
    </Section>
  );
}
