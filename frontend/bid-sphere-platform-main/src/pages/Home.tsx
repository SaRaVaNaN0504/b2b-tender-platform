
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileText, Search, TrendingUp, Users, CheckCircle, IndianRupee } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect. Bid. Win.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premier B2B tender management platform connecting Indian companies with opportunities. 
              Post tenders, find projects, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tender/create">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-5 w-5 mr-2" />
                  Post a Tender
                </Button>
              </Link>
              <Link to="/tenders">
                <Button size="lg" variant="outline">
                  <Search className="h-5 w-5 mr-2" />
                  Browse Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Tenders
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your bidding process with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Create Tenders</h3>
                <p className="text-gray-600 mb-6">
                  Post detailed tender requirements and receive quality proposals from verified Indian companies.
                </p>
                <Link to="/tender/create">
                  <Button variant="outline">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Find Projects</h3>
                <p className="text-gray-600 mb-6">
                  Discover relevant business opportunities and submit competitive bids with ease.
                </p>
                <Link to="/tenders">
                  <Button variant="outline">Browse Tenders</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Browse Companies</h3>
                <p className="text-gray-600 mb-6">
                  Connect with verified Indian businesses and explore their portfolios and capabilities.
                </p>
                <Link to="/companies">
                  <Button variant="outline">View Directory</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Active Tenders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Registered Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Total Contract Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of Indian companies already using TenderPro to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary">
                <Users className="h-5 w-5 mr-2" />
                Company Dashboard
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
              <TrendingUp className="h-5 w-5 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
