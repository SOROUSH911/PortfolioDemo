import { FaCode, FaLayerGroup, FaCloud, FaUsers, FaPython, FaMicrosoft, FaJs, FaHtml5, FaDatabase, FaBrain, FaServer, FaRobot, FaAws, FaDocker, FaGitlab, FaTasks, FaLightbulb, FaClock, FaComments } from "react-icons/fa";
import SectionHeading from "../ui/section-heading";
import SkillBadge from "../ui/skill-badge";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SkillCategory = ({ title, icon, children }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
      <span className="mr-3 text-accent">{icon}</span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="EXPERTISE"
          title="Technical Skills"
          description="A comprehensive list of my technical skills and areas of expertise."
        />

        <div className="space-y-8">
          <SkillCategory title="Programming Languages" icon={<FaCode />}>
            <SkillBadge icon={<FaPython />} label="Python" />
            <SkillBadge icon={<FaMicrosoft />} label="C#" />
            <SkillBadge icon={<FaJs />} label="JavaScript" />
            <SkillBadge icon={<FaHtml5 />} label="HTML/CSS" />
          </SkillCategory>

          <SkillCategory title="Frameworks & Technologies" icon={<FaLayerGroup />}>
            <SkillBadge icon={<FaMicrosoft />} label="ASP.NET Core" />
            <SkillBadge icon={<FaAws />} label="AWS" />
            <SkillBadge icon={<FaDatabase />} label="PostgreSQL" />
            <SkillBadge icon={<FaDatabase />} label="MSSQL" />
            <SkillBadge icon={<FaBrain />} label="Machine Learning" />
            <SkillBadge icon={<FaServer />} label="Lambda" />
            <SkillBadge icon={<FaCloud />} label="Amplify Gen 2" />
            <SkillBadge icon={<FaRobot />} label="Bedrock" />
          </SkillCategory>

          <SkillCategory title="Cloud & DevOps" icon={<FaCloud />}>
            <SkillBadge icon={<FaAws />} label="AWS CDK" />
            <SkillBadge icon={<FaDocker />} label="Docker" />
            <SkillBadge icon={<FaGitlab />} label="GitLab CI/CD" />
            <SkillBadge icon={<FaServer />} label="ETL Pipelines" />
            <SkillBadge icon={<FaAws />} label="S3" />
            <SkillBadge icon={<FaAws />} label="AWS Glue" />
          </SkillCategory>

          <SkillCategory title="Transferable Skills" icon={<FaUsers />}>
            <SkillBadge icon={<FaUsers />} label="Team Leadership" />
            <SkillBadge icon={<FaTasks />} label="Project Management" />
            <SkillBadge icon={<FaComments />} label="Communication" />
            <SkillBadge icon={<FaLightbulb />} label="Problem Solving" />
            <SkillBadge icon={<FaClock />} label="Time Management" />
          </SkillCategory>
        </div>
      </div>
    </section>
  );
}
