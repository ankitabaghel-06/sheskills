
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoadmapCard from "@/components/RoadmapCard";
import { Code2, Database, Paintbrush, Smartphone, CloudCog, LineChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roadmaps = [
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, React, and backend technologies to build impressive websites and web applications.",
    icon: <Code2 className="w-6 h-6 text-sheskills-purple" />,
    level: "Beginner to Advanced",
    duration: "6-9 months",
    link: "/roadmaps/web-development",
    category: "programming"
  },
  {
    title: "Data Science",
    description: "Learn statistics, Python, data visualization, machine learning, and more to analyze complex data sets.",
    icon: <Database className="w-6 h-6 text-sheskills-teal" />,
    level: "Intermediate",
    duration: "8-12 months",
    link: "/roadmaps/data-science",
    category: "analytics"
  },
  {
    title: "UI/UX Design",
    description: "Develop skills in user research, wireframing, prototyping, and design tools to create beautiful, user-friendly interfaces.",
    icon: <Paintbrush className="w-6 h-6 text-sheskills-coral" />,
    level: "Beginner to Intermediate",
    duration: "4-6 months",
    link: "/roadmaps/ui-ux-design",
    category: "design"
  },
  {
    title: "Mobile Development",
    description: "Build iOS and Android apps with React Native, Flutter, or native development and launch your own mobile applications.",
    icon: <Smartphone className="w-6 h-6 text-sheskills-purple" />,
    level: "Intermediate",
    duration: "6-8 months",
    link: "/roadmaps/mobile-development",
    category: "programming"
  },
  {
    title: "Cloud Computing",
    description: "Master AWS, Azure, or Google Cloud to deploy, manage, and scale applications in the cloud environment.",
    icon: <CloudCog className="w-6 h-6 text-sheskills-teal" />,
    level: "Intermediate to Advanced",
    duration: "6-9 months",
    link: "/roadmaps/cloud-computing",
    category: "infrastructure"
  },
  {
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, content creation, analytics, and campaign management to promote products online.",
    icon: <LineChart className="w-6 h-6 text-sheskills-coral" />,
    level: "Beginner to Intermediate",
    duration: "3-6 months",
    link: "/roadmaps/digital-marketing",
    category: "marketing"
  }
];

const Roadmaps = () => {
  const programmingRoadmaps = roadmaps.filter(roadmap => roadmap.category === "programming");
  const analyticsRoadmaps = roadmaps.filter(roadmap => roadmap.category === "analytics");
  const designRoadmaps = roadmaps.filter(roadmap => roadmap.category === "design");
  const infrastructureRoadmaps = roadmaps.filter(roadmap => roadmap.category === "infrastructure");
  const marketingRoadmaps = roadmaps.filter(roadmap => roadmap.category === "marketing");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Roadmaps</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Follow our step-by-step roadmaps tailored for women from Tier 2/3 cities to build successful tech careers.
            </p>
          </div>
          
          <div className="mb-10 bg-sheskills-light dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Find Your Path</h2>
            <p className="mb-6">Each roadmap includes free resources, clear milestones, and guidance from industry professionals.</p>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Roadmaps</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {roadmaps.map((roadmap, index) => (
                    <RoadmapCard
                      key={index}
                      title={roadmap.title}
                      description={roadmap.description}
                      icon={roadmap.icon}
                      level={roadmap.level}
                      duration={roadmap.duration}
                      link={roadmap.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="programming" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {programmingRoadmaps.map((roadmap, index) => (
                    <RoadmapCard
                      key={index}
                      title={roadmap.title}
                      description={roadmap.description}
                      icon={roadmap.icon}
                      level={roadmap.level}
                      duration={roadmap.duration}
                      link={roadmap.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {analyticsRoadmaps.map((roadmap, index) => (
                    <RoadmapCard
                      key={index}
                      title={roadmap.title}
                      description={roadmap.description}
                      icon={roadmap.icon}
                      level={roadmap.level}
                      duration={roadmap.duration}
                      link={roadmap.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {designRoadmaps.map((roadmap, index) => (
                    <RoadmapCard
                      key={index}
                      title={roadmap.title}
                      description={roadmap.description}
                      icon={roadmap.icon}
                      level={roadmap.level}
                      duration={roadmap.duration}
                      link={roadmap.link}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="other" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...infrastructureRoadmaps, ...marketingRoadmaps].map((roadmap, index) => (
                    <RoadmapCard
                      key={index}
                      title={roadmap.title}
                      description={roadmap.description}
                      icon={roadmap.icon}
                      level={roadmap.level}
                      duration={roadmap.duration}
                      link={roadmap.link}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmaps;
