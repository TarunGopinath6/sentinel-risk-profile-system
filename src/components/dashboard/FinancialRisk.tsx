
import { DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface FinancialSource {
  name: string;
  amount: number;
  percentage: number;
}

interface FinancialRiskProps {
  riskScore: number;
  totalAmount: number;
  sources: FinancialSource[];
  className?: string;
}

const FinancialRisk = ({ 
  riskScore,
  totalAmount,
  sources,
  className 
}: FinancialRiskProps) => {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Financial Risk Index</h3>
        <div className="p-2 rounded-full bg-primary/10">
          <DollarSign className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Risk Score</span>
          <span className="text-sm font-medium text-gray-700">{riskScore}/100</span>
        </div>
        <Progress value={riskScore} className="h-2" />
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">Total Tracked Funds</span>
          <span className="text-lg font-bold">{formatCurrency(totalAmount)}</span>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Funding Sources</h4>
        
        {sources.map((source, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">{source.name}</span>
              <span className="text-sm text-gray-600">
                {formatCurrency(source.amount)} ({source.percentage}%)
              </span>
            </div>
            <Progress value={source.percentage} className="h-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialRisk;
