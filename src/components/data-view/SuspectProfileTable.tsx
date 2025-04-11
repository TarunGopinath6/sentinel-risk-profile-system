
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  FileText, 
  Globe, 
  MapPin, 
  Phone, 
  User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SuspectProfile } from '@/types/dataView';
import SuspectProfileDetail from './SuspectProfileDetail';

interface SuspectProfileTableProps {
  data: SuspectProfile[];
}

const SuspectProfileTable = ({ data }: SuspectProfileTableProps) => {
  const [sortField, setSortField] = useState<keyof SuspectProfile>('fullName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [viewingProfile, setViewingProfile] = useState<SuspectProfile | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (field: keyof SuspectProfile) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });

  const paginatedData = sortedData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderSortIcon = (field: keyof SuspectProfile) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  const getMilitantBadge = (isMilitant: boolean, outfit?: string) => {
    if (!isMilitant) return null;
    
    return (
      <Badge variant="destructive" className="ml-2">
        {outfit || 'Militant'}
      </Badge>
    );
  };

  return (
    <>
      <div className="rounded-md border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center">
                  ID {renderSortIcon('id')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('fullName')}
              >
                <div className="flex items-center">
                  Full Name {renderSortIcon('fullName')}
                </div>
              </TableHead>
              <TableHead>Identifiers</TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('dateOfBirth')}
              >
                <div className="flex items-center">
                  Date of Birth {renderSortIcon('dateOfBirth')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('nationality')}
              >
                <div className="flex items-center">
                  Nationality {renderSortIcon('nationality')}
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell className="font-medium">{profile.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      {profile.fullName}
                      {getMilitantBadge(profile.isMilitant, profile.militantOutfit)}
                    </div>
                    {profile.aliasNames && profile.aliasNames.length > 0 && (
                      <span className="text-xs text-gray-500 block">
                        Alias: {profile.aliasNames.join(', ')}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      {profile.fingerprintAvailable && (
                        <span className="text-xs flex items-center text-gray-700">
                          <FileText className="h-3 w-3 mr-1" /> Fingerprints
                        </span>
                      )}
                      {profile.photographAvailable && (
                        <span className="text-xs flex items-center text-gray-700">
                          <FileText className="h-3 w-3 mr-1" /> Photograph
                        </span>
                      )}
                      {profile.handwritingAvailable && (
                        <span className="text-xs flex items-center text-gray-700">
                          <FileText className="h-3 w-3 mr-1" /> Handwriting
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{profile.dateOfBirth}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1 text-gray-500" />
                      {profile.nationality}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={profile.isMilitant ? "destructive" : "secondary"}>
                      {profile.isMilitant ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setViewingProfile(profile)}
                    >
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24 text-gray-500">
                  No suspect profiles found matching your search criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, data.length)} of {data.length} entries
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {viewingProfile && (
        <SuspectProfileDetail
          profile={viewingProfile}
          onClose={() => setViewingProfile(null)}
        />
      )}
    </>
  );
};

export default SuspectProfileTable;
