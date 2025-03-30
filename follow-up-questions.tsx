"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface FollowUpQuestionsProps {
  bodyPart: string
}

export default function FollowUpQuestions({ bodyPart }: FollowUpQuestionsProps) {
  const router = useRouter()
  const [painType, setPainType] = useState("")
  const [painOnset, setPainOnset] = useState("")
  const [painDuration, setPainDuration] = useState("")
  const [additionalSymptoms, setAdditionalSymptoms] = useState<string[]>([])
  const [painCharacteristics, setPainCharacteristics] = useState<string[]>([])

  // Define body part specific questions
  const getBodyPartQuestions = () => {
    switch (bodyPart.toLowerCase()) {
      case "head":
        return {
          painTypes: ["Sharp", "Dull", "Throbbing", "Pressure"],
          additionalOptions: ["Nausea", "Sensitivity to light", "Dizziness", "Blurred vision"],
        }
      case "chest":
        return {
          painTypes: ["Sharp", "Dull", "Pressure", "Burning"],
          additionalOptions: ["Shortness of breath", "Cough", "Heart palpitations", "Pain radiates to arm"],
        }
      case "abdomen":
        return {
          painTypes: ["Sharp", "Dull", "Cramping", "Burning"],
          additionalOptions: ["Nausea", "Vomiting", "Diarrhea", "Bloating"],
        }
      case "back":
        return {
          painTypes: ["Sharp", "Dull", "Shooting", "Stiffness"],
          additionalOptions: ["Radiates down leg", "Numbness", "Tingling", "Muscle spasms"],
        }
      case "shoulder":
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Stiffness"],
          additionalOptions: ["Limited range of motion", "Clicking sound", "Weakness", "Pain when lifting"],
        }
      case "upper arm":
      case "forearm":
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Burning"],
          additionalOptions: ["Weakness", "Numbness", "Tingling", "Swelling"],
        }
      case "hand":
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Tingling"],
          additionalOptions: ["Numbness", "Swelling", "Stiffness", "Difficulty gripping"],
        }
      case "hip":
      case "butt":
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Stiffness"],
          additionalOptions: ["Pain when walking", "Pain when sitting", "Radiates down leg", "Limited range of motion"],
        }
      case "upper leg":
      case "lower leg":
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Cramping"],
          additionalOptions: ["Swelling", "Bruising", "Weakness", "Pain when walking"],
        }
      case "foot":
        return {
          painTypes: ["Sharp", "Dull", "Burning", "Tingling"],
          additionalOptions: ["Swelling", "Bruising", "Pain when walking", "Stiffness"],
        }
      default:
        return {
          painTypes: ["Sharp", "Dull", "Aching", "Throbbing"],
          additionalOptions: ["Swelling", "Bruising", "Stiffness", "Weakness"],
        }
    }
  }

  const { painTypes, additionalOptions } = getBodyPartQuestions()

  const handleAdditionalSymptomChange = (symptom: string) => {
    setAdditionalSymptoms((prev) => (prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]))
  }

  const handlePainCharacteristicChange = (type: string, checked: boolean) => {
    setPainCharacteristics((prev) => (checked ? [...prev, type] : prev.filter((t) => t !== type)))
  }

  const handleSubmit = () => {
    // Collect all symptoms
    const symptoms = []

    if (painType) {
      symptoms.push(`${painType} pain in ${bodyPart.toLowerCase()}`)
    }

    // Add additional symptoms
    symptoms.push(...additionalSymptoms)

    // Navigate to results page with all symptoms
    if (symptoms.length > 0) {
      router.push(`/results?symptoms=${encodeURIComponent(symptoms.join(","))}`)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-medium">What type of pain or discomfort are you experiencing?</h3>
        <RadioGroup value={painType} onValueChange={setPainType}>
          <div className="grid grid-cols-2 gap-2">
            {painTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <RadioGroupItem value={type} id={`pain-${type.toLowerCase()}`} />
                <Label htmlFor={`pain-${type.toLowerCase()}`}>{type}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="mb-2 font-medium">What are the pain characteristics?</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            "Sharp",
            "Dull",
            "Throbbing",
            "Burning",
            "Aching",
            "Stabbing",
            "Numbness/Tingling",
            "Radiating",
            "Stiffness",
          ].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`pain-char-${type.toLowerCase().replace("/", "-")}`}
                checked={painCharacteristics.includes(type)}
                onCheckedChange={(checked) => handlePainCharacteristicChange(type, checked as boolean)}
              />
              <Label htmlFor={`pain-char-${type.toLowerCase().replace("/", "-")}`}>{type}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-medium">When did this start?</h3>
        <RadioGroup value={painOnset} onValueChange={setPainOnset}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sudden" id="onset-sudden" />
              <Label htmlFor="onset-sudden">Suddenly (minutes/hours)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recent" id="onset-recent" />
              <Label htmlFor="onset-recent">Recently (days)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gradual" id="onset-gradual" />
              <Label htmlFor="onset-gradual">Gradually (weeks)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="chronic" id="onset-chronic" />
              <Label htmlFor="onset-chronic">Long-term (months/years)</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="mb-2 font-medium">How long does the pain last?</h3>
        <RadioGroup value={painDuration} onValueChange={setPainDuration}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="brief" id="duration-brief" />
              <Label htmlFor="duration-brief">Brief (seconds/minutes)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hours" id="duration-hours" />
              <Label htmlFor="duration-hours">Hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="days" id="duration-days" />
              <Label htmlFor="duration-days">Days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="constant" id="duration-constant" />
              <Label htmlFor="duration-constant">Constant</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Do you have any of these additional symptoms?</h3>
        <div className="grid grid-cols-2 gap-2">
          {additionalOptions.map((symptom) => (
            <div key={symptom} className="flex items-center space-x-2">
              <Checkbox
                id={`symptom-${symptom.toLowerCase().replace(/\s+/g, "-")}`}
                checked={additionalSymptoms.includes(symptom)}
                onCheckedChange={() => handleAdditionalSymptomChange(symptom)}
              />
              <Label htmlFor={`symptom-${symptom.toLowerCase().replace(/\s+/g, "-")}`}>{symptom}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Find Possible Conditions
      </Button>
    </div>
  )
}

