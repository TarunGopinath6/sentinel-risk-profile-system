
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ThreatScoreGauge from "@/components/dashboard/ThreatScoreGauge";
import NetworkCentralityTable from "@/components/dashboard/NetworkCentralityTable";
import GeospatialMap from "@/components/dashboard/GeospatialMap";
import NetworkGraph from "@/components/dashboard/NetworkGraph";
import FinancialRisk from "@/components/dashboard/FinancialRisk";
import StatusIndicators from "@/components/dashboard/StatusIndicators";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import DocumentVerification from "@/components/dashboard/DocumentVerification";
import BehavioralPatterns from "@/components/dashboard/BehavioralPatterns";
import { AlertTriangle, ArrowUpRight, DollarSign, Network, User, Users } from "lucide-react";
import { NetworkContact, FinancialSource, TimelineEvent, Document, BehavioralCategory } from "@/types/dashboard";

// Sample data for demo purposes
const mockNetworkContacts: NetworkContact[] = [
  { id: '1', name: 'John Ahmed', connections: 24, risk: 'high' },
  { id: '2', name: 'Sara Khan', connections: 18, risk: 'medium' },
  { id: '3', name: 'Mike Wilson', connections: 15, risk: 'medium' },
  { id: '4', name: 'Lisa Chen', connections: 12, risk: 'low' },
  { id: '5', name: 'Omar Ali', connections: 9, risk: 'high' },
];

const mockFinancialSources: FinancialSource[] = [
  { name: 'Foreign Funding', amount: 250000, percentage: 50 },
  { name: 'Cryptocurrency', amount: 150000, percentage: 30 },
  { name: 'Local Operations', amount: 75000, percentage: 15 },
  { name: 'Unknown', amount: 25000, percentage: 5 },
];

const mockTimelineEvents: TimelineEvent[] = [
  { 
    id: '1', 
    date: '2023-01-15', 
    title: 'Border Crossing Detected', 
    description: 'Suspect crossed eastern border through unofficial checkpoint.',
    category: 'travel' 
  },
  { 
    id: '2', 
    date: '2023-02-28', 
    title: 'Bank Account Created', 
    description: 'Opened account at International Bank, received $50,000 transfer.',
    category: 'personal' 
  },
  { 
    id: '3', 
    date: '2023-03-10', 
    title: 'Arrested for Weapons Possession', 
    description: 'Found with unregistered firearms at residence.',
    category: 'crime' 
  },
  { 
    id: '4', 
    date: '2023-04-22', 
    title: 'Released on Bail', 
    category: 'crime' 
  },
  { 
    id: '5', 
    date: '2023-05-05', 
    title: 'International Travel to Country X', 
    description: 'One-way flight, no return recorded.',
    category: 'travel' 
  },
];

const mockDocuments: Document[] = [
  { id: '1', name: 'Passport', status: 'verified', date: '2023-01-10' },
  { id: '2', name: 'Driver\'s License', status: 'verified', date: '2023-02-15' },
  { id: '3', name: 'National ID', status: 'flagged', notes: 'Inconsistent information', date: '2023-03-20' },
  { id: '4', name: 'Bank Statements', status: 'pending', date: '2023-04-05' },
  { id: '5', name: 'Property Deed', status: 'pending', date: '2023-04-22' },
  { id: '6', name: 'Travel Visa', status: 'flagged', notes: 'Potentially forged', date: '2023-05-18' },
];

const mockBehavioralTraits: BehavioralCategory[] = [
  {
    category: 'Radicalization Indicators',
    traits: [
      { name: 'Online Extremist Content', value: 85 },
      { name: 'Isolation from Family', value: 60 },
      { name: 'Attendance at Radical Venues', value: 40 },
    ],
  },
  {
    category: 'Operational Methods',
    traits: [
      { name: 'Digital Communication Security', value: 90 },
      { name: 'Use of Intermediaries', value: 75 },
      { name: 'Cash-Based Transactions', value: 65 },
    ],
  },
];

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Operational Overview</h1>
            <p className="text-gray-500">Monitor high-risk suspects and operational metrics</p>
          </div>
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Active Suspects" 
              value="145" 
              icon={User}
              trend={12}
              iconClassName="bg-blue-50 text-blue-700"
            />
            <StatCard 
              title="High Risk Cases" 
              value="37" 
              icon={AlertTriangle}
              trend={8}
              iconClassName="bg-red-50 text-red-700"
            />
            <StatCard 
              title="Network Connections" 
              value="1,290" 
              icon={Network}
              trend={23}
              iconClassName="bg-indigo-50 text-indigo-700"
            />
            <StatCard 
              title="Financial Transactions" 
              value="$3.2M" 
              icon={DollarSign}
              trend={-5}
              iconClassName="bg-green-50 text-green-700"
            />
          </div>
          
          {/* Main Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Main Suspect</h2>
                  <div className="flex items-center text-sm text-primary">
                    <span>View Profile</span>
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-lg">Ahmed Khan</h3>
                    <p className="text-gray-500 text-sm">ID: SUP-2023-0451</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-sm">
                    <p className="text-gray-500">Age</p>
                    <p className="font-medium">32</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Nationality</p>
                    <p className="font-medium">Country X</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Last Known Location</p>
                    <p className="font-medium">City Y</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Case Status</p>
                    <p className="font-medium text-amber-600">Under Surveillance</p>
                  </div>
                </div>
              </div>
              
              <ThreatScoreGauge score={78} />
              
              <StatusIndicators 
                status="surveillance" 
                lastUpdated="2023-06-15 09:24 AM"
                flags={[
                  "Recent border crossing activity",
                  "Multiple encrypted communications",
                  "Contact with high-risk individuals"
                ]}
              />
              
              <DocumentVerification documents={mockDocuments} />
            </div>
            
            {/* Middle Column */}
            <div className="space-y-6">
              <NetworkCentralityTable contacts={mockNetworkContacts} />
              
              <GeospatialMap />
              
              <BehavioralPatterns traits={mockBehavioralTraits} />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <FinancialRisk 
                riskScore={65}
                totalAmount={500000}
                sources={mockFinancialSources}
              />
              
              <NetworkGraph />
              
              <ActivityTimeline events={mockTimelineEvents} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
