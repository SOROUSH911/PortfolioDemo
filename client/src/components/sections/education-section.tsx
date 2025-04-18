import { motion } from "framer-motion";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../ui/section-heading";

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="EDUCATION"
          title="Academic Background"
          description="My educational qualifications and academic achievements."
        />

        <motion.div 
          className="relative pl-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-0 top-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <FaGraduationCap className="text-white" />
          </div>
          <div className="bg-neutral p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-primary">Advanced Diploma, Computer Programming and Analysis</h3>
              <span className="text-sm text-secondary flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                2024
              </span>
            </div>
            <h4 className="text-lg text-accent mb-2">George Brown College, Toronto</h4>
            <p className="text-secondary">
              Comprehensive program covering software development, database design, and system analysis with focus on practical applications.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.georgebrown.ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-accent-light flex items-center inline-flex"
              >
                <span>Visit Institution Website</span>
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
