import { motion } from "framer-motion";
import {
  Layers,
  Building2,
  Droplets,
  FolderCheck,
  Compass,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import { SkillItem } from "../../data/portfolio";

interface SkillCardProps {
  skill: SkillItem;
  categoryName?: string;
}

const ICON_MAP: Record<string, typeof Layers> = {
  AutoCAD: Layers,
  "Civil 3D": Compass,
  ETABS: Building2,
  "HEC-HMS": Droplets,
  "MS Project": FolderCheck,
  "Quantity Estimation & BOQ": FolderCheck,
  Excel: FileSpreadsheet,
  "MS Excel": FileSpreadsheet,
  Word: FileText,
  "MS Word": FileText,
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
      className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xs hover:border-[#0F2D5C]/40 hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C] group-hover:bg-[#0F2D5C] group-hover:text-white transition-colors">
            <IconComponent className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F2D5C] group-hover:text-[#2E5BFF] transition-colors leading-tight">
              {skill.name}
            </h4>
            <span className="text-[11px] font-semibold text-[#6B7280]">
              Civil Engineering Tool
            </span>
          </div>
        </div>

        {skill.note && (
          <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
            {skill.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
