import { motion } from "framer-motion";
import Sidebar from "@/components/layout/sidebar";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import EducationSection from "@/components/sections/education-section";
import CertificationsSection from "@/components/sections/certifications-section";
import ContactSection from "@/components/sections/contact-section";
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-white">
      <Sidebar />
      
      <main className="ml-20 md:ml-64 px-4 md:px-8 lg:px-12 py-8">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <footer className="ml-20 md:ml-64 bg-blue-700 text-white py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-200">© 2025 Soroush Salari. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#profile" className="text-blue-200 hover:text-white transition-colors">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
      
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors z-50"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </div>
  );
}
