import { motion } from "framer-motion";

interface SectionHeadingProps {
  tagText: string;
  title: string;
  description: string;
}

export default function SectionHeading({ tagText, title, description }: SectionHeadingProps) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-600 text-sm font-medium mb-4">
        {tagText}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">{title}</h2>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
}
