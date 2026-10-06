import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type BenefitItem = {
  icon: IconName;
  title: string;
  description: string;
};

type BenefitCardsProps = {
  heading: string;
  subheading?: string;
  footerNote?: string;
  items: BenefitItem[];
};

/** Horizontal rows with a leading icon medallion — Florida's reading-flow card. */
export function BenefitCards({
  heading,
  subheading,
  footerNote,
  items,
}: BenefitCardsProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mx-auto mb-3 max-w-[20ch] text-center text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto mb-10 max-w-[56ch] text-center text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title}>
              <div className="card-lift card-lift-light flex h-full items-start gap-4 rounded-[24px] border border-divider bg-band-paper p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 className="mb-1 text-[16px] text-text">{item.title}</h3>
                  <p className="text-[13px] leading-[1.55] text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {footerNote ? (
          <p className="mx-auto mt-8 max-w-[68ch] text-center text-[14px] leading-[1.55] text-neutral-600">
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
