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
  Layers,
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
          className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E5E7EB] bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
        >
          {/* Artistic Bridge Sketch Watermark Accent */}
          <HeroBridgeSketch />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Headline, Title & CTAs */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-4">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>Civil Engineering · Water Resources & Infrastructure</span>
                  </div>

                  <span className="text-xl sm:text-2xl font-bold text-[#4B5563] tracking-tight block">
                    Hello, I'm
                  </span>
                  <h1 className="mt-1 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0F2D5C] uppercase leading-none font-heading">
                    {profile.name}
                  </h1>
                  <h2 className="mt-4 text-xl sm:text-2xl font-bold text-[#333333] tracking-tight">
                    {profile.title}
                  </h2>
                  <p className="mt-1.5 text-base sm:text-lg font-medium text-[#4B5563]">
                    {profile.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4B5563]">
                    <MapPin className="h-4 w-4 text-[#0F2D5C]" />
                    <span>{profile.location}</span>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all hover:bg-[#1A3D74] hover:-translate-y-0.5"
                    >
                      <User className="h-4 w-4" />
                      <span>About Me</span>
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0F2D5C] bg-white px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0F2D5C] transition-all hover:bg-[#F5F7FA] hover:-translate-y-0.5 shadow-2xs"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>View Projects</span>
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#4B5563] transition-all hover:text-[#0F2D5C] hover:bg-[#F5F7FA]"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact Me</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Professional Profile Image Container */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl border border-[#E5E7EB] bg-white p-3 sm:p-3.5 shadow-xl overflow-hidden group">
                    <div className="relative w-full aspect-[4/4.5] rounded-2xl bg-[#F5F7FA] overflow-hidden flex items-end justify-center">
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

        {/* ================= 2. SHORT ABOUT ME SUMMARY ================= */}
        <section id="about-summary" className="py-16 md:py-20 border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Bio Summary */}
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

                <div className="mt-6 flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] text-[#0F2D5C]">
                    <User className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base leading-relaxed font-medium text-[#4B5563]">
                      {profile.bioShort}
                    </p>
                    <div className="mt-4 font-signature text-3xl font-bold text-[#0F2D5C]">
                      Rabin Giri
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] hover:text-[#2E5BFF] hover:underline"
                  >
                    <span>Read Full About Profile</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* 4 Feature Badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 p-4 transition-all hover:border-[#0F2D5C]/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#0F2D5C] border border-[#E5E7EB]">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2D5C]">B.E. Civil Graduate</h4>
                      <p className="text-[11px] text-[#6B7280]">Pokhara Univ (CGPA 3.41)</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 p-4 transition-all hover:border-[#0F2D5C]/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#0F2D5C] border border-[#E5E7EB]">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2D5C]">Site & Lab Experience</h4>
                      <p className="text-[11px] text-[#6B7280]">Quality Control & Concrete Thesis</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 p-4 transition-all hover:border-[#0F2D5C]/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#0F2D5C] border border-[#E5E7EB]">
                      <Droplets className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2D5C]">Water Resources</h4>
                      <p className="text-[11px] text-[#6B7280]">Hydrology & HEC-RAS 2D</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 p-4 transition-all hover:border-[#0F2D5C]/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#0F2D5C] border border-[#E5E7EB]">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2D5C]">Target Trajectory</h4>
                      <p className="text-[11px] text-[#6B7280]">M.Sc. Germany (DAAD Track)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= 3. KEY HIGHLIGHTS ================= */}
        <section id="key-highlights" className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
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

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0F2D5C]">Water Resources</h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  Hydrology, HEC-RAS river modeling, ogee spillway design, and flood inundation mapping.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0F2D5C]">Structural Engineering</h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  3D ETABS modeling, STAAD Pro frame analysis, seismic lateral load calculations, and NBC code compliance.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0F2D5C]">GIS Watershed Mapping</h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  ArcGIS spatial analysis, DEM processing, stream network delineation, and catchment slope mapping.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0F2D5C]">Construction Management</h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  Quantity estimation (BOQ), site quality assurance, concrete slump testing, and AutoCAD drafting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. ACHIEVEMENT STATISTICS BAR ================= */}
        <section id="stats" className="bg-[#0F2D5C] py-10 text-white shadow-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/15 items-center">
              <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4 first:pl-0">
                <GraduationCap className="h-8 w-8 text-white/80 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">B.E. Civil</div>
                  <div className="text-xs text-white/70">Pokhara Univ</div>
                  <div className="text-[10px] text-white/50">CGPA 3.41</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4">
                <Folder className="h-8 w-8 text-white/80 shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-white">6+</div>
                  <div className="text-xs text-white/70">Major Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4">
                <Briefcase className="h-8 w-8 text-white/80 shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-white">1+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4">
                <Award className="h-8 w-8 text-white/80 shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-white">5+</div>
                  <div className="text-xs text-white/70">Certifications</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4">
                <Wrench className="h-8 w-8 text-white/80 shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-white">15+</div>
                  <div className="text-xs text-white/70">Civil Software Tools</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. FEATURED PROJECTS PREVIEW ================= */}
        <section id="featured-projects" className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E5E7EB] pb-4">
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
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] hover:text-[#2E5BFF]"
              >
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1A3D74] transition-all"
              >
                <span>Explore Complete Engineering Dossier</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 6. CALL-TO-ACTION SECTION ================= */}
        <section id="cta" className="py-16 md:py-24 bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#0F2D5C] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E5BFF] bg-white/10 px-3 py-1 rounded-full">
                  Academic & Professional Opportunities
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold font-heading">
                  Let's Discuss Civil Engineering Research
                </h2>
                <p className="mt-2 text-sm text-white/80 max-w-xl leading-relaxed">
                  Open for conversations regarding M.Sc. Water Resources admissions in Germany, research collaborations, or technical engineering roles.
                </p>
              </div>

              <div className="flex flex-wrap gap-3.5 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] shadow-md hover:bg-[#F5F7FA] transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Rabin</span>
                </Link>

                <a
                  href={profile.resumePdf}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
