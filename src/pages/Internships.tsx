
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
    link: "#",
  },
  {
    title: "Data Science Intern",
    company: "Analytics Hub",
    location: "Bangalore (Hybrid)",
    stipend: "₹20,000/month",
    duration: "3 months",
    lastDate: "May 15, 2025",
    link: "#",
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignMate",
    location: "Remote",
    stipend: "₹12,000/month",
    duration: "4 months",
    lastDate: "April 22, 2025",
    link: "#",
  },
  {
    title: "Digital Marketing Intern",
    company: "GrowthGenius",
    location: "Delhi (Onsite)",
    stipend: "₹10,000/month",
    duration: "3 months",
    lastDate: "May 5, 2025",
    link: "#",
  },
  {
    title: "Content Writing Intern",
    company: "ContentLabs",
    location: "Remote",
    stipend: "₹8,000/month",
    duration: "2 months",
    lastDate: "April 25, 2025",
    link: "#",
  },
  {
    title: "Software Development Intern",
    company: "CodeNation",
    location: "Pune (Hybrid)",
    stipend: "₹25,000/month",
    duration: "6 months",
    lastDate: "May 20, 2025",
    link: "#",
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
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
