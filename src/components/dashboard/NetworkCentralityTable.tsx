
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface NetworkContact {
  id: string;
  name: string;
  image?: string;
  connections: number;
  risk: "low" | "medium" | "high";
}

interface NetworkCentralityTableProps {
  contacts: NetworkContact[];
  className?: string;
}

const NetworkCentralityTable = ({ contacts, className }: NetworkCentralityTableProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold text-gray-800 mb-4">Network Centrality</h3>
      
      <div className="overflow-hidden rounded-md border">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suspect</th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Connections</th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id} className="bg-white hover:bg-gray-50">
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      {contact.image ? (
                        <img src={contact.image} alt={contact.name} />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </Avatar>
                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{contact.connections}</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <Badge variant={
                    contact.risk === "low" ? "outline" : 
                    contact.risk === "medium" ? "secondary" : "destructive"
                  }>
                    {contact.risk}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetworkCentralityTable;
