import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "_e2eWDjFBQX27uuqaSUWZlz3MxhgSXaXeqeg-sQOy7M" },
      { title: "Yash (Yashwanth Kumar S) | AI, Web & Cloud Engineer" },
      {
        name: "description",
        content:
          "Official portfolio of Yash (Yashwanth Kumar S / yashh1975). Hire on Fiverr for proven AI chatbots, modern websites & RPA automation. Explore projects today.",
      },
      {
        name: "keywords",
        content:
          "Yash, y2k, yashh, yashwanth, yashwanth kumar s, 1975, yashh1975, yashh1974, yash fiverr, yashh2005, YASHWANTHKUMARS, Yash Portfolio, yashh.pages.dev, Yash AI Engineer, Yash Freelance, Yash Developer",
      },
      { name: "author", content: "Yashwanth Kumar S (Yash / yashh / y2k)" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "Yash (Yashwanth Kumar S) — AI & Full Stack Freelance Developer" },
      {
        property: "og:description",
        content:
          "Discover AI chatbots, responsive web apps, and RPA automation by Yash (yashh / yashh1975). Available on Fiverr for custom development and contracts.",
      },
      { property: "og:url", content: "https://yashh.pages.dev/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Yash Portfolio (Yashwanth Kumar S / yashh1975)" },
      { property: "og:image", content: "https://yashh.pages.dev/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yash (Yashwanth Kumar S) | AI, Web & Automation Developer" },
      {
        name: "twitter:description",
        content:
          "Explore high-impact AI solutions, full-stack websites, and automation built by Yash (yashh / yashh1975). Available for hire on Fiverr.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://yashh.pages.dev/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://yashh.pages.dev/#person",
                  "name": "Yashwanth Kumar S",
                  "alternateName": [
                    "Yash",
                    "y2k",
                    "yashh",
                    "yashh1975",
                    "yashh1974",
                    "yash fiverr",
                    "Yashwanth S",
                    "Yashwanth Kumar",
                    "YASHWANTHKUMARS",
                    "yashh2005"
                  ],
                  "url": "https://yashh.pages.dev/",
                  "image": "https://yashh.pages.dev/favicon.png",
                  "sameAs": [
                    "https://github.com/yashh1975",
                    "https://www.linkedin.com/in/yashh2005/",
                    "https://leetcode.com/u/YASHWANTHKUMARS/",
                    "https://www.fiverr.com/yashh_19?public_mode=true",
                    "https://github.com/yashh1975/AGC-Billing",
                    "https://github.com/yashh1975/DGen-AI",
                    "https://yashh.pages.dev/"
                  ],
                  "jobTitle": "AI & Cloud Software Engineer | Freelance Specialist",
                  "description":
                    "Yashwanth Kumar S (known as Yash, y2k, yashh, yashh1975) is a software engineer and freelance developer on Fiverr specializing in custom AI chatbots, full-stack web applications, and RPA automation.",
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Generative AI",
                    "RPA Automation",
                    "UiPath",
                    "Power Automate",
                    "Full Stack Web Development",
                    "Cloud Computing",
                    "React",
                    "TypeScript",
                    "Electron",
                    "Python",
                    "Java"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://yashh.pages.dev/#website",
                  "url": "https://yashh.pages.dev/",
                  "name": "Yash Portfolio",
                  "alternateName": [
                    "Yashwanth Kumar S Portfolio",
                    "yashh.pages.dev",
                    "Yash Fiverr Portfolio",
                    "y2k Developer Portfolio"
                  ],
                  "publisher": { "@id": "https://yashh.pages.dev/#person" },
                  "description":
                    "Official portfolio of Yash (Yashwanth Kumar S / yashh1975). AI chatbots, web apps, RPA automation, and freelance packages on Fiverr."
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
