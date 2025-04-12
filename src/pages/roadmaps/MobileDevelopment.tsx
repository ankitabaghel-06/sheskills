
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

const MobileDevelopment = () => {
  const roadmapSteps = [
    {
      title: "Programming Fundamentals",
      description: "Master core programming concepts with JavaScript, as it's widely used in mobile development.",
      resources: [
        {
          name: "JavaScript Crash Course",
          url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        },
        {
          name: "Modern JavaScript Tutorial",
          url: "https://javascript.info/",
        },
        {
          name: "Data Structures & Algorithms in JS",
          url: "https://www.youtube.com/watch?v=t2CEgPsws3U",
        },
      ],
      skills: ["JavaScript", "ES6+", "Data Structures", "Algorithms"],
      timeEstimate: "4-6 weeks",
    },
    {
      title: "React Fundamentals",
      description: "Learn React, which serves as the foundation for React Native, a popular mobile development framework.",
      resources: [
        {
          name: "React Crash Course",
          url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        },
        {
          name: "React Hooks Tutorial",
          url: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
        },
      ],
      skills: ["React.js", "Components", "State Management", "Hooks"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "React Native Basics",
      description: "Get started with React Native for cross-platform mobile development.",
      resources: [
        {
          name: "React Native Crash Course",
          url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4",
        },
        {
          name: "React Native Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=qSRrxpdMpVc",
        },
      ],
      skills: ["React Native Setup", "Basic Components", "Navigation", "Styling"],
      timeEstimate: "4-5 weeks",
    },
    {
      title: "Mobile UI/UX Design",
      description: "Learn mobile-specific design principles and implementation.",
      resources: [
        {
          name: "Mobile UI/UX Design Course",
          url: "https://www.youtube.com/watch?v=_J_xv0PVKAo",
        },
        {
          name: "UI Design for Developers",
          url: "https://designcode.io/ui-design-for-developers",
        },
      ],
      skills: ["Mobile UI Design", "Responsive Layouts", "Gestures", "Accessibility"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "State Management & APIs",
      description: "Learn to manage app state and integrate APIs for dynamic content.",
      resources: [
        {
          name: "Redux for React Native",
          url: "https://www.youtube.com/watch?v=93p3LxR9xfM",
        },
        {
          name: "API Integration in React Native",
          url: "https://www.youtube.com/watch?v=TN3qn1tW6fI",
        },
      ],
      skills: ["Redux", "Context API", "REST APIs", "GraphQL"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Native Features & Publishing",
      description: "Learn to access device features and publish your app to stores.",
      resources: [
        {
          name: "Native Device Features in React Native",
          url: "https://www.youtube.com/watch?v=33QXJXm3-2Q",
        },
        {
          name: "Publishing to App Stores",
          url: "https://www.youtube.com/watch?v=lfuCAgwWE8Y",
        },
      ],
      skills: ["Camera Access", "Location Services", "Push Notifications", "App Store Publishing"],
      timeEstimate: "3-4 weeks",
    },
    {
      title: "Flutter (Alternative)",
      description: "Explore Flutter as an alternative cross-platform development framework.",
      resources: [
        {
          name: "Flutter Crash Course",
          url: "https://www.youtube.com/watch?v=1gDhl4leEzA",
        },
        {
          name: "Flutter for Beginners",
          url: "https://www.youtube.com/watch?v=x0uinJvhNxI",
        },
      ],
      skills: ["Dart", "Flutter Widgets", "State Management", "Material Design"],
      timeEstimate: "4-6 weeks",
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
            <h1 className="text-4xl font-bold mb-4">Mobile Development Roadmap</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Follow this step-by-step guide to become a mobile developer, with free resources for each stage of your journey.
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

export default MobileDevelopment;
