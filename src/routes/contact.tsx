import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tensor Academy" },
      { name: "description", content: "Book a free demo, request a callback, or visit our campus." },
      { property: "og:title", content: "Contact — Tensor Academy" },
      { property: "og:description", content: "Get in touch with us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">your future.</span></>}
        description="Drop a message, book a free demo, or just visit the campus. Replace these contact details with your academy's real info."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="grid size-16 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">Got it. We'll call you back.</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  This is a demo form. Wire it up to your CRM, email, or WhatsApp Business when you customize the
                  template.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold">Request a Free Demo</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll respond within 24 hours.</p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Student Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                  <Field label="Class / Target Exam" name="exam" placeholder="e.g. JEE 2026" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your goals…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-glow-cyan sm:w-auto"
                >
                  Send Request <Send className="size-4" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <ContactCard icon={Phone} label="Call us" value="+1 (555) 010-2025" sub="Mon–Sat · 9am–8pm" accent="primary" />
          <ContactCard icon={Mail} label="Email" value="hello@tensoracademy.edu" sub="Replies within 24 hours" accent="accent" />
          <ContactCard icon={MapPin} label="Campus" value="42 Knowledge Park" sub="City, ST 000000" accent="lime" />

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Office hours</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Mon – Fri</span><span>9:00 — 20:00</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span>9:00 — 18:00</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder, className = "",
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon, label, value, sub, accent,
}: { icon: typeof Mail; label: string; value: string; sub: string; accent: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div
        className="grid size-11 shrink-0 place-items-center rounded-lg"
        style={{ backgroundColor: `color-mix(in oklab, var(--${accent}) 15%, transparent)`, color: `var(--${accent})` }}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 font-display text-lg font-semibold">{value}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
