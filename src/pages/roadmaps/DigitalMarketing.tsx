
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

const DigitalMarketing = () => {
  const roadmapSteps = [
    {
      title: "Digital Marketing Fundamentals",
      description: "Learn the basics of digital marketing and understand different channels.",
      resources: [
        {
          name: "Digital Marketing for Beginners",
          url: "https://www.youtube.com/watch?v=nU-IIXBWlS4",
        },
        {
          name: "Digital Marketing Course",
          url: "https://www.youtube.com/watch?v=6JYHr-GUZZk",
        },
      ],
      skills: ["Marketing Basics", "Digital Channels", "Funnel Concepts", "Brand Building"],
      timeEstimate: "2-3 weeks",
    },
    {
      title: "Content Marketing & Creation",
      description: "Learn to create engaging content and develop content strategies.",
      resources: [
        {
          name: "Content Marketing Strategy",
          url: "https://www.youtube.com/watch?v=RywvPm01Xyk",
        },
        {
          name: "Content Creation for Beginners",
          url: "https://www.youtube.com/watch?v=7Kyxkw9KFgY",
        },
      ],
      skills: ["Content Strategy", "Copywriting", "Blogging", "Content Calendar"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Master the art of optimizing content for search engines.",
      resources: [
        {
          name: "SEO Full Course",
          url: "https://www.youtube.com/watch?v=xsVTqzratPs",
        },
        {
          name: "SEO for Beginners",
          url: "https://www.youtube.com/watch?v=pjxG_BmM6hE",
        },
      ],
      skills: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "Social Media Marketing",
      description: "Learn to build and execute social media strategies across platforms.",
      resources: [
        {
          name: "Social Media Marketing Full Course",
          url: "https://www.youtube.com/watch?v=q9K9xWsxJZU",
        },
        {
          name: "Instagram Marketing Strategy",
          url: "https://www.youtube.com/watch?v=6IWv-j5aEOA",
        },
      ],
      skills: ["Platform Strategy", "Content Planning", "Community Management", "Social Analytics"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Email Marketing",
      description: "Learn to create effective email campaigns and automation sequences.",
      resources: [
        {
          name: "Email Marketing Course",
          url: "https://www.youtube.com/watch?v=feP-8Z1JVqU",
        },
        {
          name: "Email Automation Tutorial",
          url: "https://www.youtube.com/watch?v=K9rV6avVUok",
        },
      ],
      skills: ["List Building", "Email Copywriting", "Automation", "A/B Testing"],
      timeEstimate: "2-3 weeks",
    },
    {
      title: "Paid Advertising",
      description: "Learn to create and manage paid campaigns across various platforms.",
      resources: [
        {
          name: "Google Ads Tutorial",
          url: "https://www.youtube.com/watch?v=9sO2Drq23hc",
        },
        {
          name: "Facebook Ads Course",
          url: "https://www.youtube.com/watch?v=_HfZKepQGN0",
        },
      ],
      skills: ["Google Ads", "Facebook Ads", "Campaign Structure", "Bidding Strategies"],
      timeEstimate: "4-5 weeks",
    },
    {
      title: "Analytics & Data",
      description: "Learn to measure, analyze, and interpret marketing performance data.",
      resources: [
        {
          name: "Google Analytics Course",
          url: "https://www.youtube.com/watch?v=_lNgG_UZa5Q",
        },
        {
          name: "Data-Driven Marketing",
          url: "https://www.youtube.com/watch?v=bxZaMGP10Xc",
        },
      ],
      skills: ["Google Analytics", "Data Interpretation", "KPIs", "Reporting"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Conversion Rate Optimization",
      description: "Learn strategies to improve website conversions and user experience.",
      resources: [
        {
          name: "CRO Tutorial",
          url: "https://www.youtube.com/watch?v=wYcGJkx1YqU",
        },
        {
          name: "Website Optimization Strategies",
          url: "https://www.youtube.com/watch?v=u2v1aANKJWA",
        },
      ],
      skills: ["A/B Testing", "Landing Page Optimization", "User Journey Analysis", "Website Analytics"],
      timeEstimate: "2-3 weeks",
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
            <h1 className="text-4xl font-bold mb-4">Digital Marketing Roadmap</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Follow this step-by-step guide to become a digital marketing professional, with free resources for each stage.
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

export default DigitalMarketing;
