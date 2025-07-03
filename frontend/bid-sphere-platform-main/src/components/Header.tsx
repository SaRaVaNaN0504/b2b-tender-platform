
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Plus, Search, User } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">TenderPro</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/tenders"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/tenders') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Browse Tenders
            </Link>
            <Link
              to="/companies"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/companies') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Companies
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/dashboard') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/tender/create">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Post Tender
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
