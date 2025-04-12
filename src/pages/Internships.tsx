
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "Microsoft",
    location: "Remote",
    stipend: "₹20,000/month",
    duration: "3 months",
    lastDate: "30 Apr 2025",
    link: "https://careers.microsoft.com/",
    source: "Internshala"
  },
  {
    title: "UI/UX Design Intern",
    company: "Google",
    location: "Hybrid (Bangalore)",
    stipend: "₹25,000/month",
    duration: "6 months",
    lastDate: "15 May 2025",
    link: "https://careers.google.com/",
    source: "LinkedIn"
  },
  {
    title: "Data Science Intern",
    company: "Amazon",
    location: "Remote",
    stipend: "₹30,000/month",
    duration: "4 months",
    lastDate: "20 May 2025",
    link: "https://www.amazon.jobs/",
    source: "Naukri.com"
  },
  {
    title: "Full Stack Developer Intern",
    company: "Flipkart",
    location: "Hybrid (Bangalore)",
    stipend: "₹22,000/month",
    duration: "3 months",
    lastDate: "30 May 2025",
    link: "https://www.flipkartcareers.com/#!/",
    source: "Internshala"
  },
  {
    title: "Product Management Intern",
    company: "PhonePe",
    location: "Bangalore",
    stipend: "₹25,000/month",
    duration: "6 months",
    lastDate: "15 Jun 2025",
    link: "https://www.phonepe.com/careers/",
    source: "LinkedIn"
  },
  {
    title: "Digital Marketing Intern",
    company: "Swiggy",
    location: "Remote",
    stipend: "₹15,000/month",
    duration: "3 months",
    lastDate: "10 Jun 2025",
    link: "https://careers.swiggy.com/",
    source: "Naukri.com"
  }
];

const platforms = [
  {
    name: "Internshala",
    url: "https://internshala.com/"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/jobs/"
  },
  {
    name: "Naukri.com",
    url: "https://www.naukri.com/"
  },
  {
    name: "Indeed",
    url: "https://www.indeed.co.in/"
  },
  {
    name: "Monster",
    url: "https://www.monsterindia.com/"
  },
  {
    name: "AngelList",
    url: "https://angel.co/jobs"
  }
];

const Internships = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInternships, setFilteredInternships] = useState(internships);

  useEffect(() => {
    filterInternships();
  }, [activeTab, searchQuery]);

  const filterInternships = () => {
    let filtered = internships;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (internship) =>
          internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply tab filter
    if (activeTab !== "all") {
      filtered = filtered.filter(
        (internship) => internship.source.toLowerCase() === activeTab.toLowerCase()
      );
    }
    
    setFilteredInternships(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterInternships();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Internship Opportunities</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Find remote and flexible internships tailored for women in tech from Tier 2/3 cities.
            </p>
          </div>
          
          <div className="bg-sheskills-light dark:bg-gray-800 p-6 rounded-xl mb-10">
            <h2 className="text-xl font-semibold mb-4">Top Internship Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-600"
                >
                  <span className="font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title, company, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
              <Button className="bg-sheskills-purple hover:bg-sheskills-purple/90">
                Apply Filters
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="internshala">Internshala</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
              <TabsTrigger value="naukri.com">Naukri.com</TabsTrigger>
            </TabsList>
            
            <Separator className="mb-6" />
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredInternships.length > 0 ? (
                  filteredInternships.map((internship, index) => (
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
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No internships found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="internshala" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredInternships.length > 0 ? (
                  filteredInternships.map((internship, index) => (
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
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No Internshala internships found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="linkedin" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredInternships.length > 0 ? (
                  filteredInternships.map((internship, index) => (
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
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No LinkedIn internships found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="naukri.com" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredInternships.length > 0 ? (
                  filteredInternships.map((internship, index) => (
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
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No Naukri.com internships found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
