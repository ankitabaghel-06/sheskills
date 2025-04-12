
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const internships = [
  {
    title: "Frontend Development Intern",
    company: "TechStars",
    location: "Remote",
    stipend: "₹15,000/month",
    duration: "6 months",
    lastDate: "April 30, 2025",
    link: "https://internshala.com/internships/frontend-development-internship",
    source: "Internshala"
  },
  {
    title: "Data Science Intern",
    company: "Analytics Hub",
    location: "Bangalore (Hybrid)",
    stipend: "₹20,000/month",
    duration: "3 months",
    lastDate: "May 15, 2025",
    link: "https://www.linkedin.com/jobs/view/datascience-intern",
    source: "LinkedIn"
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignMate",
    location: "Remote",
    stipend: "₹12,000/month",
    duration: "4 months",
    lastDate: "April 22, 2025",
    link: "https://internshala.com/internships/ui-ux-design-internship",
    source: "Internshala"
  },
  {
    title: "Digital Marketing Intern",
    company: "GrowthGenius",
    location: "Delhi (Onsite)",
    stipend: "₹10,000/month",
    duration: "3 months",
    lastDate: "May 5, 2025",
    link: "https://internshala.com/internships/digital-marketing-internship",
    source: "Internshala"
  },
  {
    title: "Content Writing Intern",
    company: "ContentLabs",
    location: "Remote",
    stipend: "₹8,000/month",
    duration: "2 months",
    lastDate: "April 25, 2025",
    link: "https://www.naukri.com/content-writing-internship-jobs",
    source: "Naukri.com"
  },
  {
    title: "Software Development Intern",
    company: "CodeNation",
    location: "Pune (Hybrid)",
    stipend: "₹25,000/month",
    duration: "6 months",
    lastDate: "May 20, 2025",
    link: "https://www.linkedin.com/jobs/view/software-development-intern",
    source: "LinkedIn"
  }
];

const jobSites = [
  {
    name: "Internshala",
    url: "https://internshala.com/",
    description: "India's largest internship platform for students",
    logo: "https://internshala.com/static/images/common/new_internshala_logo.svg"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/jobs/",
    description: "Professional networking site with job opportunities",
    logo: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
  },
  {
    name: "Naukri.com",
    url: "https://www.naukri.com/",
    description: "One of India's leading job portals",
    logo: "https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
  },
  {
    name: "Indeed",
    url: "https://in.indeed.com/",
    description: "Global job search site with various opportunities",
    logo: "https://www.indeed.com/download/indeed-logo-png"
  }
];

const Internships = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`You've subscribed to weekly internship alerts with email: ${email}`);
      setEmail("");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Internship Opportunities</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find the perfect internship to gain experience and kickstart your career in tech.
            </p>
          </div>
          
          <div className="bg-sheskills-light dark:bg-gray-800 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Get Weekly Internship Alerts</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to receive curated internship opportunities directly in your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="bg-sheskills-purple hover:bg-sheskills-purple/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Current Opportunities</h2>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <InternshipCard
                key={index}
                title={internship.title}
                company={internship.company}
                location={internship.location}
                stipend={internship.stipend}
                duration={internship.duration}
                lastDate={internship.lastDate}
                link={internship.link}
                source={internship.source}
              />
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Find More Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {jobSites.map((site, index) => (
                <a 
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-gray-800 rounded-xl border hover:shadow-md transition-shadow"
                >
                  <div className="h-12 mb-4 flex items-center">
                    <img 
                      src={site.logo} 
                      alt={site.name} 
                      className="max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextSibling!.textContent = site.name;
                        (e.target as HTMLImageElement).nextSibling!.className = "text-xl font-bold";
                      }}
                    />
                    <span className="hidden"></span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{site.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{site.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
