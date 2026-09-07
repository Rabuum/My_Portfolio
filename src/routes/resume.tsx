import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, GraduationCap, Briefcase, Wrench, ExternalLink, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Rabin Giri Civil Engineer" },
      {
        name: "description",
        content: "View and download the official CV / Resume of Rabin Giri, Civil Engineering graduate from Nepal specializing in Water Resources Engineering.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const { profile, education, experience, skillCategories } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#E5E7EB] bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <div className="inline-block rounded-full bg-[#0F2D5C]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F2D5C]">
                Official Curriculum Vitae
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                Curriculum Vitae & Dossier
              </h1>
              <p className="mt-2 text-base text-[#4B5563] max-w-xl">
                Comprehensive summary of academic credentials, site engineering experience, and technical skills.
              </p>
            </div>

            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center gap-2.5 rounded-2xl bg-[#0F2D5C] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1A3D74] transition-all shrink-0 hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF Resume</span>
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Document Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F2D5C]">
                  <FileText className="h-5 w-5 text-[#2E5BFF]" />
                  <span>Resume Preview (PDF Version)</span>
                </div>
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2E5BFF] hover:underline flex items-center gap-1"
                >
                  <span>Open in full tab</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* PDF Document Container / Preview Image */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] overflow-hidden p-2 shadow-inner min-h-[500px] flex items-center justify-center">
                <img
                  src="/Rabin_Giri_Resume.jpg"
                  alt="Rabin Giri Resume Page Preview"
                  className="w-full h-auto object-contain rounded-xl shadow-md"
                  onError={(e) => {
                    // Fallback to text preview if image render fails
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column: Key Dossier Summaries */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Summary */}
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mb-4">
                  <GraduationCap className="h-5 w-5 text-[#0F2D5C]" />
                  <h3 className="text-lg font-bold text-[#0F2D5C]">Education Summary</h3>
                </div>
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="text-sm font-bold text-[#0F2D5C]">{edu.degree}</div>
                    <div className="text-xs text-[#4B5563]">{edu.institution} ({edu.duration})</div>
                    <div className="text-xs font-bold text-emerald-700 mt-1">Grade: {edu.gpa}</div>
                  </div>
                ))}
              </div>

              {/* Experience Summary */}
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mb-4">
                  <Briefcase className="h-5 w-5 text-[#0F2D5C]" />
                  <h3 className="text-lg font-bold text-[#0F2D5C]">Experience Summary</h3>
                </div>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id} className="border-b border-[#E5E7EB]/60 pb-3 last:border-0 last:pb-0">
                      <div className="text-sm font-bold text-[#0F2D5C]">{exp.role}</div>
                      <div className="text-xs text-[#4B5563]">{exp.company} · {exp.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Summary */}
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mb-4">
                  <Wrench className="h-5 w-5 text-[#0F2D5C]" />
                  <h3 className="text-lg font-bold text-[#0F2D5C]">Key Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["AutoCAD 2D/3D", "ArcGIS Spatial", "ETABS Structural", "Python", "Self-Healing Concrete", "Hydrology", "Hydraulics", "Soil Testing", "Site Management"].map((sk) => (
                    <span
                      key={sk}
                      className="inline-flex items-center gap-1 rounded-md bg-[#F5F7FA] border border-[#E5E7EB] px-2.5 py-1 text-xs font-bold text-[#0F2D5C]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#2E5BFF]" />
                      {sk}
                    </span>
                  ))}
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
