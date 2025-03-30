"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getDailyTasks } from "@/lib/recovery-tasks"

const CONDITIONS = [
  { name: "Ankle Sprain", recoveryTime: "2-3 weeks" },
  { name: "Knee Injury", recoveryTime: "4-6 weeks" },
  { name: "Shoulder Injury", recoveryTime: "6-8 weeks" },
  { name: "Hamstring Strain", recoveryTime: "2-4 weeks" },
  { name: "Back Pain", recoveryTime: "1-2 months" },
  { name: "Wrist Sprain", recoveryTime: "1-2 weeks" },
  // Add more conditions here...
]

interface StartRecoveryPlanButtonProps {
  condition: string
}

export default function StartRecoveryPlanButton({ condition }: StartRecoveryPlanButtonProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("standard")

  const handleStartPlan = () => {
    // In a real app, this would create a recovery plan in the database
    // For now, we'll store it in localStorage for demo purposes
    const recoveryPlans = JSON.parse(localStorage.getItem("recoveryPlans") || "[]")

    // Calculate total days based on condition recovery time
    let totalDays = 14 // Default

    // Parse the recovery time to get a reasonable estimate
    const condition_obj =
      typeof condition === "string"
        ? CONDITIONS.find((c) => c.name === condition || c.id.toString() === condition)
        : CONDITIONS.find((c) => c.id === condition)
    if (condition_obj) {
      const recoveryTimeText = condition_obj.recoveryTime.toLowerCase()

      if (recoveryTimeText.includes("day")) {
        // Extract numbers from strings like "2-3 days"
        const matches = recoveryTimeText.match(/\d+/g)
        if (matches && matches.length > 0) {
          // If range (e.g., "2-3 days"), take the higher number
          totalDays = Number.parseInt(matches[matches.length - 1])
        }
      } else if (recoveryTimeText.includes("week")) {
        const matches = recoveryTimeText.match(/\d+/g)
        if (matches && matches.length > 0) {
          // Convert weeks to days
          totalDays = Number.parseInt(matches[matches.length - 1]) * 7
        }
      } else if (recoveryTimeText.includes("month")) {
        const matches = recoveryTimeText.match(/\d+/g)
        if (matches && matches.length > 0) {
          // Convert months to days (approx)
          totalDays = Number.parseInt(matches[matches.length - 1]) * 30
        }
      }
    }

    // Get the condition ID
    const conditionId = condition_obj?.id || (typeof condition === "number" ? condition : 0)

    // Get initial daily tasks
    const initialTasks = getDailyTasks(conditionId, 0)

    // Convert to the format expected by the dashboard
    const formattedTasks = initialTasks.map((task) => ({
      id: task.id,
      title: task.title,
      duration: task.duration,
      completed: false,
    }))

    const newPlan = {
      id: Date.now(),
      condition,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + totalDays * 24 * 60 * 60 * 1000).toISOString(),
      currentDay: 0,
      totalDays: totalDays,
      type: selectedPlan,
      progress: 0, // Always start at zero
      conditionId: conditionId, // Add the condition ID for task lookup
      dailyTasks: formattedTasks, // Add the daily tasks
    }

    recoveryPlans.push(newPlan)
    localStorage.setItem("recoveryPlans", JSON.stringify(recoveryPlans))

    setOpen(false)
    router.push(`/recovery/${conditionId}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Start Recovery Plan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Recovery Plan</DialogTitle>
          <DialogDescription>Create a personalized recovery plan for {condition}</DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
            <div className="flex items-start space-x-2 space-y-0">
              <RadioGroupItem value="standard" id="standard" />
              <div className="grid gap-1.5">
                <Label htmlFor="standard" className="font-medium">
                  Standard Plan
                </Label>
                <p className="text-sm text-muted-foreground">
                  A general recovery plan based on typical recovery timelines.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-y-0">
              <RadioGroupItem value="personalized" id="personalized" />
              <div className="grid gap-1.5">
                <Label htmlFor="personalized" className="font-medium">
                  Personalized Plan
                </Label>
                <p className="text-sm text-muted-foreground">
                  Customize the plan based on your specific health details and goals.
                </p>
              </div>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label className="text-base">Recovery tracking reminders</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                Daily
              </Button>
              <Button variant="outline" size="sm">
                Every 3 days
              </Button>
              <Button variant="outline" size="sm">
                Weekly
              </Button>
              <Button variant="outline" size="sm">
                None
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleStartPlan}>
            Start Plan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

