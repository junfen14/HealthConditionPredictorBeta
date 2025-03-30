export interface Symptom {
  id: number
  name: string
  aliases: string[]
  description: string
  bodyParts?: string[]
  category?: string
}

export interface Condition {
  id: number
  name: string
  category: string
  symptoms: string[]
  description: string
  detailedDescription: string
  recoveryTime: string
  urgency: string
  causes: string[]
  treatmentSimple: string
  treatmentDetailed: TreatmentStep[]
  recoveryStages: RecoveryStage[]
  whenToSeeDoctor: string
  preventionTips: string[]
  dosAndDonts?: {
    dos: string[]
    donts: string[]
  }
}

export interface TreatmentStep {
  title: string
  description: string
}

export interface RecoveryStage {
  timeframe: string
  description: string
  milestones: string[]
  watchOutFor?: string[]
}

export const SYMPTOMS: Symptom[] = [
  // Bone & Joint Symptoms
  {
    id: 1,
    name: "Sharp, severe pain",
    aliases: ["Intense pain", "Acute pain", "Stabbing pain", "Knife-like pain"],
    description:
      "A sudden, intense pain that feels like a sharp stab or knife-like sensation. Often described as piercing or cutting.",
    category: "Pain",
  },
  {
    id: 2,
    name: "Swelling",
    aliases: ["Puffiness", "Inflammation", "Edema", "Bloating"],
    description:
      "An increase in size or a change in shape of an area of the body. The affected area may feel tight, stretched, or warm to the touch.",
    category: "Inflammation",
  },
  {
    id: 3,
    name: "Bruising",
    aliases: ["Contusion", "Black and blue mark", "Discoloration", "Ecchymosis"],
    description:
      "An injury appearing as an area of discolored skin, often purple, blue, or black. May be tender to touch and change color over time.",
    category: "Injury",
    bodyParts: ["Skin", "Limbs", "Face"],
  },
  {
    id: 4,
    name: "Deformity",
    aliases: ["Misshapen", "Abnormal shape", "Visible irregularity", "Malformation"],
    description:
      "An abnormal change in the shape of a body part. May include bumps, lumps, or visible misalignment of bones or joints.",
    category: "Physical Abnormality",
  },
  {
    id: 5,
    name: "Inability to move",
    aliases: ["Immobility", "Loss of movement", "Paralysis", "Can't move"],
    description:
      "Being unable to move a part of the body. May be accompanied by stiffness, pain, or a feeling of heaviness in the affected area.",
    category: "Mobility",
  },
  {
    id: 6,
    name: "Grinding or cracking sound",
    aliases: ["Crepitus", "Popping noise", "Clicking sound", "Joint noise"],
    description:
      "An audible noise from joints or bones during movement. May sound like grinding, popping, or clicking, often accompanied by a sensation of roughness.",
    category: "Sound",
    bodyParts: ["Joints", "Knees", "Shoulders", "Neck"],
  },
  {
    id: 7,
    name: "Joint feels stuck",
    aliases: ["Locked joint", "Joint immobility", "Frozen joint", "Can't bend joint"],
    description:
      "A sensation that a joint cannot move or is locked in place. May be accompanied by pain, stiffness, or a feeling of something blocking the joint's movement.",
    category: "Mobility",
    bodyParts: ["Joints", "Knees", "Shoulders", "Elbows", "Fingers"],
  },
  {
    id: 8,
    name: "Sudden pain after twisting",
    aliases: ["Acute pain on rotation", "Sharp pain with movement", "Pain after turning"],
    description:
      "A quick onset of pain following a twisting motion. Often described as a sharp, stabbing sensation that occurs immediately after the movement.",
    category: "Pain",
    bodyParts: ["Joints", "Ankle", "Knee", "Wrist", "Back"],
  },
  {
    id: 9,
    name: "Weakness",
    aliases: ["Loss of strength", "Feebleness", "Lack of power", "Muscle weakness"],
    description:
      "A reduction in the strength or power of a body part. May feel like difficulty lifting objects, holding onto things, or performing usual tasks.",
    category: "Strength",
  },
  {
    id: 10,
    name: "Stiffness",
    aliases: ["Rigidity", "Inflexibility", "Tightness", "Limited range of motion"],
    description:
      "Difficulty moving a joint or muscle, often with discomfort. May feel like resistance when trying to move, especially after periods of inactivity or in the morning.",
    category: "Mobility",
    bodyParts: ["Joints", "Neck", "Back", "Shoulders"],
  },

  // Head & Neurological Symptoms
  {
    id: 11,
    name: "Headache",
    aliases: ["Head pain", "Migraine", "Tension headache", "Head pressure"],
    description: "Pain or discomfort in the head, scalp, or neck. Can be dull, sharp, throbbing, or constant.",
    category: "Pain",
    bodyParts: ["Head"],
  },
  {
    id: 12,
    name: "Dizziness",
    aliases: ["Lightheadedness", "Vertigo", "Feeling faint", "Wooziness"],
    description:
      "A sensation of unsteadiness, spinning, or feeling like you might faint. May affect balance and coordination.",
    category: "Neurological",
    bodyParts: ["Head"],
  },
  {
    id: 13,
    name: "Nausea",
    aliases: ["Feeling sick", "Queasy", "Upset stomach", "Want to vomit"],
    description:
      "An unpleasant sensation of discomfort in the stomach with an urge to vomit. Often accompanied by sweating and dizziness.",
    category: "Digestive",
    bodyParts: ["Stomach"],
  },
  {
    id: 14,
    name: "Vomiting",
    aliases: ["Throwing up", "Getting sick", "Emesis", "Regurgitation"],
    description: "The forceful expulsion of stomach contents through the mouth. May be preceded by nausea.",
    category: "Digestive",
    bodyParts: ["Stomach"],
  },
  {
    id: 15,
    name: "Sensitivity to light",
    aliases: ["Photophobia", "Light hurts eyes", "Light intolerance", "Painful light"],
    description: "Discomfort or pain in the eyes when exposed to light. May cause squinting, tearing, or headache.",
    category: "Neurological",
    bodyParts: ["Eyes", "Head"],
  },

  // Respiratory Symptoms
  {
    id: 16,
    name: "Cough",
    aliases: ["Hacking", "Clearing throat", "Persistent cough", "Dry cough"],
    description:
      "A sudden, forceful expulsion of air from the lungs. May be dry or produce mucus, and can be persistent or occasional.",
    category: "Respiratory",
    bodyParts: ["Chest", "Throat", "Lungs"],
  },
  {
    id: 17,
    name: "Shortness of breath",
    aliases: ["Breathlessness", "Difficulty breathing", "Can't catch breath", "Dyspnea"],
    description:
      "A feeling of not getting enough air or having to work harder to breathe. May occur at rest or with activity.",
    category: "Respiratory",
    bodyParts: ["Chest", "Lungs"],
  },
  {
    id: 18,
    name: "Wheezing",
    aliases: ["Whistling breath", "Noisy breathing", "Breath sounds", "Stridor"],
    description: "A high-pitched whistling sound during breathing, usually when exhaling. Caused by narrowed airways.",
    category: "Respiratory",
    bodyParts: ["Chest", "Lungs"],
  },
  {
    id: 19,
    name: "Chest pain",
    aliases: ["Chest discomfort", "Chest pressure", "Chest tightness", "Angina"],
    description: "Discomfort, pressure, or pain in the chest area. May be sharp, dull, burning, or crushing.",
    category: "Pain",
    bodyParts: ["Chest"],
  },

  // Digestive Symptoms
  {
    id: 20,
    name: "Abdominal pain",
    aliases: ["Stomach ache", "Belly pain", "Gut pain", "Tummy ache"],
    description:
      "Pain or discomfort in the area between the chest and pelvis. Can be cramping, sharp, dull, or intermittent.",
    category: "Pain",
    bodyParts: ["Abdomen"],
  },
  {
    id: 21,
    name: "Diarrhea",
    aliases: ["Loose stools", "Watery stools", "Frequent bowel movements", "Runs"],
    description:
      "Loose, watery stools occurring more frequently than normal. May be accompanied by urgency, abdominal cramps, or nausea.",
    category: "Digestive",
    bodyParts: ["Abdomen", "Intestines"],
  },
  {
    id: 22,
    name: "Constipation",
    aliases: ["Hard stools", "Difficulty passing stool", "Infrequent bowel movements", "Straining"],
    description: "Infrequent bowel movements or difficult passage of stools. Stools may be hard, dry, and small.",
    category: "Digestive",
    bodyParts: ["Abdomen", "Intestines"],
  },
  {
    id: 23,
    name: "Bloating",
    aliases: ["Distended abdomen", "Gassy", "Swollen belly", "Full feeling"],
    description: "A feeling of fullness or swelling in the abdomen. May cause visible distension and discomfort.",
    category: "Digestive",
    bodyParts: ["Abdomen"],
  },

  // Skin Symptoms
  {
    id: 24,
    name: "Rash",
    aliases: ["Skin eruption", "Hives", "Skin irritation", "Dermatitis"],
    description:
      "An area of irritated or swollen skin that may be red, itchy, bumpy, or painful. Can appear anywhere on the body.",
    category: "Skin",
    bodyParts: ["Skin"],
  },
  {
    id: 25,
    name: "Itching",
    aliases: ["Pruritus", "Scratchy feeling", "Itchy skin", "Need to scratch"],
    description:
      "An uncomfortable sensation that causes a desire to scratch. May occur with or without visible skin changes.",
    category: "Skin",
    bodyParts: ["Skin"],
  },

  // General Symptoms
  {
    id: 26,
    name: "Fever",
    aliases: ["High temperature", "Elevated body temperature", "Running hot", "Pyrexia"],
    description:
      "An elevated body temperature above the normal range of 98.6°F (37°C). May cause sweating, chills, and general discomfort.",
    category: "General",
  },
  {
    id: 27,
    name: "Fatigue",
    aliases: ["Tiredness", "Exhaustion", "Low energy", "Lethargy"],
    description:
      "Extreme tiredness resulting from mental or physical exertion or illness. More than just feeling sleepy or drowsy.",
    category: "General",
  },
  {
    id: 28,
    name: "Chills",
    aliases: ["Shivering", "Feeling cold", "Rigors", "Shaking"],
    description: "A feeling of coldness accompanied by shivering or shaking. Often occurs with fever or infection.",
    category: "General",
  },
  {
    id: 29,
    name: "Sweating",
    aliases: ["Perspiration", "Night sweats", "Excessive sweating", "Diaphoresis"],
    description:
      "The release of fluid from sweat glands in the skin. May be excessive or occur at unusual times, such as during sleep.",
    category: "General",
  },
  {
    id: 30,
    name: "Loss of appetite",
    aliases: ["Decreased hunger", "Not wanting to eat", "Anorexia", "Poor appetite"],
    description: "A decreased desire to eat, despite normal caloric needs. May lead to weight loss if prolonged.",
    category: "General",
  },
]

