import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <motion.span 
      className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 flex items-center border border-gray-200"
      whileHover={{ 
        y: -2,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-2 text-blue-500">{icon}</span>
      {label}
    </motion.span>
  );
}
