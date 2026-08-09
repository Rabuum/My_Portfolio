import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Download,
  GraduationCap,
  Beaker,
  Waves,
  Compass,
  FileText,
  Globe,
  ExternalLink,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabin Giri — Civil Engineer · Water Resources Researcher" },
      {
        name: "description",
        content:
          "Academic portfolio of Rabin Giri, a Civil Engineer from Nepal preparing for a Master's in Water Resources Engineering in Germany. Research, technical expertise, and career vision.",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------- data ------------------------------- */

const CV_URL = "/Rabin_Giri_Resume.pdf";
const EMAIL = "rabingiri456@gmail.com";

type ProjectLink = { label: string; href: string };

const PROJECTS: {
  title: string;
  kind: string;
  year: string;
  summary: string;
  meta: { k: string; v: string }[];
  links: ProjectLink[];
}[] = [
  {
    title: "Self-Healing Concrete Using Different Healing Agents",
    kind: "Undergraduate thesis · Featured",
    year: "2023 — 2024",
    summary:
      "For my final-year research I wanted to know whether concrete could repair its own cracks well enough to matter in practice. I cast and cured specimens with several healing agents, cracked them under load, and then tracked how much compressive strength each mix recovered over time — comparing healing efficiency, durability implications, and cost realism side by side.",
    meta: [
      { k: "Method", v: "Comparative laboratory experiment" },
      { k: "Testing", v: "Compressive strength & crack-healing analysis" },
      { k: "Outputs", v: "Thesis, technical report, defence presentation" },
      { k: "Skills", v: "Lab work · data analysis · scientific writing" },
    ],
    links: [{ label: "Request full thesis", href: `mailto:${EMAIL}?subject=Request%20for%20thesis%20—%20Self-Healing%20Concrete` }],
  },
];



const NAV = [
  { id: "about", label: "About" },
  { id: "academic", label: "Academic" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
];

const FOCUS = [
  "Hydrology",
  "Hydraulic Engineering",
  "Watershed Management",
  "Flood Mitigation",
  "Irrigation Systems",
  "Climate Resilience",
  "River Engineering",
  "Sustainable Infrastructure",
];

const COURSEWORK = [
  "Hydrology",
  "Hydraulic Engineering",
  "Fluid Mechanics",
  "Irrigation Engineering",
  "Water Supply Engineering",
  "Environmental Engineering",
  "Structural Analysis",
  "Engineering Geology",
];

const SOFTWARE = [
  { name: "AutoCAD", note: "2D / 3D drafting, technical drawings, site planning" },
  { name: "ArcGIS", note: "Spatial analysis, watershed & environmental mapping" },
  { name: "ETABS", note: "Structural modelling and analysis" },
  { name: "MS Office", note: "Documentation, data analysis, reporting" },
];

const SKILLS = [
  "Research Methodology",
  "Technical Documentation",
  "Analytical Thinking",
  "Problem Solving",
  "Laboratory Testing",
  "Data Analysis",
  "Communication",
  "Teamwork & Leadership",
];

const TIMELINE = [
  {
    year: "2019 — 2024",
    title: "Bachelor of Civil Engineering",
    org: "Nepal Engineering College · Pokhara University",
    detail:
      "CGPA 3.41 / 4.00. Concentrated coursework in hydrology, hydraulics, irrigation, and environmental engineering, complemented by a research-driven final year.",
  },
  {
    year: "2023 — 2024",
    title: "Undergraduate Research",
    org: "Self-Healing Concrete Using Different Healing Agents",
    detail:
      "Designed and conducted laboratory experiments to evaluate crack-healing performance and compressive strength recovery across multiple healing agents.",
  },
  {
    year: "2025 →",
    title: "Master's in Water Resources Engineering",
    org: "Target: Germany · DAAD Scholarship Track",
    detail:
      "Preparing applications to leading German technical universities with a research focus on sustainable water management and climate-resilient infrastructure.",
  },
];

/* ---------------------------- animation --------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ------------------------------- ui ------------------------------- */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
      <span className="font-mono text-[11px]">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      <span>{children}</span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ nav ------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[13px] font-medium text-paper">
            RG
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            Rabin Giri
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full border border-hairline md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-2 py-3 text-sm text-ink-soft hover:bg-muted hover:text-ink"
              >
                {n.label}
                <ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- hero ----------------------------- */

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-sm md:max-w-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-hairline bg-secondary/60">
        {!failed ? (
          <img
            src="/rabin.jpg"
            alt="Portrait of Rabin Giri, Civil Engineer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="font-serif text-6xl text-ink-soft">RG</span>
            <span className="px-8 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Portrait
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-black/5" />
      </div>

      <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-hairline bg-background/90 px-5 py-4 backdrop-blur-xl">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Civil Engineer · Pokhara, Nepal
        </div>
        <div className="mt-1 text-sm text-ink">
          B.E. Civil Engineering — CGPA 3.41 / 4.00
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              Applying for Master's studies in Germany
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[12vw] leading-[0.98] tracking-[-0.03em] text-ink text-balance sm:text-[9vw] md:text-[5.6vw] lg:text-[5.2rem]"
            >
              Rabin Giri
              <span className="mt-3 block font-serif text-[7vw] leading-[1.05] text-ink-soft sm:text-[5vw] md:text-[3vw] lg:text-[2.6rem]">
                Civil engineer working on <em className="italic text-ink">water</em>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-[17px]"
            >
              I grew up around rivers that give and take in equal measure — and that is
              what pulled me into civil engineering. Today I work on hydrology, hydraulics
              and water resource management, and I'm preparing for a Master's degree in
              Germany so I can come back with the depth needed to make Nepal's water
              infrastructure safer and more sustainable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#research"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={CV_URL}
                download="Rabin-Giri-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <Portrait />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-28 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2 md:grid-cols-4"
        >
          {[
            { k: "3.41 / 4.0", v: "Undergraduate CGPA" },
            { k: "4 yrs", v: "B.E. Civil Engineering" },
            { k: "1", v: "Research thesis completed" },
            { k: "Germany", v: "Target for Master's" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-3xl text-ink md:text-4xl">{s.k}</div>
              <div className="mt-1 text-[13px] uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


/* --------------------------- marquee --------------------------- */

function FocusMarquee() {
  const row = [...FOCUS, ...FOCUS];
  return (
    <section aria-hidden className="border-y border-hairline bg-background py-6">
      <div className="marquee-fade overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((f, i) => (
            <div
              key={`${f}-${i}`}
              className="flex items-center gap-12 font-serif text-2xl italic text-ink-soft md:text-3xl"
            >
              {f}
              <span className="text-ink">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------- about ---------------------------- */

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01">About</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              A research-minded engineer with a
              <em className="italic text-ink-soft"> long-horizon</em> vision for
              sustainable water systems.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 md:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft md:text-[17px]">
              My academic journey has been guided by a single question: how can engineering
              respond meaningfully to the water challenges facing communities like mine in
              Nepal? Every course, project, and lab has strengthened my conviction that
              rigorous research must sit at the heart of that answer.
            </p>
            <p className="text-base leading-relaxed text-ink-soft md:text-[17px]">
              I am now preparing to pursue a Master's in Water Resources Engineering in
              Germany — a country whose research culture, technical rigour, and commitment
              to sustainability align closely with my long-term goals in hydrology, flood
              management, and climate-resilient infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Fact label="Based in" value="Pokhara, Nepal" />
              <Fact label="Discipline" value="Civil Engineering" />
              <Fact label="Focus" value="Water Resources" />
              <Fact label="Languages" value="English · Nepali" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-hairline pt-3">
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-sm text-ink">{value}</div>
    </div>
  );
}

/* -------------------- academic profile + timeline -------------------- */

function Academic() {
  return (
    <section id="academic" className="scroll-mt-24 border-t border-hairline bg-secondary/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02">Academic Profile</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              Foundations built for graduate research.
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              My undergraduate curriculum combined a rigorous civil engineering core with
              specialised study in water and environmental systems — the technical basis for
              advanced research in hydrology and hydraulics.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Core coursework
            </div>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
              {COURSEWORK.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 border-b border-hairline py-3 text-[15px] text-ink"
                >
                  <span className="h-1 w-1 rounded-full bg-ink" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal>
            <SectionLabel index="03">Education & Trajectory</SectionLabel>
          </Reveal>

          <div className="mt-12 space-y-0">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-6 border-t border-hairline py-8 md:grid-cols-[180px_1fr_auto] md:gap-10 md:py-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.year}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">
                      {t.title}
                    </h3>
                    <div className="mt-1 text-sm text-ink-soft">{t.org}</div>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                      {t.detail}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <ArrowUpRight className="h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- research --------------------------- */

function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04">Research & Engineering Projects</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            The work I'm proudest of, and what it
            <em className="italic text-ink-soft"> taught me</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
          {/* Featured projects */}
          <div className="space-y-8 md:col-span-8">
            {PROJECTS.map((p, idx) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-card p-8 md:p-14"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  <span className="flex items-center gap-3">
                    <Beaker className="h-4 w-4" />
                    {p.kind}
                  </span>
                  <span className="font-mono">{p.year}</span>
                </div>
                <h3 className="mt-6 font-serif text-3xl leading-tight text-ink md:text-[2.9rem]">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft md:text-base">
                  {p.summary}
                </p>

                <div className="mt-10 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2">
                  {p.meta.map((r) => (
                    <div key={r.k}>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {r.k}
                      </div>
                      <div className="mt-1 text-[15px] text-ink">{r.v}</div>
                    </div>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-muted"
                      >
                        {l.href.startsWith("http") ? (
                          <ExternalLink className="h-3.5 w-3.5" />
                        ) : (
                          <FileText className="h-3.5 w-3.5" />
                        )}
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-hairline" />
                <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-hairline" />
              </motion.article>
            ))}
          </div>


          {/* Interests / applied areas */}
          <div className="grid gap-6 md:col-span-4">
            {[
              {
                icon: Waves,
                title: "Water Resources",
                text: "Applied research in hydrology, hydraulic modelling and sustainable water management.",
              },
              {
                icon: Compass,
                title: "GIS & Analysis",
                text: "Spatial analysis for watersheds, land use and environmental planning using ArcGIS.",
              },
              {
                icon: Sparkles,
                title: "Sustainable Systems",
                text: "Climate-resilient infrastructure, flood mitigation and low-impact engineering.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-hairline p-6 transition-colors hover:bg-secondary/60">
                  <c.icon className="h-5 w-5 text-ink" />
                  <h4 className="mt-6 font-serif text-2xl text-ink">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- skills ---------------------------- */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-hairline bg-secondary/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05">Technical Skills & Software</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              Engineering tools, applied with intent.
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Each tool in my workflow is aligned with a purpose — from spatial analysis of
              watersheds in ArcGIS to structural modelling in ETABS. Together they support
              a research-driven approach to water resources engineering.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 md:col-span-7 sm:grid-cols-2"
          >
            {SOFTWARE.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                className="group rounded-xl border border-hairline bg-card p-6 transition-colors hover:border-ink"
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif text-2xl text-ink">{s.name}</div>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Professional competencies
            </div>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {SKILLS.map((s) => (
              <motion.span
                key={s}
                variants={fadeUp}
                className="rounded-full border border-hairline bg-background px-4 py-2 text-sm text-ink"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- vision ---------------------------- */

function Vision() {
  return (
    <section id="vision" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06">Career Vision</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
              A Master's in Germany. A commitment to
              <em className="italic text-ink-soft"> Nepal's water future.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 md:col-span-5">
            <p className="text-[17px] leading-relaxed text-ink-soft">
              My immediate goal is to pursue a Master's degree in Water Resources
              Engineering in Germany, engaging with world-class research on hydrology,
              hydraulics and climate-adaptive design.
            </p>
            <p className="text-[17px] leading-relaxed text-ink-soft">
              My long-term commitment is to bring that expertise home — advancing flood
              management, river engineering, irrigation and resilient infrastructure that
              serve Nepal's communities and its fragile Himalayan ecosystems.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Advanced Study",
              d: "Master's coursework in hydrology, hydraulics, and sustainable water systems within Germany's technical university ecosystem.",
              i: GraduationCap,
            },
            {
              t: "Applied Research",
              d: "Contribute to research on climate-resilient infrastructure, flood forecasting, and watershed modelling.",
              i: Beaker,
            },
            {
              t: "Impact at Home",
              d: "Return with expertise to strengthen Nepal's water infrastructure, irrigation systems, and river management practices.",
              i: Waves,
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-hairline p-8">
                <c.i className="h-5 w-5 text-ink" />
                <h3 className="mt-6 font-serif text-2xl text-ink">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- contact ---------------------------- */

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("rabingiri456@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; mailto href still opens the default client.
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-hairline py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="07">Contact & Resume</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-ink md:text-8xl">
            Let's build the next
            <br />
            <em className="italic text-ink-soft">chapter.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-hairline pt-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="max-w-lg text-[17px] leading-relaxed text-ink-soft">
              I welcome conversations with professors, admissions committees, scholarship
              programmes and engineering teams. Reach out for collaboration, research
              opportunities, or a full copy of my academic dossier.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:rabingiri456@gmail.com"
                onClick={handleEmailClick}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {emailCopied ? "Copied email" : "Email Rabin"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={CV_URL}
                download="Rabin-Giri-CV.pdf"

                className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={Mail} label="Email" value="rabingiri456@gmail.com" />
              <ContactCard icon={Phone} label="Phone" value="+977 · on request" />
              <ContactCard icon={MapPin} label="Location" value="Pokhara, Nepal" />
              <ContactCard icon={FileText} label="Dossier" value="Available on request" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-hairline p-5">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-2 text-[15px] text-ink">{value}</div>
    </div>
  );
}

/* ---------------------------- footer ---------------------------- */

function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="font-serif text-4xl text-ink md:text-6xl">Rabin Giri</div>
            <div className="mt-2 text-sm text-ink-soft">
              Civil Engineer · Water Resources Researcher · Nepal
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:rabingiri456@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors hover:bg-muted"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rabin-giri-076240363/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors hover:bg-muted"
              aria-label="ResearchGate"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Rabin Giri. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- portfolio --------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink"
    />
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <FocusMarquee />
        <About />
        <Academic />
        <Research />
        <Skills />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
