
const testimonials = [
  {
    quote: "SheSkills completely changed my career path. The roadmap helped me focus on the right skills, and the mentor support was invaluable. Now I'm working at a top tech company!",
    name: "Priya Sharma",
    role: "Frontend Developer",
    city: "Jaipur",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "Coming from a small town, I had no idea how to break into tech. The free courses and internship alerts helped me gain experience and confidence. I recommend SheSkills to all women in Tier 2/3 cities.",
    name: "Meera Patel",
    role: "Data Analyst",
    city: "Indore",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The resume builder helped me create a professional resume that stood out to recruiters. I received multiple interview calls and landed my dream job. Thank you SheSkills!",
    name: "Anjali Singh",
    role: "Software Engineer",
    city: "Lucknow",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-sheskills-light dark:bg-sheskills-dark">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from women who transformed their careers with SheSkills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <svg fill="currentColor" viewBox="0 0 32 32" className="h-8 w-8 text-sheskills-purple opacity-30">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <div className="ml-4">
                  <div className="h-0.5 w-12 bg-sheskills-teal rounded"></div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sheskills-purple"
                />
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
