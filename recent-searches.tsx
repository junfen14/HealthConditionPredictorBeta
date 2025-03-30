"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getRelatedSymptoms } from "@/lib/symptom-data"

export default function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [recommendedSearches, setRecommendedSearches] = useState<string[]>([])

  useEffect(() => {
    // Load recent searches from localStorage
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
    setRecentSearches(savedSearches)

    // Generate recommended searches based on recent searches
    if (savedSearches.length > 0) {
      const recommendations = new Set<string>()

      // Get related symptoms for each recent search
      savedSearches.forEach((search) => {
        const relatedSymptoms = getRelatedSymptoms(search)
        relatedSymptoms.forEach((symptom) => {
          if (symptom && !savedSearches.includes(symptom.name)) {
            recommendations.add(symptom.name)
          }
        })
      })

      // If no related symptoms, add some common ones
      if (recommendations.size === 0) {
        const commonSymptoms = ["Headache", "Back Pain", "Fever", "Cough", "Fatigue"]
        commonSymptoms.forEach((s) => recommendations.add(s))
      }

      setRecommendedSearches(Array.from(recommendations).slice(0, 2))
    } else {
      // Default recommendations if no recent searches
      setRecommendedSearches(["Headache", "Back Pain"])
    }
  }, [])

  if (recentSearches.length === 0) {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Recommended Searches</h3>
          <div className="space-y-2">
            {recommendedSearches.map((symptom, index) => (
              <Link
                key={index}
                href={`/results?symptoms=${symptom.toLowerCase().replace(/\s+/g, "-")}`}
                className="block p-3 hover:bg-gray-100 rounded-md"
              >
                {symptom}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Your Recent Searches</h3>
        <div className="space-y-2">
          {recentSearches.map((search, index) => (
            <Link
              key={index}
              href={`/results?symptoms=${search.toLowerCase().replace(/\s+/g, "-")}`}
              className="block p-3 hover:bg-gray-100 rounded-md"
            >
              {search}
            </Link>
          ))}
        </div>
      </div>

      {recommendedSearches.length > 0 && (
        <div>
          <h3 className="text-sm font-medium mb-2">Recommended For You</h3>
          <div className="space-y-2">
            {recommendedSearches.map((symptom, index) => (
              <Link
                key={index}
                href={`/results?symptoms=${symptom.toLowerCase().replace(/\s+/g, "-")}`}
                className="block p-3 hover:bg-gray-100 rounded-md"
              >
                {symptom}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

