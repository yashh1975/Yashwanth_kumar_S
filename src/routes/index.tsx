import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Background } from "@/components/portfolio/Background";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow, LoadingScreen, ScrollProgress } from "@/components/portfolio/Effects";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { ChatBot, HireMeEgg, ResumeModal } from "@/components/portfolio/Overlays";
import { About, FiverrBanner, Footer, Journey, Profiles, Projects, Services, Skills } from "@/components/portfolio/Sections";

const TITLE = "Yash (Yashwanth Kumar S) | AI, Web & Cloud Engineer";
const DESC =
  "Official portfolio of Yash (Yashwanth Kumar S / yashh1975). Hire on Fiverr for proven AI chatbots, modern websites & RPA automation. Explore projects today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "_e2eWDjFBQX27uuqaSUWZlz3MxhgSXaXeqeg-sQOy7M" },
      { name: "google-site-verification", content: "googleeadb4f19764c838a" },
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Yash, y2k, yashh, yashwanth, yashwanth kumar s, 1975, yashh1975, yashh1974, yash fiverr, yashh2005, YASHWANTHKUMARS, Yash Portfolio, yashh.pages.dev, Yash AI Engineer, Yash Freelance, Yash Developer",
      },
      { property: "og:title", content: "Yash (Yashwanth Kumar S) — AI & Full Stack Freelance Developer" },
      {
        property: "og:description",
        content:
          "Discover AI chatbots, responsive web apps, and RPA automation by Yash (yashh / yashh1975). Available on Fiverr for custom development and contracts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yash (Yashwanth Kumar S) | AI, Web & Automation Developer" },
      {
        name: "twitter:description",
        content:
          "Explore high-impact AI solutions, full-stack websites, and automation built by Yash (yashh / yashh1975). Available for hire on Fiverr.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [resume, setResume] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative"
    >
      <LoadingScreen />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Nav />

      <Hero onResume={() => setResume(true)} />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Journey />
      <Profiles />
      <Contact />
      <FiverrBanner />
      <Footer />

      <ResumeModal open={resume} onClose={() => setResume(false)} />
      <HireMeEgg />
      <ChatBot />
    </motion.main>
  );
}
