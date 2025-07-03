
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, MapPin, Star, Calendar, DollarSign, Users, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const { id } = useParams();

  // Mock data - would be fetched based on id
  const company = {
    id: 1,
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=150&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=300&fit=crop&crop=center",
    description: "TechCorp Solutions is a leading technology solutions provider specializing in enterprise software development and digital transformation. With over 5 years of experience, we have helped hundreds of companies modernize their operations and achieve their digital goals.",
    industry: "Technology",
    location: "San Francisco, CA",
    website: "https://techcorpsolutions.com",
    email: "contact@techcorpsolutions.com",
    phone: "+1 (555) 123-4567",
    rating: 4.8,
    reviewCount: 127,
    completedProjects: 145,
    activeProjects: 12,
    totalRevenue: 2500000,
    employeeCount: 25,
    foundedYear: 2019,
    services: [
      "Web Development",
      "Mobile App Development", 
      "Cloud Solutions",
      "AI/ML Development",
      "DevOps & Infrastructure",
      "UI/UX Design"
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional",
      "Microsoft Azure Expert",
      "ISO 9001:2015"
    ]
  };

  const publishedTenders = [
    {
      id: 1,
      title: "Enterprise CRM Development",
      description: "Looking for a team to develop a comprehensive CRM system with advanced analytics capabilities...",
      budget: 75000,
      deadline: "2024-08-15",
      proposals: 15,
      status: "Active",
      postedDate: "2024-07-01"
    },
    {
      id: 2,
      title: "Mobile App for E-commerce Platform",
      description: "iOS and Android app development for our growing e-commerce business...",
      budget: 35000,
      deadline: "2024-07-30", 
      proposals: 8,
      status: "Active",
      postedDate: "2024-06-28"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Migration",
      description: "Migrate existing on-premise infrastructure to AWS cloud platform...",
      budget: 45000,
      deadline: "2024-06-30",
      proposals: 12,
      status: "Completed",
      postedDate: "2024-05-15"
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform serving 50+ clinics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      year: "2023"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description: "Native iOS and Android app with 100k+ downloads",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=center",
      technologies: ["React Native", "Firebase", "Stripe"],
      year: "2023"
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial analytics platform for enterprise clients",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
      technologies: ["Vue.js", "Python", "MongoDB", "D3.js"],
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={company.coverImage}
          alt="Company Cover"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="relative -mt-20 pb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={company.logo}
                alt={company.name}
                className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
              />
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="h-4 w-4" />
                        <span>{company.industry}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Since {company.foundedYear}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-lg">{company.rating}</span>
                      <span className="text-gray-500">({company.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Contact Company
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{company.completedProjects}</div>
              <div className="text-gray-600">Completed Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{company.activeProjects}</div>
              <div className="text-gray-600">Active Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">${(company.totalRevenue / 1000000).toFixed(1)}M</div>
              <div className="text-gray-600">Total Revenue</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{company.employeeCount}+</div>
              <div className="text-gray-600">Team Members</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="tenders">Published Tenders</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About {company.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {company.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Services Offered</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.services.map((service, index) => (
                          <Badge key={index} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Certifications & Awards</h3>
                      <div className="space-y-2">
                        {company.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-gold-500" />
                            <span className="text-sm">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">{company.website}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{company.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{company.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{company.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tenders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Published Tenders</h2>
              <p className="text-gray-600">{publishedTenders.length} tenders published</p>
            </div>
            
            <div className="space-y-6">
              {publishedTenders.map((tender) => (
                <Card key={tender.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{tender.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            ${tender.budget.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {tender.deadline}
                          </span>
                        </div>
                      </div>
                      <Badge variant={tender.status === "Active" ? "default" : "secondary"}>
                        {tender.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tender.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {tender.proposals} proposals • Posted {tender.postedDate}
                      </span>
                      <Link to={`/tender/apply/${tender.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Portfolio</h2>
              <p className="text-gray-600">{portfolio.length} featured projects</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Completed in {project.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Client Reviews</h2>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-lg">{company.rating}</span>
                <span className="text-gray-500">({company.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="text-center py-12 text-gray-500">
              <p>Review system will be implemented in the next phase</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;
