"use client"

import { Progress } from "@/components/ui/progress"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarDays, CheckSquare, Flame, LineChart, ArrowRight } from "lucide-react"
import RecoveryPlanCard from "@/components/recovery-plan-card"
import {
  getEnhancedDailyTasks,
  getAdjustedEnhancedRecoveryTasks,
  type RecoveryTask,
} from "@/lib/enhanced-recovery-tasks"

interface RecoveryPlan {
  id: number
  condition: string
  conditionId: number
  startDate: string
  currentDay: number
  totalDays: number
  progress: number
}

export default function RecoveryDashboard() {
  const [activePlans, setActivePlans] = useState<RecoveryPlan[]>([])
  const [completedPlans, setCompletedPlans] = useState<RecoveryPlan[]>([])
  const [todaysTasks, setTodaysTasks] = useState<RecoveryTask[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [painLevel, setPainLevel] = useState(5)
  const [streak, setStreak] = useState(0)

  // Load data on component mount
  useEffect(() => {
    // Load recovery plans from localStorage
    const storedPlans = JSON.parse(localStorage.getItem("recoveryPlans") || "[]")
    const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks") || "[]")
    const storedPainLevel = Number(localStorage.getItem("painLevel") || "5")
    const storedStreak = Number(localStorage.getItem("streak") || "0")

    // Split into active and completed plans
    const active: RecoveryPlan[] = []
    const completed: RecoveryPlan[] = []

    storedPlans.forEach((plan: RecoveryPlan) => {
      if (plan.progress < 100) {
        active.push(plan)
      } else {
        completed.push(plan)
      }
    })

    setActivePlans(active)
    setCompletedPlans(completed)
    setCompletedTasks(storedCompletedTasks)
    setPainLevel(storedPainLevel)
    setStreak(storedStreak)

    // If no active plans, create a sample plan
    if (active.length === 0 && completed.length === 0) {
      const samplePlan = {
        id: Date.now(),
        condition: "Sprained Ankle",
        conditionId: 101, // Using our enhanced condition ID
        startDate: new Date().toISOString(),
        currentDay: 1,
        totalDays: 28,
        progress: 0,
      }

      setActivePlans([samplePlan])
      localStorage.setItem("recoveryPlans", JSON.stringify([samplePlan]))

      // Get tasks for the sample plan
      const initialTasks = getEnhancedDailyTasks(samplePlan.conditionId, samplePlan.currentDay)
      setTodaysTasks(initialTasks)
    } else if (active.length > 0) {
      // Get tasks for the first active plan
      const plan = active[0]

      // Use the adjusted tasks based on pain level and progress
      const adjustedTasks = getAdjustedEnhancedRecoveryTasks(
        plan.conditionId,
        plan.currentDay,
        plan.progress,
        storedPainLevel,
      )

      setTodaysTasks(adjustedTasks)
    }
  }, [])

  // Save data when it changes
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks))
    localStorage.setItem("painLevel", painLevel.toString())
    localStorage.setItem("streak", streak.toString())

    // Save active and completed plans
    const allPlans = [...activePlans, ...completedPlans]
    localStorage.setItem("recoveryPlans", JSON.stringify(allPlans))
  }, [activePlans, completedPlans, completedTasks, painLevel, streak])

  // Handle task completion
  const handleTaskComplete = (taskId: string, completed: boolean) => {
    if (completed) {
      setCompletedTasks((prev) => [...prev, taskId])
    } else {
      setCompletedTasks((prev) => prev.filter((id) => id !== taskId))
    }

    // Update plan progress if we have active plans
    if (activePlans.length > 0) {
      const updatedPlans = [...activePlans]
      const plan = updatedPlans[0]

      // Calculate progress based on completed tasks
      const taskProgress =
        todaysTasks.length > 0
          ? (completedTasks.filter((id) => todaysTasks.some((task) => task.id === id)).length / todaysTasks.length) *
            100
          : 0

      plan.progress = taskProgress
      setActivePlans(updatedPlans)
    }
  }

  // Handle pain level update
  const handlePainLevelUpdate = (level: number) => {
    setPainLevel(level)

    // If we have active plans, update the tasks based on the new pain level
    if (activePlans.length > 0) {
      const plan = activePlans[0]

      // Use the adjusted tasks based on pain level and progress
      const adjustedTasks = getAdjustedEnhancedRecoveryTasks(plan.conditionId, plan.currentDay, plan.progress, level)

      setTodaysTasks(adjustedTasks)
    }
  }

  // Complete the current day and advance to the next
  const completeDay = () => {
    if (activePlans.length === 0) return

    const updatedPlans = [...activePlans]
    const plan = updatedPlans[0]

    // Increment the current day
    plan.currentDay += 1

    // Reset completed tasks for the day
    setCompletedTasks([])

    // Update streak
    setStreak((prev) => prev + 1)

    // Get new tasks for the next day
    const newTasks = getAdjustedEnhancedRecoveryTasks(
      plan.conditionId,
      plan.currentDay,
      0, // Reset progress for the new day
      painLevel,
    )

    setTodaysTasks(newTasks)
    setActivePlans(updatedPlans)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
            <CalendarDays className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[hsl(var(--success))]">{activePlans.length}</div>
            <p className="text-xs text-muted-foreground">
              {activePlans.length} active recovery plans currently in progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[hsl(var(--success))]">{completedTasks.length}</div>
            <p className="text-xs text-muted-foreground">{completedTasks.length} recovery tasks completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500 dark:text-amber-500 flex items-center">
              {streak} days
              <Flame className="h-5 w-5 ml-2 text-orange-500" />
            </div>
            <p className="text-xs text-muted-foreground">You've consistently followed your plan for {streak} days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Plans</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activePlans.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground mb-4">You don't have any active recovery plans.</p>
                <Button>Start a New Recovery Plan</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {activePlans.map((plan) => (
                <RecoveryPlanCard
                  key={plan.id}
                  condition={plan.condition}
                  currentDay={plan.currentDay}
                  totalDays={plan.totalDays}
                  tasks={todaysTasks}
                  onTaskComplete={handleTaskComplete}
                  onPainLevelUpdate={handlePainLevelUpdate}
                  completedTasks={completedTasks}
                  painLevel={painLevel}
                />
              ))}

              {completedTasks.length === todaysTasks.length && todaysTasks.length > 0 && (
                <div className="flex justify-end">
                  <Button onClick={completeDay} className="bg-green-600 hover:bg-green-700 text-white">
                    Complete Day & Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedPlans.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">You don't have any completed recovery plans yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {completedPlans.map((plan) => (
                <Card key={plan.id}>
                  <CardHeader>
                    <CardTitle>{plan.condition}</CardTitle>
                    <CardDescription>Completed on {new Date(plan.startDate).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="mr-2 h-5 w-5" />
                Recovery Analytics
              </CardTitle>
              <CardDescription>Track your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-[200px] flex items-end justify-between">
                  {/* Placeholder for pain level chart */}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-12 bg-primary/20 rounded-t relative"
                      style={{
                        height: `${Math.max(20, Math.min(100, Math.random() * 100))}%`,
                      }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">
                        {Math.floor(Math.random() * 10) + 1}
                      </span>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        Day {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground mt-8">Pain Level Trend (Last 7 Days)</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

