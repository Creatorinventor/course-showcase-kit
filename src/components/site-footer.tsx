import { Link } from "@tanstack/react-router";
import { Atom, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/50">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-md bg-gradient-to-br from-primary to-accent">
              <Atom className="size-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold">Tensor Academy</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A demo site template. Replace this text with your academy's mission, founding year, and what makes you
            different from every other coaching center in town.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><MapPin className="size-4 text-primary" /><span>42 Knowledge Park, City, ST 000000</span></p>
            <p className="flex items-center gap-2"><Phone className="size-4 text-primary" /><span>+1 (555) 010-2026</span></p>
            <p className="flex items-center gap-2"><Mail className="size-4 text-primary" /><span>hello@tensoracademy.edu</span></p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/faculty" className="hover:text-foreground">Faculty</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/success" className="hover:text-foreground">Success Stories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Visit</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/facilities" className="hover:text-foreground">Facilities</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground">Admission Form</a></li>
            <li><a href="#" className="hover:text-foreground">Brochure (PDF)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Tensor Academy. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">Template v1.0 — STEM Edition</p>
        </div>
      </div>
    </footer>
  );
}
