import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaCertificate, FaEnvelope, FaGithub, FaLinkedin, FaBriefcase as FaUpwork } from "react-icons/fa";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavLink = ({ href, icon, label, isActive }: NavLinkProps) => (
  <li>
    <a
      href={href}
      className={`flex items-center p-3 rounded-lg hover:bg-primary-light transition-all ${
        isActive 
          ? "border-l-3 border-accent text-accent" 
          : "text-neutral hover:bg-primary-light"
      }`}
      style={{ 
        borderLeftWidth: isActive ? '3px' : '0',
        paddingLeft: isActive ? '13px' : '16px'
      }}
    >
      <div className="w-6 text-center md:mr-3">{icon}</div>
      <span className="hidden md:inline">{label}</span>
    </a>
  </li>
);

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("profile");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") as string;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-screen w-20 md:w-64 bg-primary z-10 flex flex-col shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col items-center md:items-start p-4 md:p-6 border-b border-primary-light">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
          SS
        </div>
        <h2 className="hidden md:block text-white font-semibold mt-2">Soroush Salari</h2>
        <p className="hidden md:block text-neutral-dark text-sm">Software Engineer</p>
      </div>
      
      <div className="flex-grow overflow-y-auto py-6">
        <ul className="space-y-4 px-3">
          <NavLink 
            href="#profile" 
            icon={<FaUser />} 
            label="Profile" 
            isActive={activeSection === "profile"} 
          />
          <NavLink 
            href="#skills" 
            icon={<FaCode />} 
            label="Skills" 
            isActive={activeSection === "skills"} 
          />
          <NavLink 
            href="#experience" 
            icon={<FaBriefcase />} 
            label="Experience" 
            isActive={activeSection === "experience"} 
          />
          <NavLink 
            href="#projects" 
            icon={<FaProjectDiagram />} 
            label="Projects" 
            isActive={activeSection === "projects"} 
          />
          <NavLink 
            href="#education" 
            icon={<FaGraduationCap />} 
            label="Education" 
            isActive={activeSection === "education"} 
          />
          <NavLink 
            href="#certifications" 
            icon={<FaCertificate />} 
            label="Certifications" 
            isActive={activeSection === "certifications"} 
          />
          <NavLink 
            href="#contact" 
            icon={<FaEnvelope />} 
            label="Contact" 
            isActive={activeSection === "contact"} 
          />
        </ul>
      </div>
      
      <div className="p-4 md:p-6 border-t border-primary-light">
        <div className="flex justify-center md:justify-start space-x-4">
          <a 
            href="https://github.com/SOROUSH911" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral hover:text-accent transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/soroushx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral hover:text-accent transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://www.upwork.com/freelancers/~01f5d4a0f4361ee0af" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral hover:text-accent transition-colors"
          >
            <FaUpwork className="text-xl" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
