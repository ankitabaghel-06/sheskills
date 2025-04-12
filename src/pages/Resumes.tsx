
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useState } from "react";
import { FileUp, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Resumes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
  });
  
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [atsResults, setAtsResults] = useState<null | {
    score: number;
    recommendations: string[];
    keywords: {present: string[], missing: string[]};
  }>(null);
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would generate a PDF
    toast({
      title: "Resume Generated",
      description: "Your resume has been created successfully. You can download it now.",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      toast({
        title: "Resume Uploaded",
        description: "Your resume has been uploaded successfully. You can now check it against ATS systems.",
      });
    }
  };

  const checkAtsCompatibility = () => {
    if (!resumeFile) {
      toast({
        title: "No Resume Found",
        description: "Please upload your resume first before checking ATS compatibility.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    
    // Simulate ATS check - in a real app, this would call an API
    setTimeout(() => {
      const mockResults = {
        score: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
        recommendations: [
          "Use more industry-specific keywords",
          "Quantify your achievements with numbers",
          "Remove graphics and special characters",
          "Use a simpler, single-column layout",
        ],
        keywords: {
          present: ["project management", "react", "javascript", "communication"],
          missing: ["typescript", "agile", "team leadership", "problem-solving"],
        }
      };
      
      setAtsResults(mockResults);
      setIsChecking(false);
      
      toast({
        title: "ATS Check Complete",
        description: `Your resume scored ${mockResults.score}% on ATS compatibility.`,
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Create a professional resume that highlights your skills and experience. Follow our simple steps to build your perfect resume.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="create">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="create">Create Resume</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="ats">ATS Checker</TabsTrigger>
                <TabsTrigger value="tips">Resume Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="create">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
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
                            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="e.g. +91 9876543210" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="location" className="text-sm font-medium">Location</label>
                            <Input 
                              id="location" 
                              name="location" 
                              value={formData.location} 
                              onChange={handleChange} 
                              placeholder="e.g. Jaipur, Rajasthan" 
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="summary" className="text-sm font-medium">Professional Summary</label>
                          <Textarea 
                            id="summary" 
                            name="summary" 
                            value={formData.summary} 
                            onChange={handleChange} 
                            placeholder="A brief summary of your professional background and goals" 
                            rows={3} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Education</h3>
                        <div className="space-y-2">
                          <Textarea 
                            id="education" 
                            name="education" 
                            value={formData.education} 
                            onChange={handleChange} 
                            placeholder="List your educational qualifications with institution names, degrees, and years" 
                            rows={4} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <div className="space-y-2">
                          <Textarea 
                            id="experience" 
                            name="experience" 
                            value={formData.experience} 
                            onChange={handleChange} 
                            placeholder="List your work experience with company names, job titles, dates, and responsibilities" 
                            rows={5} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <div className="space-y-2">
                          <Textarea 
                            id="skills" 
                            name="skills" 
                            value={formData.skills} 
                            onChange={handleChange} 
                            placeholder="List your technical and soft skills" 
                            rows={3} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-sheskills-purple hover:bg-sheskills-purple/90">
                        Generate Resume
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="templates">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-md">
                    <img src="https://resumegenius.com/wp-content/uploads/Professional-Resume-Template-1.png" alt="Professional Template" className="w-full h-auto" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold">Professional Template</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Clean and classic design for corporate roles</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-md">
                    <img src="https://resumegenius.com/wp-content/uploads/Creative-Resume-Template-1.png" alt="Creative Template" className="w-full h-auto" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold">Creative Template</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Modern design for creative industry roles</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-md">
                    <img src="https://resumegenius.com/wp-content/uploads/Technical-Resume-Example-Template.png" alt="Technical Template" className="w-full h-auto" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold">Technical Template</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Skills-focused design for technical roles</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ats">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2">ATS Resume Checker</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Upload your resume to check if it's optimized for Applicant Tracking Systems (ATS).
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex flex-col items-center cursor-pointer"
                        >
                          <FileUp className="h-10 w-10 text-gray-500 mb-2" />
                          <span className="text-sm font-medium mb-1">
                            {resumeFile ? resumeFile.name : "Upload your resume"}
                          </span>
                          <span className="text-xs text-gray-500">
                            PDF, DOC, or DOCX (Max 5MB)
                          </span>
                        </label>
                      </div>

                      <Button
                        onClick={checkAtsCompatibility}
                        className="w-full bg-sheskills-purple hover:bg-sheskills-purple/90"
                        disabled={isChecking || !resumeFile}
                      >
                        {isChecking ? "Analyzing Resume..." : "Check ATS Compatibility"}
                      </Button>

                      {atsResults && (
                        <div className="mt-6 space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold">ATS Compatibility Score</h4>
                            <div className="text-lg font-bold">
                              <span 
                                className={
                                  atsResults.score >= 80 ? "text-green-500" : 
                                  atsResults.score >= 70 ? "text-yellow-500" : 
                                  "text-red-500"
                                }
                              >
                                {atsResults.score}%
                              </span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Recommended Improvements</h4>
                            <ul className="space-y-2">
                              {atsResults.recommendations.map((rec, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-sheskills-purple shrink-0 mt-0.5" />
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Keywords Detected</h4>
                              <div className="flex flex-wrap gap-2">
                                {atsResults.keywords.present.map((keyword, index) => (
                                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                    <Check className="h-3 w-3 inline mr-1" />
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Suggested Keywords</h4>
                              <div className="flex flex-wrap gap-2">
                                {atsResults.keywords.missing.map((keyword, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                                    + {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tips">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Resume Writing Tips</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">1</div>
                        <div>
                          <h4 className="font-medium">Keep it concise</h4>
                          <p className="text-gray-600 dark:text-gray-400">Limit your resume to 1-2 pages. Focus on relevant experience and skills.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">2</div>
                        <div>
                          <h4 className="font-medium">Use action verbs</h4>
                          <p className="text-gray-600 dark:text-gray-400">Begin bullet points with strong action verbs like "Implemented," "Developed," or "Managed."</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">3</div>
                        <div>
                          <h4 className="font-medium">Quantify achievements</h4>
                          <p className="text-gray-600 dark:text-gray-400">Use numbers and percentages to demonstrate your impact whenever possible.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">4</div>
                        <div>
                          <h4 className="font-medium">Tailor to the job</h4>
                          <p className="text-gray-600 dark:text-gray-400">Customize your resume for each application to highlight relevant skills and experience.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">5</div>
                        <div>
                          <h4 className="font-medium">Proofread carefully</h4>
                          <p className="text-gray-600 dark:text-gray-400">Eliminate spelling and grammatical errors. Ask someone else to review your resume.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">6</div>
                        <div>
                          <h4 className="font-medium">ATS-friendly format</h4>
                          <p className="text-gray-600 dark:text-gray-400">Use a clean, simple layout with standard section headings and avoid complex formatting.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-sheskills-purple/10 text-sheskills-purple rounded-full h-6 w-6 flex items-center justify-center shrink-0">7</div>
                        <div>
                          <h4 className="font-medium">Include keywords</h4>
                          <p className="text-gray-600 dark:text-gray-400">Incorporate industry-specific keywords from the job description to pass ATS scans.</p>
                        </div>
                      </li>
                    </ul>
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

export default Resumes;
