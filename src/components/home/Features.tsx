
import { BookOpen, Award, Calendar, FileText, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-sheskills-purple" />,
    title: "Career Roadmaps",
    description: "Step-by-step skill paths customized for your educational background and interests.",
    link: "/roadmaps"
  },
  {
    icon: <Award className="w-8 h-8 text-sheskills-teal" />,
    title: "Free Courses",
    description: "Curated collection of free learning resources from verified platforms.",
    link: "/courses"
  },
  {
    icon: <Calendar className="w-8 h-8 text-sheskills-coral" />,
    title: "Internship Alerts",
    description: "Weekly notifications about relevant internship opportunities from trusted sources.",
    link: "/internships"
  },
  {
    icon: <FileText className="w-8 h-8 text-sheskills-purple" />,
    title: "Resume Builder",
    description: "Create professional resumes with our easy-to-use builder and expert tips.",
    link: "/resumes"
  },
  {
    icon: <Users className="w-8 h-8 text-sheskills-teal" />,
    title: "Mentor Connect",
    description: "Get guidance from experienced IGDTUW alumna in your field of interest.",
    link: "/mentors"
  },
  {
    icon: <Heart className="w-8 h-8 text-sheskills-coral" />,
    title: "Inspiration Hub",
    description: "Success stories and resources to keep you motivated throughout your journey.",
    link: "/inspiration"
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SheSkills Helps You</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to start and advance your tech career, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="text-sheskills-purple font-medium inline-flex items-center group-hover:underline"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
