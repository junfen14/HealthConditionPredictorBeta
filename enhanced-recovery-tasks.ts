// Define the RecoveryTask interface
export interface RecoveryTask {
  id: string
  title: string
  description: string
  duration: string
  frequency: string
  stage: number // 1 = Acute, 2 = Subacute, 3 = Rehabilitation, 4 = Maintenance
  conditionId: number
  bodyPart?: string // Optional field to specify which body part this task is for
}

// Define the condition IDs for easier reference
export const CONDITIONS = {
  SPRAINED_ANKLE: 101,
  STRESS_FRACTURE: 102,
  CONCUSSION: 103,
  HERNIATED_DISC: 104,
  CARPAL_TUNNEL: 105,
  // Add more as needed
}

// Collection of recovery tasks for different conditions
export const ENHANCED_RECOVERY_TASKS: RecoveryTask[] = [
  // Sprained Ankle (ID: 101)
  // Acute Phase (Stage 1)
  {
    id: "ankle-1-1",
    title: "Ice & elevate ankle",
    description:
      "Apply ice wrapped in a cloth to the ankle for 15 minutes while keeping it elevated above heart level.",
    duration: "15 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-1-2",
    title: "Ankle compression wrap",
    description: "Apply an elastic compression bandage to reduce swelling. Ensure it's not too tight.",
    duration: "Ongoing",
    frequency: "Throughout day, remove at night",
    stage: 1,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-1-3",
    title: "Toe flex & extend",
    description: "While lying down, gently flex and extend your toes to maintain mobility without stressing the ankle.",
    duration: "5 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },

  // Early Rehab Phase (Stage 2)
  {
    id: "ankle-2-1",
    title: "Seated ankle alphabet",
    description: "While seated, trace the alphabet with your toes to improve ankle mobility in all directions.",
    duration: "5-10 min",
    frequency: "Twice daily",
    stage: 2,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-2-2",
    title: "Gentle foot slides",
    description: "While seated, slowly slide your foot forward and backward on the floor to improve mobility.",
    duration: "5 min",
    frequency: "3 times daily",
    stage: 2,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-2-3",
    title: "Light weight-bearing with support",
    description:
      "Begin putting some weight on the injured ankle while using crutches or holding onto a stable surface.",
    duration: "5-10 min",
    frequency: "Several times daily as tolerated",
    stage: 2,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },

  // Strengthening Phase (Stage 3)
  {
    id: "ankle-3-1",
    title: "Resistance band dorsiflexion",
    description: "Secure a resistance band around your foot and pull your foot upward against the resistance.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-3-2",
    title: "Standing heel raises",
    description: "Stand with feet shoulder-width apart and rise up onto your toes, then slowly lower back down.",
    duration: "2 sets of 10 reps",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-3-3",
    title: "Side-to-side weight shifting",
    description: "Stand with feet shoulder-width apart and shift your weight from one foot to the other.",
    duration: "2 min",
    frequency: "3 times daily",
    stage: 3,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },

  // Balance & Stability Phase (Stage 4)
  {
    id: "ankle-4-1",
    title: "Single-leg balance",
    description: "Stand on the injured leg and maintain balance. Use a wall or chair for support if needed.",
    duration: "30 sec holds, 5 repetitions",
    frequency: "Twice daily",
    stage: 4,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-4-2",
    title: "Step-ups on low platform",
    description: "Step up onto a low step or platform with the injured leg, then step back down.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-4-3",
    title: "Walking on uneven surfaces",
    description: "Practice walking on grass, foam pads, or other uneven surfaces to challenge stability.",
    duration: "5 min",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },

  // Full Recovery Phase (Stage 5)
  {
    id: "ankle-5-1",
    title: "Jogging in straight line",
    description: "Begin with short, straight-line jogging on a flat, even surface.",
    duration: "5-10 min",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-5-2",
    title: "Plyometric ankle jumps",
    description: "Perform small, controlled jumps focusing on ankle stability during landing.",
    duration: "3 sets of 10 jumps",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },
  {
    id: "ankle-5-3",
    title: "Sport-specific drills",
    description: "Practice movements specific to your sport or regular activities to prepare for full return.",
    duration: "15-20 min",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.SPRAINED_ANKLE,
    bodyPart: "ankle",
  },

  // Stress Fracture (ID: 102)
  // Acute Phase (Stage 1)
  {
    id: "stress-1-1",
    title: "Completely offload affected limb",
    description: "Avoid putting any weight on the injured area. Use crutches or other assistive devices as needed.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-1-2",
    title: "Apply cold therapy",
    description: "Apply ice wrapped in a cloth to the injured area to reduce pain and inflammation.",
    duration: "15 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-1-3",
    title: "Gentle ankle circles",
    description: "While seated with leg elevated, perform gentle ankle circles to maintain mobility.",
    duration: "5 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },

  // Non-weight-bearing Activity Phase (Stage 2)
  {
    id: "stress-2-1",
    title: "Stationary biking",
    description: "Use a stationary bike with no resistance to maintain cardiovascular fitness without impact.",
    duration: "10-15 min",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-2-2",
    title: "Seated towel scrunches",
    description: "Place a towel on the floor and use your toes to scrunch it toward you.",
    duration: "3 sets of 10 scrunches",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-2-3",
    title: "Resistance band foot flexion",
    description: "Use a resistance band to gently work the muscles of the foot without weight-bearing.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },

  // Gradual Loading Phase (Stage 3)
  {
    id: "stress-3-1",
    title: "Pool walking",
    description: "Walk in chest-deep water to begin weight-bearing in a low-impact environment.",
    duration: "10-15 min",
    frequency: "Every other day",
    stage: 3,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-3-2",
    title: "Seated calf raises",
    description: "While seated, lift your heels off the ground to strengthen calf muscles.",
    duration: "3 sets of 15 reps",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-3-3",
    title: "Standing heel-toe rock",
    description: "While standing, rock gently from heels to toes to begin reintroducing controlled weight-bearing.",
    duration: "2 min",
    frequency: "3 times daily",
    stage: 3,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },

  // Progressive Strengthening Phase (Stage 4)
  {
    id: "stress-4-1",
    title: "Bodyweight squats",
    description: "Perform shallow squats focusing on proper form and controlled movement.",
    duration: "3 sets of 10 reps",
    frequency: "Every other day",
    stage: 4,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-4-2",
    title: "Low-impact elliptical",
    description: "Use an elliptical machine to build endurance without high impact.",
    duration: "15-20 min",
    frequency: "Every other day",
    stage: 4,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-4-3",
    title: "Side-stepping with resistance band",
    description: "Place a resistance band around your ankles and step sideways to strengthen hip and leg muscles.",
    duration: "3 sets of 10 steps each direction",
    frequency: "Every other day",
    stage: 4,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },

  // Full Recovery Phase (Stage 5)
  {
    id: "stress-5-1",
    title: "Return to full weight-bearing walking",
    description: "Gradually increase walking duration and intensity on various surfaces.",
    duration: "20-30 min",
    frequency: "Daily",
    stage: 5,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-5-2",
    title: "Walk-jog intervals",
    description: "Alternate between walking and jogging to gradually reintroduce running.",
    duration: "20 min",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },
  {
    id: "stress-5-3",
    title: "Foot & ankle strength training",
    description: "Perform targeted exercises to strengthen the muscles supporting the foot and ankle.",
    duration: "15-20 min",
    frequency: "3 times weekly",
    stage: 5,
    conditionId: CONDITIONS.STRESS_FRACTURE,
    bodyPart: "foot/leg",
  },

  // Concussion (ID: 103)
  // Cognitive Rest Phase (Stage 1)
  {
    id: "concussion-1-1",
    title: "Screen-free time",
    description: "Avoid all screens (phones, computers, TV) to reduce cognitive strain and allow brain rest.",
    duration: "1 hour minimum",
    frequency: "Multiple times daily",
    stage: 1,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-1-2",
    title: "Deep breathing & mindfulness",
    description: "Practice slow, deep breathing and mindfulness to reduce stress and promote healing.",
    duration: "10 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-1-3",
    title: "Hydration tracking",
    description: "Track water intake to ensure proper hydration, which is essential for brain recovery.",
    duration: "Throughout day",
    frequency: "Hourly",
    stage: 1,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },

  // Gradual Cognitive Load Phase (Stage 2)
  {
    id: "concussion-2-1",
    title: "Reading practice",
    description: "Read simple material for short periods to gradually reintroduce cognitive activity.",
    duration: "10 min",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-2-2",
    title: "Listen to calming music",
    description: "Listen to gentle, calming music without lyrics to provide mild auditory stimulation.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-2-3",
    title: "Simple eye-tracking exercises",
    description: "Follow a moving object with your eyes without moving your head to improve visual tracking.",
    duration: "5 min",
    frequency: "Twice daily",
    stage: 2,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },

  // Light Physical Activity Phase (Stage 3)
  {
    id: "concussion-3-1",
    title: "Short outdoor walk",
    description: "Take a brief walk outdoors, preferably in a quiet area with minimal stimulation.",
    duration: "5-10 min",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-3-2",
    title: "Gentle yoga neck stretches",
    description: "Perform gentle neck stretches to relieve tension that may contribute to headaches.",
    duration: "5 min",
    frequency: "Twice daily",
    stage: 3,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-3-3",
    title: "Controlled breathing exercises",
    description: "Practice controlled breathing patterns to improve oxygen flow and reduce stress.",
    duration: "10 min",
    frequency: "Twice daily",
    stage: 3,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },

  // Return to Function Phase (Stage 4)
  {
    id: "concussion-4-1",
    title: "Light jogging",
    description: "If symptoms allow, begin light jogging on a flat, even surface.",
    duration: "10-15 min",
    frequency: "Every other day",
    stage: 4,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-4-2",
    title: "Dual-task exercises",
    description: "Practice walking while counting backward or performing another simple mental task.",
    duration: "5-10 min",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-4-3",
    title: "Gradual screen use",
    description: "Gradually increase time spent using screens, starting with short periods and low brightness.",
    duration: "15-30 min",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },

  // Full Recovery Phase (Stage 5)
  {
    id: "concussion-5-1",
    title: "Return to full physical activity",
    description: "Gradually return to normal physical activities, monitoring for any symptom recurrence.",
    duration: "As tolerated",
    frequency: "Daily",
    stage: 5,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-5-2",
    title: "Cognitive stress testing",
    description: "Practice sustained mental activities similar to work or school demands to ensure readiness.",
    duration: "30-60 min",
    frequency: "Daily",
    stage: 5,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },
  {
    id: "concussion-5-3",
    title: "Reaction time training",
    description: "Practice exercises that challenge reaction time and coordination.",
    duration: "15 min",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.CONCUSSION,
    bodyPart: "brain",
  },

  // Herniated Disc (ID: 104)
  // Pain Management Phase (Stage 1)
  {
    id: "disc-1-1",
    title: "Ice or heat application",
    description: "Apply ice for the first 48-72 hours, then switch to heat to relieve pain and muscle tension.",
    duration: "15-20 min",
    frequency: "Every 2-3 hours",
    stage: 1,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-1-2",
    title: "Supported reclining position",
    description: "Rest in a supported reclining position with proper lumbar support to reduce pressure on the disc.",
    duration: "As needed",
    frequency: "Throughout day",
    stage: 1,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-1-3",
    title: "Deep breathing for relaxation",
    description: "Practice deep, diaphragmatic breathing to reduce pain and muscle tension.",
    duration: "5-10 min",
    frequency: "3 times daily",
    stage: 1,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },

  // Mobility & Gentle Stretching Phase (Stage 2)
  {
    id: "disc-2-1",
    title: "Cat-Cow spine mobilization",
    description: "On hands and knees, alternate between arching and rounding your back to gently mobilize the spine.",
    duration: "5-10 repetitions",
    frequency: "Twice daily",
    stage: 2,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-2-2",
    title: "Lying hamstring stretch",
    description: "While lying on your back, gently pull one leg toward your chest to stretch the hamstring.",
    duration: "30 sec hold, 3 reps each leg",
    frequency: "Once daily",
    stage: 2,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-2-3",
    title: "Seated lumbar extensions",
    description: "While seated, gently arch your lower back to create extension in the lumbar spine.",
    duration: "10 repetitions",
    frequency: "3 times daily",
    stage: 2,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },

  // Core & Postural Control Phase (Stage 3)
  {
    id: "disc-3-1",
    title: "Pelvic tilts",
    description: "While lying on your back, alternate between arching and flattening your lower back.",
    duration: "10-15 repetitions",
    frequency: "Twice daily",
    stage: 3,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-3-2",
    title: "Supine knee-to-chest stretch",
    description: "While lying on your back, gently pull both knees toward your chest to stretch the lower back.",
    duration: "30 sec hold, 3 repetitions",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-3-3",
    title: "Seated posture correction drills",
    description: "Practice proper seated posture with lumbar support and regular position changes.",
    duration: "5 min",
    frequency: "Every hour while sitting",
    stage: 3,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },

  // Functional Strengthening Phase (Stage 4)
  {
    id: "disc-4-1",
    title: "Glute bridges",
    description: "Lying on your back, lift your hips toward the ceiling to strengthen glutes and core.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-4-2",
    title: "Side-lying leg lifts",
    description: "Lying on your side, lift your top leg to strengthen hip abductors and improve core stability.",
    duration: "3 sets of 10 reps each side",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-4-3",
    title: "Modified plank hold",
    description: "Hold a plank position from knees or forearms to strengthen core without straining the back.",
    duration: "3 sets of 15-30 sec holds",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },

  // Full Recovery Phase (Stage 5)
  {
    id: "disc-5-1",
    title: "Controlled deadlifts",
    description: "Perform light deadlifts with perfect form to strengthen the posterior chain.",
    duration: "3 sets of 10 reps",
    frequency: "Every other day",
    stage: 5,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-5-2",
    title: "Dynamic spinal mobility drills",
    description: "Perform controlled movements through all planes of spinal motion.",
    duration: "5-10 min",
    frequency: "Daily",
    stage: 5,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },
  {
    id: "disc-5-3",
    title: "Proper posture maintenance",
    description: "Practice maintaining proper posture during all daily activities and exercises.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 5,
    conditionId: CONDITIONS.HERNIATED_DISC,
    bodyPart: "back",
  },

  // Carpal Tunnel Syndrome (ID: 105)
  // Symptom Management Phase (Stage 1)
  {
    id: "carpal-1-1",
    title: "Wear a wrist brace at night",
    description: "Use a wrist brace while sleeping to keep your wrist in a neutral position.",
    duration: "While sleeping",
    frequency: "Nightly",
    stage: 1,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-1-2",
    title: "Ice wrist",
    description: "Apply ice to the wrist to reduce inflammation and pain.",
    duration: "10 min",
    frequency: "Every few hours",
    stage: 1,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-1-3",
    title: "Avoid prolonged wrist flexion",
    description: "Avoid activities that require prolonged wrist flexion or extension.",
    duration: "Ongoing",
    frequency: "Throughout day",
    stage: 1,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },

  // Gentle Mobility Phase (Stage 2)
  {
    id: "carpal-2-1",
    title: "Wrist tendon glides",
    description: "Move your fingers through a series of positions to improve tendon mobility.",
    duration: "10 repetitions of each position",
    frequency: "3 times daily",
    stage: 2,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-2-2",
    title: "Thumb opposition exercises",
    description: "Touch your thumb to each fingertip in sequence to improve dexterity.",
    duration: "10 repetitions",
    frequency: "3 times daily",
    stage: 2,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-2-3",
    title: "Light hand squeezing",
    description: "Gently squeeze a soft stress ball or foam to improve grip strength.",
    duration: "10-15 repetitions",
    frequency: "3 times daily",
    stage: 2,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },

  // Strengthening & Stretching Phase (Stage 3)
  {
    id: "carpal-3-1",
    title: "Resistance band wrist extensions",
    description: "Use a light resistance band to strengthen wrist extensors.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-3-2",
    title: "Wrist flexor stretches",
    description: "Gently stretch the wrist flexors by extending your arm and pulling your fingers back.",
    duration: "30 sec hold, 3 repetitions",
    frequency: "Twice daily",
    stage: 3,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-3-3",
    title: "Finger resistance pinching",
    description: "Pinch and hold a small object between thumb and each finger to improve strength.",
    duration: "Hold 5 sec, 5 reps per finger",
    frequency: "Once daily",
    stage: 3,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },

  // Dexterity & Endurance Phase (Stage 4)
  {
    id: "carpal-4-1",
    title: "Typing with wrist support",
    description: "Practice typing with proper wrist support and ergonomic positioning.",
    duration: "10-15 min",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-4-2",
    title: "Small object grasp & release",
    description: "Practice picking up and releasing small objects to improve fine motor control.",
    duration: "5 min",
    frequency: "Twice daily",
    stage: 4,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-4-3",
    title: "Modified wall push-ups",
    description: "Perform wall push-ups with wrists in a neutral position to build strength.",
    duration: "3 sets of 10 reps",
    frequency: "Once daily",
    stage: 4,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },

  // Full Recovery Phase (Stage 5)
  {
    id: "carpal-5-1",
    title: "Return to full typing & gripping tasks",
    description: "Gradually return to normal typing and gripping activities with proper ergonomics.",
    duration: "As tolerated",
    frequency: "Throughout day",
    stage: 5,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-5-2",
    title: "Gradual reintroduction of repetitive tasks",
    description: "Slowly reintroduce repetitive tasks with frequent breaks and proper positioning.",
    duration: "As tolerated with 5-min breaks",
    frequency: "Throughout day",
    stage: 5,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
  {
    id: "carpal-5-3",
    title: "Hand coordination training",
    description: "Practice activities requiring fine motor control and hand-eye coordination.",
    duration: "15-20 min",
    frequency: "Once daily",
    stage: 5,
    conditionId: CONDITIONS.CARPAL_TUNNEL,
    bodyPart: "wrist",
  },
]

// Get tasks for a specific condition and stage
export function getEnhancedRecoveryTasks(conditionId: number, stage = 1): RecoveryTask[] {
  return ENHANCED_RECOVERY_TASKS.filter((task) => task.conditionId === conditionId && task.stage === stage)
}

// Get a daily set of tasks for a condition based on recovery day
export function getEnhancedDailyTasks(conditionId: number, currentDay: number): RecoveryTask[] {
  // Determine which stage based on the current day and condition
  const stage = determineStage(conditionId, currentDay)

  // Get all tasks for this condition and stage
  const tasks = getEnhancedRecoveryTasks(conditionId, stage)

  // If no tasks are found, return an empty array
  if (tasks.length === 0) {
    return []
  }

  // We want to ensure task variety, so we'll use the currentDay to select different tasks
  // This ensures the user gets different tasks on different days within the same stage

  // Get all tasks for this stage
  const allStageTasks = tasks

  // Select 3 tasks for the day, ensuring variety
  const selectedTasks: RecoveryTask[] = []

  // Use the day number to create a predictable but varied selection
  const dayOffset = currentDay % allStageTasks.length

  // Select up to 3 tasks, or all available if less than 3
  const numTasksToSelect = Math.min(3, allStageTasks.length)

  for (let i = 0; i < numTasksToSelect; i++) {
    const index = (dayOffset + i) % allStageTasks.length
    selectedTasks.push(allStageTasks[index])
  }

  return selectedTasks
}

// Get a dynamically adjusted set of tasks based on user progress
export function getAdjustedEnhancedRecoveryTasks(
  conditionId: number,
  currentDay: number,
  userProgress: number, // 0-100
  painLevel: number, // 1-10
): RecoveryTask[] {
  // Determine which stage based on the current day
  let stage = determineStage(conditionId, currentDay)

  // Adjust stage based on user progress and pain level
  if (painLevel > 7) {
    // If pain is still high, stay in or revert to earlier stages
    stage = Math.max(1, stage - 1)
  } else if (userProgress > 80 && painLevel < 3) {
    // If progress is good and pain is low, advance to next stage
    stage = Math.min(5, stage + 1)
  }

  // Get tasks for the adjusted stage
  const tasks = getEnhancedRecoveryTasks(conditionId, stage)

  // If no tasks are found, return an empty array
  if (tasks.length === 0) {
    return []
  }

  // Select 3 tasks for the day, ensuring variety
  const selectedTasks: RecoveryTask[] = []

  // Use the day number to create a predictable but varied selection
  const dayOffset = currentDay % tasks.length

  // Select up to 3 tasks, or all available if less than 3
  const numTasksToSelect = Math.min(3, tasks.length)

  for (let i = 0; i < numTasksToSelect; i++) {
    const index = (dayOffset + i) % tasks.length
    selectedTasks.push(tasks[index])
  }

  return selectedTasks
}

// Helper function to determine the appropriate recovery stage
function determineStage(conditionId: number, currentDay: number): number {
  switch (conditionId) {
    case CONDITIONS.SPRAINED_ANKLE:
      if (currentDay < 3) return 1 // Acute phase (0-3 days)
      if (currentDay < 7) return 2 // Early rehab phase (4-7 days)
      if (currentDay < 14) return 3 // Strengthening phase (1-2 weeks)
      if (currentDay < 28) return 4 // Balance & stability phase (2-4 weeks)
      return 5 // Full recovery phase

    case CONDITIONS.STRESS_FRACTURE:
      if (currentDay < 3) return 1 // Acute phase (0-3 days)
      if (currentDay < 14) return 2 // Non-weight-bearing activity phase (3-14 days)
      if (currentDay < 28) return 3 // Gradual loading phase (2-4 weeks)
      if (currentDay < 42) return 4 // Progressive strengthening phase (4-6 weeks)
      return 5 // Full recovery phase

    case CONDITIONS.CONCUSSION:
      if (currentDay < 3) return 1 // Cognitive rest phase (0-3 days)
      if (currentDay < 7) return 2 // Gradual cognitive load phase (3-7 days)
      if (currentDay < 14) return 3 // Light physical activity phase (1-2 weeks)
      if (currentDay < 21) return 4 // Return to function phase (2-3 weeks)
      return 5 // Full recovery phase

    case CONDITIONS.HERNIATED_DISC:
      if (currentDay < 3) return 1 // Pain management phase (0-3 days)
      if (currentDay < 7) return 2 // Mobility & gentle stretching phase (3-7 days)
      if (currentDay < 14) return 3 // Core & postural control phase (1-2 weeks)
      if (currentDay < 28) return 4 // Functional strengthening phase (2-4 weeks)
      return 5 // Full recovery phase

    case CONDITIONS.CARPAL_TUNNEL:
      if (currentDay < 3) return 1 // Symptom management phase (0-3 days)
      if (currentDay < 7) return 2 // Gentle mobility phase (3-7 days)
      if (currentDay < 14) return 3 // Strengthening & stretching phase (1-2 weeks)
      if (currentDay < 21) return 4 // Dexterity & endurance phase (2-3 weeks)
      return 5 // Full recovery phase

    default:
      // Generic timeline for other conditions
      if (currentDay < 3) return 1 // Acute phase (0-3 days)
      if (currentDay < 7) return 2 // Early recovery phase (3-7 days)
      if (currentDay < 14) return 3 // Mid recovery phase (1-2 weeks)
      if (currentDay < 28) return 4 // Late recovery phase (2-4 weeks)
      return 5 // Full recovery phase
  }
}

