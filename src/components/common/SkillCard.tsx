import { motion } from "framer-motion";
import {
  Layers,
  Building2,
  Droplets,
  FolderCheck,
  Compass,
  Cpu,
} from "lucide-react";
import { SkillItem } from "../../data/portfolio";

interface SkillCardProps {
  skill: SkillItem;
  categoryName?: string;
}

const ICON_MAP: Record<string, typeof Layers> = {
  AutoCAD: Layers,
  "Civil 3D": Compass,
  Revit: Building2,
  ETABS: Building2,
  "STAAD Pro": Cpu,
  SAP2000: Cpu,
  "HEC-RAS": Droplets,
  "HEC-HMS": Droplets,
  "Hydrologic Modeling": Droplets,
  "Primavera P6": FolderCheck,
  "MS Project": FolderCheck,
  "Quantity Estimation & BOQ": FolderCheck,
  ArcGIS: Compass,
  QGIS: Compass,
};

export function SkillCard({ skill }: SkillCardProps) {
  const skillKey = Object.keys(ICON_MAP).find((k) =>
    skill.name.toLowerCase().includes(k.toLowerCase())
  );
  const IconComponent = skillKey ? ICON_MAP[skillKey] : Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:border-[#0F2D5C]/40 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C] group-hover:bg-[#0F2D5C] group-hover:text-white transition-colors">
            <IconComponent className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F2D5C] group-hover:text-[#2E5BFF] transition-colors">
              {skill.name}
            </h4>
            <span className="text-[11px] font-semibold text-[#6B7280]">
              Civil Engineering Tool
            </span>
          </div>
        </div>

        <span className="inline-flex items-center rounded-full bg-[#0F2D5C]/10 px-2.5 py-0.5 text-xs font-extrabold text-[#0F2D5C]">
          {skill.level}%
        </span>
      </div>

      {skill.note && (
        <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
          {skill.note}
        </p>
      )}

      {/* Progress Indicator Bar */}
      <div className="mt-3.5 h-2 w-full overflow-hidden rounded-full bg-[#F5F7FA] border border-[#E5E7EB]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#0F2D5C] to-[#2E5BFF]"
        />
      </div>
    </motion.div>
  );
}
