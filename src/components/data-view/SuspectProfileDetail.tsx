import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SuspectProfile } from "@/types/dataView";
import {
  CalendarDays,
  Globe,
  MapPin,
  Phone,
  User,
  Briefcase,
  Flag,
  FileText,
  Network,
  ShieldAlert,
  Languages,
  Camera,
  Fingerprint,
  Image,
  Handshake,
  Banknote,
  GraduationCap,
} from "lucide-react";

interface SuspectProfileDetailProps {
  profile: SuspectProfile;
  onClose: () => void;
}

const SuspectProfileDetail = ({
  profile,
  onClose,
}: SuspectProfileDetailProps) => {
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center">
            <User className="h-5 w-5 mr-2" />
            {profile.fullName}
            {profile.isMilitant && (
              <Badge variant="destructive" className="ml-2">
                {profile.militantOutfit || "Militant"}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            Suspect Profile ID: {profile.id}
            {profile.aliasNames && profile.aliasNames.length > 0 && (
              <span className="ml-2">
                | Also known as: {profile.aliasNames.join(", ")}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="personal">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="relations">Relations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CalendarDays className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Date of Birth</p>
                    <p className="text-sm text-gray-600">
                      {profile.dateOfBirth}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Place of Birth</p>
                    <p className="text-sm text-gray-600">
                      {profile.placeOfBirth}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Nationality</p>
                    <p className="text-sm text-gray-600">
                      {profile.nationality}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Gender</p>
                    <p className="text-sm text-gray-600">{profile.sex}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Father's Name</p>
                    <p className="text-sm text-gray-600">
                      {profile.fatherName}
                    </p>
                    {profile.fatherAlias && (
                      <p className="text-xs text-gray-500">
                        Alias: {profile.fatherAlias}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <Flag className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Religion</p>
                    <p className="text-sm text-gray-600">
                      {profile.religion}
                      {profile.sect && ` / ${profile.sect}`}
                      {profile.subSect && ` / ${profile.subSect}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Address Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    Permanent Address
                  </p>
                  <p className="text-sm text-gray-600 ml-6">
                    {profile.permanentAddress}
                  </p>
                </div>
                <div>
                  <p className="font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    Present Address
                  </p>
                  <p className="text-sm text-gray-600 ml-6">
                    {profile.presentAddress}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Occupation</p>
                    <p className="text-sm text-gray-600">
                      {profile.occupation}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-sm text-gray-600">
                      {profile.educationQualifications
                        ? Array.isArray(profile.educationQualifications)
                          ? profile.educationQualifications.join(", ")
                          : profile.educationQualifications
                        : "Not available"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Languages className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-sm text-gray-600">
                      {profile.languagesKnown
                        ? Array.isArray(profile.languagesKnown)
                          ? profile.languagesKnown.join(", ")
                          : profile.languagesKnown
                        : "Not available"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Available Identifiers</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <Fingerprint className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">Fingerprint</p>
                    <p className="text-sm text-gray-600">
                      {profile.fingerprintAvailable
                        ? "Available"
                        : "Not available"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <Image className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">Photograph</p>
                    <p className="text-sm text-gray-600">
                      {profile.photographAvailable
                        ? "Available"
                        : "Not available"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <FileText className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">Handwriting</p>
                    <p className="text-sm text-gray-600">
                      {profile.handwritingAvailable
                        ? "Available"
                        : "Not available"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Identity Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.identityDocuments ? (
                  <p>Document details would be shown here</p>
                ) : (
                  <p className="text-gray-500">
                    No identity documents available
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Travel Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium flex items-center">
                    <Camera className="h-4 w-4 mr-2 text-gray-500" />
                    Camera Details
                  </p>
                  {profile.CameraDetails ? (
                    <div className="ml-6 mt-2">
                      <p className="text-sm text-gray-600">
                        Information would appear here
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 ml-6">
                      No Camera information available
                    </p>
                  )}
                </div>

                <Separator />

                <div>
                  <p className="font-medium flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-gray-500" />
                    Visa Details
                  </p>
                  {profile.visaDetails ? (
                    <div className="ml-6 mt-2">
                      <p className="text-sm text-gray-600">
                        Information would appear here
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 ml-6">
                      No visa information available
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Family & Relations</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.relatives ? (
                  <p>Relatives information would be shown here</p>
                ) : (
                  <p className="text-gray-500">
                    No relatives information available
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Associates</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.associates ? (
                  <p>Associates information would be shown here</p>
                ) : (
                  <p className="text-gray-500">
                    No associates information available
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Economic Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Banknote className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Economic Status</p>
                    <p className="text-sm text-gray-600">
                      {profile.economicStatus
                        ? "Information would appear here"
                        : "Not available"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Militant Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <ShieldAlert className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Militant Status</p>
                      <Badge
                        variant={
                          profile.isMilitant ? "destructive" : "secondary"
                        }
                      >
                        {profile.isMilitant
                          ? "Active Militant"
                          : "Not a Militant"}
                      </Badge>
                    </div>
                  </div>
                  {profile.isMilitant && profile.militantOutfit && (
                    <div className="flex items-start">
                      <Network className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Militant Outfit</p>
                        <p className="text-sm text-gray-600">
                          {profile.militantOutfit}
                        </p>
                      </div>
                    </div>
                  )}
                  {profile.isMilitant && profile.militantPosition && (
                    <div className="flex items-start">
                      <Briefcase className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Position in Organization</p>
                        <p className="text-sm text-gray-600">
                          {profile.militantPosition}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Travel History</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.countriesVisited ? (
                  <p>Travel history would be shown here</p>
                ) : (
                  <p className="text-gray-500">No travel history available</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cases & Crimes</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.crimeDetails ? (
                  <p>Crime details would be shown here</p>
                ) : (
                  <p className="text-gray-500">No crime history available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SuspectProfileDetail;
