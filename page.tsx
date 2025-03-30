"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Sun, Bell, Globe, Shield } from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [language, setLanguage] = useState("english")
  const [privacy, setPrivacy] = useState("private")
  const [textSize, setTextSize] = useState<"small" | "normal" | "large">("normal")

  useEffect(() => {
    // Load user preferences from localStorage
    const storedDarkMode = localStorage.getItem("darkMode")
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === "true")
    }

    const storedNotifications = localStorage.getItem("notifications")
    if (storedNotifications) {
      setNotifications(storedNotifications === "true")
    }

    const storedTextSize = localStorage.getItem("textSize") as "small" | "normal" | "large" | null
    if (storedTextSize) {
      setTextSize(storedTextSize)
    }

    // Apply the text size class
    document.body.classList.remove("text-size-small", "text-size-normal", "text-size-large")
    document.body.classList.add(`text-size-${textSize}`)
  }, [textSize])

  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked)

    // Update the document class
    if (checked) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Save to localStorage
    localStorage.setItem("darkMode", checked.toString())
  }

  const handleNotificationsChange = (checked: boolean) => {
    setNotifications(checked)
    localStorage.setItem("notifications", checked.toString())
  }

  const handleTextSizeChange = (size: "small" | "normal" | "large") => {
    setTextSize(size)
    document.body.classList.remove("text-size-small", "text-size-normal", "text-size-large")
    document.body.classList.add(`text-size-${size}`)
    localStorage.setItem("textSize", size)
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="appearance" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how Health Checker looks on your device</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <div>
                      <Label htmlFor="dark-mode" className="font-medium">
                        Dark Mode
                      </Label>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                  </div>
                  <Switch id="dark-mode" checked={darkMode} onCheckedChange={handleDarkModeChange} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="text-size" className="font-medium">
                      Text Size
                    </Label>
                    <p className="text-sm text-muted-foreground">Adjust the size of text throughout the application</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={textSize === "small" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleTextSizeChange("small")}
                      title="25% smaller"
                    >
                      A-
                    </Button>
                    <Button
                      variant={textSize === "normal" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleTextSizeChange("normal")}
                      title="Normal size"
                    >
                      A
                    </Button>
                    <Button
                      variant={textSize === "large" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleTextSizeChange("large")}
                      title="50% bigger"
                    >
                      A+
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Bell className="h-5 w-5" />
                    <div>
                      <Label htmlFor="recovery-reminders" className="font-medium">
                        Recovery Reminders
                      </Label>
                      <p className="text-sm text-muted-foreground">Get reminders about your daily recovery tasks</p>
                    </div>
                  </div>
                  <Switch id="recovery-reminders" checked={notifications} onCheckedChange={handleNotificationsChange} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Bell className="h-5 w-5" />
                    <div>
                      <Label htmlFor="progress-updates" className="font-medium">
                        Progress Updates
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly summaries of your recovery progress
                      </p>
                    </div>
                  </div>
                  <Switch id="progress-updates" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="language" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Language</CardTitle>
                <CardDescription>Choose your preferred language</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Globe className="h-5 w-5" />
                    <div>
                      <Label className="font-medium">Application Language</Label>
                      <p className="text-sm text-muted-foreground">Select the language for the user interface</p>
                    </div>
                  </div>
                  <select
                    className="rounded-md border border-input bg-background px-3 py-2"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy</CardTitle>
                <CardDescription>Manage your privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-5 w-5" />
                    <div>
                      <Label className="font-medium">Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                    </div>
                  </div>
                  <select
                    className="rounded-md border border-input bg-background px-3 py-2"
                    value={privacy}
                    onChange={(e) => setPrivacy(e.target.value)}
                  >
                    <option value="private">Private</option>
                    <option value="friends">Friends Only</option>
                    <option value="public">Public</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-5 w-5" />
                    <div>
                      <Label htmlFor="data-collection" className="font-medium">
                        Data Collection
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Allow anonymous data collection to improve our service
                      </p>
                    </div>
                  </div>
                  <Switch id="data-collection" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

