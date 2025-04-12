
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sheskills-light dark:bg-sheskills-dark border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering girls from Tier 2/3 cities to build successful tech careers through guidance, resources, and mentorship.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/roadmaps" className="hover:text-sheskills-purple">Career Roadmaps</Link></li>
              <li><Link to="/courses" className="hover:text-sheskills-purple">Free Courses</Link></li>
              <li><Link to="/internships" className="hover:text-sheskills-purple">Internship Alerts</Link></li>
              <li><Link to="/resumes" className="hover:text-sheskills-purple">Resume Builder</Link></li>
              <li><Link to="/mentors" className="hover:text-sheskills-purple">Mentor Connect</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-sheskills-purple">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sheskills-purple">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-sheskills-purple">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-sheskills-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-sheskills-purple">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get the latest updates on opportunities and resources.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm rounded-md border flex-1"
              />
              <button className="px-3 py-2 bg-sheskills-purple text-white rounded-md text-sm hover:bg-sheskills-purple/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} SheSkills. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-sheskills-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-sheskills-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-sheskills-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-sheskills-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
