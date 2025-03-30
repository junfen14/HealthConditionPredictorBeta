// This file contains a comprehensive database of health conditions, symptoms, and recovery plans

import { CONDITIONS } from "@/lib/symptom-data"

export interface Symptom {
  id: string
  name: string
  aliases: string[] // Alternative ways users might describe this symptom
  description: string
  bodyParts?: string[]
  category?: string
  severity?: "mild" | "moderate" | "severe"
}

export interface RecoveryStage {
  name: string
  timeframe: string
  description: string
  milestones: string[]
  watchOutFor?: string[]
  tasks: RecoveryTask[]
}

export interface RecoveryTask {
  id: string
  title: string
  description: string
  duration: string
  frequency: string
  completed?: boolean
}

export interface Condition {
  id: string
  name: string
  category: string
  type?: string // Subtype of the condition
  symptoms: string[]
  description: string
  detailedDescription: string
  recoveryTime: string
  urgency: "Low" | "Medium" | "High" | "Emergency"
  causes: string[]
  treatmentSummary: string
  recoveryStages: RecoveryStage[]
  whenToSeeDoctor: string
  preventionTips: string[]
  dosAndDonts?: {
    dos: string[]
    donts: string[]
  }
  treatmentSimple: string
  treatmentDetailed: any[]
}

// Comprehensive list of symptoms with variations
export const COMPREHENSIVE_SYMPTOMS: Symptom[] = []

// Comprehensive list of health conditions with detailed recovery plans
export const COMPREHENSIVE_CONDITIONS: Condition[] = []

// Helper function to get symptoms by body part
export function getComprehensiveSymptomsByBodyPart(bodyPart: string): Symptom[] {
  return COMPREHENSIVE_SYMPTOMS.filter(
    (symptom) => symptom.bodyParts && symptom.bodyParts.some((part) => part.toLowerCase() === bodyPart.toLowerCase()),
  )
}

// Helper function to get conditions by symptom
export function getComprehensiveConditionsBySymptom(symptomName: string): Condition[] {
  return COMPREHENSIVE_CONDITIONS.filter((condition) =>
    condition.symptoms.some(
      (s) =>
        s.toLowerCase() === symptomName.toLowerCase() ||
        COMPREHENSIVE_SYMPTOMS.find(
          (symptom) =>
            symptom.name === s && symptom.aliases.some((alias) => alias.toLowerCase() === symptomName.toLowerCase()),
        ),
    ),
  )
}

// Helper function to get all symptoms with their variations
export function getAllSymptomVariations(): { name: string; original: string }[] {
  const variations: { name: string; original: string }[] = []

  COMPREHENSIVE_SYMPTOMS.forEach((symptom) => {
    // Add the main symptom name
    variations.push({ name: symptom.name, original: symptom.name })

    // Add all aliases
    symptom.aliases.forEach((alias) => {
      variations.push({ name: alias, original: symptom.name })
    })
  })

  return variations
}

// Helper function to match symptoms to conditions with personalization
export interface PersonalFactors {
  age?: number
  sex?: "male" | "female" | "other"
  activityLevel?: "sedentary" | "light" | "moderate" | "very" | "athlete"
  preExistingConditions?: string[]
  occupation?: string
  lifestyle?: {
    smoking?: boolean
    alcohol?: boolean
    exercise?: boolean
  }
}

export interface MatchResult {
  condition: any
  matchPercentage: string
  matchScore: number
  keyFactors: string[]
}

export function matchSymptomsToConditions(symptoms: string[], personalFactors?: PersonalFactors): MatchResult[] {
  if (!symptoms.length) return []

  // First, match conditions based on symptoms
  const matchedConditions = CONDITIONS.map((condition) => {
    const matchCount = condition.symptoms.filter((symptom) =>
      symptoms.some(
        (s) => symptom.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(symptom.toLowerCase()),
      ),
    ).length

    const matchScore = matchCount / Math.max(symptoms.length, condition.symptoms.length)

    return {
      condition,
      matchScore,
      matchPercentage: `${Math.round(matchScore * 100)}%`,
      keyFactors: [] as string[],
    }
  }).filter((result) => result.matchScore > 0)

  // Sort by match score
  const results = matchedConditions.sort((a, b) => b.matchScore - a.matchScore)

  return results.map((result) => ({
    ...result,
    condition: {
      ...result.condition,
      treatmentSummary: result.condition.treatmentSimple,
    },
  }))
}

export const comprehensiveConditions = []

