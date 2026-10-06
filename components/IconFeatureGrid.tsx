import Link from "next/link";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon: IconName;
  title: string;
  description?: string;
  href?: string;
  /** Link label when `href` is set. Defaults to “Explore →”. */
  ctaLabel?: string;
};

type IconFeatureGridProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  footerNote?: string;
  items: FeatureItem[];
  variant?: "light" | "deep" | "open";
  band?: "bg" | "paper" | "tint" | "deep" | "none";
  /** @deprecated Prefer fixed responsive cols (1 / 2 / 3). Kept for call-site compat. */
  minCardWidth?: number;
  className?: string;
};

/** Centered medallion cards — the Florida signature card shape. */
export function IconFeatureGrid({
  kicker,
  heading,
  subheading,
  footerNote,
  items,
  variant = "light",
  band = "bg",
  className,
}: IconFeatureGridProps) {
  const deep = variant === "deep";
  const open = variant === "open";

  return (
    <Section band={band} className={className}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? (
          <Kicker className={cn("mb-3 text-center", deep && "text-accent-300")}>{kicker}</Kicker>
        ) : null}
        <h2
          className={cn(
            "mx-auto mb-3 max-w-[24ch] text-center text-[clamp(26px,2.7vw,34px)]",
            deep ? "text-band-deep-text" : "text-text",
          )}
        >
          {heading}
        </h2>
        {subheading ? (
          <p
            className={cn(
              "mx-auto mb-10 max-w-[56ch] text-center text-[15px]",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-9 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const body = (
              <>
                <span
                  className={cn(
                    "mb-4 flex size-14 items-center justify-center rounded-full shadow-sm",
                    deep
                      ? "bg-white/10 text-accent-300 ring-1 ring-white/15"
                      : "bg-accent-100 text-accent-700",
                  )}
                >
                  <Icon name={item.icon} size={24} />
                </span>
                <h3
                  className={cn(
                    "mb-2 text-[16px]",
                    deep ? "text-band-deep-text" : "text-text",
                    open && "text-[18px]",
                  )}
                >
                  {item.title}
                </h3>
                {item.description ? (
                  <p
                    className={cn(
                      "text-[13px] leading-[1.55]",
                      deep ? "text-band-deep-muted" : "text-neutral-600",
                    )}
                  >
                    {item.description}
                  </p>
                ) : null}
                {item.href ? (
                  <span
                    className={cn(
                      "mt-4 inline-flex items-center gap-1 rounded-full border px-3.5 py-1 text-[12px] font-semibold",
                      deep
                        ? "border-white/20 text-accent-300"
                        : "border-accent-200 text-accent-700",
                    )}
                  >
                    {item.ctaLabel ?? "Explore →"}
                  </span>
                ) : null}
              </>
            );

            const cardClass = cn(
              "flex flex-col items-center rounded-[28px] p-7 text-center card-lift",
              index % 3 === 1 && "sm:translate-y-5",
              open
                ? "bg-transparent p-0 sm:p-2"
                : deep
                  ? "card-lift-deep border border-white/10 bg-white/5"
                  : "card-lift-light border border-divider bg-bg",
            );

            return (
              <li key={item.title}>
                {item.href ? (
                  <Link href={item.href} className={cn(cardClass, "no-underline")}>
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        {footerNote ? (
          <p
            className={cn(
              "mx-auto mt-10 max-w-[68ch] text-center text-[14px] leading-[1.55]",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
