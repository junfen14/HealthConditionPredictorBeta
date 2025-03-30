"use client"

import { useState } from "react"
import { AlertTriangle, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MedicalDisclaimer() {
  const [showPopout, setShowPopout] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="text-xs text-muted-foreground flex items-center"
        onClick={() => setShowPopout(!showPopout)}
      >
        <Info className="h-3 w-3 mr-1" />
        Medical Disclaimer
      </Button>

      {showPopout && (
        <div className="absolute bottom-full right-0 mb-2 w-72 md:w-96 z-50 shadow-lg rounded-lg border bg-background p-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
              <h3 className="font-medium text-amber-800 dark:text-amber-300">Medical Disclaimer</h3>
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setShowPopout(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="text-xs text-amber-700 dark:text-amber-400 space-y-2">
            <p>
              The content on this application is provided for informational purposes only and is not intended to be a
              substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may
              have regarding a medical condition.
            </p>
            <p>If you think you may have a medical emergency, call your doctor or emergency services immediately.</p>
          </div>
        </div>
      )}
    </div>
  )
}

