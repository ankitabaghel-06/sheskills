
import { Users, BookOpen, Briefcase, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-sheskills-purple" />,
    count: "5,000+",
    label: "Women Empowered"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-sheskills-teal" />,
    count: "200+",
    label: "Free Courses"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-sheskills-coral" />,
    count: "1,000+",
    label: "Internship Placements"
  },
  {
    icon: <Award className="w-8 h-8 text-sheskills-purple" />,
    count: "150+",
    label: "Expert Mentors"
  }
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-sheskills-light dark:bg-gray-700 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
