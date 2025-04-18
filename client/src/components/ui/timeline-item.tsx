import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  location?: string;
  children: ReactNode;
}

export default function TimelineItem({ title, company, date, location, children }: TimelineItemProps) {
  return (
    <motion.div 
      className="relative pl-10 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
        <FaBriefcase className="text-white" />
      </div>
      <div 
        className="absolute left-[15px] top-[24px] bottom-[-24px] w-[1px] bg-neutral-dark"
        style={{ display: "block" }}
      />
      <div className="bg-neutral p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <span className="text-sm text-secondary flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {date}
          </span>
        </div>
        <h4 className="text-lg text-accent mb-2">
          {company}
          {location && `, ${location}`}
        </h4>
        <div className="prose text-secondary">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function HighlightItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex">
      <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
