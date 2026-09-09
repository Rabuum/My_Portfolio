import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Droplets,
  Target,
  CheckCircle2,
  Award,
  Folder,
  Monitor,
  ArrowRight,
  Sparkles,
  Layers,
  MapPin,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About â€” Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content: "Professional summary of Rabin Giri, Civil Engineering graduate specializing in Water Resources Engineering, structural modeling, and hydrology research.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner with Rich 2-Column Right Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 md:p-10 shadow-xs"
          >
            {/* Subtle Engineering Grid & Arch Watermark Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full text-[#0F2D5C]" viewBox="0 0 800 200" fill="none">
                <path d="M 0 150 Q 400 20 800 150" stroke="currentColor" strokeWidth="2" />
                <line x1="400" y1="20" x2="400" y2="180" stroke="currentColor" strokeWidth="2" />
                <line x1="200" y1="85" x2="200" y2="180" stroke="currentColor" strokeWidth="1.5" />
                <line x1="600" y1="85" x2="600" y2="180" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Column: Title & Intro */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C]">
                    <Sparkles className="h-3 w-3" />
                    <span>Professional Profile</span>
                  </div>
                  <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                    About Me
                  </h1>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    Civil Engineering graduate from Pokhara University (CGPA 3.41) concentrating in Water Resources Engineering, hydrology, structural modeling in ETABS & SAP2000, and GIS watershed analysis. Currently preparing for M.Sc. studies in Germany under the DAAD track.
                  </p>
                </div>

                {/* Right Column: Filled Summary Metric Cards */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#6B7280]">Academic Track</div>
                      <div className="text-xs font-bold text-[#0F2D5C]">Pokhara Univ (CGPA 3.41)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                      <Droplets className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#6B7280]">Core Focus</div>
                      <div className="text-xs font-bold text-[#0F2D5C]">Water Resources & Hydrology</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#6B7280]">Target Career</div>
                      <div className="text-xs font-bold text-[#0F2D5C]">Germany M.Sc. DAAD Track</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Split Layout: Profile Image Card Left & 4 Rich Cards Right */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Split Layout Profile Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-[#F5F7FA]">
                  <img
                    src="/rabin-giri-bridge.png"
                    alt={profile.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-extrabold text-[#0F2D5C] font-heading uppercase tracking-tight">
                    {profile.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#4B5563] mt-0.5">
                    {profile.title} Â· {profile.location}
                  </p>
                  <p className="mt-3 text-xs text-[#4B5563] leading-relaxed border-t border-[#E5E7EB] pt-3">
                    {profile.bioShort}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="font-signature text-2xl font-bold text-[#0F2D5C]">
                  Rabin Giri
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2D5C] hover:text-[#2E5BFF]"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: 4 Rich Highlight Cards with Images & Checklists */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Academic Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F2D5C]">Academic Achievements</h3>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        CGPA 3.41 / 4.00
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
                    B.E. Civil Engineering from Nepal Engineering College, Pokhara University. Specialized thesis on autonomous self-healing concrete formulations.
                  </p>

                  {/* Civil Engineering Image & Key Highlights */}
                  <div className="mt-3 rounded-xl overflow-hidden aspect-[16/7] border border-[#E5E7EB] bg-[#F5F7FA] relative">
                    <img
                      src="/pokhara-university.png"
                      alt="Pokhara University — Nepal Engineering College"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-1.5 bg-[#0F2D5C]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Pokhara University / NEC
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-[#333333]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">Undergraduate Thesis: Autonomous Sealing Concrete</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">Academic Merit Standing (CGPA 3.41 / 4.00)</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                  <Link to="/education" className="text-xs font-bold text-[#2E5BFF] hover:underline flex items-center gap-1">
                    <span>View Education Dossier</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: Technical & Practical Experience */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F2D5C]">Technical Experience</h3>
                      <span className="text-[11px] font-semibold text-[#0F2D5C] bg-[#F5F7FA] border border-[#E5E7EB] px-2 py-0.5 rounded-md">
                        Site & Lab Testing
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
                    Site quality inspection, AutoCAD structural drafting, and laboratory compressive strength testing on structural concrete specimens.
                  </p>

                  {/* Civil Site & Lab Testing Image */}
                  <div className="mt-3 rounded-xl overflow-hidden aspect-[16/7] border border-[#E5E7EB] bg-[#F5F7FA] relative">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                      alt="Civil Construction & Testing Site"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-1.5 bg-[#0F2D5C]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Materials Lab & Field Site
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-[#333333]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">Material Testing & Compressive Strength Recovery</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">AutoCAD 2D/3D Drafting & Field Quality Control</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                  <Link to="/education" className="text-xs font-bold text-[#2E5BFF] hover:underline flex items-center gap-1">
                    <span>View Practical Experience</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 3: Areas of Interest */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F2D5C]">Areas of Interest</h3>
                      <span className="text-[11px] font-semibold text-[#0F2D5C]">Water & Structure</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
                    Specialized focus on hydraulic engineering, dam spillway calculations, ETABS structural modeling, and GIS watershed delineation.
                  </p>

                  {/* Water Resources & Hydraulic Spillway Image */}
                  <div className="mt-3 rounded-xl overflow-hidden aspect-[16/7] border border-[#E5E7EB] bg-[#F5F7FA] relative">
                    <img
                      src="/water-dam.png"
                      alt="Hydropower Dam — Water Resources & Hydraulic Engineering"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-1.5 bg-[#0F2D5C]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Water Resources & Hydraulics
                    </div>
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs text-[#4B5563]">
                    {profile.interests.map((interest) => (
                      <div key={interest} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0" />
                        <span className="text-[11px]">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                  <Link to="/skills" className="text-xs font-bold text-[#2E5BFF] hover:underline flex items-center gap-1">
                    <span>Explore Software Tools</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 4: Graduate Research Track */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F2D5C]">Graduate Research Track</h3>
                      <span className="text-[11px] font-semibold text-[#2E5BFF]">Germany M.Sc.</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
                    Targeted focus on climate-resilient hydraulic structures, watershed management, and sustainable water resources engineering under DAAD track.
                  </p>

                  {/* Sustainable Infrastructure Image */}
                  <div className="mt-3 rounded-xl overflow-hidden aspect-[16/7] border border-[#E5E7EB] bg-[#F5F7FA] relative">
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
                      alt="Water Resources Research Germany"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-1.5 bg-[#0F2D5C]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      DAAD M.Sc. Candidate Track
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-[#333333]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">Climate-Resilient Hydraulic Infrastructure</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                      <span className="text-[11px]">Hydrological GIS Catchment Simulation</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                  <Link to="/contact" className="text-xs font-bold text-[#2E5BFF] hover:underline flex items-center gap-1">
                    <span>Initiate Academic Inquiry</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Professional Statistics Cards Bar */}
          <div className="mt-8 rounded-3xl bg-[#0F2D5C] p-6 text-white shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-3 first:pl-0">
                <GraduationCap className="h-7 w-7 text-white/80 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">B.E. Civil</div>
                  <div className="text-[11px] text-white/70">CGPA 3.41</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-3">
                <Folder className="h-7 w-7 text-white/80 shrink-0" />
                <div>
                  <div className="text-xl font-extrabold text-white">6+</div>
                  <div className="text-[11px] text-white/70">Projects Completed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-3">
                <Briefcase className="h-7 w-7 text-white/80 shrink-0" />
                <div>
                  <div className="text-xl font-extrabold text-white">1+ Yrs</div>
                  <div className="text-[11px] text-white/70">Site & Lab Research</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-3">
                <Award className="h-7 w-7 text-white/80 shrink-0" />
                <div>
                  <div className="text-xl font-extrabold text-white">5+</div>
                  <div className="text-[11px] text-white/70">Certifications</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-3">
                <Monitor className="h-7 w-7 text-white/80 shrink-0" />
                <div>
                  <div className="text-xl font-extrabold text-white">15+</div>
                  <div className="text-[11px] text-white/70">Technical Skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


