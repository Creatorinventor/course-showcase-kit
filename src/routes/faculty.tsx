import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Tensor Academy" },
      { name: "description", content: "Meet the educators behind every rank." },
      { property: "og:title", content: "Faculty — Tensor Academy" },
      { property: "og:description", content: "Meet our distinguished STEM faculty." },
    ],
  }),
  component: FacultyPage,
});

const faculty = [
  { name: "Dr. Aarav Sharma", role: "Head of Physics", cred: "Ph.D · IIT Bombay", years: 18, accent: "primary" },
  { name: "Prof. Meera Iyer", role: "Sr. Mathematics Faculty", cred: "M.Sc · ISI Kolkata", years: 14, accent: "accent" },
  { name: "Dr. Rohan Verma", role: "Organic Chemistry Lead", cred: "Ph.D · IISc Bangalore", years: 12, accent: "lime" },
  { name: "Dr. Priya Nair", role: "Biology & NEET Mentor", cred: "MBBS, MD · AIIMS Delhi", years: 10, accent: "amber" },
  { name: "Mr. Karan Mehta", role: "Inorganic Chemistry", cred: "M.Sc · IIT Kanpur", years: 9, accent: "primary" },
  { name: "Ms. Anjali Rao", role: "Mathematics (Foundation)", cred: "M.Sc, B.Ed · DU", years: 7, accent: "accent" },
];

function FacultyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="The Faculty"
        title={<>Taught by people who've <span className="text-gradient">cracked it themselves.</span></>}
        description="Replace these placeholder profiles with photos and bios of your real faculty. The format is the strength — make sure every name carries weight."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((f) => (
          <div key={f.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1">
            <div
              className="aspect-square w-full rounded-lg"
              style={{
                background: `linear-gradient(135deg, color-mix(in oklab, var(--${f.accent}) 30%, var(--surface)), var(--panel))`,
              }}
            >
              <div className="grid h-full place-items-center">
                <GraduationCap className="size-20 opacity-30" style={{ color: `var(--${f.accent})` }} />
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-muted-foreground">{f.role}</p>
              </div>
              <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest">
                {f.years}y
              </span>
            </div>
            <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-primary">
              <Award className="size-3.5" /> {f.cred}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
