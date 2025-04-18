import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  icon: ReactNode;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  year, 
  icon, 
  tags, 
  link, 
  linkLabel = "Visit Website" 
}: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-dark hover:border-accent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      <div className="bg-primary h-40 flex items-center justify-center">
        <span className="text-6xl text-accent">{icon}</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{year}</span>
        </div>
        <p className="text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-neutral px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light flex items-center"
          >
            <span>{linkLabel}</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
