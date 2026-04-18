import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="size-1.5 rounded-full bg-primary" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          <span className="size-1.5 rounded-full bg-accent" />
        </div>
      )}
      <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-[1.05] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">{description}</p>
      )}
    </div>
  );
}
