
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Advanced Profiling System" 
            className="h-10 w-auto mr-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/100x40?text=APS+Logo";
            }}
          />
          <h1 className="text-xl font-semibold text-gray-900">Advanced Profiling System</h1>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="text"
              placeholder="Search suspect profiles..."
              className="pl-10 w-full bg-gray-50"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2"></span>
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
