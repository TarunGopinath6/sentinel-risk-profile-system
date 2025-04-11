
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SuspectProfileTable from '@/components/data-view/SuspectProfileTable';
import { SuspectProfile } from '@/types/dataView';
import { mockSuspectProfiles } from '@/data/mockSuspectProfiles';

const DataView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('fullName');
  const [filteredProfiles, setFilteredProfiles] = useState<SuspectProfile[]>(mockSuspectProfiles);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredProfiles(mockSuspectProfiles);
      return;
    }

    const filtered = mockSuspectProfiles.filter(profile => {
      const fieldValue = profile[searchField as keyof SuspectProfile];
      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (Array.isArray(fieldValue)) {
        return fieldValue.some(item => 
          typeof item === 'string' && item.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return false;
    });

    setFilteredProfiles(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const fieldOptions = [
    { value: 'fullName', label: 'Full Name' },
    { value: 'aliasNames', label: 'Alias Names' },
    { value: 'fatherName', label: 'Father Name' },
    { value: 'nationality', label: 'Nationality' },
    { value: 'dateOfBirth', label: 'Date of Birth' },
    { value: 'placeOfBirth', label: 'Place of Birth' },
    { value: 'id', label: 'ID' },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Data View</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Search Profiles</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/4">
              <Select 
                defaultValue={searchField} 
                onValueChange={setSearchField}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  {fieldOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-2/4 relative">
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="w-full md:w-1/4">
              <Button 
                onClick={handleSearch}
                className="w-full"
              >
                Search
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            {filteredProfiles.length} {filteredProfiles.length === 1 ? 'result' : 'results'} found
          </p>
        </div>
        
        <Tabs defaultValue="profiles" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="profiles">Suspect Profiles</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="contacts">Contact Details</TabsTrigger>
            <TabsTrigger value="documents">Identity Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profiles" className="p-0">
            <SuspectProfileTable data={filteredProfiles} />
          </TabsContent>
          
          <TabsContent value="addresses" className="p-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-center text-gray-500">Address data will be implemented in the next phase</p>
            </div>
          </TabsContent>
          
          <TabsContent value="contacts" className="p-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-center text-gray-500">Contact details will be implemented in the next phase</p>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="p-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-center text-gray-500">Identity documents will be implemented in the next phase</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DataView;
