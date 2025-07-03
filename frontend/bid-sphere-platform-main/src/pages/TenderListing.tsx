
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, IndianRupee, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const TenderListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterBy, setFilterBy] = useState("all");

  // Mock data - will be replaced with real data hooks
  const tenders = [
    {
      id: 1,
      title: "Enterprise Software Development",
      description: "We are looking for a development team to build a comprehensive enterprise management system with modules for HR, Finance, and Operations...",
      budget: 1200000,
      deadline: "2024-08-30",
      companyName: "GlobalTech Corp",
      companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop&crop=center",
      industry: "Technology",
      postedDate: "2024-07-01",
      applicants: 12
    },
    {
      id: 2,
      title: "Marketing Campaign Management",
      description: "Looking for a creative agency to handle our Q4 marketing campaigns across digital and traditional media channels...",
      budget: 600000,
      deadline: "2024-07-25",
      companyName: "RetailMax Ltd",
      companyLogo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=50&h=50&fit=crop&crop=center",
      industry: "Retail",
      postedDate: "2024-06-28",
      applicants: 8
    },
    {
      id: 3,
      title: "Cloud Infrastructure Migration",
      description: "Seeking experienced cloud architects to migrate our on-premise infrastructure to AWS with minimal downtime...",
      budget: 1600000,
      deadline: "2024-09-15",
      companyName: "FinanceFirst Bank",
      companyLogo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop&crop=center",
      industry: "Finance",
      postedDate: "2024-07-03",
      applicants: 15
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Development of iOS and Android apps for our e-commerce platform with integrated payment gateway and inventory management...",
      budget: 680000,
      deadline: "2024-08-10",
      companyName: "ShopEasy Inc",
      companyLogo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=50&h=50&fit=crop&crop=center",
      industry: "E-commerce",
      postedDate: "2024-06-30",
      applicants: 20
    },
    {
      id: 5,
      title: "Data Analytics Platform",
      description: "Building a comprehensive data analytics platform with real-time reporting and predictive analytics capabilities...",
      budget: 960000,
      deadline: "2024-09-01",
      companyName: "DataCorp Analytics",
      companyLogo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=50&h=50&fit=crop&crop=center",
      industry: "Analytics",
      postedDate: "2024-07-05",
      applicants: 9
    },
    {
      id: 6,
      title: "Cybersecurity Audit & Implementation",
      description: "Comprehensive security audit and implementation of security measures for our enterprise network and applications...",
      budget: 760000,
      deadline: "2024-08-20",
      companyName: "SecureNet Solutions",
      companyLogo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=50&h=50&fit=crop&crop=center",
      industry: "Security",
      postedDate: "2024-07-02",
      applicants: 6
    }
  ];

  const filteredTenders = tenders.filter(tender =>
    tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tender.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tender.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Tenders</h1>
        <p className="text-gray-600">Discover business opportunities and submit your proposals</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tenders, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="budget-high">Highest Budget</SelectItem>
              <SelectItem value="budget-low">Lowest Budget</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredTenders.length} of {tenders.length} tenders
        </p>
        <div className="text-sm text-gray-500">
          Page 1 of 1
        </div>
      </div>

      {/* Tender Cards */}
      <div className="grid gap-6 mb-8">
        {filteredTenders.map((tender) => (
          <Card key={tender.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={tender.companyLogo}
                      alt={tender.companyName}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                        {tender.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4" />
                        <span>{tender.companyName}</span>
                        <Badge variant="secondary">{tender.industry}</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {formatCurrency(tender.budget)}
                  </div>
                  <div className="text-sm text-gray-500">Budget</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-700 mb-4 line-clamp-2">
                {tender.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Deadline: {tender.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{tender.applicants} applicants</span>
                  </div>
                  <div>
                    Posted: {tender.postedDate}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Link to={`/company/${tender.id}`}>
                  <Button variant="outline" size="sm">
                    View Company
                  </Button>
                </Link>
                <Link to={`/tender/apply/${tender.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TenderListing;
