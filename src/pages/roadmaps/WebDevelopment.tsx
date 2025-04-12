
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const steps = [
    {
      title: "HTML & CSS Fundamentals",
      duration: "4-6 weeks",
      description: "Learn the building blocks of web pages and styling.",
      completed: false,
      resources: [
        {
          name: "MDN Web Docs - HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          type: "Documentation"
        },
        {
          name: "FreeCodeCamp - Responsive Web Design",
          url: "https://www.freecodecamp.org/learn/responsive-web-design/",
          type: "Interactive Course"
        },
        {
          name: "CSS Tricks",
          url: "https://css-tricks.com/",
          type: "Blog & Tutorials"
        }
      ]
    },
    {
      title: "JavaScript Basics",
      duration: "6-8 weeks",
      description: "Master programming fundamentals with JavaScript.",
      completed: false,
      resources: [
        {
          name: "JavaScript.info",
          url: "https://javascript.info/",
          type: "Tutorial"
        },
        {
          name: "Eloquent JavaScript (Free Book)",
          url: "https://eloquentjavascript.net/",
          type: "Book"
        },
        {
          name: "JavaScript30",
          url: "https://javascript30.com/",
          type: "Projects"
        }
      ]
    },
    {
      title: "Frontend Framework (React)",
      duration: "8-10 weeks",
      description: "Learn a modern JavaScript framework for building user interfaces.",
      completed: false,
      resources: [
        {
          name: "React Documentation",
          url: "https://react.dev/learn",
          type: "Documentation"
        },
        {
          name: "Scrimba - Learn React",
          url: "https://scrimba.com/learn/learnreact",
          type: "Interactive Course"
        },
        {
          name: "The Road to React (Free Book)",
          url: "https://www.roadtoreact.com/",
          type: "Book"
        }
      ]
    },
    {
      title: "Backend Basics (Node.js)",
      duration: "6-8 weeks",
      description: "Build server-side applications using JavaScript.",
      completed: false,
      resources: [
        {
          name: "Node.js Documentation",
          url: "https://nodejs.org/en/docs/",
          type: "Documentation"
        },
        {
          name: "Express.js Documentation",
          url: "https://expressjs.com/",
          type: "Documentation"
        },
        {
          name: "The Odin Project - NodeJS",
          url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs",
          type: "Course"
        }
      ]
    },
    {
      title: "Databases",
      duration: "4-6 weeks",
      description: "Learn to work with databases to store and manage data.",
      completed: false,
      resources: [
        {
          name: "MongoDB University",
          url: "https://university.mongodb.com/",
          type: "Free Course"
        },
        {
          name: "MySQL Tutorial",
          url: "https://www.mysqltutorial.org/",
          type: "Tutorial"
        },
        {
          name: "Prisma Documentation",
          url: "https://www.prisma.io/docs/",
          type: "Documentation"
        }
      ]
    },
    {
      title: "Full Stack Projects",
      duration: "8-10 weeks",
      description: "Build complete web applications integrating frontend and backend.",
      completed: false,
      resources: [
        {
          name: "Full Stack Open",
          url: "https://fullstackopen.com/en/",
          type: "Complete Course"
        },
        {
          name: "GitHub Student Developer Pack",
          url: "https://education.github.com/pack",
          type: "Developer Tools"
        },
        {
          name: "Render - Free Hosting",
          url: "https://render.com/",
          type: "Hosting"
        }
      ]
    }
  ];

  const projectIdeas = [
    {
      title: "Personal Portfolio Website",
      description: "Showcase your skills and projects with a responsive portfolio website.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Task Management App",
      description: "Build a full-stack todo application with user authentication and data persistence.",
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "E-commerce Product Page",
      description: "Create an interactive product page with filtering, sorting, and cart functionality.",
      skills: ["React", "State Management", "API Integration"]
    },
    {
      title: "Blog Platform",
      description: "Develop a content management system for creating and managing blog posts.",
      skills: ["Full Stack", "Authentication", "Database Design"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/roadmaps">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Roadmaps
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-2">Web Development Roadmap</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              A step-by-step guide to becoming a full-stack web developer, with curated resources for each stage.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 20h20"/><path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"/><path d="M12 5v6"/><path d="M8 8h8"/></svg>
                Beginner to Advanced
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                6-9 months
              </span>
            </div>
          </div>

          <Tabs defaultValue="path" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="path">Learning Path</TabsTrigger>
              <TabsTrigger value="projects">Project Ideas</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="path">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-full p-2 ${step.completed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        {step.completed ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <span className="flex h-6 w-6 items-center justify-center font-semibold">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                        
                        <h4 className="text-md font-medium mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Learning Resources
                        </h4>
                        <ul className="space-y-2">
                          {step.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                              <div className="flex justify-between items-center">
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                  {resource.name}
                                </a>
                                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                                  {resource.type}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-sheskills-light dark:bg-gray-700 text-sheskills-purple px-3 py-1 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Join the Web Developer Community</h3>
                <p className="mb-6">Connect with other aspiring and established web developers to share knowledge, get feedback on your projects, and find collaboration opportunities.</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Online Communities</h4>
                    <ul className="space-y-2">
                      <li><a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DEV Community</a></li>
                      <li><a href="https://www.reddit.com/r/webdev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">r/webdev on Reddit</a></li>
                      <li><a href="https://discord.gg/web" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Web Dev Discord</a></li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Women in Tech Communities</h4>
                    <ul className="space-y-2">
                      <li><a href="https://women-in-tech.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Women in Tech</a></li>
                      <li><a href="https://witchat.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">WIT Community Chat</a></li>
                      <li><a href="https://girlswhocode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Girls Who Code</a></li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Hackathons & Events</h4>
                    <ul className="space-y-2">
                      <li><a href="https://mlh.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Major League Hacking</a></li>
                      <li><a href="https://www.hackathon.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Hackathon.io</a></li>
                      <li><a href="https://ghc.anitab.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Grace Hopper Celebration</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
