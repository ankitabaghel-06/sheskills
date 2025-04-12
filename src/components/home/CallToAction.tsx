
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-90"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-white max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your tech journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of women who are building successful careers in tech with SheSkills. It's free, supportive, and designed for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-sheskills-purple hover:bg-white/90">
                <Link to="/roadmaps">
                  Explore Roadmaps
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sheskills-purple">
                <Link to="/register">
                  Create Free Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
