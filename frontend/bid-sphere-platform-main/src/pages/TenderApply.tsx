
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, IndianRupee, FileText, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TenderApply = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    message: "",
    expectedBudget: "",
    deliveryTime: ""
  });

  // Mock tender data - would be fetched based on id
  const tender = {
    id: 1,
    title: "Enterprise Software Development",
    description: "We are looking for a development team to build a comprehensive enterprise management system with modules for HR, Finance, and Operations. The system should be web-based, scalable, and integrate with existing infrastructure.",
    budget: 1200000,
    deadline: "2024-08-30",
    companyName: "GlobalTech Corp",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center",
    industry: "Technology",
    postedDate: "2024-07-01",
    requirements: [
      "5+ years of enterprise software development experience",
      "Expertise in React, Node.js, and PostgreSQL",
      "Experience with cloud deployment (AWS/Azure)",
      "Strong understanding of security best practices",
      "Agile development methodology experience"
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.message || !formData.expectedBudget || !formData.deliveryTime) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically make an API call
    console.log("Proposal data:", {
      tenderId: id,
      ...formData
    });
    
    toast({
      title: "Success!",
      description: "Your proposal has been submitted successfully.",
    });

    // Reset form
    setFormData({
      message: "",
      expectedBudget: "",
      deliveryTime: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Proposal</h1>
        <p className="text-gray-600">Submit your proposal for this tender opportunity</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tender Details */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={tender.companyLogo}
                  alt={tender.companyName}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <CardTitle className="text-lg">{tender.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>{tender.companyName}</span>
                  </CardDescription>
                </div>
              </div>
              <Badge variant="secondary">{tender.industry}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-700 text-sm line-clamp-3">{tender.description}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Budget</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(tender.budget)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Deadline</span>
                  <span className="font-semibold">{tender.deadline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted</span>
                  <span className="font-semibold">{tender.postedDate}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Key Requirements</h4>
                <ul className="space-y-1">
                  {tender.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
                <Link to={`/tenders/${id}`} className="text-blue-600 text-sm hover:underline">
                  View full details →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proposal Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Your Proposal</span>
              </CardTitle>
              <CardDescription>
                Provide detailed information about your approach and capabilities
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="message">Proposal Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your approach to this project, relevant experience, team composition, methodology, and why you're the best fit for this tender..."
                    rows={10}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                  <p className="text-sm text-gray-500">
                    Include your understanding of requirements, proposed solution, and relevant portfolio examples
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expectedBudget">Your Proposed Budget (INR) *</Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="expectedBudget"
                        type="number"
                        placeholder="1150000"
                        value={formData.expectedBudget}
                        onChange={(e) => handleInputChange("expectedBudget", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Your competitive bid for this project in INR
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryTime">Estimated Delivery Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="deliveryTime"
                        placeholder="e.g., 12 weeks, 3 months"
                        value={formData.deliveryTime}
                        onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Realistic timeframe for project completion
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Tips for a Winning Proposal</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Demonstrate clear understanding of the requirements</li>
                    <li>• Highlight relevant experience and past successes</li>
                    <li>• Provide a realistic timeline and budget breakdown</li>
                    <li>• Show your team's expertise and qualifications</li>
                    <li>• Include samples of similar work if applicable</li>
                  </ul>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Proposal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TenderApply;
