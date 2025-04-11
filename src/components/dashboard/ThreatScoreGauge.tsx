
import { cn } from "@/lib/utils";
import { AlertTriangle, ShieldAlert, ShieldCheck } from "lucide-react";

interface ThreatScoreGaugeProps {
  score: number;
  className?: string;
}

const ThreatScoreGauge = ({ score, className }: ThreatScoreGaugeProps) => {
  // Normalize score to 0-100
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  
  // Determine risk level
  let riskLevel: "low" | "medium" | "high";
  let riskIcon: JSX.Element;
  
  if (normalizedScore < 33) {
    riskLevel = "low";
    riskIcon = <ShieldCheck className="h-6 w-6 text-risk-low" />;
  } else if (normalizedScore < 66) {
    riskLevel = "medium";
    riskIcon = <AlertTriangle className="h-6 w-6 text-risk-medium" />;
  } else {
    riskLevel = "high";
    riskIcon = <ShieldAlert className="h-6 w-6 text-risk-high" />;
  }
  
  return (
    <div className={cn("bg-white rounded-lg shadow p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Threat Score</h3>
        {riskIcon}
      </div>
      
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={cn(
            "absolute top-0 left-0 h-full rounded-full",
            riskLevel === "low" ? "bg-risk-low" : 
            riskLevel === "medium" ? "bg-risk-medium" : "bg-risk-high"
          )}
          style={{ width: `${normalizedScore}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Risk Level:</span>
          <span className={cn(
            "risk-badge", 
            riskLevel === "low" ? "risk-badge-low" : 
            riskLevel === "medium" ? "risk-badge-medium" : "risk-badge-high"
          )}>
            {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThreatScoreGauge;
