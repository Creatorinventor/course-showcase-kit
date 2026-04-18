import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Error 404</p>
          <h1 className="mt-4 text-7xl font-display font-bold text-gradient-aurora">Lost in space</h1>
          <p className="mt-4 text-base text-muted-foreground">
            That page hasn't been mapped yet. Let's get you back on course.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tensor Academy — STEM & Competitive Exam Coaching Template" },
      {
        name: "description",
        content:
          "A premium website template for STEM coaching academies, JEE/NEET preparation institutes, and tuition centers. Showcase courses, faculty, gallery, and success stories.",
      },
      { name: "author", content: "Tensor Academy" },
      { property: "og:title", content: "Tensor Academy — STEM & Competitive Exam Coaching Template" },
      {
        property: "og:description",
        content:
          "A premium website template for STEM coaching academies. Showcase courses, faculty, facilities, and your toppers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tensor Academy — STEM & Competitive Exam Coaching Template" },
      { name: "description", content: "Academy Showcase is a website template for tuition teachers to display their academies, courses, and student success." },
      { property: "og:description", content: "Academy Showcase is a website template for tuition teachers to display their academies, courses, and student success." },
      { name: "twitter:description", content: "Academy Showcase is a website template for tuition teachers to display their academies, courses, and student success." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ba3d375-5fdd-4378-b350-c63a24032924/id-preview-c1dbbbeb--a102d94a-f9df-4ab5-ad86-73c53f521f21.lovable.app-1776508750064.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ba3d375-5fdd-4378-b350-c63a24032924/id-preview-c1dbbbeb--a102d94a-f9df-4ab5-ad86-73c53f521f21.lovable.app-1776508750064.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
