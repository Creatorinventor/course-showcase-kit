import { createFileRoute } from "@tanstack/react-router";
import { Wifi, BookOpen, FlaskConical, Coffee, Bus, Shield, Building2, MonitorPlay } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Tensor Academy" },
      { name: "description", content: "Smart classrooms, labs, library, hostel, and more." },
      { property: "og:title", content: "Facilities — Tensor Academy" },
      { property: "og:description", content: "Inside our campus." },
    ],
  }),
  component: FacilitiesPage,
});

const facilities = [
  { icon: MonitorPlay, name: "Smart Classrooms", desc: "Interactive displays, recorded lectures, climate-controlled rooms with ergonomic seating." },
  { icon: FlaskConical, name: "Modern Labs", desc: "Fully equipped Physics, Chemistry, and Biology labs aligned with NCERT practical syllabus." },
  { icon: BookOpen, name: "24/7 Library", desc: "20,000+ titles, silent study zones, reference copies of every major textbook and paper." },
  { icon: Building2, name: "Boys & Girls Hostel", desc: "Separate, secure residential blocks with mess facilities and study supervision." },
  { icon: Coffee, name: "Cafeteria", desc: "Hygienic, nutritionist-planned meals. Vegetarian and Jain options available daily." },
  { icon: Wifi, name: "High-Speed WiFi", desc: "1 Gbps campus-wide internet for online resources, mock tests, and recorded sessions." },
  { icon: Bus, name: "Transport", desc: "AC bus service covering 40+ routes across the city. GPS-tracked, parent app included." },
  { icon: Shield, name: "24/7 Security", desc: "CCTV monitoring, biometric entry, on-campus medical room with trained staff." },
];

function FacilitiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Facilities"
        title={<>An environment built to <span className="text-gradient">remove distractions.</span></>}
        description="List every facility your campus offers. Parents look for these specifics — be honest, be specific, replace this template content."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((f) => (
          <div key={f.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
            <div className="grid size-12 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
              <f.icon className="size-6 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{f.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
