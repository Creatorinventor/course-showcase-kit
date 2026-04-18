import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Trophy, Users, BookOpen, Microscope, Calculator, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import heroImage from "@/assets/hero-classroom.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tensor Academy — Crack JEE, NEET & Beyond" },
      {
        name: "description",
        content:
          "STEM coaching academy template. Showcase your courses, faculty, results, and facilities to attract serious aspirants.",
      },
      { property: "og:title", content: "Tensor Academy — Crack JEE, NEET & Beyond" },
      { property: "og:description", content: "STEM coaching academy template — courses, faculty, results, facilities." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "14,892", label: "Students Trained", color: "text-primary" },
  { value: "2,104", label: "IIT / NEET Selections", color: "text-accent" },
  { value: "12", label: "Years of Excellence", color: "text-lime" },
  { value: "45+", label: "Expert Faculty", color: "text-amber" },
];

const subjects = [
  { icon: Calculator, name: "Mathematics", desc: "Algebra · Calculus · Coordinate Geometry" },
  { icon: Microscope, name: "Physics", desc: "Mechanics · Thermodynamics · Optics" },
  { icon: FlaskConical, name: "Chemistry", desc: "Organic · Inorganic · Physical" },
  { icon: BookOpen, name: "Biology", desc: "Botany · Zoology · Human Physiology" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-16 pb-20 md:px-8 lg:grid-cols-12 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" /> Admissions Open · 2026 Batch
            </div>

            <h1 className="mt-6 text-balance text-5xl font-display font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Where future <span className="text-gradient-aurora">IITians & doctors</span> are forged.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Rigorous curriculum, elite faculty, and a track record that speaks louder than promises. Replace this
              tagline with what makes <strong className="text-foreground">your academy</strong> different.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-glow-cyan"
              >
                Explore Courses <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary/50 px-7 py-4 text-base font-semibold text-foreground transition-all hover:border-accent hover:bg-secondary"
              >
                Book a Free Demo Class
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className={`mt-1 font-display text-3xl font-bold tabular-nums sm:text-4xl ${s.color}`}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-panel p-2 shadow-2xl">
                <div className="mb-2 flex items-center justify-between px-2 py-1.5">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-destructive/60" />
                    <div className="size-2.5 rounded-full bg-amber/60" />
                    <div className="size-2.5 rounded-full bg-lime/60" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    LIVE_CLASS_2025
                  </span>
                </div>
                <img
                  src={heroImage}
                  alt="Students learning in a high-tech classroom"
                  width={1280}
                  height={1600}
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-background/85 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Replace this caption</p>
                  <p className="mt-1 font-display text-base font-semibold">Show your real classroom photos here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="What we teach"
            title={<>Four pillars. <span className="text-gradient">Zero compromises.</span></>}
            description="Every subject taught by specialists. Replace these with the subjects your academy offers."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((s, i) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
                <s.icon className="size-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-display font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Track 0{i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Tensor"
              title={<>Built different. <span className="text-gradient">Results to prove it.</span></>}
              description="A short, punchy paragraph about your teaching philosophy goes here. Talk about batch sizes, doubt sessions, mentorship, and how you track every student's progress."
            />
            <ul className="mt-10 space-y-5">
              {[
                { t: "Small batch sizes (max 25)", d: "Every student gets attention, not lost in a crowd." },
                { t: "Weekly diagnostic tests", d: "Data-driven feedback so weak areas get fixed early." },
                { t: "1-on-1 mentorship", d: "Each student paired with a personal mentor for the full year." },
                { t: "Doubt sessions until midnight", d: "No question waits. Faculty available 7 days a week." },
              ].map((item) => (
                <li key={item.t} className="flex gap-4">
                  <div className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                    <Trophy className="size-4" />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold">{item.t}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={gallery1} alt="Lecture hall" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl border border-border object-cover" />
            <img src={gallery2} alt="Chemistry lab" loading="lazy" width={1024} height={1024} className="mt-12 aspect-square w-full rounded-xl border border-border object-cover" />
            <img src={gallery4} alt="Award ceremony" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl border border-border object-cover" />
            <div className="mt-12 grid aspect-square place-items-center rounded-xl border border-dashed border-border bg-card p-6 text-center">
              <div>
                <Users className="mx-auto size-8 text-accent" />
                <p className="mt-3 font-display text-2xl font-bold">+12,000</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">alumni network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-panel to-surface p-10 md:p-16">
            <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <h2 className="max-w-2xl text-balance text-4xl font-display font-bold sm:text-5xl md:text-6xl">
                Your seat in the <span className="text-gradient-aurora">2026 batch</span> is waiting.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Book a free demo class today. Bring a parent. Ask hard questions. We'll prove it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:shadow-glow-cyan">
                  Book Free Demo <ArrowRight className="size-5" />
                </Link>
                <Link to="/courses" className="inline-flex items-center justify-center rounded-lg border border-border bg-background/30 px-7 py-4 text-base font-semibold backdrop-blur hover:border-accent">
                  See Course Fees
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
