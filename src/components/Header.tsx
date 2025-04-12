
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Github, Shield, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-sheskills-purple p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                <path d="M10 14a3.98 3.98 0 0 0-1.7-3.3L2 6.4a10.96 10.96 0 0 0 20 0l-6.3 4.3A3.98 3.98 0 0 0 14 14H10z" />
              </svg>
            </div>
            <span className="font-bold text-xl">
              <span className="text-sheskills-purple">She</span>
              <span className="text-sheskills-teal">Skills</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/roadmaps" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Roadmaps
          </Link>
          <Link to="/courses" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Courses
          </Link>
          <Link to="/internships" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Internships
          </Link>
          <Link to="/resumes" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Resume Builder
          </Link>
          <Link to="/mentors" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Mentors
          </Link>
          <Link to="/inspiration" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            Inspiration
          </Link>
          <Link to="/github" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            <Github size={16} className="inline mr-1" />
            GitHub
          </Link>
          <Link to="/women-safety" className="text-sm font-medium hover:text-sheskills-purple transition-colors">
            <Shield size={16} className="inline mr-1" />
            Safety
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-sheskills-purple text-sheskills-purple hover:bg-sheskills-purple hover:text-white">
            <Link to="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild className="bg-sheskills-purple hover:bg-sheskills-purple/90">
            <Link to="/signup">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 border-b animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/roadmaps" className="py-2 hover:text-sheskills-purple transition-colors">
              Roadmaps
            </Link>
            <Link to="/courses" className="py-2 hover:text-sheskills-purple transition-colors">
              Courses
            </Link>
            <Link to="/internships" className="py-2 hover:text-sheskills-purple transition-colors">
              Internships
            </Link>
            <Link to="/resumes" className="py-2 hover:text-sheskills-purple transition-colors">
              Resume Builder
            </Link>
            <Link to="/mentors" className="py-2 hover:text-sheskills-purple transition-colors">
              Mentors
            </Link>
            <Link to="/inspiration" className="py-2 hover:text-sheskills-purple transition-colors">
              Inspiration
            </Link>
            <Link to="/github" className="py-2 hover:text-sheskills-purple transition-colors">
              <Github size={16} className="inline mr-1" />
              GitHub
            </Link>
            <Link to="/women-safety" className="py-2 hover:text-sheskills-purple transition-colors">
              <Shield size={16} className="inline mr-1" />
              Safety
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full border-sheskills-purple text-sheskills-purple hover:bg-sheskills-purple hover:text-white">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full bg-sheskills-purple hover:bg-sheskills-purple/90">
                <Link to="/signup">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
