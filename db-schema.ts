// This file defines the database schema that would be used in a production app
// For the demo, we're using mock data, but this shows how the data would be structured

// User schema
export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
  profile?: UserProfile
  recoveryPlans: RecoveryPlan[]
  symptoms: SymptomRecord[]
}

// User profile for more detailed health information
export interface UserProfile {
  userId: string
  age?: number
  sex?: "male" | "female" | "other"
  weight?: number // in kg
  height?: number // in cm
  activityLevel?: "sedentary" | "light" | "moderate" | "very" | "athlete"
  preExistingConditions?: string[]
  medications?: string[]
  allergies?: string[]
}

// Symptoms that users can search for
export interface Symptom {
  id: string
  name: string
  aliases: string[] // other names for the same symptom
  bodyParts: string[] // related body parts
  description: string
  relatedSymptoms: string[] // IDs of related symptoms
}

// Health conditions that match symptoms
export interface Condition {
  id: string
  name: string
  category: "disease" | "injury" | "pain" | "other"
  description: string
  causes: string[]
  symptoms: string[] // IDs of related symptoms
  treatmentSummary: string
  treatmentDetailed: TreatmentStep[]
  recoveryTime: string
  urgencyLevel: "low" | "medium" | "high" | "emergency"
  whenToSeeDoctor: string
  preventionTips: string[]
}

// Steps for treating a condition
export interface TreatmentStep {
  title: string
  description: string
  imageUrl?: string
}

// User's symptom search records
export interface SymptomRecord {
  id: string
  userId: string
  symptoms: string[] // symptom IDs or names
  bodyParts?: string[]
  severity?: number // 1-10
  dateRecorded: Date
  matchedConditions: {
    conditionId: string
    matchScore: number
  }[]
}

// Recovery plan created for a user
export interface RecoveryPlan {
  id: string
  userId: string
  conditionId: string
  startDate: Date
  endDate: Date
  status: "active" | "completed" | "abandoned"
  progress: number // 0-100%
  dailyTasks: RecoveryTask[]
  progressLogs: ProgressLog[]
}

// Tasks within a recovery plan
export interface RecoveryTask {
  id: string
  recoveryPlanId: string
  title: string
  description: string
  frequency: "daily" | "weekly" | "custom"
  duration: number // in minutes
  completedDates: Date[]
}

// Progress updates for recovery
export interface ProgressLog {
  id: string
  recoveryPlanId: string
  date: Date
  painLevel?: number // 1-10
  notes?: string
  symptoms?: string[]
}

// Mapping between symptoms and conditions
export interface SymptomConditionMap {
  symptomId: string
  conditionId: string
  weight: number // 0-1, importance of this symptom for this condition
}

