import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Folder,
  Award,
  Wrench,
  Droplets,
  Target,
  ArrowRight,
  CheckCircle2,
  Compass,
  Building2,
  FileText,
  Mail,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ProjectCard } from "../components/common/ProjectCard";
import { HeroBridgeSketch } from "../components/sections/HeroBridgeSketch";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabin Giri — Civil Engineer & Water Resources Researcher" },
      {
        name: "description",
        content:
          "Academic and engineering portfolio of Rabin Giri, Civil Engineering graduate from Nepal specializing in Water Resources, Hydrology, Structural ETABS, and GIS Watershed Modeling.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { profile, projects } = PORTFOLIO_DATA;
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans selection:bg-[#0F2D5C] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* ================= 1. HERO SECTION ================= */}
        <section
          id="home"
          className="relative pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-20 border-b border-[#E5E7EB] bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
        >
          <HeroBridgeSketch />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Headline & CTAs */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-3">
                    <Building2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span className="truncate">Civil Engineering · Water Resources & Infrastructure</span>
                  </div>

                  <span className="text-base sm:text-xl font-bold text-[#4B5563] tracking-tight block">
                    Hello, I&apos;m
                  </span>
                  <h1 className="mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F2D5C] uppercase leading-none font-heading">
                    {profile.name}
                  </h1>
                  <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-bold text-[#333333] tracking-tight">
                    {profile.title}
                  </h2>
                  <p className="mt-1.5 text-sm sm:text-base font-medium text-[#4B5563]">
                    {profile.subtitle}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4B5563]">
                    <MapPin className="h-4 w-4 text-[#0F2D5C] shrink-0" />
                    <span>{profile.location}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-5 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all hover:bg-[#1A3D74] hover:-translate-y-0.5"
                    >
                      <User className="h-4 w-4" />
                      <span>About Me</span>
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0F2D5C] bg-white px-5 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0F2D5C] transition-all hover:bg-[#F5F7FA] hover:-translate-y-0.5"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>View Projects</span>
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#4B5563] transition-all hover:text-[#0F2D5C] hover:bg-[#F5F7FA]"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact Me</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Profile Image */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative max-w-sm mx-auto lg:max-w-none"
                >
                  <div className="relative rounded-3xl border border-[#E5E7EB] bg-white p-2.5 shadow-xl overflow-hidden group">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/4.5] rounded-2xl bg-[#F5F7FA] overflow-hidden flex items-end justify-center">
                      <img
                        src="/rabin-giri-bridge.png"
                        alt={profile.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. ABOUT ME SUMMARY ================= */}
        <section id="about-summary" className="py-12 md:py-16 lg:py-20 border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="inline-block border-b-2 border-[#0F2D5C] pb-1">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F2D5C]">
                    CIVIL ENGINEERING OVERVIEW
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] text-[#0F2D5C]">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base leading-relaxed font-medium text-[#4B5563]">
                      {profile.bioShort}
                    </p>
                    <div className="mt-3 font-signature text-2xl sm:text-3xl font-bold text-[#0F2D5C]">
                      Rabin Giri
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] hover:text-[#2E5BFF] hover:underline"
                  >
                    <span>Read Full About Profile</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  { icon: GraduationCap, title: "B.E. Civil Graduate", sub: "Pokhara Univ (CGPA 3.41)" },
                  { icon: Briefcase, title: "Site & Lab Experience", sub: "Quality Control & Concrete Thesis" },
                  { icon: Droplets, title: "Water Resources", sub: "Hydrology & HEC-RAS 2D" },
                  { icon: Target, title: "Target Trajectory", sub: "M.Sc. Germany (DAAD Track)" },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 p-4 transition-all hover:border-[#0F2D5C]/40 hover:bg-white hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#0F2D5C] border border-[#E5E7EB]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-[#0F2D5C] truncate">{title}</h4>
                        <p className="text-[11px] text-[#6B7280]">{sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= 3. KEY HIGHLIGHTS ================= */}
        <section id="key-highlights" className="py-12 md:py-16 lg:py-20 border-b border-[#E5E7EB] bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto px-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F2D5C]">
                CORE DISCIPLINE HIGHLIGHTS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F2D5C] font-heading">
                Civil Engineering Specializations
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#4B5563]">
                Combining structural design software, water resources modeling, and material science experimentation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Droplets, title: "Water Resources", desc: "Hydrology, HEC-RAS river modeling, ogee spillway design, and flood inundation mapping." },
                { icon: Building2, title: "Structural Engineering", desc: "3D ETABS modeling, STAAD Pro frame analysis, seismic lateral load calculations, and NBC code compliance." },
                { icon: Compass, title: "GIS Watershed Mapping", desc: "ArcGIS spatial analysis, DEM processing, stream network delineation, and catchment slope mapping." },
                { icon: Wrench, title: "Construction Management", desc: "Quantity estimation (BOQ), site quality assurance, concrete slump testing, and AutoCAD drafting." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0F2D5C]">{title}</h3>
                  <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4. STATS BAR ================= */}
        <section id="stats" className="bg-[#0F2D5C] py-10 text-white shadow-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {[
                { icon: GraduationCap, title: "B.E. Civil", sub: "Pokhara Univ", note: "CGPA 3.41" },
                { icon: Folder, value: "6+", sub: "Major Projects" },
                { icon: Briefcase, value: "1+", sub: "Years Experience" },
                { icon: Award, value: "5+", sub: "Certifications" },
                { icon: Wrench, value: "15+", sub: "Civil Software Tools" },
              ].map(({ icon: Icon, value, title, sub, note }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white/80 shrink-0" />
                  <div className="min-w-0">
                    {value ? (
                      <div className="text-xl sm:text-2xl font-extrabold text-white">{value}</div>
                    ) : (
                      <div className="text-xs sm:text-sm font-bold text-white">{title}</div>
                    )}
                    <div className="text-[10px] sm:text-xs text-white/70 truncate">{sub}</div>
                    {note && <div className="text-[10px] text-white/50">{note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. FEATURED PROJECTS ================= */}
        <section id="featured-projects" className="py-12 md:py-16 lg:py-20 border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-[#E5E7EB] pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F2D5C]">
                  FEATURED WORK
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F2D5C] font-heading">
                  Major Engineering & Research Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] hover:text-[#2E5BFF] whitespace-nowrap"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1A3D74] transition-all"
              >
                <span>Explore Complete Engineering Dossier</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 6. CTA SECTION ================= */}
        <section id="cta" className="py-12 md:py-16 lg:py-20 bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#0F2D5C] p-6 sm:p-8 md:p-12 text-white shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2E5BFF] bg-white/10 px-3 py-1 rounded-full">
                    Academic & Professional Opportunities
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading leading-tight">
                    Let&apos;s Discuss Civil Engineering Research
                  </h2>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Open for conversations regarding M.Sc. Water Resources admissions in Germany, research collaborations, or technical engineering roles.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] shadow-md hover:bg-[#F5F7FA] transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Contact Rabin</span>
                  </Link>

                  <a
                    href={profile.resumePdf}
                    download
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
