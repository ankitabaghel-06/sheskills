
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

const UIUXDesign = () => {
  const roadmapSteps = [
    {
      title: "Fundamentals of Design",
      description: "Learn the basic principles of design, color theory, typography, and layout.",
      resources: [
        {
          name: "Learn UI Design Fundamentals",
          url: "https://www.youtube.com/watch?v=tRpoI6vkqLs",
        },
        {
          name: "Design Course - Basics",
          url: "https://www.youtube.com/c/DesignCourse",
        },
        {
          name: "Figma Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=jk1T0CdLxwU",
        },
      ],
      skills: ["Design Principles", "Color Theory", "Typography", "Layout Basics"],
      timeEstimate: "2-3 weeks",
    },
    {
      title: "User Research & Personas",
      description: "Learn how to conduct user research, create personas, and understand user needs.",
      resources: [
        {
          name: "User Research Fundamentals",
          url: "https://www.youtube.com/watch?v=bAARmsv1tms",
        },
        {
          name: "Creating User Personas",
          url: "https://www.youtube.com/watch?v=u44pBnAn7cM",
        },
      ],
      skills: ["User Interviews", "Empathy Mapping", "Persona Creation", "User Journey Mapping"],
      timeEstimate: "2-3 weeks",
    },
    {
      title: "Wireframing & Prototyping",
      description: "Learn how to create wireframes and interactive prototypes.",
      resources: [
        {
          name: "Wireframing with Figma",
          url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
        },
        {
          name: "Interactive Prototyping",
          url: "https://www.youtube.com/watch?v=gSYmHWxT5I0",
        },
      ],
      skills: ["Wireframing", "Low-Fidelity Prototyping", "High-Fidelity Prototyping", "User Flow Design"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "UI Design Tools",
      description: "Master UI design tools like Figma, Adobe XD, or Sketch.",
      resources: [
        {
          name: "Figma Crash Course",
          url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
        },
        {
          name: "Adobe XD Tutorial",
          url: "https://www.youtube.com/watch?v=7vhqsuSSqsQ",
        },
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Component Libraries"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "UI Design Systems",
      description: "Learn how to create and use design systems for consistent interfaces.",
      resources: [
        {
          name: "Design Systems Course",
          url: "https://www.youtube.com/watch?v=Qj7OxQI0qX0",
        },
        {
          name: "Building a Design System",
          url: "https://www.youtube.com/watch?v=h-fVa1Fq8rA",
        },
      ],
      skills: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Usability Testing",
      description: "Learn how to conduct usability tests and improve designs based on feedback.",
      resources: [
        {
          name: "Usability Testing Basics",
          url: "https://www.youtube.com/watch?v=0YL0xoSmyZI",
        },
        {
          name: "Remote Usability Testing",
          url: "https://www.youtube.com/watch?v=WS1lJvB0tYU",
        },
      ],
      skills: ["Test Planning", "Facilitation", "Data Analysis", "Iterative Design"],
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
            <h1 className="text-4xl font-bold mb-4">UI/UX Design Roadmap</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Follow this step-by-step guide to learn UI/UX design from scratch, with free resources for each stage.
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

export default UIUXDesign;
