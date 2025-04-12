
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-sheskills-light dark:bg-sheskills-dark py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(#d1c4e9_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium bg-white shadow-sm border">
              <span className="text-sheskills-purple">Empowering women from Tier 2/3 cities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your complete <span className="gradient-text">tech career</span> companion
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Personalized roadmaps, free learning resources, mentorship, and more to help you build a successful tech career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-sheskills-purple hover:bg-sheskills-purple/90">
                <Link to="/roadmaps">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sheskills-purple text-sheskills-purple hover:bg-sheskills-purple hover:text-white">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-8 text-sm text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>Trusted by 5000+ women across India</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sheskills-purple rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop" 
              alt="Women in tech" 
              className="relative rounded-xl shadow-2xl w-full object-cover animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
