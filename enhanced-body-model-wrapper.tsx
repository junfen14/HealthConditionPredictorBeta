"use client"

import { useRouter } from "next/navigation"
import EnhancedBodyModel from "./enhanced-body-model"

export default function EnhancedBodyModelWrapper() {
  const router = useRouter()

  const handleSelectBodyPart = (part: string) => {
    console.log(`Selected: ${part}`)
    if (part) {
      router.push(`/body-part/${part.toLowerCase()}`)
    }
  }

  return <EnhancedBodyModel onSelectBodyPart={handleSelectBodyPart} />
}

