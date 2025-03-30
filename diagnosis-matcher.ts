import { CONDITIONS } from "@/lib/symptom-data"

interface ProfileData {
  sex: string
  age: string
  weight: string
  heightFeet: string
  heightInches: string
  bodyComposition: {
    muscleMass: string
    fatPercentage: string
  }
  activityLevel: string
  preExistingConditions: string[]
  chronicConditions: string[]
  pastSurgeries: string[]
  familyHistory: string[]
  medications: string[]
  allergies: string[]
  diet: string
  hydration: string
  sleepPatterns: string
  stressLevels: string
  occupationalHazards: string
  location: string
  cardiovascularHealth: string
  respiratoryHealth: string
  hormonalBalance: string
  neurologicalHealth: string
  immuneSystemStrength: string
}

interface MatchResult {
  conditionId: number
  riskFactor: number // 0 to 1, higher means more likely based on profile
  keyFactors: string[] // Reasons why this condition matches the profile
}

export function getProfileBasedMatches(symptoms: string[], profile: ProfileData | null): MatchResult[] {
  // If no profile data, return empty array
  if (!profile) {
    return []
  }

  const matchResults: MatchResult[] = []

  // Get all conditions that match the symptoms
  const matchingConditions = CONDITIONS.filter((condition) =>
    condition.symptoms.some((symptom) => symptoms.includes(symptom)),
  )

  // For each matching condition, calculate a risk factor based on profile
  for (const condition of matchingConditions) {
    const keyFactors: string[] = []
    let riskFactor = 0.5 // Start with neutral risk

    // Age factors - parse age to number for comparisons
    const age = Number.parseInt(profile.age)
    if (!isNaN(age)) {
      // Children (0-12)
      if (age <= 12) {
        if (["Common Cold", "Influenza", "Fracture"].includes(condition.name)) {
          riskFactor += 0.1
          keyFactors.push("Children are more susceptible to viral illnesses and minor fractures")
        }
      }

      // Teens (13-19)
      else if (age <= 19) {
        if (["Fracture", "Sprain", "Concussion"].includes(condition.name)) {
          riskFactor += 0.12
          keyFactors.push("Teens have higher likelihood of sports injuries and stress fractures")
        }
      }

      // Adults (20-64)
      else if (age <= 64) {
        if (["Muscle Strain", "Tension Headache", "Lower Back Pain"].includes(condition.name)) {
          riskFactor += 0.1
          keyFactors.push("Adults commonly experience workplace-related injuries and stress conditions")
        }
      }

      // Elderly (65+)
      else {
        if (["Arthritis", "Fracture", "Heart Disease"].includes(condition.name)) {
          riskFactor += 0.15
          keyFactors.push(
            "Elderly individuals have increased risk of degenerative conditions and balance-related injuries",
          )
        }
      }

      // Specific age-related conditions
      if (condition.name === "Arthritis" && age > 60) {
        riskFactor += 0.1
        keyFactors.push("Age over 60 increases arthritis risk")
      }

      if (condition.name === "Heart Disease" && age > 50) {
        riskFactor += 0.1
        keyFactors.push("Age over 50 increases heart disease risk")
      }

      if (condition.name === "Fracture" && age > 65) {
        riskFactor += 0.1
        keyFactors.push("Higher fracture risk due to age-related bone density loss")
      }

      if (condition.name === "Influenza" && (age < 5 || age > 65)) {
        riskFactor += 0.1
        keyFactors.push("Age increases flu severity risk")
      }
    }

    // Activity Level factors
    if (profile.activityLevel) {
      // Sedentary
      if (profile.activityLevel === "sedentary") {
        if (["Heart Disease", "Lower Back Pain"].includes(condition.name)) {
          riskFactor += 0.12
          keyFactors.push("Sedentary lifestyle increases risk of cardiovascular and posture-related issues")
        }
      }

      // Moderately Active
      else if (["lightly-active", "moderately-active"].includes(profile.activityLevel)) {
        if (["Muscle Strain", "Sprain"].includes(condition.name)) {
          riskFactor += 0.08
          keyFactors.push("Moderate activity can lead to mild overuse injuries")
        }
      }

      // Highly Active
      else if (["very-active", "athlete"].includes(profile.activityLevel)) {
        if (["Sprain", "Fracture", "Muscle Strain", "Tendonitis"].includes(condition.name)) {
          riskFactor += 0.15
          keyFactors.push("High activity level increases risk of musculoskeletal injuries")
        }
      }
    }

    // Sex factors
    if (profile.sex === "female") {
      if (condition.name === "Migraine") {
        riskFactor += 0.12
        keyFactors.push("Migraines are more common in women")
      }

      if (condition.name === "Osteoporosis") {
        riskFactor += 0.15
        keyFactors.push("Women have higher risk of osteoporosis")
      }

      if (condition.name === "Thyroid Disorders") {
        riskFactor += 0.1
        keyFactors.push("Thyroid conditions are more prevalent in women")
      }
    }

    if (profile.sex === "male") {
      if (condition.name === "Heart Disease") {
        riskFactor += 0.1
        keyFactors.push("Men have higher risk of heart disease")
      }

      if (condition.name === "Hernia") {
        riskFactor += 0.08
        keyFactors.push("Men are more prone to certain types of hernias")
      }
    }

    // Pre-existing conditions
    for (const existingCondition of profile.preExistingConditions) {
      // Diabetes increases risk of many conditions
      if (existingCondition === "Diabetes") {
        if (["Fracture", "Influenza", "Heart Disease", "Infection"].includes(condition.name)) {
          riskFactor += 0.15
          keyFactors.push("Diabetes increases risk and severity of multiple conditions")
        }
      }

      // Asthma related
      if (existingCondition === "Asthma" && ["Common Cold", "Influenza", "Pneumonia"].includes(condition.name)) {
        riskFactor += 0.12
        keyFactors.push("Asthma can worsen respiratory infections")
      }

      // Heart conditions
      if (existingCondition === "Heart Disease" && ["Influenza", "Pneumonia", "Stroke"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("Heart disease increases complication risks")
      }

      // Arthritis
      if (existingCondition === "Arthritis" && ["Muscle Strain", "Tendonitis", "Bursitis"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Arthritis can lead to compensatory injuries")
      }

      // Hypertension
      if (
        existingCondition === "Hypertension" &&
        ["Heart Disease", "Stroke", "Kidney Disease"].includes(condition.name)
      ) {
        riskFactor += 0.15
        keyFactors.push("Hypertension is a major risk factor")
      }
    }

    // Chronic conditions
    for (const chronicCondition of profile.chronicConditions) {
      if (chronicCondition === "Chronic Pain" && ["Depression", "Anxiety", "Insomnia"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Chronic pain often leads to mental health conditions")
      }

      if (
        chronicCondition === "Back Pain" &&
        ["Sciatica", "Herniated Disc", "Muscle Strain"].includes(condition.name)
      ) {
        riskFactor += 0.12
        keyFactors.push("Existing back pain increases risk of related conditions")
      }

      if (chronicCondition === "Migraines" && ["Tension Headache", "Vertigo", "Anxiety"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Migraine sufferers often experience related neurological issues")
      }
    }

    // Past surgeries
    for (const surgery of profile.pastSurgeries) {
      if (surgery !== "None") {
        if (["Infection", "Scar Tissue Pain", "Adhesions"].includes(condition.name)) {
          riskFactor += 0.08
          keyFactors.push("Previous surgeries can lead to complications")
        }
      }

      // Specific surgery correlations
      if (surgery === "Knee Arthroscopy" && ["Knee Pain", "Arthritis", "Joint Stiffness"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Previous knee surgery increases risk of knee issues")
      }

      if (surgery === "Appendectomy" && condition.name === "Abdominal Adhesions") {
        riskFactor += 0.1
        keyFactors.push("Abdominal surgery can lead to adhesions")
      }
    }

    // Body composition
    if (profile.bodyComposition.muscleMass === "unhealthy" || profile.bodyComposition.muscleMass === "bad") {
      if (["Sprain", "Fracture", "Muscle Strain"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Low muscle mass increases injury risk")
      }
    }

    if (profile.bodyComposition.fatPercentage === "unhealthy" || profile.bodyComposition.fatPercentage === "bad") {
      if (["Heart Disease", "Diabetes", "Hypertension", "Joint Pain"].includes(condition.name)) {
        riskFactor += 0.12
        keyFactors.push("Higher body fat increases metabolic and joint-related risks")
      }
    }

    // Family history
    for (const familyCondition of profile.familyHistory) {
      if (familyCondition === "Heart Disease" && condition.name === "Heart Disease") {
        riskFactor += 0.2
        keyFactors.push("Family history of heart disease is a significant risk factor")
      }

      if (familyCondition === "Diabetes" && condition.name === "Diabetes") {
        riskFactor += 0.18
        keyFactors.push("Family history of diabetes increases risk")
      }

      if (familyCondition === "Cancer" && condition.name === "Cancer") {
        riskFactor += 0.15
        keyFactors.push("Family history of cancer can indicate genetic predisposition")
      }

      if (familyCondition === "Stroke" && ["Stroke", "Heart Disease"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("Family history of stroke increases cardiovascular risks")
      }

      if (familyCondition === "Migraine" && condition.name === "Migraine") {
        riskFactor += 0.15
        keyFactors.push("Migraines often have a genetic component")
      }
    }

    // Lifestyle factors
    if (profile.hydration === "unhealthy" || profile.hydration === "bad") {
      if (["Migraine", "Tension Headache", "Kidney Stones", "UTI"].includes(condition.name)) {
        riskFactor += 0.1
        keyFactors.push("Poor hydration increases risk of multiple conditions")
      }
    }

    if (profile.sleepPatterns === "unhealthy" || profile.sleepPatterns === "bad") {
      if (["Migraine", "Tension Headache", "Anxiety", "Depression", "Weakened Immunity"].includes(condition.name)) {
        riskFactor += 0.12
        keyFactors.push("Poor sleep affects both mental health and immune function")
      }
    }

    if (profile.stressLevels === "unhealthy" || profile.stressLevels === "bad") {
      if (["Tension Headache", "Migraine", "Anxiety", "Depression", "IBS"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("High stress is a known trigger for multiple conditions")
      }
    }

    if (profile.diet === "unhealthy" || profile.diet === "bad") {
      if (["Heart Disease", "Diabetes", "Hypertension", "GERD"].includes(condition.name)) {
        riskFactor += 0.12
        keyFactors.push("Poor diet is linked to many chronic conditions")
      }
    }

    // Occupational hazards
    if (profile.occupationalHazards === "high") {
      if (["Muscle Strain", "Back Pain", "Repetitive Strain Injury"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("High occupational hazards increase injury risk")
      }
    }

    // Physical health
    if (profile.cardiovascularHealth === "unhealthy" || profile.cardiovascularHealth === "bad") {
      if (["Heart Disease", "Stroke", "Hypertension"].includes(condition.name)) {
        riskFactor += 0.2
        keyFactors.push("Poor cardiovascular health is a major risk factor")
      }
    }

    if (profile.respiratoryHealth === "unhealthy" || profile.respiratoryHealth === "bad") {
      if (["Common Cold", "Influenza", "Pneumonia", "Bronchitis"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("Poor respiratory health increases infection risk and severity")
      }
    }

    if (profile.immuneSystemStrength === "unhealthy" || profile.immuneSystemStrength === "bad") {
      if (["Common Cold", "Influenza", "Infection", "Pneumonia"].includes(condition.name)) {
        riskFactor += 0.18
        keyFactors.push("Weakened immune system increases susceptibility to infections")
      }
    }

    if (profile.neurologicalHealth === "unhealthy" || profile.neurologicalHealth === "bad") {
      if (["Migraine", "Vertigo", "Seizure", "Neuropathy"].includes(condition.name)) {
        riskFactor += 0.15
        keyFactors.push("Poor neurological health increases risk of neurological conditions")
      }
    }

    if (profile.hormonalBalance === "unhealthy" || profile.hormonalBalance === "bad") {
      if (["Thyroid Disorders", "Diabetes", "Mood Disorders"].includes(condition.name)) {
        riskFactor += 0.12
        keyFactors.push("Hormonal imbalances can lead to various conditions")
      }
    }

    // Cap risk factor at 0.95
    riskFactor = Math.min(riskFactor, 0.95)

    matchResults.push({
      conditionId: condition.id,
      riskFactor,
      keyFactors,
    })
  }

  // Sort by risk factor, highest first
  return matchResults.sort((a, b) => b.riskFactor - a.riskFactor)
}

