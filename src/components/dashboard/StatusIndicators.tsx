
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusProps {
  status: "active" | "surveillance" | "arrested" | "dormant";
  lastUpdated: string;
  flags?: string[];
  className?: string;
}

const StatusIndicators = ({ 
  status, 
  lastUpdated, 
  flags = [],
  className 
}: StatusProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "active":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "surveillance":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "arrested":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "dormant":
        return <Clock className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-red-100 text-red-800 border-red-200";
      case "surveillance":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "arrested":
        return "bg-green-100 text-green-800 border-green-200";
      case "dormant":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "";
    }
  };
  
  return (
    <div className={cn("bg-white rounded-lg shadow p-4", className)}>
      <h3 className="font-semibold text-gray-800 mb-3">Operational Status</h3>
      
      <div className={cn(
        "rounded-md border p-3 flex items-center mb-4",
        getStatusColor()
      )}>
        {getStatusIcon()}
        <div className="ml-3">
          <p className="text-sm font-medium capitalize">{status}</p>
          <p className="text-xs">Last updated: {lastUpdated}</p>
        </div>
      </div>
      
      {flags.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Alert Flags</h4>
          <div className="space-y-2">
            {flags.map((flag, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusIndicators;
