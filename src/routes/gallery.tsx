import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tensor Academy" },
      { name: "description", content: "Take a visual tour of our classrooms, labs, library, and student events." },
      { property: "og:title", content: "Gallery — Tensor Academy" },
      { property: "og:description", content: "A visual tour of our academy." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, caption: "Lecture Hall · Capacity 250", category: "Classrooms", span: "md:col-span-2 md:row-span-2" },
  { src: g2, caption: "Wet Chemistry Lab", category: "Facilities", span: "" },
  { src: g3, caption: "24/7 Self-Study Library", category: "Facilities", span: "" },
  { src: g4, caption: "Annual Toppers Felicitation 2024", category: "Events", span: "md:col-span-2" },
  { src: hero, caption: "Smart Classroom — Physics Block", category: "Classrooms", span: "" },
  { src: g1, caption: "Lecture in progress", category: "Classrooms", span: "" },
];

function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title={<>A visual tour of <span className="text-gradient">where you'll learn.</span></>}
        description="Replace these images with real photos of your campus, classrooms, labs, library, sports facilities, and academy events. Every photo here builds trust with parents."
      />

      <div className="mt-16 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:auto-rows-[16rem] md:grid-cols-4">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`group relative overflow-hidden rounded-xl border border-border bg-card ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{item.category}</p>
              <p className="mt-1 font-display text-lg font-semibold">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
