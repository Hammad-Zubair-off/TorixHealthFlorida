import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type OverviewCard = {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  tag?: string;
  ctaLabel?: string;
};

type ServicesOverviewProps = {
  servicesHeading: string;
  servicesNote?: string;
  solutionsHeading: string;
  services: OverviewCard[];
  solutions: OverviewCard[];
};

/** Overlapping medallion cards on a staggered grid — Florida's services shape. */
export function ServicesOverview({
  servicesHeading,
  servicesNote,
  solutionsHeading,
  services,
  solutions,
}: ServicesOverviewProps) {
  return (
    <>
      <Section band="tint" className="border-y border-accent-300">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4 text-center">Services</Kicker>
          <h2 className="mx-auto mb-3 max-w-[20ch] text-center text-[clamp(26px,2.7vw,34px)] text-text">
            {servicesHeading}
          </h2>
          {servicesNote ? (
            <p className="mx-auto mb-12 max-w-[56ch] text-center text-[15px] text-neutral-600">
              {servicesNote}
            </p>
          ) : (
            <div className="mb-12" />
          )}
          <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <li key={item.href} className={index % 3 === 1 ? "sm:translate-y-6" : undefined}>
                <Link
                  href={item.href}
                  className="card-lift card-lift-light group flex h-full flex-col items-center rounded-[28px] border border-divider bg-band-paper p-7 pt-10 text-center no-underline"
                >
                  <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-accent-100 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className="mb-2 text-[16px] text-text">{item.title}</h3>
                  <p className="mb-4 flex-1 text-[13px] text-neutral-600">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent-200 px-3.5 py-1 text-[12px] font-semibold text-accent transition-colors duration-200">
                    {item.ctaLabel ?? item.title}
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section band="deep">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4 text-center text-accent-300">Solutions</Kicker>
          <h2 className="mx-auto mb-10 max-w-[20ch] text-center text-[clamp(26px,2.7vw,34px)] text-band-deep-text">
            {solutionsHeading}
          </h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <li key={item.href} className={index % 3 === 1 ? "sm:translate-y-6" : undefined}>
                <div className="card-lift card-lift-deep flex h-full flex-col items-center rounded-[28px] border border-white/10 bg-white/5 p-7 pt-10 text-center">
                  {item.tag ? (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-accent-2/25 px-2.5 py-0.5 text-[11px] font-semibold text-accent-300">
                      {item.tag}
                    </span>
                  ) : null}
                  <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-white/10 text-accent-300">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className="mb-2 text-[20px] text-band-deep-text">{item.title}</h3>
                  <p className="mb-5 flex-1 text-[13px] text-band-deep-muted">
                    {item.description}
                  </p>
                  <Button href={item.href} variant="secondary" className="self-center">
                    {item.ctaLabel ?? "Explore"}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
