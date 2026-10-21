import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

type HeroProps = {
  breadcrumb?: BreadcrumbItem[];
  eyebrow?: string;
  headline: string;
  /** Word/phrase within headline to render in accent color (case-sensitive match). */
  highlightWord?: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  consultationNote?: string;
  /** Page hero photo — preferred over the Claim workflow placeholder. */
  image?: HeroImage;
  visual?: React.ReactNode;
  /** When true, CTAs sit side-by-side without bordered wrapper (brand mockup). */
  brandLayout?: boolean;
};

function HeadlineWithHighlight({
  headline,
  highlightWord,
}: {
  headline: string;
  highlightWord?: string;
}) {
  if (!highlightWord || !headline.includes(highlightWord)) {
    return <>{headline}</>;
  }
  const parts = headline.split(highlightWord);
  return (
    <>
      {parts[0]}
      <span className="text-accent">{highlightWord}</span>
      {parts.slice(1).join(highlightWord)}
    </>
  );
}

/** Blob-masked portrait — the Florida signature shape. */
export function HeroPhoto({ src, alt }: HeroImage) {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[64%_36%_58%_42%/48%_42%_58%_52%] bg-[conic-gradient(from_200deg,var(--color-accent-200),var(--color-accent-2)_45%,var(--color-accent-300)_80%,var(--color-accent-200))] opacity-70 blur-xl"
      />
      <div
        className="relative aspect-[9/10] w-full overflow-hidden border-[6px] border-band-paper shadow-lg"
        style={{ borderRadius: "64% 36% 58% 42% / 48% 42% 58% 52%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 460px"
          priority
        />
      </div>
      <span
        aria-hidden="true"
        className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-band-paper bg-accent-2 text-white shadow-md"
      >
        <Icon name="shield" size={22} />
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-4 left-6 h-10 w-10 rounded-full bg-accent-300/70"
      />
    </div>
  );
}

export function Hero({
  breadcrumb,
  eyebrow,
  headline,
  highlightWord,
  subheadline,
  primaryCta,
  secondaryCta,
  consultationNote,
  image,
  visual,
  brandLayout = false,
}: HeroProps) {
  return (
    <Section band="wash" className={cn(brandLayout && "pb-0")}>
      <Container
        className={cn(
          "grid items-center gap-[clamp(40px,5vw,80px)] py-[clamp(56px,6.5vw,96px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]",
          brandLayout && "pb-[clamp(72px,8vw,112px)]",
        )}
      >
        <div className="order-2 lg:order-1 flex min-h-[300px] items-center justify-center">
          {visual ?? (image ? <HeroPhoto src={image.src} alt={image.alt} /> : null)}
        </div>

        <div className="order-1 lg:order-2">
          {breadcrumb && breadcrumb.length > 0 ? (
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-neutral-600"
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-neutral-400">
                        /
                      </span>
                    ) : null}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="no-underline transition-colors duration-150 hover:text-accent-700"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={cn(isLast && "font-medium text-text")}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          ) : null}

          {eyebrow ? (
            <span
              className={cn(
                "mb-5 inline-flex items-center gap-2 rounded-full border border-accent-300 bg-band-paper px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
              )}
            >
              {brandLayout ? (
                <Icon name="shield" size={14} className="text-accent shrink-0" />
              ) : null}
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mb-6 max-w-[15ch] text-[clamp(34px,4vw,54px)] leading-[1.1] text-text">
            <HeadlineWithHighlight headline={headline} highlightWord={highlightWord} />
          </h1>
          <p className="mb-8 max-w-[48ch] text-[17px] leading-[1.65] text-neutral-800">
            {subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href={primaryCta.href} variant="primary" size="hero" arrow={brandLayout}>
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size={brandLayout ? "hero" : "default"}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          {consultationNote ? (
            <p className="mt-5 flex max-w-[44ch] items-start gap-2 text-[13px] text-neutral-600">
              {brandLayout ? (
                <Icon name="shield" size={14} className="mt-0.5 shrink-0 text-accent" />
              ) : null}
              <span>{consultationNote}</span>
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

export function HeroBrandVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[440px]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_45%_40%,rgba(15,148,136,0.30)_0%,rgba(251,122,90,0.14)_55%,transparent_75%)] blur-[2px]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full border-2 border-dashed border-accent-300/70"
      />

      <div className="relative z-[1] mx-auto w-[82%]">
        <div
          className="relative aspect-square w-full overflow-hidden border-[6px] border-band-paper shadow-lg"
          style={{ borderRadius: "58% 42% 64% 36% / 46% 54% 46% 54%" }}
        >
          <Image
            src="/brand/hero-doctor1.png"
            alt="Healthcare professional representing Medical Billers billing partnership"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 640px) 72vw, 360px"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-0 top-[8%] hidden w-[150px] rounded-[26px] bg-accent px-4 py-3 text-white shadow-lg sm:block">
          <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-white/85">
            Claims
            <Icon name="fileText" size={14} className="opacity-80" />
          </div>
          <p className="font-[family-name:var(--font-heading)] text-[20px] font-semibold leading-none">
            1,243
          </p>
          <p className="mt-1 text-[10px] text-white/70">Processed this month</p>
        </div>

        <div className="absolute bottom-[6%] right-0 w-[min(168px,44%)] rounded-full border border-white/80 bg-band-paper/95 p-3 shadow-lg backdrop-blur-sm sm:right-[-6%]">
          <div className="flex items-center gap-2.5">
            <div
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(var(--color-accent-2) 0 92%, var(--color-accent-200) 0)",
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-[5px] flex items-center justify-center rounded-full bg-band-paper text-[11px] font-bold text-accent-2">
                92%
              </span>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500">Resolution</p>
              <p className="text-[12px] font-semibold leading-snug text-text">Rate</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[2%] left-[6%] rounded-full bg-accent-2 px-3 py-2 text-white shadow-md sm:hidden">
          <p className="text-[10px] font-medium text-white/85">Claims</p>
          <p className="text-[13px] font-semibold">1,243</p>
        </div>
      </div>
    </div>
  );
}
