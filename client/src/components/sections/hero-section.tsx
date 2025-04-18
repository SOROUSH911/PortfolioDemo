import { motion } from "framer-motion";
import { FaEnvelope, FaProjectDiagram, FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section 
      id="profile" 
      className="min-h-screen flex flex-col justify-center py-16"
    >
      <motion.div 
        className="max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-4" // Explicit blue color
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Soroush <span className="text-blue-500">Salari</span> {/* Explicit blue color */}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-slate-700 mb-8" // Explicit slate color
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Software Engineer
        </motion.h2>
        
        <motion.div 
          className="bg-slate-50 p-6 rounded-lg shadow-md mb-8" // Lighter slate background
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-slate-700 text-lg leading-relaxed"> {/* Explicit slate color */}
            Specializing in .Net Core and Python with a strong foundation in artificial intelligence, 
            I bring three years of experience in developing scalable software architectures and deploying 
            AI-driven cloud solutions. My expertise spans DevOps, ETL pipelines, and complex cloud 
            infrastructure, focusing on high-performance applications and data-driven intelligence.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-md" // Explicit blue color
          >
            <FaEnvelope className="mr-2" /> Contact Me
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors shadow-md" // Explicit blue color
          >
            <FaProjectDiagram className="mr-2" /> View Projects
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-slate-600 mb-2">Scroll to explore</p> {/* Explicit slate color */}
          <FaChevronDown className="text-blue-500" /> {/* Explicit blue color */}
        </div>
      </motion.div>
    </section>
  );
}
