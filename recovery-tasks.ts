// Define the RecoveryTask interface
interface RecoveryTask {
  id: string
  title: string
  description: string
  duration: string
  frequency: string
  stage: number // 1 = Acute, 2 = Subacute, 3 = Rehabilitation, 4 = Maintenance
  conditionId: number
}

// Collection of recovery tasks for different conditions
export const RECOVERY_TASKS: RecoveryTask[] = [
  // Fracture (id: 1) recovery tasks
  // Acute Stage (0-2 Weeks)
  {
    id: "fracture-1-1",
    title: "Immobilization maintenance",
    description: "Keep cast/splint dry and clean. Check for any signs of damage or loosening.",
    duration: "5 min",
    frequency: "Twice daily",
    stage: 1,
    conditionId: 1,
  },
  {
    id: "fracture-1-2",
    title: "Apply ice to reduce swelling",
    description: "Apply ice wrapped in a towel to the injured area for 15-20 minutes.",
    duration: "15-20 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: 1,
  },
  {
    id: "fracture-1-3",
    title: "Elevate injured limb",
    description: "Keep the injured area elevated above the level of your heart when resting to reduce swelling.",
    duration: "Ongoing",
    frequency: "When resting",
    stage: 1,
    conditionId: 1,
  },
  {
    id: "fracture-1-4",
    title: "Take prescribed pain medication",
    description: "Take pain medication as prescribed by your doctor to manage pain.",
    duration: "As prescribed",
    frequency: "As prescribed",
    stage: 1,
    conditionId: 1,
  },
  {
    id: "fracture-1-5",
    title: "Monitor for complications",
    description:
      "Check for increased pain, numbness, tingling, blue/gray skin color, or inability to move fingers/toes.",
    duration: "5 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: 1,
  },
  {
    id: "fracture-2-1",
    title: "Gentle range of motion exercises",
    description:
      "Perform gentle movement of joints adjacent to the fracture as recommended by your healthcare provider.",
    duration: "5-10 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 1,
  },
  {
    id: "fracture-2-2",
    title: "Gradual weight-bearing activities",
    description: "Begin putting weight on the injured area as directed by your doctor.",
    duration: "5-15 min",
    frequency: "As tolerated, following medical advice",
    stage: 2,
    conditionId: 1,
  },
  {
    id: "fracture-2-3",
    title: "Calcium and vitamin D intake",
    description:
      "Ensure adequate calcium (dairy, leafy greens) and vitamin D (sunlight, supplements if prescribed) for bone healing.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 2,
    conditionId: 1,
  },
  {
    id: "fracture-2-4",
    title: "Protein-rich diet",
    description: "Consume adequate protein to support tissue repair and bone healing.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 2,
    conditionId: 1,
  },
  {
    id: "fracture-3-1",
    title: "Strength training exercises",
    description: "Begin strength training exercises as directed by your physical therapist.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 1,
  },
  {
    id: "fracture-3-2",
    title: "Weight-bearing exercises",
    description: "Start gradual weight-bearing exercises as advised by your healthcare provider.",
    duration: "15-30 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 1,
  },
  {
    id: "fracture-3-3",
    title: "Balance and proprioception training",
    description: "Practice exercises to improve balance and joint position awareness.",
    duration: "10-15 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 1,
  },
  {
    id: "fracture-3-4",
    title: "Functional movement practice",
    description: "Practice everyday movements that were affected by your fracture.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 1,
  },
  {
    id: "fracture-4-1",
    title: "Return-to-activity assessment",
    description: "Work with your healthcare provider to determine when you can safely return to normal activities.",
    duration: "30-60 min",
    frequency: "Once, at end of rehabilitation",
    stage: 4,
    conditionId: 1,
  },
  {
    id: "fracture-4-2",
    title: "Bone-strengthening exercises",
    description: "Continue weight-bearing exercises to maintain bone density.",
    duration: "20-30 min",
    frequency: "3-4 times weekly",
    stage: 4,
    conditionId: 1,
  },
  {
    id: "fracture-4-3",
    title: "Fall prevention strategies",
    description: "Implement strategies to prevent falls and future fractures.",
    duration: "Ongoing",
    frequency: "Daily",
    stage: 4,
    conditionId: 1,
  },
  {
    id: "sprain-1-1",
    title: "R.I.C.E. protocol",
    description: "Rest, Ice, Compression, Elevation - Follow all components of the RICE protocol.",
    duration: "Ongoing",
    frequency: "Throughout the day",
    stage: 1,
    conditionId: 3,
  },
  {
    id: "sprain-1-2",
    title: "Apply cold therapy",
    description: "Apply ice wrapped in a cloth to the sprained area for 15-20 minutes.",
    duration: "15-20 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: 3,
  },
  {
    id: "sprain-1-3",
    title: "Compression bandage",
    description:
      "Apply an elastic bandage to help reduce swelling. Not too tight - should not cause numbness or tingling.",
    duration: "Ongoing",
    frequency: "Throughout day, remove at night",
    stage: 1,
    conditionId: 3,
  },
  {
    id: "sprain-1-4",
    title: "Elevate injured area",
    description: "Keep the injured area elevated above heart level to reduce swelling.",
    duration: "As much as possible",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 3,
  },
  {
    id: "sprain-1-5",
    title: "Non-weight bearing",
    description: "Avoid putting weight on the injured area. Use crutches or other assistive devices if necessary.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 3,
  },
  {
    id: "sprain-2-1",
    title: "Gentle stretching",
    description: "Perform gentle stretching exercises for the affected area as pain allows.",
    duration: "5-10 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 3,
  },
  {
    id: "sprain-2-2",
    title: "Range of motion exercises",
    description: "Slowly increase range of motion exercises for the affected joint.",
    duration: "10-15 min",
    frequency: "Twice daily",
    stage: 2,
    conditionId: 3,
  },
  {
    id: "sprain-2-3",
    title: "Begin partial weight-bearing",
    description: "Start to gradually put weight on the injured area as tolerated.",
    duration: "Throughout day",
    frequency: "As tolerated",
    stage: 2,
    conditionId: 3,
  },
  {
    id: "sprain-2-4",
    title: "Heat therapy",
    description: "Apply heat to the area to increase blood flow (after initial 48-72 hours).",
    duration: "15-20 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 3,
  },
  {
    id: "sprain-3-1",
    title: "Strength training",
    description: "Begin strengthening exercises for the affected area.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 3,
  },
  {
    id: "sprain-3-2",
    title: "Balance training",
    description: "Practice balance exercises to restore proprioception (especially for ankle sprains).",
    duration: "10 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 3,
  },
  {
    id: "sprain-3-3",
    title: "Functional movement practice",
    description: "Practice sport-specific or daily activities to restore normal function.",
    duration: "15-30 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 3,
  },
  {
    id: "sprain-3-4",
    title: "Agility exercises",
    description: "Begin agility training with direction changes and controlled movements.",
    duration: "15-20 min",
    frequency: "Every other day",
    stage: 3,
    conditionId: 3,
  },
  {
    id: "sprain-4-1",
    title: "Return to full activity",
    description: "Gradually return to full activity levels as tolerated and approved by healthcare provider.",
    duration: "As tolerated",
    frequency: "Progressive increase",
    stage: 4,
    conditionId: 3,
  },
  {
    id: "sprain-4-2",
    title: "Preventive exercises",
    description: "Continue balance and strengthening exercises to prevent re-injury.",
    duration: "15-20 min",
    frequency: "3 times weekly",
    stage: 4,
    conditionId: 3,
  },
  {
    id: "sprain-4-3",
    title: "Proper warm-up routine",
    description: "Develop and maintain a thorough warm-up routine before physical activity.",
    duration: "10-15 min",
    frequency: "Before activity",
    stage: 4,
    conditionId: 3,
  },
  {
    id: "cold-1-1",
    title: "Stay hydrated",
    description: "Drink plenty of fluids such as water, clear broth, or warm lemon water with honey.",
    duration: "Throughout day",
    frequency: "Hourly",
    stage: 1,
    conditionId: 4,
  },
  {
    id: "cold-1-2",
    title: "Gargle saltwater",
    description: "Gargle with 1/4 to 1/2 teaspoon salt dissolved in 8 ounces of warm water to relieve a sore throat.",
    duration: "30 seconds",
    frequency: "2-3 times daily",
    stage: 1,
    conditionId: 4,
  },
  {
    id: "cold-1-3",
    title: "Use saline nasal drops",
    description: "Use saline nasal drops or spray to relieve nasal congestion.",
    duration: "1 min",
    frequency: "As needed",
    stage: 1,
    conditionId: 4,
  },
  {
    id: "cold-1-4",
    title: "Rest adequately",
    description: "Get plenty of rest to help your body fight the infection.",
    duration: "7-9 hours",
    frequency: "Nightly + naps as needed",
    stage: 1,
    conditionId: 4,
  },
  {
    id: "cold-1-5",
    title: "Humidify the air",
    description: "Use a humidifier or take a steamy shower to add moisture to the air and ease congestion.",
    duration: "15-20 min (shower) or ongoing (humidifier)",
    frequency: "As needed",
    stage: 1,
    conditionId: 4,
  },
  {
    id: "cold-2-1",
    title: "Take OTC medications",
    description: "Take over-the-counter medications like acetaminophen as directed for symptom relief.",
    duration: "As directed",
    frequency: "As directed on packaging",
    stage: 2,
    conditionId: 4,
  },
  {
    id: "cold-2-2",
    title: "Use a humidifier",
    description: "Use a clean humidifier or cool mist vaporizer to add moisture to the air.",
    duration: "While sleeping",
    frequency: "Nightly",
    stage: 2,
    conditionId: 4,
  },
  {
    id: "cold-2-3",
    title: "Honey for cough",
    description: "Take 1-2 teaspoons of honey to soothe a cough (not for children under 1 year).",
    duration: "Immediate",
    frequency: "As needed for cough",
    stage: 2,
    conditionId: 4,
  },
  {
    id: "cold-2-4",
    title: "Vitamin C intake",
    description: "Consume vitamin C-rich foods or supplements to support immune function.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 2,
    conditionId: 4,
  },
  {
    id: "cold-3-1",
    title: "Light physical activity",
    description: "Begin light activity as you start feeling better to boost circulation and immunity.",
    duration: "10-15 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 4,
  },
  {
    id: "cold-3-2",
    title: "Increase fluid intake",
    description: "Continue to drink plenty of fluids to help thin mucus and keep the body hydrated.",
    duration: "Throughout day",
    frequency: "Hourly",
    stage: 3,
    conditionId: 4,
  },
  {
    id: "cold-3-3",
    title: "Monitor for complications",
    description:
      "Watch for signs of secondary infections like sinusitis or bronchitis (worsening symptoms after improvement).",
    duration: "5 min",
    frequency: "Daily",
    stage: 3,
    conditionId: 4,
  },
  {
    id: "cold-3-4",
    title: "Resume normal diet",
    description: "Focus on nutrient-rich foods to support recovery and immune function.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 3,
    conditionId: 4,
  },
  {
    id: "cold-4-1",
    title: "Preventive hand washing",
    description: "Practice regular hand washing to prevent future infections.",
    duration: "20 seconds",
    frequency: "Multiple times daily",
    stage: 4,
    conditionId: 4,
  },
  {
    id: "cold-4-2",
    title: "Immune-boosting habits",
    description: "Maintain healthy sleep, diet, and exercise habits to support immune function.",
    duration: "Ongoing",
    frequency: "Daily",
    stage: 4,
    conditionId: 4,
  },
  {
    id: "cold-4-3",
    title: "Stress management",
    description: "Practice stress reduction techniques to support immune health.",
    duration: "15-20 min",
    frequency: "Daily",
    stage: 4,
    conditionId: 4,
  },
  {
    id: "migraine-1-1",
    title: "Rest in dark, quiet room",
    description: "Rest in a dark, quiet room with minimal stimulation.",
    duration: "30+ min",
    frequency: "As needed",
    stage: 1,
    conditionId: 7,
  },
  {
    id: "migraine-1-2",
    title: "Apply cold compress",
    description: "Apply a cold compress to your forehead or neck.",
    duration: "15 min",
    frequency: "Every hour as needed",
    stage: 1,
    conditionId: 7,
  },
  {
    id: "migraine-1-3",
    title: "Take prescribed medication",
    description: "Take migraine medication as prescribed by your doctor at first sign of migraine.",
    duration: "As prescribed",
    frequency: "As prescribed",
    stage: 1,
    conditionId: 7,
  },
  {
    id: "migraine-1-4",
    title: "Stay hydrated",
    description: "Drink water or electrolyte beverages even if nauseous.",
    duration: "Throughout attack",
    frequency: "Small sips frequently",
    stage: 1,
    conditionId: 7,
  },
  {
    id: "migraine-1-5",
    title: "Pressure point therapy",
    description: "Apply gentle pressure to temples or between thumb and index finger.",
    duration: "5-10 min",
    frequency: "As needed",
    stage: 1,
    conditionId: 7,
  },
  {
    id: "migraine-2-1",
    title: "Practice deep breathing",
    description: "Practice deep, slow breathing to help manage pain and reduce stress.",
    duration: "10 min",
    frequency: "Every 1-2 hours",
    stage: 2,
    conditionId: 7,
  },
  {
    id: "migraine-2-2",
    title: "Stay hydrated",
    description: "Drink plenty of water as dehydration can worsen migraines.",
    duration: "Throughout day",
    frequency: "Hourly",
    stage: 2,
    conditionId: 7,
  },
  {
    id: "migraine-2-3",
    title: "Gentle neck stretches",
    description: "Perform gentle neck and shoulder stretches to relieve tension.",
    duration: "5-10 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 7,
  },
  {
    id: "migraine-2-4",
    title: "Gradual return to activity",
    description: "Slowly return to normal activities, being mindful of potential triggers.",
    duration: "Throughout day",
    frequency: "As tolerated",
    stage: 2,
    conditionId: 7,
  },
  {
    id: "migraine-3-1",
    title: "Gentle stretching",
    description: "Perform gentle neck and shoulder stretches if tension is contributing to your migraine.",
    duration: "5-10 min",
    frequency: "3-4 times daily",
    stage: 3,
    conditionId: 7,
  },
  {
    id: "migraine-3-2",
    title: "Regular sleep schedule",
    description: "Maintain consistent sleep and wake times, even on weekends.",
    duration: "7-9 hours",
    frequency: "Nightly",
    stage: 3,
    conditionId: 7,
  },
  {
    id: "migraine-3-3",
    title: "Regular meals",
    description: "Eat regular meals to maintain blood sugar levels.",
    duration: "Throughout day",
    frequency: "Every 3-4 hours",
    stage: 3,
    conditionId: 7,
  },
  {
    id: "migraine-3-4",
    title: "Moderate exercise",
    description: "Engage in regular moderate exercise to reduce migraine frequency.",
    duration: "30 min",
    frequency: "3-5 times weekly",
    stage: 3,
    conditionId: 7,
  },
  {
    id: "migraine-4-1",
    title: "Journal triggers",
    description: "Record potential triggers in a migraine journal to identify patterns.",
    duration: "5 min",
    frequency: "Daily",
    stage: 4,
    conditionId: 7,
  },
  {
    id: "migraine-4-2",
    title: "Practice stress management",
    description: "Engage in regular stress-reduction activities such as meditation or gentle yoga.",
    duration: "15-20 min",
    frequency: "Daily",
    stage: 4,
    conditionId: 7,
  },
  {
    id: "migraine-4-3",
    title: "Avoid identified triggers",
    description: "Actively avoid personal triggers identified in your journal.",
    duration: "Ongoing",
    frequency: "Daily",
    stage: 4,
    conditionId: 7,
  },
  {
    id: "migraine-4-4",
    title: "Preventive medication",
    description: "Take preventive medications as prescribed by your doctor.",
    duration: "As prescribed",
    frequency: "As prescribed",
    stage: 4,
    conditionId: 7,
  },
  {
    id: "strain-1-1",
    title: "Apply ice to injured area",
    description: "Apply ice wrapped in a cloth to the strained muscle for 15-20 minutes.",
    duration: "15-20 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: 9,
  },
  {
    id: "strain-1-2",
    title: "Rest the injured muscle",
    description: "Avoid activities that cause pain or stress the injured muscle.",
    duration: "Ongoing",
    frequency: "First 1-3 days",
    stage: 1,
    conditionId: 9,
  },
  {
    id: "strain-1-3",
    title: "Compression bandage",
    description: "Apply an elastic bandage to reduce swelling. Not too tight - should not cause numbness or tingling.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 9,
  },
  {
    id: "strain-1-4",
    title: "Elevate the area",
    description: "Elevate the injured area above heart level when possible to reduce swelling.",
    duration: "As much as possible",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 9,
  },
  {
    id: "strain-1-5",
    title: "Take anti-inflammatory medication",
    description: "Take over-the-counter anti-inflammatory medication as directed to reduce pain and swelling.",
    duration: "As directed",
    frequency: "As directed on packaging",
    stage: 1,
    conditionId: 9,
  },
  {
    id: "strain-2-1",
    title: "Gentle stretching",
    description: "Perform gentle stretching exercises for the affected muscle as pain allows.",
    duration: "5-10 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 9,
  },
  {
    id: "strain-2-2",
    title: "Apply heat therapy",
    description: "Apply heat to the area to increase blood flow and promote healing (after initial 48-72 hours).",
    duration: "15-20 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 9,
  },
  {
    id: "strain-2-3",
    title: "Light activity",
    description: "Begin light, pain-free movement of the affected muscle.",
    duration: "5-10 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 9,
  },
  {
    id: "strain-2-4",
    title: "Protein-rich diet",
    description: "Consume adequate protein to support muscle repair.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 2,
    conditionId: 9,
  },
  {
    id: "strain-3-1",
    title: "Progressive strengthening",
    description: "Begin progressive strengthening exercises for the affected muscle.",
    duration: "15 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 9,
  },
  {
    id: "strain-3-2",
    title: "Full range of motion exercises",
    description: "Work toward achieving full range of motion in the affected area.",
    duration: "10-15 min",
    frequency: "Twice daily",
    stage: 3,
    conditionId: 9,
  },
  {
    id: "strain-3-3",
    title: "Functional exercises",
    description: "Perform exercises that mimic everyday movements or sport-specific activities.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 9,
  },
  {
    id: "strain-3-4",
    title: "Cross-training",
    description: "Engage in alternative exercises that don't stress the injured muscle.",
    duration: "20-30 min",
    frequency: "Every other day",
    stage: 3,
    conditionId: 9,
  },
  {
    id: "strain-4-1",
    title: "Return to normal activities",
    description: "Gradually return to normal activities, increasing intensity over time.",
    duration: "As tolerated",
    frequency: "Daily",
    stage: 4,
    conditionId: 9,
  },
  {
    id: "strain-4-2",
    title: "Preventive stretching routine",
    description: "Maintain a regular stretching routine to prevent future strains.",
    duration: "10-15 min",
    frequency: "Daily",
    stage: 4,
    conditionId: 9,
  },
  {
    id: "strain-4-3",
    title: "Strength maintenance",
    description: "Continue strengthening exercises to maintain muscle balance and prevent re-injury.",
    duration: "15-20 min",
    frequency: "3 times weekly",
    stage: 4,
    conditionId: 9,
  },
  {
    id: "strain-4-4",
    title: "Proper warm-up",
    description: "Always warm up properly before physical activity.",
    duration: "10 min",
    frequency: "Before activity",
    stage: 4,
    conditionId: 9,
  },
  {
    id: "concussion-1-1",
    title: "Complete cognitive rest",
    description: "Avoid screens, reading, and mentally demanding activities.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 10,
  },
  {
    id: "concussion-1-2",
    title: "Physical rest",
    description: "Avoid physical exertion and activities that could risk another head injury.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: 10,
  },
  {
    id: "concussion-1-3",
    title: "Stay hydrated",
    description: "Drink plenty of water to support brain function and recovery.",
    duration: "Throughout day",
    frequency: "Hourly",
    stage: 1,
    conditionId: 10,
  },
  {
    id: "concussion-1-4",
    title: "Sleep in a dark, quiet room",
    description: "Ensure adequate sleep in an environment free from stimulation.",
    duration: "8-10 hours",
    frequency: "Nightly",
    stage: 1,
    conditionId: 10,
  },
  {
    id: "concussion-1-5",
    title: "Monitor symptoms",
    description: "Watch for worsening symptoms like increased headache, vomiting, confusion, or seizures.",
    duration: "5 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: 10,
  },
  {
    id: "concussion-2-1",
    title: "Light physical activity",
    description: "Begin light walking or stationary cycling if symptoms allow.",
    duration: "5-15 min",
    frequency: "Once daily",
    stage: 2,
    conditionId: 10,
  },
  {
    id: "concussion-2-2",
    title: "Cognitive reintroduction",
    description: "Gradually reintroduce reading or screen time in short sessions.",
    duration: "10-15 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 10,
  },
  {
    id: "concussion-2-3",
    title: "Omega-3 rich foods",
    description: "Include foods rich in omega-3 fatty acids to support brain health.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 2,
    conditionId: 10,
  },
  {
    id: "concussion-2-4",
    title: "Gentle neck stretches",
    description: "Perform gentle neck stretches to relieve tension that may contribute to headaches.",
    duration: "5 min",
    frequency: "2-3 times daily",
    stage: 2,
    conditionId: 10,
  },
  {
    id: "concussion-3-1",
    title: "Moderate exercise",
    description: "Increase exercise intensity if symptoms allow.",
    duration: "20-30 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 10,
  },
  {
    id: "concussion-3-2",
    title: "Return to normal activities",
    description: "Gradually return to normal daily activities, monitoring for symptom return.",
    duration: "Throughout day",
    frequency: "Daily",
    stage: 3,
    conditionId: 10,
  },
  {
    id: "concussion-3-3",
    title: "Balance exercises",
    description: "Practice balance exercises to improve coordination.",
    duration: "10 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: 10,
  },
  {
    id: "concussion-3-4",
    title: "Cognitive challenges",
    description: "Engage in progressively more challenging cognitive activities.",
    duration: "20-30 min",
    frequency: "2-3 times daily",
    stage: 3,
    conditionId: 10,
  },
  {
    id: "concussion-4-1",
    title: "Full return-to-play protocols",
    description: "Follow structured return-to-play or return-to-learn protocols under medical supervision.",
    duration: "Varies",
    frequency: "As directed",
    stage: 4,
    conditionId: 10,
  },
  {
    id: "concussion-4-2",
    title: "Reaction time training",
    description: "Practice exercises to improve reaction time and coordination.",
    duration: "15 min",
    frequency: "Once daily",
    stage: 4,
    conditionId: 10,
  },
  {
    id: "concussion-4-3",
    title: "Protective equipment check",
    description: "Ensure proper fit and condition of helmets or other protective equipment.",
    duration: "15 min",
    frequency: "Before returning to sports",
    stage: 4,
    conditionId: 10,
  },
  {
    id: "concussion-4-4",
    title: "Concussion education",
    description: "Learn about concussion prevention and early recognition of symptoms.",
    duration: "30 min",
    frequency: "Once",
    stage: 4,
    conditionId: 10,
  },
]

