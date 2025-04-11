
// Types for the dashboard components

export type ThreatLevel = "low" | "medium" | "high";
export type DocumentStatus = "verified" | "flagged" | "pending";
export type EventCategory = "travel" | "personal" | "crime";

export interface NetworkContact {
  id: string;
  name: string;
  connections: number;
  risk: ThreatLevel;
}

export interface FinancialSource {
  name: string;
  amount: number;
  percentage: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  category: EventCategory;
}

export interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
  date: string;
  notes?: string;
}

export interface BehavioralTrait {
  name: string;
  value: number;
}

export interface BehavioralCategory {
  category: string;
  traits: BehavioralTrait[];
}
