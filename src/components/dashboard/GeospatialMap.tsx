
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

interface GeospatialMapProps {
  className?: string;
}

const GeospatialMap = ({ className }: GeospatialMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // This is a placeholder for a real map implementation
  // In a real app, you would integrate with a mapping library like Mapbox or Leaflet
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Mock map rendering
    const element = mapRef.current;
    
    // Cleanup function
    return () => {
      // Cleanup code for map component
    };
  }, []);

  return (
    <div className={className}>
      <h3 className="font-semibold text-gray-800 mb-4">Geospatial Analysis</h3>
      
      <div 
        ref={mapRef} 
        className="relative bg-gray-100 rounded-md border overflow-hidden h-[300px]"
      >
        {/* Placeholder for actual map */}
        <div className="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center">
          <MapPin className="h-8 w-8 text-primary mb-2" />
          <p className="text-sm text-gray-500">Interactive map would appear here</p>
          <p className="text-xs text-gray-400 mt-1">Showing suspect locations and activity zones</p>
          
          {/* Placeholder hotspots */}
          <div className="absolute top-1/4 left-1/3 h-12 w-12 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse-subtle">
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 h-16 w-16 bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse-subtle">
            <div className="h-4 w-4 bg-orange-500 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-1/3 h-8 w-8 bg-yellow-500/20 rounded-full flex items-center justify-center animate-pulse-subtle">
            <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeospatialMap;
