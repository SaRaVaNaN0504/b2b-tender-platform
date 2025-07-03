
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Building2, MapPin, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // Mock data - will be replaced with real data hooks
  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center",
      description: "Leading technology solutions provider specializing in enterprise software development and digital transformation.",
      industry: "Technology",
      location: "San Francisco, CA",
      rating: 4.8,
      completedProjects: 145,
      activeProjects: 12,
      services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI/ML"],
      joinDate: "2019"
    },
    {
      id: 2,
      name: "Creative Agency Pro",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
      description: "Full-service creative agency offering branding, marketing, and digital design solutions for modern businesses.",
      industry: "Marketing",
      location: "New York, NY",
      rating: 4.6,
      completedProjects: 89,
      activeProjects: 8,
      services: ["Branding", "Digital Marketing", "Web Design", "Content Creation"],
      joinDate: "2020"
    },
    {
      id: 3,
      name: "DataAnalytics Hub",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      description: "Data analytics and business intelligence specialists helping companies make data-driven decisions.",
      industry: "Analytics",
      location: "Austin, TX",
      rating: 4.9,
      completedProjects: 67,
      activeProjects: 15,
      services: ["Data Analytics", "Business Intelligence", "Machine Learning", "Consulting"],
      joinDate: "2018"
    },
    {
      id: 4,
      name: "CloudFirst Infrastructure",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=center",
      description: "Cloud infrastructure and DevOps specialists providing scalable solutions for enterprise clients.",
      industry: "Cloud Services",
      location: "Seattle, WA",
      rating: 4.7,
      completedProjects: 112,
      activeProjects: 9,
      services: ["Cloud Migration", "DevOps", "Infrastructure", "Security"],
      joinDate: "2017"
    },
    {
      id: 5,
      name: "SecureNet Cybersecurity",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=center",
      description: "Cybersecurity experts protecting businesses from digital threats with comprehensive security solutions.",
      industry: "Security",
      location: "Washington, DC",
      rating: 4.8,
      completedProjects: 78,
      activeProjects: 6,
      services: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
      joinDate: "2019"
    },
    {
      id: 6,
      name: "Mobile Innovations Ltd",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
      description: "Mobile app development company creating innovative iOS and Android applications for various industries.",
      industry: "Mobile Development",
      location: "Los Angeles, CA",
      rating: 4.5,
      completedProjects: 156,
      activeProjects: 18,
      services: ["iOS Development", "Android Development", "Cross-platform", "UI/UX Design"],
      joinDate: "2016"
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = industryFilter === "all" || company.industry.toLowerCase().includes(industryFilter.toLowerCase());
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Directory</h1>
        <p className="text-gray-600">Discover verified companies and their capabilities</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search companies, services, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="analytics">Analytics</SelectItem>
              <SelectItem value="security">Security</SelectItem>
              <SelectItem value="cloud">Cloud Services</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="california">California</SelectItem>
              <SelectItem value="newyork">New York</SelectItem>
              <SelectItem value="texas">Texas</SelectItem>
              <SelectItem value="washington">Washington</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredCompanies.length} of {companies.length} companies
        </p>
      </div>

      {/* Company Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{company.rating}</span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit">
                {company.industry}
              </Badge>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {company.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Completed Projects</span>
                  <span className="font-semibold">{company.completedProjects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active Projects</span>
                  <span className="font-semibold text-green-600">{company.activeProjects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-semibold">{company.joinDate}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Services:</p>
                <div className="flex flex-wrap gap-1">
                  {company.services.slice(0, 3).map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                  {company.services.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{company.services.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
              
              <Link to={`/company/${company.id}`}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Building2 className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Companies
        </Button>
      </div>
    </div>
  );
};

export default CompanyDirectory;
