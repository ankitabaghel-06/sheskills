
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, BuildingIcon, ExternalLink } from "lucide-react";

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  lastDate: string;
  link: string;
}

const InternshipCard = ({ title, company, location, stipend, duration, lastDate, link }: InternshipCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <BuildingIcon className="h-4 w-4 mr-1" />
            <span>{company}</span>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <div className="text-sheskills-purple font-semibold">{stipend}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 inline mr-1" />
            {duration}
          </div>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <MapPin className="h-4 w-4 mr-1" />
        <span>{location}</span>
      </div>
      
      <div className="border-t pt-4 mt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm">
            <span className="text-red-500">Apply by:</span> {lastDate}
          </div>
          <Button asChild className="bg-sheskills-purple hover:bg-sheskills-purple/90">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
