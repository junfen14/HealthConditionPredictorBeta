export const CONDITIONS = [
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "Immediately if you suspect a fracture. Delay in treatment can lead to improper healing and complications.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "If you can't bear weight on the injured limb, if the joint looks deformed, or if pain and swelling don't improve after a few days of home treatment.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
    },
  },
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "If symptoms last more than 10 days, if symptoms are severe or unusual, if you have a high fever, or if you have underlying health conditions like asthma or heart disease.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
    },
  },
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "If you have a headache that is sudden and severe (thunderclap), accompanied by fever, stiff neck, confusion, seizures, double vision, weakness, numbness, or difficulty speaking, or if your headaches are getting progressively worse or are different from your usual migraines.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
    },
  },
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "If you hear or feel a pop in your muscle at the time of injury, if you can't move the affected area or bear weight, if there is significant swelling or bruising, or if symptoms don't improve within a week.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
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
    treatmentDetailed: [],
    recoveryStages: [],
    whenToSeeDoctor:
      "If your symptoms don't improve after a week of home treatment, if the pain is severe or keeps you from your normal activities, or if you experience redness, warmth, or swelling in the affected area.",
    preventionTips: [],
    dosAndDonts: {
      dos: [],
      donts: [],
    },
  },
]