export const CONDITIONS: Condition[] = [
  // Bone & Joint Injuries
  {
    id: 1,
    name: "Fracture (Broken Bone)",
    category: "Bone & Joint Injuries",
    symptoms: [
      "Sharp, severe pain",
      "Swelling",
      "Bruising",
      "Deformity",
      "Inability to move",
      "Grinding or cracking sound",
    ],
    description: "A break in the continuity of the bone",
    detailedDescription:
      "A fracture is a break in the bone that can occur due to high force impact or stress, or as a result of certain medical conditions that weaken the bones, such as osteoporosis. Fractures can be complete (bone breaks completely) or partial (bone cracks but doesn't separate). They can be closed (skin intact) or open (bone protrudes through skin).",
    recoveryTime: "6-8 weeks for simple fractures, longer for complex ones",
    urgency: "High",
    causes: ["High-impact injuries", "Falls", "Sports injuries", "Osteoporosis", "Repetitive stress"],
    treatmentSimple:
      "Immobilization with a cast or splint, pain management, and possible surgery for complex fractures",
    treatmentDetailed: [
      {
        title: "Immobilization",
        description:
          "The broken bone must be kept in position and immobilized with a cast or splint to ensure proper healing. This prevents movement of the broken pieces and allows new bone to form between them.",
      },
      {
        title: "Pain Management",
        description:
          "Over-the-counter pain relievers like acetaminophen or ibuprofen can help manage pain. For severe pain, your doctor may prescribe stronger medications. Apply ice packs to the injured area for 15-20 minutes several times a day to reduce swelling and pain.",
      },
      {
        title: "Surgery",
        description:
          "For complex fractures, surgery may be necessary to realign the bone and fix it in place with screws, plates, or rods. This is called open reduction and internal fixation (ORIF). In some cases, external fixation devices may be used.",
      },
      {
        title: "Physical Therapy",
        description:
          "Once the bone has healed sufficiently, physical therapy exercises will help restore strength, flexibility, and function to the injured area. Your therapist will design a program specific to your injury and needs.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Days 1-3",
        description: "Initial healing phase with significant pain and swelling",
        milestones: ["Pain and swelling begin to subside", "Medical treatment obtained"],
        watchOutFor: [
          "Increasing pain",
          "Numbness or tingling",
          "Bluish color of fingers/toes if extremity is in cast",
        ],
      },
      {
        timeframe: "Weeks 1-2",
        description: "Early healing phase as the body begins to form a callus around the fracture",
        milestones: ["Reduced pain", "Ability to move surrounding joints if permitted"],
        watchOutFor: ["Fever", "Increasing pain", "Cast problems (too tight, too loose, wet)"],
      },
      {
        timeframe: "Weeks 3-6",
        description: "Continued bone healing with callus formation",
        milestones: ["Significantly reduced pain", "X-rays showing callus formation"],
        watchOutFor: ["Lack of progress in healing", "Persistent pain"],
      },
      {
        timeframe: "Weeks 6-12",
        description: "Final healing phase with bone remodeling",
        milestones: [
          "Cast or splint removal (for most simple fractures)",
          "Beginning of rehabilitation exercises",
          "Gradual return to normal activities",
        ],
        watchOutFor: ["Pain with activity", "Stiffness that doesn't improve"],
      },
      {
        timeframe: "Months 3-6",
        description: "Rehabilitation phase",
        milestones: ["Return to most normal activities", "Regaining strength and flexibility"],
        watchOutFor: ["Persistent weakness", "Pain with specific movements"],
      },
    ],
    whenToSeeDoctor:
      "Immediately if you suspect a fracture. Delay in treatment can lead to improper healing and complications.",
    preventionTips: [
      "Wear protective gear during sports activities",
      "Maintain a diet rich in calcium and vitamin D for strong bones",
      "Exercise regularly to improve bone density and strength",
      "Make your home fall-proof, especially for elderly individuals",
    ],
    dosAndDonts: {
      dos: [
        "Follow your doctor's instructions exactly",
        "Keep the cast or splint dry",
        "Elevate the injured area to reduce swelling",
        "Take pain medications as prescribed",
        "Attend all follow-up appointments",
      ],
      donts: [
        "Don't put weight on the injured area until cleared by your doctor",
        "Don't stick objects inside your cast to scratch",
        "Don't ignore increasing pain, numbness, or tingling",
        "Don't remove your cast without medical supervision",
        "Don't miss follow-up appointments",
      ],
    },
  },
  {
    id: 2,
    name: "Dislocation",
    category: "Bone & Joint Injuries",
    symptoms: ["Visible deformity at a joint", "Intense pain when moving", "Swelling", "Bruising", "Joint feels stuck"],
    description: "A joint that has come out of its normal position",
    detailedDescription:
      "A dislocation occurs when the bones in a joint are forced out of their normal positions. This can happen due to a fall, a blow, or other trauma. Dislocations are painful and can cause significant damage to the surrounding tissues including ligaments, tendons, and nerves. Common sites include shoulders, fingers, elbows, and kneecaps.",
    recoveryTime: "2-3 weeks for minor dislocations, 6-12 weeks for more severe cases",
    urgency: "High",
    causes: ["Falls", "Sports injuries", "Car accidents", "Genetic joint instability", "Previous dislocations"],
    treatmentSimple: "Reduction (putting the joint back in place), immobilization, pain management, and rehabilitation",
    treatmentDetailed: [
      {
        title: "Reduction",
        description:
          "The dislocated joint needs to be put back into its proper position. This should only be done by a trained medical professional to avoid further damage. The procedure may require sedation or local anesthesia.",
      },
      {
        title: "Immobilization",
        description:
          "After reduction, the joint is usually immobilized with a splint, sling, or brace to allow healing and prevent re-dislocation. The duration depends on the joint affected and severity of the injury.",
      },
      {
        title: "Pain Management",
        description:
          "Apply ice to the affected area for 15-20 minutes every 2-3 hours to reduce swelling and pain. Take over-the-counter pain relievers like ibuprofen or acetaminophen, or prescription medications as directed by your doctor.",
      },
      {
        title: "Rehabilitation",
        description:
          "Once the initial healing has occurred, a progressive exercise program will help restore strength, stability, and range of motion. This typically includes gentle stretching followed by strengthening exercises.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Days 1-3",
        description: "Acute phase with significant pain and swelling",
        milestones: ["Joint successfully reduced", "Pain beginning to subside with medication"],
        watchOutFor: [
          "Signs of nerve damage (numbness, tingling)",
          "Inability to move fingers or toes",
          "Severe pain despite medication",
        ],
      },
      {
        timeframe: "Days 4-14",
        description: "Early recovery with continued immobilization",
        milestones: ["Decreasing pain and swelling", "Improved comfort with immobilization device"],
        watchOutFor: ["Signs of re-dislocation", "Increasing rather than decreasing pain"],
      },
      {
        timeframe: "Weeks 2-6",
        description: "Transition to controlled movement",
        milestones: [
          "Removal of immobilization device (timing varies by joint)",
          "Beginning of gentle range of motion exercises",
        ],
        watchOutFor: ["Pain with specific movements", "Feelings of instability in the joint"],
      },
      {
        timeframe: "Weeks 6-12",
        description: "Rehabilitation phase",
        milestones: [
          "Increasing range of motion",
          "Beginning strengthening exercises",
          "Gradual return to normal activities",
        ],
        watchOutFor: ["Joint instability", "Recurring pain with activity"],
      },
    ],
    whenToSeeDoctor:
      "Immediately if you suspect a dislocation. Do not attempt to put the joint back in place yourself.",
    preventionTips: [
      "Strengthen the muscles around your joints through regular exercise",
      "Wear appropriate protective gear during sports",
      "Be cautious when walking on slippery or uneven surfaces",
      "If you have a history of dislocations, consider wearing a brace during high-risk activities",
    ],
    dosAndDonts: {
      dos: [
        "Seek immediate medical attention",
        "Keep the joint immobilized until seen by a doctor",
        "Apply ice to reduce swelling",
        "Follow rehabilitation exercises exactly as prescribed",
        "Gradually return to activities as directed by your healthcare provider",
      ],
      donts: [
        "Don't try to push the joint back into place yourself",
        "Don't move the affected joint unnecessarily",
        "Don't apply heat to the area in the first 48-72 hours",
        "Don't return to sports too quickly",
        "Don't skip rehabilitation exercises",
      ],
    },
  },
  {
    id: 3,
    name: "Sprain",
    category: "Bone & Joint Injuries",
    symptoms: ["Sudden pain after twisting", "Swelling", "Bruising", "Weakness", "Stiffness"],
    description: "Stretching or tearing of ligaments that connect bones at a joint",
    detailedDescription:
      "A sprain occurs when the ligaments that hold your joints together are stretched or torn. Ligaments are tough bands of fibrous tissue that connect bones to other bones. Sprains commonly affect ankles, knees, and wrists. They're graded from mild (Grade I) to severe (Grade III) based on the extent of ligament damage.",
    recoveryTime: "1-2 weeks for mild sprains, 6-8 weeks for severe sprains",
    urgency: "Medium",
    causes: ["Twisting or rotating a joint", "Falling", "Sports injuries", "Walking or running on uneven surfaces"],
    treatmentSimple: "RICE (Rest, Ice, Compression, Elevation), pain management, and rehabilitation",
    treatmentDetailed: [
      {
        title: "RICE Protocol",
        description:
          "Follow the RICE protocol: Rest the injured area, apply Ice for 15-20 minutes every 2-3 hours, use Compression with an elastic bandage, and Elevate the injured area above heart level when possible.",
      },
      {
        title: "Pain Management",
        description:
          "Take over-the-counter anti-inflammatory medications like ibuprofen or naproxen to reduce pain and swelling. Follow dosage instructions carefully.",
      },
      {
        title: "Ankle Taping (for ankle sprains)",
        description:
          "For ankle sprains, proper taping can provide support. Start with the ankle at a 90-degree angle. Apply anchor strips around the lower leg, then add stirrups from the inside ankle bone, under the heel, to the outside ankle bone. Finish with figure-eight wraps and heel locks for stability.",
      },
      {
        title: "Rehabilitation",
        description:
          "Begin with gentle range-of-motion exercises once acute pain subsides, followed by strengthening exercises. For ankle sprains, practice balance exercises like standing on one foot. Gradually return to normal activities as pain and swelling decrease.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Days 1-3",
        description: "Acute inflammatory phase with pain, swelling, and bruising",
        milestones: ["Beginning RICE protocol", "Pain management established"],
        watchOutFor: [
          "Inability to bear weight (for lower extremity sprains)",
          "Severe pain that doesn't respond to medication",
          "Numbness or tingling",
        ],
      },
      {
        timeframe: "Days 4-10",
        description: "Subacute phase with decreasing inflammation",
        milestones: [
          "Reduced swelling",
          "Improved ability to move the joint",
          "For ankle sprains: beginning to bear weight with support",
        ],
        watchOutFor: ["Increased swelling with activity", "Pain that worsens rather than improves"],
      },
      {
        timeframe: "Weeks 2-4",
        description: "Early remodeling phase",
        milestones: [
          "Beginning strengthening exercises",
          "Improved range of motion",
          "For ankle sprains: walking without significant pain",
        ],
        watchOutFor: ["Joint instability", "Pain that limits progress with exercises"],
      },
      {
        timeframe: "Weeks 4-8",
        description: "Functional recovery phase",
        milestones: [
          "Return to most normal activities",
          "For athletes: beginning sport-specific training",
          "Near-normal strength and flexibility",
        ],
        watchOutFor: ["Pain with specific movements", "Recurrent swelling with activity"],
      },
    ],
    whenToSeeDoctor:
      "If you can't bear weight on the injured limb, if the joint looks deformed, or if pain and swelling don't improve after a few days of home treatment.",
    preventionTips: [
      "Warm up properly before exercise",
      "Use proper technique during sports and exercise",
      "Wear supportive shoes appropriate for your activity",
      "Strengthen muscles around joints through regular exercise",
      "Be careful on uneven surfaces",
    ],
    dosAndDonts: {
      dos: [
        "Rest the injured area initially",
        "Apply ice promptly after injury",
        "Use compression bandages as directed",
        "Elevate the injured area when resting",
        "Begin gentle movement once acute pain subsides",
      ],
      donts: [
        "Don't apply heat in the first 48-72 hours",
        "Don't massage the injured area in the acute phase",
        "Don't continue activities that cause pain",
        "Don't skip rehabilitation exercises",
        "Don't return to sports before adequate healing",
      ],
    },
  },

  // Respiratory Conditions
  {
    id: 4,
    name: "Common Cold",
    category: "Respiratory Conditions",
    symptoms: ["Cough", "Runny nose", "Sore throat", "Congestion", "Sneezing", "Mild fever"],
    description: "A viral infection of the upper respiratory tract",
    detailedDescription:
      "The common cold is a viral infection of the nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold, with rhinoviruses being the most common. Healthy adults can expect to have two to three colds annually.",
    recoveryTime: "7-10 days",
    urgency: "Low",
    causes: [
      "Rhinovirus",
      "Coronavirus",
      "RSV (Respiratory Syncytial Virus)",
      "Close contact with infected people",
      "Touching contaminated surfaces",
    ],
    treatmentSimple: "Rest, hydration, over-the-counter medications for symptom relief, and time",
    treatmentDetailed: [
      {
        title: "Rest and Hydration",
        description:
          "Get plenty of sleep to help your immune system fight the infection. Drink lots of fluids, including water, juice, clear broth, or warm lemon water with honey. Avoid alcohol and caffeine, which can contribute to dehydration.",
      },
      {
        title: "Over-the-counter Medications",
        description:
          "For fever and pain, take acetaminophen or ibuprofen. For congestion, try decongestants like pseudoephedrine. For runny nose and sneezing, antihistamines may help. Cough syrups with dextromethorphan can suppress coughs. Always follow dosage instructions.",
      },
      {
        title: "Nasal Irrigation",
        description:
          "Use a neti pot or nasal irrigation system with sterile saline solution to flush out mucus and allergens from your sinuses. This can help relieve congestion and post-nasal drip.",
      },
      {
        title: "Throat Soothing",
        description:
          "Gargle with salt water (1/4 to 1/2 teaspoon salt dissolved in an 8-ounce glass of warm water) to relieve a sore throat. Suck on throat lozenges or hard candies to soothe irritation.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Days 1-3",
        description: "Early symptoms phase",
        milestones: ["Onset of symptoms", "Beginning self-care measures"],
        watchOutFor: ["High fever (above 101.3°F or 38.5°C)", "Severe headache", "Shortness of breath"],
      },
      {
        timeframe: "Days 4-7",
        description: "Peak symptoms phase",
        milestones: ["Symptoms typically peak", "Mucus may thicken and change color"],
        watchOutFor: [
          "Symptoms getting significantly worse after day 5",
          "Development of ear pain",
          "Persistent high fever",
        ],
      },
      {
        timeframe: "Days 7-10",
        description: "Recovery phase",
        milestones: ["Symptoms begin to improve", "Energy levels start to return"],
        watchOutFor: ["Symptoms lasting beyond 10 days", "Development of new symptoms", "Worsening cough"],
      },
      {
        timeframe: "After Day 10",
        description: "Resolution phase",
        milestones: ["Return to normal activities", "Resolution of most or all symptoms"],
        watchOutFor: [
          "Persistent cough beyond 2 weeks",
          "Return of fever",
          "Worsening symptoms after initial improvement",
        ],
      },
    ],
    whenToSeeDoctor:
      "If symptoms last more than 10 days, if symptoms are severe or unusual, if you have a high fever, or if you have underlying health conditions like asthma or heart disease.",
    preventionTips: [
      "Wash hands frequently with soap and water",
      "Avoid close contact with sick people",
      "Don't touch your face with unwashed hands",
      "Clean frequently touched surfaces",
      "Maintain a healthy lifestyle with adequate sleep, exercise, and a balanced diet",
    ],
    dosAndDonts: {
      dos: [
        "Rest as much as possible",
        "Stay hydrated with water, tea, and clear broths",
        "Use a humidifier to add moisture to the air",
        "Gargle with salt water for sore throat relief",
        "Take over-the-counter medications as directed for symptom relief",
      ],
      donts: [
        "Don't take antibiotics (they don't work against viruses)",
        "Don't smoke or be around secondhand smoke",
        "Don't overuse decongestants (can cause rebound congestion)",
        "Don't spread germs (cover coughs and sneezes)",
        "Don't go to work or school if you have a fever",
      ],
    },
  },
  {
    id: 5,
    name: "Influenza (Flu)",
    category: "Respiratory Conditions",
    symptoms: ["Fever", "Chills", "Muscle aches", "Headache", "Fatigue", "Cough", "Sore throat"],
    description: "A contagious respiratory illness caused by influenza viruses",
    detailedDescription:
      "Influenza (flu) is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs. It can cause mild to severe illness, and at times can lead to death. The flu is different from a cold and usually comes on suddenly with more severe symptoms.",
    recoveryTime: "1-2 weeks",
    urgency: "Medium",
    causes: [
      "Influenza A viruses",
      "Influenza B viruses",
      "Influenza C viruses",
      "Airborne exposure",
      "Direct contact with infected individuals",
    ],
    treatmentSimple:
      "Rest, hydration, antiviral medications if prescribed, and over-the-counter medications for symptom relief",
    treatmentDetailed: [
      {
        title: "Rest and Hydration",
        description:
          "Stay home and rest to help your body fight the infection and prevent spreading it to others. Drink plenty of fluids to prevent dehydration, which can worsen symptoms. Water, clear broths, and electrolyte drinks are good choices.",
      },
      {
        title: "Antiviral Medications",
        description:
          "If prescribed within 48 hours of symptom onset, antiviral drugs like oseltamivir (Tamiflu), zanamivir (Relenza), peramivir (Rapivab), or baloxavir (Xofluza) can reduce the severity and duration of symptoms. These are especially important for high-risk individuals.",
      },
      {
        title: "Fever and Pain Management",
        description:
          "Take acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) to reduce fever and alleviate body aches. Follow dosage instructions carefully and be aware that these medications only treat symptoms, not the virus itself.",
      },
      {
        title: "Cough Management",
        description:
          "For cough relief, try over-the-counter cough suppressants containing dextromethorphan. For productive coughs, expectorants with guaifenesin can help loosen mucus. Honey in warm tea can also soothe coughs (not for children under 1 year).",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Days 1-3",
        description: "Acute onset phase",
        milestones: ["Sudden onset of symptoms", "Beginning treatment"],
        watchOutFor: [
          "Difficulty breathing",
          "Persistent pain or pressure in chest",
          "Confusion",
          "Severe or persistent vomiting",
        ],
      },
      {
        timeframe: "Days 4-7",
        description: "Peak symptoms phase",
        milestones: ["Symptoms typically at their worst", "Fever may begin to subside"],
        watchOutFor: [
          "Symptoms getting worse after initial improvement",
          "High fever that doesn't respond to medication",
        ],
      },
      {
        timeframe: "Days 7-10",
        description: "Early recovery phase",
        milestones: ["Fever resolves", "Energy begins to return", "Respiratory symptoms may persist"],
        watchOutFor: ["Return of fever", "Worsening cough or development of productive cough with colored sputum"],
      },
      {
        timeframe: "Days 10-14",
        description: "Late recovery phase",
        milestones: ["Return to most normal activities", "Resolution of most symptoms except possibly mild cough"],
        watchOutFor: ["Persistent fatigue beyond 2 weeks", "Shortness of breath", "Symptoms of secondary infections"],
      },
    ],
    whenToSeeDoctor:
      "If you're in a high-risk group (elderly, pregnant, young children, or have chronic conditions), if symptoms are severe, if you have difficulty breathing, or if symptoms improve then worsen.",
    preventionTips: [
      "Get an annual flu vaccine",
      "Wash hands frequently",
      "Avoid close contact with sick people",
      "Cover your mouth and nose when coughing or sneezing",
      "Stay home when you're sick to prevent spreading the flu",
    ],
    dosAndDonts: {
      dos: [
        "Stay home and rest",
        "Drink plenty of fluids",
        "Take antiviral medications if prescribed",
        "Use a humidifier to ease congestion",
        "Monitor symptoms for complications",
      ],
      donts: [
        "Don't go to work or school while contagious",
        "Don't take antibiotics unless prescribed for a secondary infection",
        "Don't smoke or be around secondhand smoke",
        "Don't drink alcohol, which can increase dehydration",
        "Don't visit vulnerable individuals (elderly, infants, immunocompromised)",
      ],
    },
  },

  // Digestive Conditions
  {
    id: 6,
    name: "Food Poisoning",
    category: "Digestive Conditions",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal pain", "Fever", "Headache"],
    description: "Illness caused by consuming contaminated food or drink",
    detailedDescription:
      "Food poisoning is an illness caused by eating contaminated food. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes. These infectious organisms or their toxins can contaminate food at any point during processing or production, and contamination can also occur at home if food is incorrectly handled or cooked.",
    recoveryTime: "1-3 days for mild cases, up to 10 days for severe cases",
    urgency: "Medium",
    causes: [
      "Bacteria (Salmonella, E. coli, Listeria)",
      "Viruses (Norovirus, Hepatitis A)",
      "Parasites",
      "Toxins in food",
    ],
    treatmentSimple: "Rest, hydration, gradual return to eating, and over-the-counter medications for symptom relief",
    treatmentDetailed: [
      {
        title: "Hydration",
        description:
          "Replace lost fluids and electrolytes by drinking water, clear broths, or oral rehydration solutions like Pedialyte. Take small sips frequently if nausea is severe. Avoid caffeine, alcohol, and sugary drinks, which can worsen dehydration.",
      },
      {
        title: "Diet Management",
        description:
          "Rest your stomach by avoiding food for a few hours, then gradually introduce bland, easy-to-digest foods like toast, crackers, bananas, and rice (BRAT diet). Avoid dairy, fatty, spicy, or highly seasoned foods until recovery is complete.",
      },
      {
        title: "Over-the-counter Medications",
        description:
          "For diarrhea, loperamide (Imodium) can help, but don't use it if you have bloody diarrhea or high fever. For nausea, try bismuth subsalicylate (Pepto-Bismol) or prescribed antiemetics. Avoid these medications in children unless directed by a doctor.",
      },
      {
        title: "Rest",
        description:
          "Allow your body to focus energy on fighting the infection by getting plenty of rest. Stay home from work or school until symptoms resolve, especially vomiting and diarrhea, to prevent spreading the illness to others.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Hours 1-24",
        description: "Acute symptoms phase",
        milestones: ["Onset of symptoms", "Beginning hydration measures"],
        watchOutFor: [
          "Signs of severe dehydration (extreme thirst, dry mouth, little or no urination, severe weakness)",
          "Bloody diarrhea",
          "High fever (above 101.5°F or 38.6°C)",
        ],
      },
      {
        timeframe: "Days 1-2",
        description: "Peak symptoms phase",
        milestones: ["Symptoms typically at their worst", "Maintaining hydration"],
        watchOutFor: [
          "Inability to keep any fluids down",
          "Diarrhea lasting more than 2 days",
          "Severe abdominal pain",
        ],
      },
      {
        timeframe: "Days 2-3",
        description: "Early recovery phase",
        milestones: ["Symptoms begin to improve", "Beginning to tolerate bland foods"],
        watchOutFor: ["Symptoms worsening after initial improvement", "New symptoms developing"],
      },
      {
        timeframe: "Days 3-7",
        description: "Recovery phase",
        milestones: ["Return to normal diet", "Resolution of most or all symptoms"],
        watchOutFor: ["Persistent symptoms beyond 7 days", "Recurring symptoms after resolution"],
      },
    ],
    whenToSeeDoctor:
      "If you can't keep liquids down, have bloody vomit or stool, have diarrhea for more than three days, have extreme pain or severe abdominal cramping, have a fever above 101.5°F (38.6°C), or show signs of dehydration.",
    preventionTips: [
      "Wash hands and surfaces often when handling food",
      "Keep raw meat, poultry, and seafood separate from ready-to-eat foods",
      "Cook foods to proper temperatures",
      "Refrigerate perishable foods promptly",
      "Be cautious with food from street vendors or unfamiliar sources",
    ],
    dosAndDonts: {
      dos: [
        "Stay hydrated with water and electrolyte solutions",
        "Rest your stomach by avoiding food initially",
        "Gradually reintroduce bland foods",
        "Wash hands thoroughly after using the bathroom",
        "Discard any suspected contaminated food",
      ],
      donts: [
        "Don't take anti-diarrheal medication if you have bloody diarrhea or high fever",
        "Don't eat dairy, fatty, spicy, or sugary foods during recovery",
        "Don't prepare food for others while sick",
        "Don't return to normal activities until fully recovered",
        "Don't share personal items that could spread infection",
      ],
    },
  },
  // Neurological Conditions
  {
    id: 7,
    name: "Migraine",
    category: "Neurological Conditions",
    symptoms: ["Headache", "Sensitivity to light", "Nausea", "Visual disturbances", "Dizziness"],
    description: "A neurological condition characterized by severe, recurring headaches",
    detailedDescription:
      "Migraines are recurring attacks of moderate to severe pain that is throbbing or pulsing and often affects one side of the head. Attacks are often accompanied by other symptoms such as nausea, vomiting, and sensitivity to light and sound. Migraines can last from a few hours to several days and can significantly impact daily activities.",
    recoveryTime: "4-72 hours per episode",
    urgency: "Medium",
    causes: ["Genetic factors", "Hormonal changes", "Stress", "Certain foods and additives", "Environmental factors"],
    treatmentSimple: "Pain relievers, preventive medications, lifestyle changes, and avoiding triggers",
    treatmentDetailed: [
      {
        title: "Acute Pain Management",
        description:
          "Take over-the-counter pain relievers like ibuprofen or aspirin at the first sign of a migraine. For more severe migraines, prescription medications called triptans can help. Anti-nausea medications may also be prescribed if needed.",
      },
      {
        title: "Preventive Medications",
        description:
          "If migraines are frequent or severe, preventive medications may be prescribed. These include beta-blockers, antidepressants, anti-seizure drugs, or CGRP antagonists. These are taken regularly to reduce the frequency and severity of migraines.",
      },
      {
        title: "Environment Management",
        description:
          "During a migraine, rest in a quiet, dark room. Apply cold packs to your forehead or neck. Some people find relief with gentle pressure on the painful areas.",
      },
      {
        title: "Trigger Identification and Avoidance",
        description:
          "Keep a migraine diary to identify and avoid personal triggers. Common triggers include certain foods (aged cheeses, processed foods), alcohol, caffeine, stress, irregular sleep, and hormonal changes.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Prodrome (Hours to days before)",
        description: "Early warning signs before the headache begins",
        milestones: [
          "Recognition of warning signs like mood changes, food cravings, or neck stiffness",
          "Taking preventive measures",
        ],
        watchOutFor: ["Escalating symptoms", "Multiple warning signs occurring together"],
      },
      {
        timeframe: "Aura (If applicable, 20-60 minutes before)",
        description: "Sensory disturbances that precede or accompany the headache",
        milestones: ["Visual disturbances begin to resolve", "Taking medication at this stage if prescribed"],
        watchOutFor: ["Numbness or tingling that spreads", "Speech difficulties", "Weakness on one side of the body"],
      },
      {
        timeframe: "Headache Phase (4-72 hours)",
        description: "The main migraine attack with pain and associated symptoms",
        milestones: ["Pain begins to subside", "Nausea and sensitivity improve", "Able to rest"],
        watchOutFor: [
          "Severe, unbearable pain",
          "Vomiting that prevents medication intake",
          "Headache lasting more than 72 hours",
        ],
      },
      {
        timeframe: "Postdrome (24-48 hours after)",
        description: "Recovery phase after the headache subsides",
        milestones: ["Headache resolves completely", "Energy levels begin to return", "Cognitive function improves"],
        watchOutFor: ["New headache developing", "Persistent neurological symptoms"],
      },
    ],
    whenToSeeDoctor:
      "If you have a headache that is sudden and severe (thunderclap), accompanied by fever, stiff neck, confusion, seizures, double vision, weakness, numbness, or difficulty speaking, or if your headaches are getting progressively worse or are different from your usual migraines.",
    preventionTips: [
      "Identify and avoid personal migraine triggers",
      "Maintain a regular sleep schedule",
      "Stay hydrated and eat regular meals",
      "Exercise regularly",
      "Manage stress through relaxation techniques",
    ],
    dosAndDonts: {
      dos: [
        "Take medication at the first sign of a migraine",
        "Rest in a quiet, dark room during an attack",
        "Apply cold or warm compresses to your head or neck",
        "Stay hydrated",
        "Keep a migraine diary to identify triggers",
      ],
      donts: [
        "Don't delay taking prescribed medication",
        "Don't consume known trigger foods or drinks",
        "Don't engage in intense physical activity during an attack",
        "Don't skip meals or sleep",
        "Don't ignore warning signs of a more serious condition",
      ],
    },
  },
  {
    id: 8,
    name: "Tension Headache",
    category: "Neurological Conditions",
    symptoms: ["Headache", "Pressure around forehead", "Tenderness on scalp", "Neck stiffness"],
    description: "A common type of headache characterized by dull pain and pressure around the head",
    detailedDescription:
      "Tension headaches are the most common type of headache and feel like a constant ache or pressure around the head, especially at the temples or back of the head and neck. They're not as severe as migraines and don't usually cause nausea or vomiting. They can last from 30 minutes to several days.",
    recoveryTime: "30 minutes to a few days",
    urgency: "Low",
    causes: ["Stress", "Poor posture", "Eye strain", "Fatigue", "Dehydration", "Skipping meals"],
    treatmentSimple: "Over-the-counter pain relievers, stress management, and lifestyle changes",
    treatmentDetailed: [
      {
        title: "Pain Relief",
        description:
          "Take over-the-counter pain relievers such as aspirin, ibuprofen, or acetaminophen. Follow dosage instructions carefully and be aware that overuse can lead to medication-overuse headaches.",
      },
      {
        title: "Stress Management",
        description:
          "Practice relaxation techniques such as deep breathing, meditation, or yoga. Take breaks during work or study to stretch and relax tense muscles.",
      },
      {
        title: "Physical Therapy",
        description:
          "Apply a warm or cool compress to your head, neck, or shoulders for relief. Gentle massage of the temples, neck, and shoulders can also help reduce tension.",
      },
      {
        title: "Posture Improvement",
        description:
          "Be mindful of your posture, especially if you work at a desk. Ensure your workspace is ergonomically set up to reduce strain on your neck and shoulders.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Initial onset (First 1-2 hours)",
        description: "Beginning of headache symptoms",
        milestones: ["Recognition of headache", "Taking appropriate medication"],
        watchOutFor: ["Sudden, severe pain", "Headache following head injury"],
      },
      {
        timeframe: "Active phase (2-24 hours)",
        description: "Period of headache symptoms",
        milestones: ["Pain begins to respond to treatment", "Able to continue daily activities with modification"],
        watchOutFor: ["Worsening pain despite treatment", "Development of additional symptoms"],
      },
      {
        timeframe: "Resolution (1-3 days)",
        description: "Gradual improvement of symptoms",
        milestones: ["Pain fully resolves", "Return to normal activities", "Identification of potential triggers"],
        watchOutFor: ["Recurring headaches", "Incomplete resolution after several days"],
      },
    ],
    whenToSeeDoctor:
      "If you have headaches more than 15 days a month, if over-the-counter pain relievers don't help, if your headaches disrupt your life, or if you have a headache accompanied by confusion, fever, stiff neck, or neurological symptoms.",
    preventionTips: [
      "Practice good posture",
      "Take regular breaks from screens and close work",
      "Stay hydrated",
      "Get adequate sleep",
      "Manage stress through relaxation techniques",
    ],
    dosAndDonts: {
      dos: [
        "Take breaks during prolonged desk work or screen time",
        "Stay hydrated throughout the day",
        "Maintain regular sleep patterns",
        "Exercise regularly to reduce stress",
        "Use proper lighting for reading and screen work",
      ],
      donts: [
        "Don't skip meals",
        "Don't overuse pain medications",
        "Don't ignore chronic or severe headaches",
        "Don't maintain poor posture for long periods",
        "Don't ignore stress triggers",
      ],
    },
  },

  // Musculoskeletal Conditions
  {
    id: 9,
    name: "Muscle Strain",
    category: "Musculoskeletal Conditions",
    symptoms: ["Pain", "Swelling", "Limited mobility", "Muscle spasms", "Bruising"],
    description: "An injury to a muscle or tendon from overuse or trauma",
    detailedDescription:
      "A muscle strain, or pulled muscle, occurs when your muscle is overstretched or torn. This can happen as a result of fatigue, overuse, or improper use of a muscle. Strains commonly occur in the lower back and in the muscles at the back of the thigh (hamstrings). The severity can range from mild (Grade I) to complete tears (Grade III).",
    recoveryTime: "2 days to 3 weeks, depending on severity",
    urgency: "Low to Medium",
    causes: ["Overexertion", "Improper lifting", "Sports injuries", "Fatigue", "Poor flexibility"],
    treatmentSimple: "RICE (Rest, Ice, Compression, Elevation), pain management, and gradual return to activity",
    treatmentDetailed: [
      {
        title: "RICE Protocol",
        description:
          "Rest the injured area, apply Ice for 15-20 minutes every 2-3 hours, use Compression with an elastic bandage, and Elevate the injured area above heart level when possible. This helps reduce swelling and pain in the first 48-72 hours.",
      },
      {
        title: "Pain Management",
        description:
          "Take over-the-counter anti-inflammatory medications like ibuprofen or naproxen to reduce pain and swelling. Follow dosage instructions carefully and consult a doctor if you have any medical conditions.",
      },
      {
        title: "Gentle Stretching",
        description:
          "After the acute pain subsides (usually 48-72 hours), begin gentle stretching of the affected muscle. Hold stretches for 30 seconds without bouncing, and stop if you feel pain.",
      },
      {
        title: "Strengthening Exercises",
        description:
          "Once pain-free movement is possible, begin gentle strengthening exercises to rebuild muscle strength and prevent future injuries. Start with low resistance and gradually increase as tolerated.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Acute Phase (Days 1-3)",
        description: "Initial injury period with inflammation",
        milestones: ["Implementing RICE protocol", "Pain management established"],
        watchOutFor: ["Severe pain", "Complete loss of function", "Significant swelling or bruising"],
      },
      {
        timeframe: "Subacute Phase (Days 3-7)",
        description: "Inflammation begins to subside",
        milestones: ["Decreasing pain", "Beginning gentle movement", "Improved range of motion"],
        watchOutFor: ["Increased pain with movement", "No improvement after several days"],
      },
      {
        timeframe: "Recovery Phase (Weeks 1-3)",
        description: "Healing and rehabilitation",
        milestones: [
          "Returning to normal range of motion",
          "Beginning strengthening exercises",
          "Gradual return to normal activities",
        ],
        watchOutFor: ["Pain during strengthening exercises", "Recurring symptoms with activity"],
      },
      {
        timeframe: "Return to Activity (Weeks 2-4)",
        description: "Full functional recovery",
        milestones: ["Return to pre-injury activities", "Normal strength restored", "No pain with activity"],
        watchOutFor: ["Pain returning with specific movements", "Weakness in the affected muscle"],
      },
    ],
    whenToSeeDoctor:
      "If you hear or feel a pop in your muscle at the time of injury, if you can't move the affected area or bear weight, if there is significant swelling or bruising, or if symptoms don't improve within a week.",
    preventionTips: [
      "Warm up properly before exercise",
      "Stretch regularly to maintain flexibility",
      "Build strength gradually",
      "Use proper technique for lifting and sports",
      "Allow adequate recovery time between workouts",
    ],
    dosAndDonts: {
      dos: [
        "Rest the injured muscle initially",
        "Apply ice in the first 48-72 hours",
        "Use proper form during activities",
        "Gradually increase activity as healing progresses",
        "Strengthen the muscle after healing",
      ],
      donts: [
        "Don't apply heat in the first 48-72 hours",
        "Don't continue activities that cause pain",
        "Don't return to full activity too soon",
        "Don't ignore proper warm-up and cool-down",
        "Don't stretch to the point of pain",
      ],
    },
  },
  {
    id: 10,
    name: "Tendinitis",
    category: "Musculoskeletal Conditions",
    symptoms: ["Pain with movement", "Tenderness", "Mild swelling", "Warmth in the affected area"],
    description: "Inflammation of a tendon, often due to repetitive motion",
    detailedDescription:
      "Tendinitis is inflammation or irritation of a tendon — the thick fibrous cords that attach muscle to bone. The condition causes pain and tenderness just outside a joint. While tendinitis can occur in any of your tendons, it's most common around your shoulders, elbows, wrists, knees and heels. Common names for various tendinitis conditions are tennis elbow, golfer's elbow, pitcher's shoulder, swimmer's shoulder, and jumper's knee.",
    recoveryTime: "2-6 weeks for most cases",
    urgency: "Low",
    causes: ["Repetitive motion", "Sudden injury", "Age-related changes", "Certain occupations", "Sports activities"],
    treatmentSimple: "Rest, ice, compression, anti-inflammatory medications, and physical therapy",
    treatmentDetailed: [
      {
        title: "Activity Modification",
        description:
          "Rest the affected area and avoid activities that increase pain. This doesn't mean complete immobilization, but rather avoiding movements that aggravate the condition while maintaining gentle movement.",
      },
      {
        title: "Ice Therapy",
        description:
          "Apply ice to the affected area for 15-20 minutes every 4-6 hours for the first few days to reduce inflammation and pain. Use a thin towel between the ice and your skin to prevent ice burn.",
      },
      {
        title: "Anti-inflammatory Medications",
        description:
          "Take over-the-counter NSAIDs like ibuprofen or naproxen to reduce pain and inflammation. Follow package directions and consult your doctor if you have any conditions that might be affected by these medications.",
      },
      {
        title: "Physical Therapy",
        description:
          "Once acute pain subsides, begin gentle stretching and strengthening exercises. A physical therapist can provide a tailored program to help restore flexibility and strength to the affected area.",
      },
    ],
    recoveryStages: [
      {
        timeframe: "Acute Phase (Days 1-7)",
        description: "Initial inflammatory response",
        milestones: ["Implementing rest and ice", "Pain management established"],
        watchOutFor: ["Severe pain", "Significant swelling", "Complete inability to use the affected area"],
      },
      {
        timeframe: "Subacute Phase (Weeks 1-3)",
        description: "Inflammation begins to resolve",
        milestones: [
          "Decreasing pain with rest",
          "Beginning gentle stretching",
          "Improved comfort with daily activities",
        ],
        watchOutFor: ["Pain that doesn't improve", "Increasing swelling", "Pain spreading to other areas"],
      },
      {
        timeframe: "Recovery Phase (Weeks 3-6)",
        description: "Healing and rehabilitation",
        milestones: [
          "Minimal pain with daily activities",
          "Beginning strengthening exercises",
          "Gradual return to normal activities",
        ],
        watchOutFor: ["Pain returning with specific movements", "Inability to progress with exercises"],
      },
      {
        timeframe: "Return to Activity (Weeks 6+)",
        description: "Full functional recovery",
        milestones: [
          "Return to pre-injury activities with modification if needed",
          "Normal strength and flexibility restored",
          "Understanding of prevention strategies",
        ],
        watchOutFor: ["Recurring symptoms with return to activity", "Need for continued activity modification"],
      },
    ],
    whenToSeeDoctor:
      "If your symptoms don't improve after a week of home treatment, if the pain is severe or keeps you from your normal activities, or if you experience redness, warmth, or swelling in the affected area.",
    preventionTips: [
      "Use proper technique during repetitive activities",
      "Take frequent breaks from repetitive tasks",
      "Strengthen muscles around tendons",
      "Stretch before and after activities",
      "Gradually increase intensity of activities",
    ],
    dosAndDonts: {
      dos: [
        "Rest the affected area initially",
        "Apply ice to reduce inflammation",
        "Use proper ergonomics during work and activities",
        "Maintain overall fitness and flexibility",
        "Warm up properly before activities",
      ],
      donts: [
        "Don't push through pain",
        "Don't return to full activity too soon",
        "Don't ignore early symptoms",
        "Don't forget to take breaks during repetitive activities",
        "Don't skip proper warm-up and cool-down",
      ],
    },
  },
]

