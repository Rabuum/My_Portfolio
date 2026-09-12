import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, Star, X, Target, UserCheck, ShieldCheck, Download, FileText } from "lucide-react";
import { Project } from "../../data/portfolio";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className={`group flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xl transition-all relative overflow-hidden ${
          featured
            ? "border-2 border-[#0F2D5C] ring-1 ring-[#0F2D5C]/20 shadow-md"
            : "border border-[#E5E7EB] hover:border-[#0F2D5C]/40"
        }`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 right-0 rounded-bl-xl bg-[#0F2D5C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1 shadow-xs z-10">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>Featured Research Project</span>
          </div>
        )}

        <div>
          {/* Project Image Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#F5F7FA]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes("photo-1504307651254-35680f356dfd")) {
                  target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80";
                }
              }}
            />
            <div className="absolute bottom-2.5 left-2.5 rounded-full bg-[#0F2D5C]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
              {project.category}
            </div>
          </div>

          {/* Title & Short Description */}
          <h3 className="mt-4 text-sm font-bold text-[#0F2D5C] group-hover:text-[#2E5BFF] transition-colors leading-snug font-heading">
            {project.title}
          </h3>
          <p className="mt-2 text-[11px] text-[#4B5563] leading-relaxed">
            {project.description}
          </p>

          {/* Problem / Purpose Callout */}
          {project.purpose && (
            <div className="mt-3 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] p-2.5">
              <div className="flex items-center gap-1.5 font-bold text-[#0F2D5C] mb-1">
                <Target className="h-3 w-3 text-[#2E5BFF] shrink-0" />
                <span className="text-[10px] uppercase tracking-wider">Problem & Research Purpose</span>
              </div>
              <p className="text-[#4B5563] leading-relaxed text-[10px]">
                {project.purpose}
              </p>
            </div>
          )}

          {/* Key Deliverables / Empirical Findings */}
          {project.features && project.features.length > 0 && (
            <div className="mt-3 space-y-1.5 pt-3 border-t border-[#E5E7EB]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F2D5C] mb-1.5">Key Findings</p>
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[10px] text-[#333333]">
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-[#2E5BFF] mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tools, PDF Download & View Details Buttons */}
        <div className="mt-5 pt-3 border-t border-[#E5E7EB]">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-[#F5F7FA] border border-[#E5E7EB] px-2 py-0.5 text-[10px] font-semibold text-[#0F2D5C]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-md bg-[#F5F7FA] border border-[#E5E7EB] px-1.5 py-0.5 text-[10px] font-semibold text-[#6B7280]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            {/* Direct PDF Download / View Link */}
            {project.pdfUrl ? (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#0F2D5C]/30 bg-[#0F2D5C]/5 px-3 py-1.5 text-xs font-bold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            ) : <div />}

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F2D5C] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#1A3D74] transition-all shadow-2xs cursor-pointer"
            >
              <span>View Details</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Full Report Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E7EB] max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full bg-[#F5F7FA] text-[#4B5563] hover:bg-[#0F2D5C] hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="inline-block rounded-full bg-[#0F2D5C]/10 px-3 py-0.5 text-[10px] font-bold uppercase text-[#0F2D5C]">
                {project.category}
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#0F2D5C] font-heading leading-tight">
                {project.title}
              </h3>

              {project.institution && (
                <p className="mt-1 text-xs text-[#6B7280]">
                  {project.institution} {project.supervisor ? `· Advisor: ${project.supervisor}` : ""}
                </p>
              )}

              <div className="mt-4 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes("photo-1504307651254-35680f356dfd")) {
                      target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80";
                    }
                  }}
                />
              </div>

              <div className="mt-5 space-y-4">
                {/* Short & Strong Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-1">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem / Purpose */}
                {project.purpose && (
                  <div className="rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] p-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-1 flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5 text-[#2E5BFF]" />
                      <span>Problem Statement & Research Purpose</span>
                    </h4>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {project.purpose}
                    </p>
                  </div>
                )}

                {/* Key Empirical Findings & Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-2">
                      Key Experimental Findings & Deliverables
                    </h4>
                    <ul className="space-y-2 text-xs text-[#333333]">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2E5BFF] shrink-0 mt-0.5" />
                          <span className="leading-relaxed text-xs">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contribution & Role */}
                {project.role && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-1 flex items-center gap-1.5">
                      <UserCheck className="h-3.5 w-3.5 text-[#2E5BFF]" />
                      <span>Author Role & Team Contribution</span>
                    </h4>
                    <p className="text-xs text-[#4B5563]">
                      {project.role}
                    </p>
                  </div>
                )}

                {/* Standards Compliance */}
                {project.standards && project.standards.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#2E5BFF]" />
                      <span>Standards & Compliance Codes</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.standards.map((code) => (
                        <span
                          key={code}
                          className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-bold text-emerald-800"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] mb-2">
                    Technologies, Lab Equipment & Standards
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#F5F7FA] border border-[#E5E7EB] px-2.5 py-1 text-xs font-bold text-[#0F2D5C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar with PDF Links */}
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3">
                {project.pdfUrl ? (
                <div className="flex items-center gap-2">
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-4 py-2 text-xs font-bold text-white hover:bg-[#1A3D74] transition-all shadow-xs"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Open Full PDF Document</span>
                  </a>

                  <a
                    href={project.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-2 text-xs font-bold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-xs"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
                ) : null}

                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-2 text-xs font-bold text-[#4B5563] hover:bg-[#0F2D5C] hover:text-white transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
