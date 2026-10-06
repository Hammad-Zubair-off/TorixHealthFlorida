import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type TrustItem = {
  icon: IconName;
  label: string;
  description?: string;
};

type TrustBarProps = {
  items: TrustItem[];
  /** Pill-chip row matching Florida's brand mockup (Home). */
  variant?: "default" | "brand";
};

/** Floating pill chips instead of a rectangular bar — Florida's trust strip. */
export function TrustBar({ items, variant = "default" }: TrustBarProps) {
  if (variant === "brand") {
    return (
      <Section band="none" className="relative z-10 -mt-8 pb-6 md:-mt-12 md:pb-8">
        <Container>
          <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0 sm:gap-4">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-full bg-band-deep px-5 py-3 text-band-deep-text shadow-lg"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <span className="block text-[13px] font-semibold leading-snug text-white">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="block text-[11px] leading-snug text-band-deep-muted">
                      {item.description}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    );
  }

  return (
    <Section band="tint">
      <Container className="py-8">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0">
          {items.map((item) => (
            <li
              key={item.label}
              className={cn(
                "card-lift flex items-center gap-3 rounded-full border border-divider bg-band-paper px-5 py-2.5",
                "hover:border-accent-300 hover:shadow-sm",
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent">
                <Icon name={item.icon} size={16} />
              </span>
              <span className="text-[13px] font-semibold text-text">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
