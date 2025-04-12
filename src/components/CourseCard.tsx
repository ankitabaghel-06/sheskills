
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface CourseCardProps {
  title: string;
  platform: string;
  instructor: string;
  level: string;
  duration: string;
  image: string;
  link: string;
}

const CourseCard = ({ title, platform, instructor, level, duration, image, link }: CourseCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-sheskills-purple text-xs font-medium px-2 py-1 rounded inline-block">
            {platform}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
          <span>{instructor}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 20h20"/><path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"/><path d="M12 5v6"/><path d="M8 8h8"/></svg>
            {level}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {duration}
          </span>
        </div>
        
        <Button asChild variant="outline" className="w-full border-sheskills-purple text-sheskills-purple hover:bg-sheskills-purple hover:text-white">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Start Learning
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
