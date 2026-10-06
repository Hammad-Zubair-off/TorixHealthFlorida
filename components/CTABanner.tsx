import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";

type CTABannerProps = {
  heading: string;
  subheading?: string;
  cta: { label: string; href: string };
};

/** A floating rounded "island" card rather than a full-bleed band — Florida's CTA shape. */
export function CTABanner({ heading, subheading, cta }: CTABannerProps) {
  return (
    <Section band="tint">
      <Container className="py-[clamp(48px,6vw,80px)]">
        <div className="relative overflow-hidden rounded-[40px] bg-[radial-gradient(ellipse_120%_90%_at_20%_-10%,var(--color-section-glow),var(--color-section)_60%)] px-8 py-[clamp(48px,6vw,76px)] shadow-lg">
          <span
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-2/25 blur-2xl"
          />
          <span
            aria-hidden
            className="absolute -bottom-14 left-10 h-36 w-36 rounded-full bg-accent-300/20 blur-2xl"
          />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[18ch] text-[clamp(26px,3vw,38px)] text-band-deep-text">
              {heading}
            </h2>
            {subheading ? (
              <p className="max-w-[48ch] text-[15px] text-band-deep-muted">{subheading}</p>
            ) : null}
            <Button href={cta.href} variant="primary" size="hero" arrow className="w-full sm:w-auto">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
