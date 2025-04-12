
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RoadmapCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  level: string;
  duration: string;
  link: string;
}

const RoadmapCard = ({ title, description, icon, level, duration, link }: RoadmapCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-sheskills-light dark:bg-gray-700 p-3 rounded-lg">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 20h20"/><path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"/><path d="M12 5v6"/><path d="M8 8h8"/></svg>
                {level}
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {duration}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        
        <Button asChild variant="outline" className="w-full border-sheskills-purple text-sheskills-purple hover:bg-sheskills-purple hover:text-white">
          <Link to={link}>
            View Roadmap
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RoadmapCard;
