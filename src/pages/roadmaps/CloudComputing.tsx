
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

const CloudComputing = () => {
  const roadmapSteps = [
    {
      title: "Fundamentals of Cloud Computing",
      description: "Learn the basics of cloud computing, including service models and deployment models.",
      resources: [
        {
          name: "Introduction to Cloud Computing",
          url: "https://www.youtube.com/watch?v=M988_fsOSWo",
        },
        {
          name: "Cloud Computing Concepts",
          url: "https://www.youtube.com/watch?v=b4OQDyWpDU0",
        },
      ],
      skills: ["Cloud Concepts", "Service Models (IaaS, PaaS, SaaS)", "Deployment Models", "Cloud Benefits"],
      timeEstimate: "2-3 weeks",
    },
    {
      title: "Networking & Linux Fundamentals",
      description: "Build a strong foundation in networking and Linux, which are essential for cloud computing.",
      resources: [
        {
          name: "Networking Crash Course",
          url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
        },
        {
          name: "Linux Basics",
          url: "https://www.youtube.com/watch?v=v_1zB2WNN14",
        },
      ],
      skills: ["TCP/IP", "DNS", "VPCs", "Linux Commands", "Shell Scripting"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "AWS Fundamentals",
      description: "Start with Amazon Web Services, the most widely-used cloud platform.",
      resources: [
        {
          name: "AWS Certified Cloud Practitioner Training",
          url: "https://www.youtube.com/watch?v=3hLmDS179YE",
        },
        {
          name: "AWS Basics for Beginners",
          url: "https://www.youtube.com/watch?v=ulprqHHWlng",
        },
      ],
      skills: ["EC2", "S3", "RDS", "IAM", "VPC"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "Microsoft Azure (Optional)",
      description: "Learn Microsoft Azure as an alternative cloud platform.",
      resources: [
        {
          name: "Azure Fundamentals",
          url: "https://www.youtube.com/watch?v=NKEFWyqJ5XA",
        },
        {
          name: "Azure for Beginners",
          url: "https://www.youtube.com/watch?v=wK3U7xSt31M",
        },
      ],
      skills: ["Azure VMs", "Azure Storage", "Azure Functions", "Azure AD"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Google Cloud Platform (Optional)",
      description: "Learn Google Cloud Platform as another alternative.",
      resources: [
        {
          name: "GCP Fundamentals",
          url: "https://www.youtube.com/watch?v=4D3X6Xl5c_Y",
        },
        {
          name: "GCP Essentials",
          url: "https://www.youtube.com/playlist?list=PLIivdWyY5sqKh1gDR0WpP9iIOY00IE0xL",
        },
      ],
      skills: ["GCE", "GCS", "BigQuery", "Cloud Functions"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Learn to automate infrastructure provisioning with code.",
      resources: [
        {
          name: "Terraform Basics",
          url: "https://www.youtube.com/watch?v=l5k1ai_GBDE",
        },
        {
          name: "AWS CloudFormation Tutorial",
          url: "https://www.youtube.com/watch?v=t97jZch4lMY",
        },
      ],
      skills: ["Terraform", "CloudFormation", "Infrastructure Automation"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Containers & Orchestration",
      description: "Master containerization with Docker and Kubernetes for orchestration.",
      resources: [
        {
          name: "Docker Crash Course",
          url: "https://www.youtube.com/watch?v=pTFZFxd4hOI",
        },
        {
          name: "Kubernetes Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=X48VuDVv0do",
        },
      ],
      skills: ["Docker", "Kubernetes", "Container Orchestration", "Microservices"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "DevOps & CI/CD",
      description: "Learn DevOps practices and implement CI/CD pipelines for cloud applications.",
      resources: [
        {
          name: "DevOps Crash Course",
          url: "https://www.youtube.com/watch?v=OXE2a8dqIAI",
        },
        {
          name: "CI/CD Pipeline Tutorial",
          url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
        },
      ],
      skills: ["CI/CD Pipelines", "GitHub Actions", "Jenkins", "DevOps Practices"],
      timeEstimate: "3-4 weeks",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex items-center mb-6">
            <Button variant="ghost" asChild className="mr-4">
              <Link to="/roadmaps">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Roadmaps
              </Link>
            </Button>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Cloud Computing Roadmap</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Follow this step-by-step guide to become a cloud computing professional, with free resources for each stage.
            </p>
          </div>

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="border rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-sheskills-light dark:bg-gray-700 p-3 rounded-lg flex-shrink-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sheskills-purple text-white font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Skills to Master:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center bg-sheskills-light dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                            <CheckCircle2 className="w-4 h-4 mr-1 text-sheskills-purple" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Free Resources:</h4>
                      <ul className="space-y-2">
                        {step.resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex}>
                            <a 
                              href={resource.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sheskills-purple hover:underline"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Estimated time: {step.timeEstimate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudComputing;
