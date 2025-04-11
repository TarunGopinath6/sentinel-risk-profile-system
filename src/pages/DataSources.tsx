
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  FileText, 
  FileSpreadsheet, 
  FileImage, 
  Upload, 
  Edit3, 
  Server, 
  KeyRound, 
  User, 
  Lock, 
  Plus, 
  HardDrive, 
  Globe,
  Workflow
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const DataSources = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  
  const handleConnectSource = (type: string) => {
    toast.success(`Configuration for ${type} saved! Ready to extract data.`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Data Sources</h1>
            <p className="text-gray-500">Connect and extract data from various sources</p>
          </div>
          
          {!selectedSource ? (
            <>
              <p className="mb-6 text-gray-600">Select a data source type to begin the extraction process:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SourceCard 
                  title="Database" 
                  description="Connect to SQL, NoSQL and other database systems"
                  icon={Database}
                  onClick={() => setSelectedSource("database")}
                />
                <SourceCard 
                  title="PDF Documents" 
                  description="Extract text and data from PDF files"
                  icon={FileText}
                  onClick={() => setSelectedSource("pdf")}
                />
                <SourceCard 
                  title="Spreadsheets" 
                  description="Import data from CSV, Excel and other formats"
                  icon={FileSpreadsheet} 
                  onClick={() => setSelectedSource("spreadsheet")}
                />
                <SourceCard 
                  title="Images" 
                  description="Extract data from images using OCR"
                  icon={FileImage}
                  onClick={() => setSelectedSource("image")}
                />
                <SourceCard 
                  title="Data Upload" 
                  description="Upload local files for data extraction"
                  icon={Upload}
                  onClick={() => setSelectedSource("upload")}
                />
                <SourceCard 
                  title="Manual Entry" 
                  description="Manually input data via forms"
                  icon={Edit3}
                  onClick={() => setSelectedSource("manual")}
                />
              </div>
            </>
          ) : (
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedSource(null)}
                className="mb-6"
              >
                Back to All Sources
              </Button>
              
              {selectedSource === "database" && (
                <DatabaseConnectionForm onConnect={handleConnectSource} />
              )}
              
              {selectedSource === "pdf" && (
                <PdfImportForm onConnect={handleConnectSource} />
              )}
              
              {selectedSource === "spreadsheet" && (
                <SpreadsheetImportForm onConnect={handleConnectSource} />
              )}
              
              {selectedSource === "image" && (
                <ImageImportForm onConnect={handleConnectSource} />
              )}
              
              {selectedSource === "upload" && (
                <FileUploadForm onConnect={handleConnectSource} />
              )}
              
              {selectedSource === "manual" && (
                <ManualEntryForm onConnect={handleConnectSource} />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

interface SourceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
}

const SourceCard = ({ title, description, icon: Icon, onClick }: SourceCardProps) => {
  return (
    <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer" onClick={onClick}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

interface ConnectionFormProps {
  onConnect: (type: string) => void;
}

const DatabaseConnectionForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="mr-2 h-6 w-6" /> 
          Database Connection
        </CardTitle>
        <CardDescription>
          Configure connection to database servers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="connection">
          <TabsList className="mb-4">
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connection" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Database Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option>MySQL</option>
                  <option>PostgreSQL</option>
                  <option>Microsoft SQL Server</option>
                  <option>Oracle</option>
                  <option>MongoDB</option>
                  <option>SQLite</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Connection Method</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Standard (TCP/IP)</option>
                  <option>SSH Tunnel</option>
                  <option>JDBC URL</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Server Host</label>
              <div className="flex items-center">
                <Server className="h-4 w-4 mr-2 text-gray-500" />
                <Input placeholder="localhost or IP address" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Port</label>
                <Input type="number" placeholder="3306" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Database Name</label>
                <Input placeholder="Enter database name" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="authentication" className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Authentication Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Username & Password</option>
                <option>Windows Authentication</option>
                <option>No Authentication</option>
                <option>IAM Authentication</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Username</label>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <Input placeholder="Enter username" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Password</label>
              <div className="flex items-center">
                <Lock className="h-4 w-4 mr-2 text-gray-500" />
                <Input type="password" placeholder="Enter password" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="save-credentials" />
              <label htmlFor="save-credentials" className="text-sm">Save credentials (encrypted)</label>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Connection Timeout (seconds)</label>
              <Input type="number" placeholder="30" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Connection Parameters</label>
              <Textarea placeholder="key1=value1&key2=value2" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">SSL Configuration</label>
              <select className="w-full p-2 border rounded-md">
                <option>No SSL</option>
                <option>Require SSL</option>
                <option>Verify CA</option>
                <option>Verify Full</option>
              </select>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Test Connection</Button>
        <Button onClick={() => onConnect("database")}>Save Connection</Button>
      </CardFooter>
    </Card>
  );
};

const PdfImportForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="mr-2 h-6 w-6" /> 
          PDF Document Import
        </CardTitle>
        <CardDescription>
          Configure PDF extraction settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">PDF Source</label>
          <select className="w-full p-2 border rounded-md">
            <option>File Upload</option>
            <option>Network Location</option>
            <option>Document Management System</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Upload PDF Document</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Drag and drop a PDF file here, or click to browse</p>
            <input type="file" className="hidden" accept=".pdf" />
            <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Extraction Method</label>
          <select className="w-full p-2 border rounded-md">
            <option>Text & Metadata</option>
            <option>Form Fields</option>
            <option>Tables & Structured Data</option>
            <option>Full Document OCR</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="extract-images" />
          <label htmlFor="extract-images" className="text-sm">Extract embedded images</label>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onConnect("pdf")} className="w-full">Process PDF Document</Button>
      </CardFooter>
    </Card>
  );
};

const SpreadsheetImportForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileSpreadsheet className="mr-2 h-6 w-6" /> 
          Spreadsheet Import
        </CardTitle>
        <CardDescription>
          Import data from CSV, Excel and other formats
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">File Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>CSV (.csv)</option>
            <option>Excel (.xlsx, .xls)</option>
            <option>Google Sheets</option>
            <option>TSV (.tsv)</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Upload Spreadsheet</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <FileSpreadsheet className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Drag and drop a file here, or click to browse</p>
            <input type="file" className="hidden" accept=".csv,.xls,.xlsx,.tsv" />
            <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Import Options</label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="first-row-header" checked />
              <label htmlFor="first-row-header" className="text-sm">First row contains headers</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="trim-whitespace" checked />
              <label htmlFor="trim-whitespace" className="text-sm">Trim whitespace from fields</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="skip-empty-rows" checked />
              <label htmlFor="skip-empty-rows" className="text-sm">Skip empty rows</label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">CSV Delimiter</label>
          <select className="w-full p-2 border rounded-md">
            <option>Comma (,)</option>
            <option>Semicolon (;)</option>
            <option>Tab</option>
            <option>Pipe (|)</option>
            <option>Custom</option>
          </select>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onConnect("spreadsheet")} className="w-full">Import Spreadsheet</Button>
      </CardFooter>
    </Card>
  );
};

const ImageImportForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileImage className="mr-2 h-6 w-6" /> 
          Image Data Extraction
        </CardTitle>
        <CardDescription>
          Extract data from images using OCR
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Upload Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <FileImage className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Drag and drop an image file here, or click to browse</p>
            <input type="file" className="hidden" accept="image/*" />
            <Button variant="outline" size="sm" className="mt-2">Browse Images</Button>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">OCR Engine</label>
          <select className="w-full p-2 border rounded-md">
            <option>Tesseract OCR</option>
            <option>Google Cloud Vision</option>
            <option>Microsoft Computer Vision</option>
            <option>Amazon Textract</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Language</label>
          <select className="w-full p-2 border rounded-md">
            <option>English</option>
            <option>Hindi</option>
            <option>Arabic</option>
            <option>Multiple Languages</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Extraction Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>Full Text</option>
            <option>Form Fields</option>
            <option>Document ID</option>
            <option>Table Data</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="pre-processing" />
          <label htmlFor="pre-processing" className="text-sm">Apply image pre-processing (enhance quality)</label>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onConnect("image")} className="w-full">Extract Data from Image</Button>
      </CardFooter>
    </Card>
  );
};

const FileUploadForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="mr-2 h-6 w-6" /> 
          File Upload
        </CardTitle>
        <CardDescription>
          Upload files for data extraction
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">File Source</label>
          <select className="w-full p-2 border rounded-md">
            <option>Local File</option>
            <option>Network Share</option>
            <option>Cloud Storage</option>
            <option>FTP/SFTP</option>
          </select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Upload Files</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-gray-400 mt-1">Supports PDF, CSV, Excel, Images, XML, JSON</p>
            <input type="file" className="hidden" multiple />
            <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Processing Options</label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="auto-detect" checked />
              <label htmlFor="auto-detect" className="text-sm">Auto-detect file type and process accordingly</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="batch-process" />
              <label htmlFor="batch-process" className="text-sm">Batch process multiple files</label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">File Handling After Processing</label>
          <select className="w-full p-2 border rounded-md">
            <option>Retain Original Files</option>
            <option>Archive Files</option>
            <option>Delete Files</option>
          </select>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onConnect("upload")} className="w-full">Upload and Process Files</Button>
      </CardFooter>
    </Card>
  );
};

const ManualEntryForm = ({ onConnect }: ConnectionFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Edit3 className="mr-2 h-6 w-6" /> 
          Manual Data Entry
        </CardTitle>
        <CardDescription>
          Manually input data via structured forms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Template Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>Suspect Profile</option>
            <option>Case Details</option>
            <option>Document Information</option>
            <option>Network Association</option>
            <option>Custom Template</option>
          </select>
        </div>
        
        <div className="border rounded-md p-4">
          <h3 className="text-sm font-semibold mb-3">Template Fields</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium mb-1 block">Name</label>
              <Input placeholder="Enter full name" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1 block">Date of Birth</label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1 block">ID Type & Number</label>
              <div className="grid grid-cols-2 gap-2">
                <select className="p-2 text-sm border rounded-md">
                  <option>National ID</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                </select>
                <Input placeholder="ID Number" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1 block">Notes</label>
              <Textarea placeholder="Additional information" rows={3} />
            </div>
          </div>
          
          <Button size="sm" variant="outline" className="mt-3 flex items-center">
            <Plus className="h-3 w-3 mr-1" /> Add Field
          </Button>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Data Validation</label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="required-fields" checked />
              <label htmlFor="required-fields" className="text-sm">Enforce required fields</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="format-validation" checked />
              <label htmlFor="format-validation" className="text-sm">Validate field formats (dates, numbers, etc.)</label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Clear Form</Button>
        <Button onClick={() => onConnect("manual")}>Submit Data</Button>
      </CardFooter>
    </Card>
  );
};

export default DataSources;
