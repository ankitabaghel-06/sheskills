
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ExternalLink, Calendar, Check, BookOpen } from "lucide-react";

const mentors = [
  {
    name: "Neha Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    expertise: ["Web Development", "React", "Node.js"],
    experience: "8 years",
    batch: "IGDTUW 2015",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Aisha Patel",
    role: "Data Scientist",
    company: "Amazon",
    expertise: ["Python", "Machine Learning", "Data Visualization"],
    experience: "6 years",
    batch: "IGDTUW 2017",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Priyanka Reddy",
    role: "UX Designer",
    company: "Google",
    expertise: ["User Research", "Wireframing", "Figma"],
    experience: "5 years",
    batch: "IGDTUW 2018",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    available: false,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Sonal Gupta",
    role: "Product Manager",
    company: "Flipkart",
    expertise: ["Product Strategy", "Agile", "Market Research"],
    experience: "7 years",
    batch: "IGDTUW 2016",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Divya Khanna",
    role: "Full Stack Developer",
    company: "PayPal",
    expertise: ["JavaScript", "React", "MongoDB"],
    experience: "4 years",
    batch: "IGDTUW 2019",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Ritu Singh",
    role: "Cloud Solutions Architect",
    company: "IBM",
    expertise: ["AWS", "Azure", "Cloud Migration"],
    experience: "9 years",
    batch: "IGDTUW 2014",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    available: false,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Ananya Verma",
    role: "ML Engineer",
    company: "Adobe",
    expertise: ["TensorFlow", "Deep Learning", "Computer Vision"],
    experience: "3 years",
    batch: "IGDTUW 2020",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Tanvi Mehta",
    role: "Mobile Developer",
    company: "Swiggy",
    expertise: ["React Native", "Flutter", "Mobile UI"],
    experience: "4 years",
    batch: "IGDTUW 2019",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Leela Kapoor",
    role: "Security Engineer",
    company: "Oracle",
    expertise: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    experience: "5 years",
    batch: "IGDTUW 2018",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    available: true,
    linkedin: "https://linkedin.com/in/"
  }
];

const events = [
  {
    title: "Tech Career Guidance Session",
    mentor: "Neha Sharma",
    date: "April 25, 2025",
    time: "6:00 PM - 7:30 PM IST",
    platform: "Zoom",
    description: "Join Neha Sharma, Senior Software Engineer at Microsoft, for guidance on building a successful tech career.",
    topics: ["Career paths in tech", "Skills to develop", "Interview preparation"],
    registration: "https://zoom.us/webinar/register/"
  },
  {
    title: "Data Science Workshop",
    mentor: "Aisha Patel",
    date: "May 10, 2025",
    time: "11:00 AM - 1:00 PM IST",
    platform: "Google Meet",
    description: "Hands-on workshop on data analysis and visualization using Python with Aisha Patel from Amazon.",
    topics: ["Python basics", "Data visualization", "Machine learning intro"],
    registration: "https://forms.google.com/register/"
  },
  {
    title: "UI/UX Portfolio Review",
    mentor: "Priyanka Reddy",
    date: "April 30, 2025",
    time: "5:00 PM - 7:00 PM IST",
    platform: "Zoom",
    description: "Get your design portfolio reviewed by Google UX Designer Priyanka Reddy with personalized feedback.",
    topics: ["Portfolio best practices", "Case study presentation", "Design process"],
    registration: "https://zoom.us/webinar/register/"
  }
];

const Mentors = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    career: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend API
    alert("Mentor request functionality will be implemented in the full backend version");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Connect with Mentors</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get guidance from experienced women professionals from IGDTUW who have navigated the tech industry successfully.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="browse">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="browse">Browse Mentors</TabsTrigger>
                <TabsTrigger value="events">Upcoming Sessions</TabsTrigger>
                <TabsTrigger value="request">Request Mentorship</TabsTrigger>
              </TabsList>
              
              <TabsContent value="browse">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors.map((mentor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${mentor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {mentor.available ? 'Available' : 'Fully Booked'}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <div className="text-sheskills-purple">{mentor.role}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{mentor.company} • {mentor.experience}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{mentor.batch}</div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill, i) => (
                              <span key={i} className="text-xs bg-sheskills-light dark:bg-gray-700 px-2 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button 
                            className="flex-1 bg-sheskills-purple hover:bg-sheskills-purple/90"
                            disabled={!mentor.available}
                          >
                            Request Mentorship
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            asChild
                          >
                            <a 
                              href={mentor.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077B5]">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                          <div>
                            <h3 className="font-semibold text-xl mb-1">{event.title}</h3>
                            <p className="text-sheskills-purple">{event.mentor}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}, {event.time}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                          <ul className="space-y-1">
                            {event.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-sheskills-purple mt-0.5" />
                                <span className="text-sm">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>Platform: {event.platform}</span>
                          </div>
                          <Button asChild className="bg-sheskills-purple hover:bg-sheskills-purple/90">
                            <a 
                              href={event.registration} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              Register Now
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="request">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Request a Mentor</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="e.g. Priya Sharma" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="e.g. priya@example.com" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="career" className="text-sm font-medium">Career Path</label>
                        <Input 
                          id="career" 
                          name="career" 
                          value={formData.career} 
                          onChange={handleChange} 
                          placeholder="e.g. Web Development, Data Science" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">What would you like to discuss with a mentor?</label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Share your career goals, challenges, or specific questions you'd like guidance on" 
                          rows={5} 
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-sheskills-purple hover:bg-sheskills-purple/90">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
