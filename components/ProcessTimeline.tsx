import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type ProcessStep = {
  title: string;
  description: string;
  icon?: IconName;
};

type ProcessTimelineProps = {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
};

const DEFAULT_ICONS: IconName[] = [
  "headphones",
  "shield",
  "monitor",
  "clipboard",
  "handshake",
  "lock",
  "users",
  "fileText",
];

/** Vertical winding path with alternating side notes — Florida's timeline shape. */
export function ProcessTimeline({
  heading,
  subheading,
  steps,
}: ProcessTimelineProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 text-center text-[clamp(14px,1.35vw,16px)] font-semibold uppercase tracking-[0.16em] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto mb-14 max-w-[52ch] text-center text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-14" />
        )}

        <ol className="relative m-0 mx-auto flex max-w-[720px] list-none flex-col gap-10 p-0">
          <span
            aria-hidden
            className="absolute left-7 top-2 bottom-2 w-px border-l-2 border-dashed border-accent-300 sm:left-8"
          />
          {steps.map((step, index) => {
            const icon = step.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];

            return (
              <li key={step.title} className="relative flex gap-5 pl-0 sm:gap-6">
                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_28px_rgba(15,148,136,0.32)] sm:size-16">
                  <Icon name={icon} size={22} className="text-white" />
                  <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full border-2 border-band-paper bg-accent-2 text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                <div className="rounded-[22px] border border-divider bg-band-paper px-5 py-4 shadow-sm">
                  <h3 className="mb-1.5 text-[16px] font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="max-w-[48ch] text-[13px] leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
