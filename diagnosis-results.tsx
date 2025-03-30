"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Clock, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { matchSymptomsToConditions, type PersonalFactors, type MatchResult } from "@/lib/comprehensive-conditions"

interface DiagnosisResultsProps {
  symptoms: string[]
  personalFactors?: PersonalFactors
}

export default function DiagnosisResults({ symptoms, personalFactors }: DiagnosisResultsProps) {
  const [results, setResults] = useState<MatchResult[]>([])
  const [expandedResult, setExpandedResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (symptoms.length > 0) {
      // Match symptoms to conditions with personalization
      const matchResults = matchSymptomsToConditions(symptoms, personalFactors)
      setResults(matchResults)
      setLoading(false)
    }
  }, [symptoms, personalFactors])

  const toggleExpand = (conditionId: string) => {
    if (expandedResult === conditionId) {
      setExpandedResult(null)
    } else {
      setExpandedResult(conditionId)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">Analyzing your symptoms...</p>
        </CardContent>
      </Card>
    )
  }

  if (results.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No Matches Found</h3>
          <p className="text-muted-foreground mb-4">
            We couldn't find any conditions that match your symptoms. Please try adding more symptoms or consult a
            healthcare professional.
          </p>
          <Button asChild>
            <Link href="/">Try Again</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <CardTitle>Possible Conditions</CardTitle>
        <CardDescription>Based on your symptoms: {symptoms.join(", ")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {results.map((result) => (
            <Card key={result.condition.id} className="overflow-hidden">
              <div className="p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{result.condition.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{result.condition.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        Match: {result.matchPercentage}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center">
                        <AlertCircle
                          className={`h-4 w-4 mr-1 ${
                            result.condition.urgency === "High" || result.condition.urgency === "Emergency"
                              ? "text-red-500"
                              : result.condition.urgency === "Medium"
                                ? "text-amber-500"
                                : "text-green-500"
                          }`}
                        />
                        <span className="text-xs">Severity: {result.condition.urgency}</span>
                      </div>

                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-500" />
                        <span className="text-xs">Recovery: {result.condition.recoveryTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(result.condition.id)}
                        className="text-blue-600 dark:text-blue-400 text-xs underline flex items-center"
                      >
                        More Details
                        {expandedResult === result.condition.id ? (
                          <ChevronUp className="h-3 w-3 ml-1" />
                        ) : (
                          <ChevronDown className="h-3 w-3 ml-1" />
                        )}
                      </button>

                      <Button asChild size="sm" className="text-xs h-7 px-2">
                        <Link href={`/conditions/${result.condition.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {expandedResult === result.condition.id && (
                <div className="bg-muted/30 p-4 border-t">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Why this condition matches your symptoms:</h4>
                    <ul className="text-xs space-y-1 list-disc pl-5">
                      {result.keyFactors.map((factor, idx) => (
                        <li key={idx}>{factor}</li>
                      ))}
                    </ul>
                    <div className="pt-2 flex justify-end">
                      <Button asChild size="sm" className="text-xs">
                        <Link href={`/recovery/${result.condition.id}`}>View Recovery Plan</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/">New Search</Link>
        </Button>
        <p className="text-sm text-muted-foreground">Always consult a healthcare professional for medical advice.</p>
      </CardFooter>
    </Card>
  )
}

