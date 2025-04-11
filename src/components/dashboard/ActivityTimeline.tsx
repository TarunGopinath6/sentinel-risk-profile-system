
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  category: "personal" | "crime" | "travel";
}

interface ActivityTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const ActivityTimeline = ({ events, className }: ActivityTimelineProps) => {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  return (
    <div className={className}>
      <h3 className="font-semibold text-gray-800 mb-4">Activity Timeline</h3>
      
      <div className="relative border-l border-gray-200 pl-6 ml-3">
        {sortedEvents.map((event) => (
          <div key={event.id} className="mb-6 relative">
            <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full border border-white">
              <div className={cn(
                "h-full w-full rounded-full",
                event.category === "personal" ? "bg-blue-500" :
                event.category === "crime" ? "bg-red-500" : "bg-yellow-500"
              )}></div>
            </div>
            
            <div className="bg-white rounded-md border p-3 shadow-sm">
              <time className="block text-xs text-gray-500 mb-1">{event.date}</time>
              <h4 className="text-sm font-medium flex items-center">
                {event.title}
                <Badge 
                  variant="outline" 
                  className={cn(
                    "ml-2",
                    event.category === "personal" ? "bg-blue-50 text-blue-700 hover:bg-blue-50" :
                    event.category === "crime" ? "bg-red-50 text-red-700 hover:bg-red-50" : 
                    "bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                  )}
                >
                  {event.category}
                </Badge>
              </h4>
              {event.description && (
                <p className="mt-1 text-xs text-gray-600">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
