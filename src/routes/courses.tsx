import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Users, Trophy, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Tensor Academy" },
      { name: "description", content: "JEE, NEET, Foundation and crash courses. Pick the path that fits your goal." },
      { property: "og:title", content: "Courses — Tensor Academy" },
      { property: "og:description", content: "Comprehensive STEM and competitive exam programs." },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    tag: "Flagship",
    accent: "primary",
    title: "JEE Advanced 2-Year",
    desc: "End-to-end IIT-JEE preparation starting from Class 11. Includes mock JEE Mains + Advanced cycles.",
    duration: "24 months", batch: "25 students/batch", fee: "$1,800 / year",
  },
  {
    tag: "Most Popular",
    accent: "accent",
    title: "NEET Complete",
    desc: "Biology-heavy curriculum aligned with NCERT, plus Physics & Chemistry intensive blocks.",
    duration: "24 months", batch: "30 students/batch", fee: "$1,650 / year",
  },
  {
    tag: "Foundation",
    accent: "lime",
    title: "STEM Foundation (Class 8–10)",
    desc: "Build the conceptual base. Olympiad coaching included.",
    duration: "12 months", batch: "20 students/batch", fee: "$950 / year",
  },
  {
    tag: "Intensive",
    accent: "amber",
    title: "Crash Course (Final 90 Days)",
    desc: "Last-mile sprint. Full syllabus revision, daily mock tests, performance analytics.",
    duration: "3 months", batch: "40 students/batch", fee: "$700",
  },
  {
    tag: "Online",
    accent: "primary",
    title: "Hybrid Live Online",
    desc: "Same faculty, same curriculum — delivered live with recorded backup.",
    duration: "12 months", batch: "Unlimited", fee: "$1,100 / year",
  },
  {
    tag: "Weekend",
    accent: "accent",
    title: "Weekend Booster",
    desc: "Saturday + Sunday only. For school students who want extra firepower.",
    duration: "10 months", batch: "25 students/batch", fee: "$580 / year",
  },
];

function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Programs"
        title={<>Pick your <span className="text-gradient">trajectory.</span></>}
        description="Six programs covering every stage from foundation to final crack. Edit, remove, or add courses to match what your academy actually offers."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between">
              <span
                className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                style={{
                  borderColor: `color-mix(in oklab, var(--${c.accent}) 40%, transparent)`,
                  color: `var(--${c.accent})`,
                  backgroundColor: `color-mix(in oklab, var(--${c.accent}) 12%, transparent)`,
                }}
              >
                {c.tag}
              </span>
              <Trophy className="size-5 text-muted-foreground/40" />
            </div>

            <h3 className="mt-6 text-2xl font-display font-bold leading-tight">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>

            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-muted-foreground"><Clock className="size-4" /> Duration</dt>
                <dd className="font-medium">{c.duration}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-muted-foreground"><Users className="size-4" /> Batch</dt>
                <dd className="font-medium">{c.batch}</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Fee</p>
                <p className="font-display text-2xl font-bold text-gradient">{c.fee}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Enroll <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
