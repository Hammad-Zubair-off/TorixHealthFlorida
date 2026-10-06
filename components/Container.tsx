import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer" | "header";
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-[clamp(24px,4vw,44px)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  band?: "bg" | "paper" | "tint" | "deep" | "wash" | "none";
};

const bands: Record<NonNullable<SectionProps["band"]>, string> = {
  none: "",
  bg: "bg-bg",
  paper: "bg-band-paper",
  tint: "bg-band-tint",
  deep: "bg-[radial-gradient(ellipse_120%_90%_at_20%_-10%,var(--color-section-glow),var(--color-section)_60%)] text-band-deep-text",
  wash: "bg-[radial-gradient(ellipse_65%_55%_at_88%_15%,rgba(15,148,136,0.20),transparent_55%),radial-gradient(ellipse_60%_50%_at_8%_90%,rgba(251,122,90,0.16),transparent_55%),linear-gradient(175deg,#eafaf7_0%,var(--color-bg)_55%,#fdf2ec_100%)]",
};

export function Section({
  children,
  className,
  id,
  band = "bg",
}: SectionProps) {
  return (
    <section id={id} className={cn(bands[band], className)}>
      {children}
    </section>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.08em] text-accent-700",
        className,
      )}
    >
      {children}
    </p>
  );
}
