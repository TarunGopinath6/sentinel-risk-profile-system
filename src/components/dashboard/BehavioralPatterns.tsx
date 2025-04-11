
import { cn } from "@/lib/utils";

interface Trait {
  category: string;
  traits: {
    name: string;
    value: number;
  }[];
}

interface BehavioralPatternsProps {
  traits: Trait[];
  className?: string;
}

const BehavioralPatterns = ({ traits, className }: BehavioralPatternsProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold text-gray-800 mb-4">Behavioral Patterns</h3>
      
      <div className="space-y-6">
        {traits.map((category, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-medium text-gray-700 mb-2">{category.category}</h4>
            <div className="bg-white rounded-md border p-3">
              {category.traits.map((trait, traitIdx) => (
                <div key={traitIdx} className="mb-2 last:mb-0">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{trait.name}</span>
                    <span>{trait.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full",
                        trait.value < 33 ? "bg-chart-teal" :
                        trait.value < 66 ? "bg-chart-blue" : "bg-chart-purple"
                      )}
                      style={{ width: `${trait.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehavioralPatterns;
