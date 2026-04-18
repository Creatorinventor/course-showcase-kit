import { createFileRoute } from "@tanstack/react-router";
import { Quote, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/success")({
  head: () => ({
    meta: [
      { title: "Success Stories — Tensor Academy" },
      { name: "description", content: "Toppers, ranks, and the students who made it. Real results, real names." },
      { property: "og:title", content: "Success Stories — Tensor Academy" },
      { property: "og:description", content: "Our toppers and their ranks." },
    ],
  }),
  component: SuccessPage,
});

const toppers = [
  { name: "Aditi Reddy", rank: "AIR 14", exam: "JEE Advanced 2024", college: "IIT Bombay · CSE" },
  { name: "Vikram Joshi", rank: "AIR 47", exam: "NEET 2024", college: "AIIMS Delhi · MBBS" },
  { name: "Sneha Pillai", rank: "AIR 89", exam: "JEE Advanced 2024", college: "IIT Madras · EE" },
  { name: "Arjun Khanna", rank: "AIR 112", exam: "NEET 2024", college: "AIIMS Bhopal · MBBS" },
  { name: "Riya Bhat", rank: "AIR 156", exam: "JEE Advanced 2024", college: "IIT Delhi · Mech" },
  { name: "Karthik Menon", rank: "AIR 203", exam: "NEET 2024", college: "JIPMER · MBBS" },
  { name: "Priya Saxena", rank: "AIR 245", exam: "JEE Advanced 2024", college: "IIT Kanpur · CSE" },
  { name: "Rohan Desai", rank: "AIR 312", exam: "NEET 2024", college: "AIIMS Jodhpur · MBBS" },
];

const testimonials = [
  {
    quote: "The mentorship system at Tensor changed how I studied. I went from struggling with derivatives to topping my school in math.",
    name: "Aditi Reddy", role: "AIR 14, JEE Advanced 2024",
  },
  {
    quote: "What I valued most was the doubt-clearing culture. No question was ever too small. Faculty actually cared.",
    name: "Vikram Joshi", role: "AIR 47, NEET 2024",
  },
];

function SuccessPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Success Stories"
        title={<>Ranks. Names. <span className="text-gradient">Real students.</span></>}
        description="Replace this with your academy's actual toppers — names, photos, ranks, and the colleges they got into. Specifics build credibility."
      />

      {/* Stats banner */}
      <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-4 md:p-10">
        {[
          { v: "2,104", l: "Total Selections" },
          { v: "47", l: "Top 100 Ranks" },
          { v: "284", l: "IIT Selections '24" },
          { v: "612", l: "NEET Qualifiers '24" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-display text-3xl font-bold text-gradient-aurora md:text-5xl">{s.v}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Toppers grid */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toppers.map((t) => (
          <div key={t.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50">
            <div className="absolute right-4 top-4">
              <Trophy className="size-5 text-amber" />
            </div>
            <div className="mb-4 grid size-16 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-display font-bold text-primary-foreground">
              {t.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.rank}</p>
            <h3 className="mt-1 font-display text-lg font-bold">{t.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{t.exam}</p>
            <p className="mt-1 text-sm font-medium">{t.college}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="relative rounded-2xl border border-border bg-card p-8">
            <Quote className="absolute right-6 top-6 size-10 text-primary/20" />
            <p className="text-lg leading-relaxed">"{t.quote}"</p>
            <footer className="mt-6 border-t border-border pt-4">
              <p className="font-display font-bold">{t.name}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
