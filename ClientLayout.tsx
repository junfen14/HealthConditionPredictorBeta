"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check if user has a preference stored
    const storedDarkMode = localStorage.getItem("darkMode")
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === "true")
    } else {
      // Check if user prefers dark mode at OS level
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${inter.className} bg-background text-foreground transition-colors`}>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-xl mr-8 py-4 px-2">
                Health Condition Predictor
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="/guide" className="text-sm font-medium transition-colors hover:text-primary">
                  Guide
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} title="Toggle dark mode">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle dark mode</span>
              </Button>

              {/* User dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profile</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t mt-auto">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Juneau Fennell. All rights reserved.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Privacy
                </Link>
                <a
                  href="mailto:juneaufennell1@gmail.com"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                >
                  Contact
                </a>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>
                  This tool is for informational purposes only. Consult a healthcare professional for medical advice.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

