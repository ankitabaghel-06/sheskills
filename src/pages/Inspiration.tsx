
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const successStories = [
  {
    name: "Meera Jain",
    title: "From Small Town to Google Engineer",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    story: "Growing up in Ajmer, I had limited exposure to technology. Through SheSkills' roadmaps and mentorship, I learned web development and eventually landed a job at Google. The journey wasn't easy, but the structured guidance made all the difference.",
    advice: "Don't let your background limit your dreams. With the right resources and determination, you can achieve anything."
  },
  {
    name: "Preeti Singh",
    title: "Self-Taught Data Scientist",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    story: "After completing my BSc in Mathematics from a small college in Kanpur, I was unsure about my career path. SheSkills introduced me to data science, and I followed their free course recommendations while working part-time. Today, I'm a Data Scientist at an AI startup.",
    advice: "Consistency is key. Even if you can only study for an hour each day, make that hour count."
  },
  {
    name: "Kavita Reddy",
    title: "From Teacher to Tech Leader",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    story: "I was working as a school teacher in Nashik when I decided to transition to tech. With no formal CS background, I started with the SheSkills web development roadmap. The mentor support helped me navigate challenges, and now I lead a team of developers at a fintech company.",
    advice: "It's never too late to switch careers. Your past experience always adds unique value to your new role."
  }
];

const videos = [
  {
    title: "How to Break into Tech Without a CS Degree",
    thumbnail: "https://img.youtube.com/vi/videoid1/maxresdefault.jpg",
    duration: "32:15",
    link: "#"
  },
  {
    title: "Day in the Life: Software Engineer at Amazon",
    thumbnail: "https://img.youtube.com/vi/videoid2/maxresdefault.jpg",
    duration: "18:42",
    link: "#"
  },
  {
    title: "Overcoming Imposter Syndrome in Tech",
    thumbnail: "https://img.youtube.com/vi/videoid3/maxresdefault.jpg",
    duration: "45:10",
    link: "#"
  },
  {
    title: "Building Your Personal Brand in the Tech Industry",
    thumbnail: "https://img.youtube.com/vi/videoid4/maxresdefault.jpg",
    duration: "27:33",
    link: "#"
  }
];

const articles = [
  {
    title: "10 Habits of Successful Women in Tech",
    excerpt: "Discover the daily practices and mindsets that help women thrive in the tech industry.",
    author: "Nisha Sharma",
    date: "April 2, 2025",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "Navigating Male-Dominated Workplaces: A Guide for Women",
    excerpt: "Practical strategies for building confidence and asserting yourself in tech environments.",
    author: "Anita Desai",
    date: "March 28, 2025",
    readTime: "12 min read",
    link: "#"
  },
  {
    title: "How I Prepared for My First Technical Interview",
    excerpt: "A step-by-step guide to technical interview preparation from someone who's been there.",
    author: "Priya Patel",
    date: "March 15, 2025",
    readTime: "10 min read",
    link: "#"
  },
  {
    title: "The Power of Community in Your Tech Journey",
    excerpt: "Why finding your tribe is crucial for success and how to build meaningful connections.",
    author: "Meera Reddy",
    date: "March 5, 2025",
    readTime: "6 min read",
    link: "#"
  }
];

const Inspiration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Inspiration Hub</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay motivated with success stories, advice, and resources from women who have walked the path before you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="stories">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="stories">Success Stories</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stories">
                <div className="space-y-8">
                  {successStories.map((story, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img 
                              src={story.image} 
                              alt={story.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                            <p className="text-sheskills-purple mb-4">{story.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{story.story}</p>
                            <div className="border-l-4 border-sheskills-purple pl-4 italic">
                              <p className="text-gray-600 dark:text-gray-400">"{story.advice}"</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <img 
                          src={video.thumbnail || "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&h=350&fit=crop"} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-white rounded-full p-3 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheskills-purple"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <a 
                          href={video.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sheskills-purple text-sm flex items-center hover:underline"
                        >
                          Watch video <ExternalLink size={14} className="ml-1" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="articles">
                <div className="space-y-6">
                  {articles.map((article, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span>{article.author}</span>
                          <span className="mx-2">•</span>
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {article.excerpt}
                        </p>
                        <a 
                          href={article.link} 
                          className="text-sheskills-purple font-medium flex items-center hover:underline"
                        >
                          Read full article <ExternalLink size={16} className="ml-1" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inspiration;
