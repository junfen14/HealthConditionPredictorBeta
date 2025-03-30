import { NextResponse } from "next/server"

// This would connect to a real database in production
// For now, we'll use a predefined dataset of symptoms and conditions
const conditions = [
  {
    id: 1,
    name: "Muscle Strain",
    category: "Injury",
    symptoms: ["pain", "swelling", "limited mobility", "muscle spasms"],
    description: "A muscle strain occurs when your muscle is overstretched or torn.",
    recoveryTime: "2 days to 3 weeks",
  },
  {
    id: 2,
    name: "Tension Headache",
    category: "Pain",
    symptoms: ["headache", "pressure around forehead", "tenderness on scalp"],
    description:
      "Tension headaches are the most common type of headache and feel like a constant ache or pressure around the head.",
    recoveryTime: "A few hours to 2 days",
  },
  {
    id: 3,
    name: "Common Cold",
    category: "Illness",
    symptoms: ["runny nose", "cough", "sore throat", "sneezing", "congestion"],
    description: "The common cold is a viral infection of your nose and throat.",
    recoveryTime: "7-10 days",
  },
  {
    id: 4,
    name: "Flu",
    category: "Illness",
    symptoms: ["fever", "body aches", "chills", "headache", "fatigue", "cough"],
    description: "Influenza is a viral infection that attacks your respiratory system.",
    recoveryTime: "1-2 weeks",
  },
  {
    id: 5,
    name: "Ankle Sprain",
    category: "Injury",
    symptoms: ["ankle pain", "swelling", "bruising", "limited mobility"],
    description: "An ankle sprain occurs when the ligaments in your ankle tear or stretch too far.",
    recoveryTime: "2 weeks to 3 months",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const symptoms = searchParams.get("symptoms")

  if (!symptoms) {
    return NextResponse.json(conditions)
  }

  // Parse symptoms into an array
  const symptomList = symptoms.split(",").map((s) => s.trim().toLowerCase())

  // Match conditions to symptoms
  const matchedConditions = conditions.map((condition) => {
    const matchCount = condition.symptoms.filter((symptom) =>
      symptomList.some((s) => symptom.includes(s) || s.includes(symptom)),
    ).length

    const matchScore = matchCount / Math.max(symptomList.length, condition.symptoms.length)

    return {
      ...condition,
      matchScore: matchScore,
      matchPercentage: `${Math.round(matchScore * 100)}%`,
    }
  })

  // Sort by match score
  const sortedConditions = matchedConditions.filter((c) => c.matchScore > 0).sort((a, b) => b.matchScore - a.matchScore)

  return NextResponse.json(sortedConditions)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, this would validate and save user symptom data
    // For now, just echo back the data
    return NextResponse.json({
      success: true,
      message: "Symptom data received",
      data: body,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request data" }, { status: 400 })
  }
}

