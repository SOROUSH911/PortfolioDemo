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
          className="relative mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
              <FaGraduationCap className="text-3xl text-white" />
            </span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-dark hover:border-accent">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800">Advanced Diploma, Computer Programming and Analysis</h3>
              <span className="text-xs md:text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                2024
              </span>
            </div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">George Brown College, Toronto</h4>
            <p className="text-gray-800 text-base font-medium">
              Comprehensive program covering software development, database design, and system analysis with focus on practical applications.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.georgebrown.ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 flex items-center font-semibold"
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
