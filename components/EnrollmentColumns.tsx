import { Container, Kicker, Section } from "@/components/Container";

export type EnrollmentColumn = {
  title: string;
  payers?: string;
  items: Array<{ title: string; description: string }>;
};

type PayerPrompt = {
  heading: string;
  payers: string[];
};

type EnrollmentColumnsProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  columns: EnrollmentColumn[];
  payerPrompt?: PayerPrompt;
};

export function EnrollmentColumns({
  kicker,
  heading,
  subheading,
  columns,
  payerPrompt,
}: EnrollmentColumnsProps) {
  return (
    <Section band="tint">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? <Kicker className="mb-3 text-accent">{kicker}</Kicker> : null}
        <h2 className="mb-3 max-w-[32ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-10 max-w-[64ch] text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {columns.map((column) => (
            <div
              key={column.title}
              className="card-lift card-lift-light flex flex-col rounded-[28px] border border-divider bg-band-paper p-6"
            >
              <h3 className="mb-1 text-[18px] text-text">{column.title}</h3>
              {column.payers ? (
                <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.08em] text-accent-700">
                  {column.payers}
                </p>
              ) : (
                <div className="mb-5" />
              )}
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {column.items.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-accent-2"
                    />
                    <div>
                      <p className="mb-1 text-[14px] font-semibold text-text">
                        {item.title}
                      </p>
                      <p className="text-[13px] leading-[1.55] text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {payerPrompt ? (
          <div className="mt-10 rounded-[28px] border border-divider bg-band-paper p-6">
            <h3 className="mb-4 text-[18px] text-text">{payerPrompt.heading}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {payerPrompt.payers.map((payer) => (
                <li
                  key={payer}
                  className="rounded-full border border-divider bg-bg px-4 py-1.5 text-[13px] font-medium text-text"
                >
                  {payer}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