// Get tasks for a specific condition and stage
export function getRecoveryTasks(conditionId: number, stage = 1): RecoveryTask[] {
  return RECOVERY_TASKS.filter((task) => task.conditionId === conditionId && task.stage === stage)
}

// Get a daily set of tasks for a condition based on recovery day
export function getDailyTasks(conditionId: number, currentDay: number): RecoveryTask[] {
  // Determine which stage based on the current day and condition
  let stage = 1

  // Different conditions have different stage timelines
  switch (conditionId) {
    case 1: // Fracture
      if (currentDay < 14) {
        stage = 1 // Acute phase (0-2 weeks)
      } else if (currentDay < 42) {
        stage = 2 // Subacute phase (2-6 weeks)
      } else if (currentDay < 84) {
        stage = 3 // Rehabilitation phase (6-12 weeks)
      } else {
        stage = 4 // Maintenance phase
      }
      break

    case 3: // Sprain
      if (currentDay < 3) {
        stage = 1 // Acute phase (0-3 days)
      } else if (currentDay < 14) {
        stage = 2 // Subacute phase (3-14 days)
      } else if (currentDay < 28) {
        stage = 3 // Rehabilitation phase (2-4 weeks)
      } else {
        stage = 4 // Maintenance phase
      }
      break

    case 4: // Common Cold
      if (currentDay < 3) {
        stage = 1 // Acute phase (0-3 days)
      } else if (currentDay < 7) {
        stage = 2 // Subacute phase (3-7 days)
      } else if (currentDay < 14) {
        stage = 3 // Recovery phase (7-14 days)
      } else {
        stage = 4 // Prevention phase
      }
      break

    case 7: // Migraine
      // For migraines, stages are based on the migraine cycle rather than days
      if (currentDay % 30 < 2) {
        // Assuming a migraine attack every 30 days
        stage = 1 // Acute (during attack)
      } else if (currentDay % 30 < 4) {
        stage = 2 // Post-attack (1-2 days after)
      } else if (currentDay % 30 < 15) {
        stage = 3 // Recovery between attacks
      } else {
        stage = 4 // Prevention
      }
      break

    case 9: // Muscle Strain
      if (currentDay < 3) {
        stage = 1 // Acute phase (0-3 days)
      } else if (currentDay < 14) {
        stage = 2 // Subacute phase (3-14 days)
      } else if (currentDay < 42) {
        stage = 3 // Rehabilitation phase (2-6 weeks)
      } else {
        stage = 4 // Maintenance phase
      }
      break

    case 10: // Concussion
      if (currentDay < 7) {
        stage = 1 // Acute phase (0-7 days)
      } else if (currentDay < 14) {
        stage = 2 // Subacute phase (7-14 days)
      } else if (currentDay < 28) {
        stage = 3 // Rehabilitation phase (14-28 days)
      } else {
        stage = 4 // Return to play/activity phase
      }
      break

    default:
      // Generic timeline for other conditions
      if (currentDay < 3) {
        stage = 1 // First 3 days - acute phase
      } else if (currentDay < 7) {
        stage = 2 // Days 3-7 - early recovery
      } else if (currentDay < 14) {
        stage = 3 // Days 7-14 - mid recovery
      } else {
        stage = 4 // After 14 days - late recovery
      }
  }

  const tasks = getRecoveryTasks(conditionId, stage)

  // Limit to 3-5 tasks per day
  const maxTasks = Math.min(5, tasks.length)

  // Create a predictable but varied selection based on the day
  const selectedTasks = []
  const dayOffset = currentDay % tasks.length

  for (let i = 0; i < maxTasks; i++) {
    const index = (dayOffset + i) % tasks.length
    selectedTasks.push(tasks[index])
  }

  return selectedTasks
}

