import SectionHeading from "../ui/section-heading";
import TimelineItem, { HighlightItem } from "../ui/timeline-item";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="CAREER"
          title="Professional Experience"
          description="My professional journey and work experience in the tech industry."
        />

        <div className="space-y-12">
          <TimelineItem
            title="Senior AWS & Python Engineer"
            company="Chinchilla-ai"
            date="August 2024 - Present"
            location="Houston (Remote)"
          >
            <p>
              At Chinchilla AI, I fused a deep-rooted passion for AI with AWS expertise, 
              creating data-driven cloud solutions that deliver on both efficiency and innovation. 
              As a core team member, I managed ETL pipelines using AWS Lambda, S3, Glue Crawlers, 
              and Athena, rapidly deploying Python-based Lambda scripts to meet tight deadlines 
              and deliver complex transformations in a single day.
            </p>
            <p className="font-medium mt-4">Highlights:</p>
            <ul className="mt-2 space-y-2">
              <HighlightItem>
                <strong>Amplify Gen 2 & Full-Stack Development:</strong> Led full-stack development 
                with Amplify Gen 2, creating responsive UI components and implementing integration 
                with AWS services.
              </HighlightItem>
              <HighlightItem>
                <strong>Bedrock Integration:</strong> Successfully integrated Bedrock, enhancing 
                applications with AWS's foundation model capabilities.
              </HighlightItem>
              <HighlightItem>
                <strong>Database & Analytics Pipeline:</strong> Established analytics pipelines 
                from DynamoDB to Databricks via Glue for comprehensive data insights.
              </HighlightItem>
            </ul>
          </TimelineItem>

          <TimelineItem
            title=".Net Developer and AI Specialist"
            company="Paratech"
            date="2021 - 2023"
          >
            <ul className="space-y-2">
              <HighlightItem>
                Developed Identity Server using OpenIddict; implemented custom authentication claims, 
                2FA, profile editing, and multi-email/phone management verifying and using for 2FA; 
                integrated SNS/SES; managed background tasks with MassTransit and rabbitmq.
              </HighlightItem>
              <HighlightItem>
                Executed database migration from MSSQL to PostgreSQL, translating stored procedures 
                and features without data loss.
              </HighlightItem>
              <HighlightItem>
                Developed a File Manager enabling batch upload, folder structure creation, sub-folder 
                support, admin permission management; implemented multi-video upload/streaming with 
                custom storage.
              </HighlightItem>
            </ul>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
