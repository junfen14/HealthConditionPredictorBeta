"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import type { RecoveryTask } from "@/lib/enhanced-recovery-tasks"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, CheckCircle2, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface RecoveryPlanCardProps {
  condition: string
  currentDay: number
  totalDays: number
  tasks: RecoveryTask[]
  onTaskComplete: (taskId: string, completed: boolean) => void
  onPainLevelUpdate: (level: number) => void
  completedTasks: string[]
  painLevel: number
}

export default function RecoveryPlanCard({
  condition,
  currentDay,
  totalDays,
  tasks,
  onTaskComplete,
  onPainLevelUpdate,
  completedTasks,
  painLevel,
}: RecoveryPlanCardProps) {
  const [progress, setProgress] = useState(0)

  // Calculate progress based on completed tasks
  useEffect(() => {
    if (tasks.length === 0) return

    const completedCount = tasks.filter((task) => completedTasks.includes(task.id)).length
    const progressPercentage = (completedCount / tasks.length) * 100
    setProgress(progressPercentage)
  }, [tasks, completedTasks])

  // Determine the current stage based on tasks
  const currentStage = tasks.length > 0 ? tasks[0].stage : 1
  const stageNames = ["Acute Phase", "Early Recovery", "Strengthening", "Advanced Recovery", "Return to Activity"]

  const stageName = stageNames[currentStage - 1] || `Stage ${currentStage}`

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>{condition} Recovery Plan</CardTitle>
          <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            Day {currentDay} of {totalDays}
          </span>
        </div>
        <CardDescription>Current stage: {stageName}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Today's Progress</span>
            <span className="text-sm">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="pain-level">Pain Level Today</Label>
            <span className="text-sm font-medium">{painLevel}/10</span>
          </div>
          <Slider
            id="pain-level"
            min={1}
            max={10}
            step={1}
            value={[painLevel]}
            onValueChange={(value) => onPainLevelUpdate(value[0])}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>No Pain</span>
            <span>Moderate</span>
            <span>Severe</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="font-medium">Today's Recovery Tasks</h3>

          {tasks.length === 0 ? (
            <p className="text-muted-foreground text-sm">No tasks available for today.</p>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start space-x-3 p-3 rounded-md bg-muted/50">
                  <Checkbox
                    id={task.id}
                    checked={completedTasks.includes(task.id)}
                    onCheckedChange={(checked) => onTaskComplete(task.id, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor={task.id}
                        className={`font-medium ${completedTasks.includes(task.id) ? "line-through text-muted-foreground" : ""}`}
                      >
                        {task.title}
                      </Label>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Task Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{task.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      <span>{task.frequency}</span>
                      <span className="mx-2">•</span>
                      <span>{task.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">
          View All Tasks
        </Button>

        {progress === 100 && (
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            <CheckCircle2 className="mr-1 h-4 w-4" />
            Complete Day
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

