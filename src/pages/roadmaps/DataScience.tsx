
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataScience = () => {
  const steps = [
    {
      title: "Programming Fundamentals (Python)",
      duration: "4-6 weeks",
      description: "Learn Python programming basics, essential for data science.",
      completed: false,
      resources: [
        {
          name: "Python.org Official Tutorial",
          url: "https://docs.python.org/3/tutorial/",
          type: "Documentation"
        },
        {
          name: "Codecademy - Learn Python",
          url: "https://www.codecademy.com/learn/learn-python-3",
          type: "Interactive Course"
        },
        {
          name: "Automate the Boring Stuff with Python",
          url: "https://automatetheboringstuff.com/",
          type: "Free Book"
        }
      ]
    },
    {
      title: "Mathematics & Statistics",
      duration: "6-8 weeks",
      description: "Master the mathematical foundations required for data science.",
      completed: false,
      resources: [
        {
          name: "Khan Academy - Statistics and Probability",
          url: "https://www.khanacademy.org/math/statistics-probability",
          type: "Interactive Course"
        },
        {
          name: "3Blue1Brown - Linear Algebra",
          url: "https://www.3blue1brown.com/topics/linear-algebra",
          type: "Video Series"
        },
        {
          name: "StatQuest with Josh Starmer",
          url: "https://www.youtube.com/c/joshstarmer",
          type: "YouTube Channel"
        }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      duration: "8-10 weeks",
      description: "Learn to analyze and visualize data using Python libraries.",
      completed: false,
      resources: [
        {
          name: "Pandas Documentation",
          url: "https://pandas.pydata.org/docs/",
          type: "Documentation"
        },
        {
          name: "Matplotlib Tutorials",
          url: "https://matplotlib.org/stable/tutorials/index.html",
          type: "Tutorial"
        },
        {
          name: "Seaborn Tutorial",
          url: "https://seaborn.pydata.org/tutorial.html",
          type: "Tutorial"
        }
      ]
    },
    {
      title: "Machine Learning Basics",
      duration: "8-10 weeks",
      description: "Understand core machine learning algorithms and techniques.",
      completed: false,
      resources: [
        {
          name: "Scikit-learn Documentation",
          url: "https://scikit-learn.org/stable/user_guide.html",
          type: "Documentation"
        },
        {
          name: "Andrew Ng's Machine Learning Course",
          url: "https://www.coursera.org/learn/machine-learning",
          type: "Free Course"
        },
        {
          name: "Machine Learning Crash Course",
          url: "https://developers.google.com/machine-learning/crash-course",
          type: "Course"
        }
      ]
    },
    {
      title: "Advanced Machine Learning",
      duration: "8-12 weeks",
      description: "Explore deep learning, neural networks, and advanced ML concepts.",
      completed: false,
      resources: [
        {
          name: "Deep Learning Specialization",
          url: "https://www.coursera.org/specializations/deep-learning",
          type: "Course"
        },
        {
          name: "TensorFlow Documentation",
          url: "https://www.tensorflow.org/learn",
          type: "Documentation"
        },
        {
          name: "PyTorch Tutorials",
          url: "https://pytorch.org/tutorials/",
          type: "Tutorial"
        }
      ]
    },
    {
      title: "Data Science Projects",
      duration: "8-12 weeks",
      description: "Build projects to apply your skills and create a portfolio.",
      completed: false,
      resources: [
        {
          name: "Kaggle Competitions",
          url: "https://www.kaggle.com/competitions",
          type: "Competitions"
        },
        {
          name: "DrivenData",
          url: "https://www.drivendata.org/competitions/",
          type: "Competitions"
        },
        {
          name: "DataCamp Projects",
          url: "https://www.datacamp.com/projects",
          type: "Guided Projects"
        }
      ]
    }
  ];

  const projectIdeas = [
    {
      title: "Exploratory Data Analysis",
      description: "Analyze a dataset and create visualizations to uncover patterns and insights.",
      skills: ["Python", "Pandas", "Matplotlib", "Data Cleaning"]
    },
    {
      title: "Predictive Model",
      description: "Build a machine learning model to predict outcomes from historical data.",
      skills: ["Scikit-learn", "Model Evaluation", "Feature Engineering"]
    },
    {
      title: "Natural Language Processing",
      description: "Analyze text data, such as sentiment analysis or topic modeling on social media posts.",
      skills: ["NLTK", "spaCy", "Text Preprocessing", "Classification"]
    },
    {
      title: "Time Series Analysis",
      description: "Analyze and forecast time-dependent data, such as stock prices or weather patterns.",
      skills: ["Pandas", "statsmodels", "Forecasting", "Visualization"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/roadmaps">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Roadmaps
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-2">Data Science Roadmap</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              A comprehensive guide to becoming a data scientist, with carefully selected resources for each stage.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 20h20"/><path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"/><path d="M12 5v6"/><path d="M8 8h8"/></svg>
                Intermediate
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                8-12 months
              </span>
            </div>
          </div>

          <Tabs defaultValue="path" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="path">Learning Path</TabsTrigger>
              <TabsTrigger value="projects">Project Ideas</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="path">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-full p-2 ${step.completed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        {step.completed ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <span className="flex h-6 w-6 items-center justify-center font-semibold">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                        
                        <h4 className="text-md font-medium mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Learning Resources
                        </h4>
                        <ul className="space-y-2">
                          {step.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                              <div className="flex justify-between items-center">
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                  {resource.name}
                                </a>
                                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                                  {resource.type}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-sheskills-light dark:bg-gray-700 text-sheskills-teal px-3 py-1 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Join the Data Science Community</h3>
                <p className="mb-6">Connect with other data scientists to share knowledge, get feedback on your projects, and find collaboration opportunities.</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Online Communities</h4>
                    <ul className="space-y-2">
                      <li><a href="https://www.kaggle.com/discussion" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kaggle Forums</a></li>
                      <li><a href="https://www.reddit.com/r/datascience/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">r/datascience on Reddit</a></li>
                      <li><a href="https://stackoverflow.com/questions/tagged/data-science" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stack Overflow - Data Science</a></li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Women in Data Science</h4>
                    <ul className="space-y-2">
                      <li><a href="https://www.widsconference.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Women in Data Science (WiDS)</a></li>
                      <li><a href="https://www.wimlds.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Women in Machine Learning & Data Science</a></li>
                      <li><a href="https://www.pyladies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">PyLadies</a></li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-medium mb-2">Conferences & Events</h4>
                    <ul className="space-y-2">
                      <li><a href="https://www.odsc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Open Data Science Conference</a></li>
                      <li><a href="https://www.kdnuggets.com/meetings/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">KDnuggets: Meetings & Events</a></li>
                      <li><a href="https://datahack.analyticsvidhya.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DataHack by Analytics Vidhya</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataScience;
