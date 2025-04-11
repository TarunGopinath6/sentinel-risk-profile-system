
import { CheckCircle, Clock, FileText, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Document {
  id: string;
  name: string;
  status: "verified" | "pending" | "flagged";
  date?: string;
  notes?: string;
}

interface DocumentVerificationProps {
  documents: Document[];
  className?: string;
}

const DocumentVerification = ({ documents, className }: DocumentVerificationProps) => {
  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "flagged":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };
  
  const groupedDocuments = documents.reduce((acc, doc) => {
    acc[doc.status] = acc[doc.status] || [];
    acc[doc.status].push(doc);
    return acc;
  }, {} as Record<Document["status"], Document[]>);
  
  const verifiedCount = groupedDocuments.verified?.length || 0;
  const pendingCount = groupedDocuments.pending?.length || 0;
  const flaggedCount = groupedDocuments.flagged?.length || 0;
  
  return (
    <div className={cn("bg-white rounded-lg shadow p-4", className)}>
      <h3 className="font-semibold text-gray-800 mb-4">Document Verification</h3>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-green-50 rounded-md p-3 text-center">
          <p className="text-xs text-green-700 mb-1">Verified</p>
          <p className="text-xl font-bold text-green-700">{verifiedCount}</p>
        </div>
        <div className="bg-yellow-50 rounded-md p-3 text-center">
          <p className="text-xs text-yellow-700 mb-1">Pending</p>
          <p className="text-xl font-bold text-yellow-700">{pendingCount}</p>
        </div>
        <div className="bg-red-50 rounded-md p-3 text-center">
          <p className="text-xs text-red-700 mb-1">Flagged</p>
          <p className="text-xl font-bold text-red-700">{flaggedCount}</p>
        </div>
      </div>
      
      <h4 className="text-sm font-medium text-gray-700 mb-2">Document List</h4>
      <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center border rounded-md p-2">
            <FileText className="h-4 w-4 text-gray-400 mr-2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{doc.name}</p>
              {doc.date && <p className="text-xs text-gray-500">{doc.date}</p>}
            </div>
            <div className="ml-2 flex-shrink-0">
              {getStatusIcon(doc.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentVerification;
