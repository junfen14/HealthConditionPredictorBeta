// Utility functions for working with conditions and recovery plans

import { CONDITIONS } from "@/lib/symptom-data"
import { COMPREHENSIVE_CONDITIONS } from "@/lib/comprehensive-conditions"

/**
 * Find a condition by ID, slug, or name across all condition sources
 * @param identifier - The condition ID, slug, or name
 * @returns The found condition or undefined
 */
export function findConditionByIdentifier(identifier: string | number) {
  // Try to find in COMPREHENSIVE_CONDITIONS first
  const condition = COMPREHENSIVE_CONDITIONS.find(
    (c) =>
      c.id === identifier ||
      c.id.toString() === identifier ||
      c.name.toLowerCase().replace(/\s+/g, "-") === identifier.toString().toLowerCase(),
  )

  // If not found, try to find in the regular CONDITIONS array
  if (!condition) {
    const regularCondition = CONDITIONS.find(
      (c) =>
        c.id === identifier ||
        c.id.toString() === identifier ||
        c.name.toLowerCase().replace(/\s+/g, "-") === identifier.toString().toLowerCase(),
    )

    if (regularCondition) {
      return regularCondition
    }
  }

  return condition
}

/**
 * Get a recovery plan for a condition
 * @param conditionId - The condition ID
 * @returns The recovery plan data
 */
export function getRecoveryPlan(conditionId: string | number) {
  const condition = findConditionByIdentifier(conditionId)

  if (!condition) {
    return null
  }

  // If it's a comprehensive condition, it already has recovery stages with tasks
  if ("recoveryStages" in condition && condition.recoveryStages[0]?.tasks) {
    return {
      condition,
      stages: condition.recoveryStages,
    }
  }

  // For regular conditions, create a basic recovery plan
  return {
    condition,
    stages: condition.recoveryStages.map((stage) => ({
      name: stage.timeframe,
      timeframe: stage.timeframe,
      description: stage.description,
      milestones: stage.milestones,
      watchOutFor: stage.watchOutFor,
      tasks: [
        {
          id: `${condition.id}-task-1-${stage.timeframe.replace(/\s+/g, "-")}`,
          title: "Follow treatment plan",
          description: "Follow the treatment plan as prescribed by your healthcare provider.",
          duration: "Ongoing",
          frequency: "Daily",
        },
        {
          id: `${condition.id}-task-2-${stage.timeframe.replace(/\s+/g, "-")}`,
          title: "Monitor symptoms",
          description: "Keep track of your symptoms and report any changes to your healthcare provider.",
          duration: "5 min",
          frequency: "Daily",
        },
        {
          id: `${condition.id}-task-3-${stage.timeframe.replace(/\s+/g, "-")}`,
          title: "Rest and recover",
          description: "Get adequate rest to support your body's healing process.",
          duration: "As needed",
          frequency: "Daily",
        },
      ],
    })),
  }
}

/**
 * Get default recovery tasks for a condition stage
 * @param conditionId - The condition ID
 * @param stage - The recovery stage (1-4)
 * @returns Array of recovery tasks
 */
export function getDefaultRecoveryTasks(conditionId: string | number, stage: number) {
  const condition = findConditionByIdentifier(conditionId)

  if (!condition) {
    return []
  }

  // Default tasks for any condition
  return [
    {
      id: `${conditionId}-default-${stage}-1`,
      title: "Follow medical advice",
      description: "Follow all instructions from your healthcare provider.",
      duration: "Ongoing",
      frequency: "Daily",
    },
    {
      id: `${conditionId}-default-${stage}-2`,
      title: "Track symptoms",
      description: "Keep a journal of your symptoms and recovery progress.",
      duration: "5 min",
      frequency: "Daily",
    },
    {
      id: `${conditionId}-default-${stage}-3`,
      title: "Maintain healthy habits",
      description: "Stay hydrated, eat nutritious foods, and get adequate rest.",
      duration: "Ongoing",
      frequency: "Daily",
    },
  ]
}

