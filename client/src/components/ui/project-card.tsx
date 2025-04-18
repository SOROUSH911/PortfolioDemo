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
      <div className="flex items-center justify-center h-40 bg-blue-600">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
          {icon && (
            <span className="text-4xl text-white">{icon}</span>
          )}
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-blue-800">{title}</h3>
          <span className="text-xs md:text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">{year}</span>
        </div>
        <p className="text-gray-700 text-base mb-4 font-medium">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center font-semibold"
          >
            <span>{linkLabel}</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
