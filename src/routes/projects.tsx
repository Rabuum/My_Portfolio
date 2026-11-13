import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, FolderKanban, Sparkles, Award } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ProjectCard } from "../components/common/ProjectCard";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects â€” Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content: "Engineering & research project portfolio of Rabin Giri based on empirical laboratory research reports, concrete self-healing experiments, and Nepalese cement quality assessment.",
      },
    ],
  }),
  component: ProjectsPage,
});

const CATEGORIES = [
  "All",
  "Concrete & Materials",
  "Quality Assurance & Testing",
  "Research & Standards Proposal",
] as const;

function ProjectsPage() {
  const { projects } = PORTFOLIO_DATA;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.purpose && project.purpose.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner with Rich PDF Research Highlights */}
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
                  <span>Empirical Engineering Dossiers</span>
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                  Featured Research & Engineering Projects
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Undergraduate experimental research conducted at Nepal Engineering College (Pokhara University) evaluating self-healing concrete agents, commercial OPC cement quality compliance, and standardized testing frameworks in Nepal.
                </p>
              </div>

              {/* Right Column: Filled Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <FolderKanban className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Primary Focus</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">3 Core Research Dossiers</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Specialized Research</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">Self-Healing Concrete (~88% Recovery)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Code Compliance</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">IS 516, IS 4031, IS 456 & NS Codes</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search & Category Filter Controls */}
          <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-xs">
            {/* Text Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search research dossiers by title, problem, or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#333333] placeholder-[#6B7280] focus:border-[#0F2D5C] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <div className="flex items-center gap-1 text-xs font-bold text-[#6B7280] mr-2 hidden sm:flex">
                <Filter className="h-3.5 w-3.5 text-[#0F2D5C]" />
                <span>Filter:</span>
              </div>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#0F2D5C] text-white shadow-xs"
                        : "bg-[#F5F7FA] text-[#4B5563] border border-[#E5E7EB] hover:bg-[#0F2D5C]/10 hover:text-[#0F2D5C]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={project.featured} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-[#E5E7EB] bg-white p-12 text-center">
              <FolderKanban className="mx-auto h-12 w-12 text-[#6B7280]" />
              <h3 className="mt-4 text-base font-bold text-[#0F2D5C]">
                No matching research projects found
              </h3>
              <p className="mt-1 text-xs text-[#6B7280]">
                Try searching for keywords like "Self-Healing", "Epoxy", "Sieve", "Gypsum", or "IS 4031".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center rounded-lg bg-[#0F2D5C] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#1A3D74]"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

