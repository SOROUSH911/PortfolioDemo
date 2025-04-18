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
        <div className="p-3 bg-accent/10 rounded-full">
          {icon}
        </div>
        <span className="text-sm text-secondary">{year}</span>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-secondary mb-4">Issued by {issuer}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-light flex items-center"
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
            icon={<FaAws className="text-2xl text-accent" />}
            link="https://www.credly.com/badges/6a3fda6d-7d16-4d08-bb61-578e74a607c7"
          />

          <CertificationCard
            title="English Certificate"
            issuer="Duolingo"
            year="2023"
            icon={<FaLanguage className="text-2xl text-accent" />}
            link="https://certs.duolingo.com/8ba4668732245e78ba388f651785bcf2"
          />
        </div>
      </div>
    </section>
  );
}
