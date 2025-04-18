import { motion } from "framer-motion";
import { FaAws, FaLanguage, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../ui/section-heading";

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
  link: string;
}

function CertificationCard({ title, issuer, year, icon, link }: CertificationCardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md border border-neutral-dark hover:border-accent transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
          {icon && (
            <span className="text-3xl text-white">{icon}</span>
          )}
        </div>
        <span className="text-xs md:text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">{year}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-base mb-4 font-medium">Issued by <span className="font-semibold text-blue-700">{issuer}</span></p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center font-semibold"
      >
        <span>View Credential</span>
        <FaExternalLinkAlt className="ml-2" />
      </a>
    </motion.div>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="CREDENTIALS"
          title="Certifications"
          description="Professional certifications and credentials that validate my expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificationCard
            title="AWS Certified Developer - Associate"
            issuer="AWS"
            year="2024"
            icon={<FaAws className="text-3xl text-white" />}
            link="https://www.credly.com/badges/6a3fda6d-7d16-4d08-bb61-578e74a607c7"
          />

          <CertificationCard
            title="English Certificate"
            issuer="Duolingo"
            year="2023"
            icon={<FaLanguage className="text-3xl text-white" />}
            link="https://certs.duolingo.com/8ba4668732245e78ba388f651785bcf2"
          />
        </div>
      </div>
    </section>
  );
}
