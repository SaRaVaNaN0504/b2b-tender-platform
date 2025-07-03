
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, FileText, TrendingUp, Users, Calendar, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - will be replaced with real data hooks
  const companyData = {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center",
    description: "Leading technology solutions provider specializing in enterprise software development and digital transformation.",
    industry: "Technology",
    activeProposals: 12,
    wonTenders: 8,
    totalValue: 3600000
  };

  const myTenders = [
    {
      id: 1,
      title: "Enterprise CRM Development",
      description: "Looking for a team to develop a comprehensive CRM system...",
      budget: 600000,
      deadline: "2024-08-15",
      proposals: 15,
      status: "Active"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "iOS and Android app for e-commerce platform...",
      budget: 280000,
      deadline: "2024-07-30",
      proposals: 8,
      status: "Active"
    }
  ];

  const receivedProposals = [
    {
      id: 1,
      tenderTitle: "Enterprise CRM Development",
      companyName: "DevCorp Inc.",
      proposedBudget: 576000,
      deliveryTime: "12 weeks",
      submittedDate: "2024-07-01"
    },
    {
      id: 2,
      tenderTitle: "Mobile App Development",
      companyName: "AppBuilders Ltd.",
      proposedBudget: 256000,
      deliveryTime: "8 weeks",
      submittedDate: "2024-07-02"
    }
  ];

  const formatCurrency = (amount: number) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Company Profile Section */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <img
                src={companyData.logo}
                alt={companyData.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <CardTitle className="text-2xl">{companyData.name}</CardTitle>
                <CardDescription className="mt-1">
                  <Badge variant="secondary">{companyData.industry}</Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{companyData.description}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">
                  {companyData.activeProposals} Active Proposals
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">
                  {companyData.wonTenders} Won Tenders
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IndianRupee className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-600">
                  {formatCurrency(companyData.totalValue)} Total Value
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Published Tenders */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Published Tenders</h2>
            <Link to="/tender/create">
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                New Tender
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {myTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{tender.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <IndianRupee className="h-4 w-4 mr-1" />
                          {formatCurrency(tender.budget)}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {tender.deadline}
                        </span>
                      </div>
                    </div>
                    <Badge variant="default">{tender.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tender.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {tender.proposals} proposals received
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Received Proposals */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Received Proposals</h2>
          
          <div className="space-y-4">
            {receivedProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{proposal.tenderTitle}</CardTitle>
                  <CardDescription>From: {proposal.companyName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Proposed Budget</p>
                      <p className="font-semibold">{formatCurrency(proposal.proposedBudget)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Delivery Time</p>
                      <p className="font-semibold">{proposal.deliveryTime}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Submitted: {proposal.submittedDate}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">
                        Accept
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
