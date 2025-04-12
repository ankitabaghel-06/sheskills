
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const courses = [
  {
    title: "Web Development Bootcamp",
    platform: "Udemy",
    instructor: "Angela Yu",
    level: "Beginner",
    duration: "52 hours",
    image: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    tags: ["web development", "html", "css", "javascript"]
  },
  {
    title: "Python for Data Science and Machine Learning",
    platform: "Coursera",
    instructor: "Jose Portilla",
    level: "Intermediate",
    duration: "40 hours",
    image: "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
    link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    tags: ["python", "data science", "machine learning"]
  },
  {
    title: "UI/UX Design Specialization",
    platform: "Coursera",
    instructor: "California Institute of Arts",
    level: "Beginner",
    duration: "3 months",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2c4d0917511e7a598538dee4b2f24/UI-UX-Course-Artwork-Illo.jpg",
    link: "https://www.coursera.org/specializations/ui-ux-design",
    tags: ["ui/ux", "design", "user research"]
  },
  {
    title: "Complete React Developer Course",
    platform: "YouTube",
    instructor: "freeCodeCamp",
    level: "Intermediate",
    duration: "12 hours",
    image: "https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    tags: ["react", "javascript", "web development"]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    platform: "Amazon",
    instructor: "AWS Training",
    level: "Beginner",
    duration: "6 hours",
    image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    link: "https://aws.amazon.com/training/learn-about/cloud-practitioner/",
    tags: ["aws", "cloud", "certification"]
  },
  {
    title: "Digital Marketing Fundamentals",
    platform: "Google",
    instructor: "Google Digital Garage",
    level: "Beginner",
    duration: "40 hours",
    image: "https://lh3.googleusercontent.com/proxy/DQ7a2kCQzYxaQYgL-_PxPCCDbr7jmrwKQGZ0ujiPLngSRdSk7dzlujQH_2i_3NpuoLXbm_a1GpbbwjFzSJegtKOsb5_EhN9OiQ",
    link: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
    tags: ["digital marketing", "seo", "social media"]
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCourses(filtered);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Free Learning Resources</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Access curated, high-quality free courses from trusted platforms to help you build the skills you need.
            </p>
            
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search courses by name, platform or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="bg-sheskills-purple hover:bg-sheskills-purple/90">
                Search
              </Button>
            </form>
          </div>
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  platform={course.platform}
                  instructor={course.instructor}
                  level={course.level}
                  duration={course.duration}
                  image={course.image}
                  link={course.link}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
