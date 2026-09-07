import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Award,
  BookOpen,
  Building2,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Education & Experience — Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content: "Academic degree details and professional engineering timeline for Rabin Giri, Civil Engineering graduate from Nepal.",
      },
    ],
  }),
  component: MergedEducationExperiencePage,
});

export function MergedEducationExperiencePage() {
  const { education, experience } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner with Rich Right-Side Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Title & Subtitle */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C]">
                  <Sparkles className="h-3 w-3" />
                  <span>Academic & Professional Trajectory</span>
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                  Education & Experience
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Academic qualifications from Pokhara University combined with practical construction site execution, concrete laboratory testing, and graduate research preparation.
                </p>
              </div>

              {/* Right Column: Filled Academic Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Degree Earned</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">B.E. Civil Engineering</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Academic Standing</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">CGPA 3.41 / 4.00</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">University</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">Pokhara Univ / NEC</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= PART 1: COMPACT EDUCATION SECTION ================= */}
          <div className="mt-10">
            <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3 mb-5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0F2D5C] text-white shadow-xs">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2D5C] font-heading">
                Academic Education
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F2D5C] font-heading leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-xs font-semibold text-[#4B5563]">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F7FA] border border-[#E5E7EB] px-2.5 py-1 text-[11px] font-bold text-[#0F2D5C]">
                        <Calendar className="h-3 w-3" />
                        {edu.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                        <Award className="h-3 w-3" />
                        {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Overview & Key Achievements */}
                    <div className="lg:col-span-6 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B7280]">
                        <MapPin className="h-3.5 w-3.5 text-[#0F2D5C]" />
                        <span>{edu.location}</span>
                      </div>

                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C] mb-1.5">
                          Academic Highlights
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#333333]">
                          {edu.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                              <span className="leading-snug">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Core Coursework Chips */}
                    <div className="lg:col-span-6 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] p-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2D5C] mb-3">
                        <BookOpen className="h-3.5 w-3.5 text-[#2E5BFF]" />
                        <span>Core Coursework & Subjects</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-lg bg-white border border-[#E5E7EB] px-2.5 py-1 text-[11px] font-medium text-[#0F2D5C] shadow-2xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= PART 2: COMPACT EXPERIENCE SECTION ================= */}
          <div className="mt-12">
            <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3 mb-6">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0F2D5C] text-white shadow-xs">
                <Briefcase className="h-4 w-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2D5C] font-heading">
                Work & Research Experience
              </h2>
            </div>

            {/* Compact Vertical Timeline */}
            <div className="relative border-l-2 border-[#0F2D5C]/20 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-5 grid h-5 w-5 place-items-center rounded-full bg-[#0F2D5C] text-white ring-4 ring-white shadow-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#2E5BFF]" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E7EB] pb-4">
                      <div>
                        <span className="inline-block rounded-md bg-[#0F2D5C]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0F2D5C] mb-1">
                          {exp.badge}
                        </span>
                        <h3 className="text-lg font-bold text-[#0F2D5C] font-heading leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-[#4B5563] flex items-center gap-1.5 mt-0.5">
                          <Building2 className="h-3.5 w-3.5 text-[#0F2D5C]" />
                          <span>{exp.company}</span>
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F7FA] border border-[#E5E7EB] px-2.5 py-0.5 text-[11px] font-bold text-[#0F2D5C]">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                        <span className="text-[11px] text-[#6B7280] flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-[#0F2D5C]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="mt-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C] mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#333333]">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="h-3.5 w-3.5 text-[#2E5BFF] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements & Tool Tags */}
                    <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3">
                      <div className="space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-[#F5F7FA] border border-[#E5E7EB] px-2 py-0.5 text-[10px] font-bold text-[#0F2D5C]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
