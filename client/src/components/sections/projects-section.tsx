import SectionHeading from "../ui/section-heading";
import ProjectCard from "../ui/project-card";
import { FaLeaf, FaChartLine, FaChartBar, FaTasks, FaCar, FaChartPie } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="PORTFOLIO"
          title="Featured Projects"
          description="Showcasing my work on various software development projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Go Farm Yourself"
            description="Led the development of a React Native application for Go Farm Yourself, leveraging Amplify Gen 2 for rapid, scalable deployment."
            year="2024"
            icon={<FaLeaf />}
            tags={["React Native", "Amplify Gen 2", "DynamoDB", "Databricks"]}
            link="https://www.gfy.ag"
          />

          <ProjectCard
            title="Oddo"
            description="Developed a SaaS solution in AWS CDK, incorporating QuickSight for data intelligence, particularly for dealership analytics in Texas."
            year="2024"
            icon={<FaChartLine />}
            tags={["AWS CDK", "QuickSight", "SaaS", "Analytics"]}
          />

          <ProjectCard
            title="Voxdash"
            description="VoxDash enables the sharing and visualization of proprietary survey data without granting access to the raw data itself."
            year="2021-2023"
            icon={<FaChartBar />}
            tags={["Data Visualization", "Survey Analytics", "Data Privacy"]}
            link="http://voxdash.com"
          />

          <ProjectCard
            title="Habitomic"
            description="Building a New Habit can be challenging, but it gets easier when you have a habit-forming friend along the journey."
            year="2021-2023"
            icon={<FaTasks />}
            tags={["Chatbot", "Habit Tracking", "AI Assistant"]}
            link="https://habitomic.com"
          />

          <ProjectCard
            title="EasyFleet"
            description="Real-time fleet management with a robust BI dashboard, live administration, and operational control, with reporting and cost optimization."
            year="2023"
            icon={<FaCar />}
            tags={["Fleet Management", "Real-time Tracking", "BI Dashboard"]}
            link="https://metafleet.org"
          />

          <ProjectCard
            title="Metrixz"
            description="Metrixz provides premium services to help you improve your company's performance by giving you the tools and insight you need to excel in sales, marketing and branding."
            year="2023"
            icon={<FaChartPie />}
            tags={["Tech Lead", "Backend Development", "Business Intelligence"]}
            link="https://metrixz.com"
          />
        </div>
      </div>
    </section>
  );
}
