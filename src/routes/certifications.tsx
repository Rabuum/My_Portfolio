import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Rabin Giri Civil Engineer" },
      {
        name: "description",
        content: "Professional certifications and technical workshop credentials earned by Rabin Giri in AutoCAD, ArcGIS, ETABS, and research excellence.",
      },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  const { certifications } = PORTFOLIO_DATA;

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
            className="rounded-3xl border border-[#E5E7EB] bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="inline-block rounded-full bg-[#0F2D5C]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F2D5C]">
              Credentials & Badges
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
              Certifications & Technical Trainings
            </h1>
            <p className="mt-3 text-base text-[#4B5563] max-w-2xl leading-relaxed">
              Verified certifications from recognized engineering societies, council workshops, and academic research boards.
            </p>
          </motion.div>

          {/* Certifications Responsive Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#0F2D5C]/30 transition-all"
              >
                <div>
                  {/* Certificate Image Banner */}
                  {cert.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F5F7FA] mb-5">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-[#0F2D5C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        {cert.badgeText}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs font-bold text-[#2E5BFF]">
                    <Award className="h-4 w-4" />
                    <span>Verified Credential</span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-[#0F2D5C] leading-snug group-hover:text-[#2E5BFF] transition-colors">
                    {cert.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563]">
                    {cert.organization}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                    <Calendar className="h-3.5 w-3.5 text-[#0F2D5C]" />
                    {cert.date}
                  </span>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#0F2D5C] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1A3D74] transition-all shadow-2xs"
                    >
                      <span>Verify</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