export function getRelatedSymptoms(symptomName: string): Symptom[] {
  const symptom = SYMPTOMS.find(
    (s) =>
      s.name.toLowerCase() === symptomName.toLowerCase() ||
      s.aliases.some((alias) => alias.toLowerCase() === symptomName.toLowerCase()),
  )

  if (!symptom) return []

  const relatedConditions = CONDITIONS.filter((condition) => condition.symptoms.includes(symptom.name))

  const relatedSymptomNames = new Set<string>()
  relatedConditions.forEach((condition) => {
    condition.symptoms.forEach((s) => {
      if (s !== symptom.name) relatedSymptomNames.add(s)
    })
  })

  return Array.from(relatedSymptomNames)
    .map((name) => SYMPTOMS.find((s) => s.name === name))
    .filter(Boolean) as Symptom[]
}

export function getConditionsForSymptom(symptomName: string): Condition[] {
  return CONDITIONS.filter((condition) =>
    condition.symptoms.some(
      (s) =>
        s.toLowerCase() === symptomName.toLowerCase() ||
        SYMPTOMS.find(
          (symptom) =>
            symptom.name === s && symptom.aliases.some((alias) => alias.toLowerCase() === symptomName.toLowerCase()),
        ),
    ),
  )
}

export function getSymptomsByBodyPart(bodyPart: string): Symptom[] {
  return SYMPTOMS.filter(
    (symptom) => symptom.bodyParts && symptom.bodyParts.some((part) => part.toLowerCase() === bodyPart.toLowerCase()),
  )
}

