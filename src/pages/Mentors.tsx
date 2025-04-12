
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

const mentors = [
  {
    name: "Neha Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    expertise: ["Web Development", "React", "Node.js"],
    experience: "8 years",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    available: true
  },
  {
    name: "Aisha Patel",
    role: "Data Scientist",
    company: "Amazon",
    expertise: ["Python", "Machine Learning", "Data Visualization"],
    experience: "6 years",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    available: true
  },
  {
    name: "Priyanka Reddy",
    role: "UX Designer",
    company: "Google",
    expertise: ["User Research", "Wireframing", "Figma"],
    experience: "5 years",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    available: false
  },
  {
    name: "Sonal Gupta",
    role: "Product Manager",
    company: "Flipkart",
    expertise: ["Product Strategy", "Agile", "Market Research"],
    experience: "7 years",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    available: true
  },
  {
    name: "Divya Khanna",
    role: "Full Stack Developer",
    company: "PayPal",
    expertise: ["JavaScript", "React", "MongoDB"],
    experience: "4 years",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    available: true
  },
  {
    name: "Ritu Singh",
    role: "Cloud Solutions Architect",
    company: "IBM",
    expertise: ["AWS", "Azure", "Cloud Migration"],
    experience: "9 years",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    available: false
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
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="browse">Browse Mentors</TabsTrigger>
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
                        <p className="text-sheskills-purple">{mentor.role}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.company} • {mentor.experience}</p>
                        
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
                        
                        <Button 
                          className="w-full mt-4 bg-sheskills-purple hover:bg-sheskills-purple/90"
                          disabled={!mentor.available}
                        >
                          Request Mentorship
                        </Button>
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
