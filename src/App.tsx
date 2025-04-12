
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Roadmaps from "./pages/Roadmaps";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";
import Resumes from "./pages/Resumes";
import Mentors from "./pages/Mentors";
import Inspiration from "./pages/Inspiration";
import WebDevelopment from "./pages/roadmaps/WebDevelopment";
import DataScience from "./pages/roadmaps/DataScience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmaps/web-development" element={<WebDevelopment />} />
          <Route path="/roadmaps/data-science" element={<DataScience />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/inspiration" element={<Inspiration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
