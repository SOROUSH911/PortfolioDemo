import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <motion.span 
      className="px-4 py-2 bg-neutral rounded-full text-secondary flex items-center"
      whileHover={{ 
        y: -2,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-2 text-accent">{icon}</span>
      {label}
    </motion.span>
  );
}
