
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react";

const GitHub = () => {
  const projects = [
    {
      name: "women-in-tech-resources",
      description: "A curated collection of resources for women in technology, including articles, videos, podcasts, and communities.",
      stars: 342,
      forks: 123,
      lastUpdated: "2 days ago",
      language: "Markdown",
      url: "https://github.com/shecodesthings/women-in-tech-resources",
      topics: ["women-in-tech", "resources", "career", "community"]
    },
    {
      name: "tech-interview-prep",
      description: "Interview preparation materials specifically crafted for women in tech, with coding challenges and system design examples.",
      stars: 256,
      forks: 97,
      lastUpdated: "1 week ago",
      language: "JavaScript",
      url: "https://github.com/shecodesthings/tech-interview-prep",
      topics: ["interview", "algorithms", "data-structures", "system-design"]
    },
    {
      name: "mentorship-platform",
      description: "Open source mentorship platform connecting women in tech with mentors. Built with React and Node.js.",
      stars: 189,
      forks: 65,
      lastUpdated: "3 days ago",
      language: "TypeScript",
      url: "https://github.com/shecodesthings/mentorship-platform",
      topics: ["mentorship", "react", "node", "typescript"]
    },
    {
      name: "women-safety-app",
      description: "An open source mobile app for women's safety with features like emergency contacts, location sharing, and safety tips.",
      stars: 271,
      forks: 112,
      lastUpdated: "5 days ago",
      language: "React Native",
      url: "https://github.com/shecodesthings/women-safety-app",
      topics: ["women-safety", "mobile-app", "react-native", "community"]
    },
    {
      name: "learn-to-code",
      description: "A step-by-step curriculum for women from Tier 2/3 cities to learn programming from scratch.",
      stars: 315,
      forks: 142,
      lastUpdated: "1 day ago",
      language: "HTML/CSS",
      url: "https://github.com/shecodesthings/learn-to-code",
      topics: ["beginners", "learn-to-code", "web-development", "curriculum"]
    },
    {
      name: "opensource-for-women",
      description: "A guide to getting started with open source contributions, specifically designed for women entering tech.",
      stars: 203,
      forks: 78,
      lastUpdated: "2 weeks ago",
      language: "Markdown",
      url: "https://github.com/shecodesthings/opensource-for-women",
      topics: ["open-source", "beginner-friendly", "git", "github"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">GitHub Resources</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore open-source projects and resources for women in tech. Contribute to these repositories and build your GitHub profile.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#24292e] hover:bg-[#24292e]/90">
                <a 
                  href="https://github.com/topics/women-in-tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Explore Women in Tech on GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Featured Open Source Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Github className="w-5 h-5 mr-2 text-[#24292e]" />
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{project.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.topics.map((topic, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-3 h-3 rounded-full mr-1" style={{ 
                              backgroundColor: 
                                project.language === "JavaScript" ? "#f1e05a" :
                                project.language === "TypeScript" ? "#3178c6" :
                                project.language === "React Native" ? "#61dafb" :
                                project.language === "HTML/CSS" ? "#e34c26" :
                                "#808080"
                            }}></div>
                            {project.language}
                          </span>
                          <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Star className="w-4 h-4 mr-1" />
                            {project.stars}
                          </span>
                          <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <GitFork className="w-4 h-4 mr-1" />
                            {project.forks}
                          </span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild 
                          className="text-xs"
                        >
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            View Project
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="pt-8">
              <h2 className="text-2xl font-semibold mb-6">GitHub Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">GitHub for Beginners</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Learn the basics of Git and GitHub with this beginner-friendly guide.
                    </p>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full"
                    >
                      <a 
                        href="https://github.com/skills/introduction-to-github" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Start Learning
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Open Source Contributions</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Find beginner-friendly issues to make your first open source contributions.
                    </p>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full"
                    >
                      <a 
                        href="https://firstcontributions.github.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Find First Issues
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">GitHub Profile README</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Learn how to create an impressive GitHub profile to showcase your work.
                    </p>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full"
                    >
                      <a 
                        href="https://www.sitepoint.com/github-profile-readme/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Create Your Profile
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GitHub;
