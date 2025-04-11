
// Basic Types
export type Gender = "Male" | "Female" | "Other";
export type ThreatLevel = "low" | "medium" | "high";

// Main Suspect Profile Type
export interface SuspectProfile {
  id: string;
  fullName: string;
  aliasNames?: string[];
  fatherName: string;
  fatherAlias?: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  sex: Gender;
  religion?: string;
  sect?: string;
  subSect?: string;
  caste?: string;
  permanentAddress: string;
  presentAddress: string;
  contactDetails?: ContactDetails;
  educationQualifications?: string[] | string;
  languagesKnown?: string[] | string;
  occupation?: string;
  descriptiveRoll?: DescriptiveRoll;
  identityDocuments?: IdentityDocument[];
  passportDetails?: PassportDetails;
  visaDetails?: VisaDetails[];
  photographAvailable: boolean;
  handwritingAvailable: boolean;
  fingerprintAvailable: boolean;
  relatives?: Relative[];
  govServiceRelatives?: Relative[];
  economicStatus?: EconomicStatus;
  assets?: Asset[];
  documentsObtainedVia?: string;
  socialMediaProfiles?: SocialMediaProfile[];
  mobileAppsUsed?: MobileApp[];
  isMilitant: boolean;
  militantOutfit?: string;
  militantPosition?: string;
  countriesVisited?: TravelRecord[];
  illegalBorderCrossings?: BorderCrossing[];
  placesOfStay?: string[];
  arrestDetails?: ArrestInfo;
  crimeDetails?: Crime[];
  recoverySeizures?: string[];
  caseFacts?: string;
  category?: string;
  associates?: Associate[];
  hideouts?: string[];
  politicalLinks?: Link[];
  socioReligiousLinks?: Link[];
  foreignMilitantLinks?: Link[];
  trainedAbroad?: boolean;
  trainingDetails?: Training[];
  visitedPlaces?: string[];
  recruitmentMethod?: string;
  radicalizationMethod?: string;
  modusOperandi?: string;
  vipThreatKnowledge?: boolean;
  identifierPersons?: Identifier[];
  interrogatorAssessment?: string;
  interrogators?: string[];
  remarks?: string;
  briefHistory?: string;
  adverseInfo?: string;
  areaOfActivity?: string[];
}

// Address Details
export interface Address {
  locality?: string;
  village?: string;
  talukaOrMandal?: string;
  policeStation?: string;
  district?: string;
  state?: string;
}

// Contact Details
export interface ContactDetails {
  phoneNumbers?: string[];
  emails?: string[];
  socialProfiles?: string[];
}

// Descriptive Roll (Physical Description)
export interface DescriptiveRoll {
  age?: number;
  height?: string;
  complexion?: string;
  face?: string;
  eyes?: string;
  hair?: string;
  beard?: string;
  moustache?: string;
  nose?: string;
  built?: string;
  identificationMarks?: string[];
  dress?: string;
  wearsSpectacles?: boolean;
  disguises?: string[];
  specialFeatures?: string[];
  habitsOrWeaknesses?: string[];
}

// Identity Document 
export interface IdentityDocument {
  type: string;
  name: string;
  parentage?: string;
  address?: string;
  number: string;
  issueDate?: string;
  expiryDate?: string;
  issuedBy?: string;
  obtainedThrough?: string;
}

// Passport Details
export interface PassportDetails {
  number: string;
  issueDate?: string;
  validUpto?: string;
  issuedBy?: string;
  obtainedThrough?: string;
}

// Visa Details
export interface VisaDetails {
  country: string;
  visaNumber: string;
  validFrom?: string;
  validTo?: string;
  usedFrom?: string;
  usedTo?: string;
}

// Relative Information
export interface Relative {
  relation: string;
  name: string;
  address?: string;
}

// Economic Status
export interface EconomicStatus {
  sourceOfFunds?: string[];
  annualIncome?: string;
  mainFinanciers?: string[];
}

// Asset
export interface Asset {
  type: string;
  name: string;
  valueInRupees?: number;
}

// Social Media Profile
export interface SocialMediaProfile {
  platform: string;
  userId: string;
  activityDescription?: string;
  activePeriod?: string;
}

// Mobile App
export interface MobileApp {
  platform: string;
  userId?: string;
  activityDescription?: string;
  activePeriod?: string;
}

// Travel Record
export interface TravelRecord {
  country: string;
  startDate?: string;
  endDate?: string;
  purpose?: string;
}

// Border Crossing
export interface BorderCrossing {
  route: string;
  date?: string;
  intermediateStops?: string[];
}

// Arrest Information
export interface ArrestInfo {
  arrestDate: string;
  placeOfArrest: string;
  arrestingAgency?: string;
}

// Crime
export interface Crime {
  crimeNumber: string;
  occurrenceDate?: string;
  section?: string;
  placeOfOccurrence?: string;
  district?: string;
  state?: string;
  reportDate?: string;
  chargeSheetDate?: string;
}

// Associate
export interface Associate {
  name: string;
  alias?: string;
  address?: string;
  drNumber?: string;
  phoneNumber?: string;
  location?: string;
}

// Link (Political, Socio-religious, Foreign)
export interface Link {
  name: string;
  organization?: string;
  roleOrRelationship?: string;
}

// Training
export interface Training {
  location: string;
  duration?: string;
  typeOfTraining?: string;
  campCommander?: string;
  trainers?: string[];
  visitingSupervisors?: string[];
  infrastructureNotes?: string;
  journeyDetails?: string;
}

// Identifier
export interface Identifier {
  name: string;
  role?: string;
  agency?: string;
}
