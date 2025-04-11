
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: number;
  className?: string;
  iconClassName?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
  iconClassName,
}: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {trend !== undefined && (
            <div className={cn(
              "flex items-center text-xs font-medium mt-1",
              trend > 0 ? "text-green-600" : trend < 0 ? "text-red-600" : "text-gray-500"
            )}>
              <span>{trend > 0 ? "+" : ""}{trend}%</span>
              <span className="ml-1">from last month</span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={cn(
            "p-3 rounded-full",
            iconClassName || "bg-primary/10 text-primary"
          )}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
