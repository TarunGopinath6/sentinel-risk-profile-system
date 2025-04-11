
import { cn } from "@/lib/utils";
import { 
  Activity, 
  Database,
  FileText, 
  Globe, 
  Home, 
  Network, 
  Search, 
  ShieldAlert, 
  Users 
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const Sidebar = ({ className }: SidebarProps) => {
  // Get the current path to determine which nav item is active
  const currentPath = window.location.pathname;

  const navItems: NavItem[] = [
    { icon: Home, label: "Dashboard", href: "/", active: currentPath === "/" },
    { icon: Database, label: "Data Sources", href: "/data-sources", active: currentPath === "/data-sources" },
    { icon: Users, label: "Suspect Profiles", href: "/profiles", active: currentPath === "/profiles" },
    { icon: Network, label: "Network Analysis", href: "/network", active: currentPath === "/network" },
    { icon: Globe, label: "Geospatial", href: "/geospatial", active: currentPath === "/geospatial" },
    { icon: Activity, label: "Temporal Analysis", href: "/temporal", active: currentPath === "/temporal" },
    { icon: ShieldAlert, label: "Risk Assessment", href: "/risk", active: currentPath === "/risk" },
    { icon: FileText, label: "Documentation", href: "/docs", active: currentPath === "/docs" },
    { icon: Search, label: "Advanced Search", href: "/search", active: currentPath === "/search" },
  ];

  return (
    <div className={cn("w-64 bg-white border-r border-gray-200 h-screen flex flex-col", className)}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-lg">Advanced Profiling</h2>
      </div>
      
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  item.active 
                    ? "bg-primary text-primary-foreground" 
                    : "text-gray-700 hover:bg-muted hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">LE</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Law Enforcement</p>
            <p className="text-xs text-gray-500">Advanced User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
