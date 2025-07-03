
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TenderListing from "./pages/TenderListing";
import TenderCreate from "./pages/TenderCreate";
import TenderApply from "./pages/TenderApply";
import CompanyDirectory from "./pages/CompanyDirectory";
import CompanyProfile from "./pages/CompanyProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tenders" element={<TenderListing />} />
            <Route path="/tender/create" element={<TenderCreate />} />
            <Route path="/tender/apply/:id" element={<TenderApply />} />
            <Route path="/companies" element={<CompanyDirectory />} />
            <Route path="/company/:id" element={<CompanyProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
