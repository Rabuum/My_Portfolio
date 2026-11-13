import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layers, Building2, Droplets, FolderCheck, Compass, Sparkles } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SkillCard } from "../components/common/SkillCard";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Software — Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content: "Civil Engineering software skills inventory for Rabin Giri covering AutoCAD, Civil 3D, ETABS, HEC-HMS, MS Project, and ArcGIS.",
      },
    ],
  }),
  component: SkillsPage,
});

const CATEGORY_ICONS: Record<string, typeof Building2> = {
  "Design & Drafting": Layers,
  "Structural Engineering": Building2,
  "Water Resources & Hydrology": Droplets,
  "Project Management & Construction": FolderCheck,
  "GIS & Spatial Analysis": Compass,
};

function SkillsPage() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner with Rich Right-Side Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Title & Intro */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C]">
                  <Sparkles className="h-3 w-3" />
                  <span>Civil Engineering Competencies</span>
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                  Software Tools & Technical Skills
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Technical proficiency organized by Civil Engineering specialization: Design & Drafting, Structural Analysis, Water Resources & Hydrology, Project Management, and GIS Spatial Mapping.
                </p>
              </div>

              {/* Right Column: Filled Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Total Proficiency</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">10+ Engineering Tools</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Structural & CAD</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">AutoCAD, Civil 3D, ETABS</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Droplets className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Water & GIS</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">HEC-HMS, ArcGIS, QGIS</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categorized Skills Grid */}
          <div className="mt-8 space-y-8">
            {skillCategories.map((cat, idx) => {
              const IconComponent = CATEGORY_ICONS[cat.category] || Layers;
              return (
                <motion.section
                  key={cat.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xs"
                >
                  <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-3 mb-5">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0F2D5C] text-white shadow-xs">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#0F2D5C] font-heading">
                        {cat.category}
                      </h2>
                      <span className="text-[11px] text-[#6B7280]">
                        {cat.skills.length} Technical Competencies
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

