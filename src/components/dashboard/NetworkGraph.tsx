
import { useEffect, useRef } from "react";

interface NetworkGraphProps {
  className?: string;
}

const NetworkGraph = ({ className }: NetworkGraphProps) => {
  const graphRef = useRef<HTMLDivElement>(null);

  // This is a placeholder for a real network graph visualization
  // In a real app, you would integrate with a library like D3.js, Sigma.js, or Vis.js
  useEffect(() => {
    if (!graphRef.current) return;
    
    // Mock graph rendering
    const element = graphRef.current;
    const nodes = [
      { id: 1, x: 50, y: 50, size: 12, color: '#F44336' },
      { id: 2, x: 130, y: 70, size: 10, color: '#FF9800' },
      { id: 3, x: 70, y: 120, size: 8, color: '#FF9800' },
      { id: 4, x: 180, y: 140, size: 10, color: '#4CAF50' },
      { id: 5, x: 220, y: 60, size: 8, color: '#4CAF50' },
      { id: 6, x: 280, y: 120, size: 10, color: '#F44336' },
    ];
    
    const edges = [
      { source: 1, target: 2 },
      { source: 1, target: 3 },
      { source: 2, target: 4 },
      { source: 2, target: 5 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 4, target: 6 },
      { source: 5, target: 6 },
    ];
    
    // Draw mock network nodes and edges using SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.overflow = 'visible';
    
    // Draw edges
    edges.forEach(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      
      if (sourceNode && targetNode) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', sourceNode.x.toString());
        line.setAttribute('y1', sourceNode.y.toString());
        line.setAttribute('x2', targetNode.x.toString());
        line.setAttribute('y2', targetNode.y.toString());
        line.setAttribute('stroke', '#CCCCCC');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
      }
    });
    
    // Draw nodes
    nodes.forEach(node => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x.toString());
      circle.setAttribute('cy', node.y.toString());
      circle.setAttribute('r', node.size.toString());
      circle.setAttribute('fill', node.color);
      svg.appendChild(circle);
    });
    
    element.appendChild(svg);
    
    // Cleanup function
    return () => {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    };
  }, []);

  return (
    <div className={className}>
      <h3 className="font-semibold text-gray-800 mb-4">Network Relationships</h3>
      
      <div 
        ref={graphRef} 
        className="bg-white rounded-md border overflow-hidden h-[300px] relative"
      >
        {/* Legend */}
        <div className="absolute top-2 right-2 bg-white/80 p-2 rounded-md text-xs border shadow-sm">
          <div className="flex items-center mb-1">
            <span className="h-3 w-3 bg-risk-high rounded-full mr-2"></span>
            <span>High Risk</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="h-3 w-3 bg-risk-medium rounded-full mr-2"></span>
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 bg-risk-low rounded-full mr-2"></span>
            <span>Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkGraph;
