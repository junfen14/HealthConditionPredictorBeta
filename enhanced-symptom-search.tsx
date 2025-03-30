"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getAllSymptomVariations } from "@/lib/comprehensive-conditions"

interface EnhancedSymptomSearchProps {
  initialBodyPart?: string
  onSymptomSelect?: (symptoms: string[]) => void
}

export default function EnhancedSymptomSearch({ initialBodyPart, onSymptomSelect }: EnhancedSymptomSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [allSymptoms, setAllSymptoms] = useState<{ name: string; original: string }[]>([])
  const [filteredSymptoms, setFilteredSymptoms] = useState<{ name: string; original: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Load all symptoms on component mount
  useEffect(() => {
    const symptoms = getAllSymptomVariations()
    setAllSymptoms(symptoms)
  }, [])

  // Filter symptoms based on input value
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredSymptoms([])
      return
    }

    const searchTerm = inputValue.toLowerCase()
    const filtered = allSymptoms.filter((symptom) => symptom.name.toLowerCase().includes(searchTerm))

    // Limit to top 10 results for performance
    setFilteredSymptoms(filtered.slice(0, 10))
  }, [inputValue, allSymptoms])

  // Handle click outside to close popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle initial body part if provided
  useEffect(() => {
    if (initialBodyPart && inputValue === "") {
      setInputValue(initialBodyPart + " ")
      setOpen(true)
    }
  }, [initialBodyPart])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSymptoms.length > 0 || inputValue.trim()) {
      // Save to recent searches
      const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
      const newSearch = selectedSymptoms.length > 0 ? selectedSymptoms[0] : inputValue

      if (!recentSearches.includes(newSearch) && newSearch.trim()) {
        recentSearches.unshift(newSearch)
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches.slice(0, 5)))
      }

      // If callback provided, use it
      if (onSymptomSelect) {
        onSymptomSelect(selectedSymptoms.length > 0 ? selectedSymptoms : [inputValue.trim()])
      } else {
        // Otherwise navigate to results page
        router.push(`/results?symptoms=${selectedSymptoms.join(",")}`)
      }
    }
  }

  const handleSelectSymptom = (symptomName: string, originalName: string) => {
    setOpen(false)
    setInputValue("")

    // Add the original symptom name to ensure proper matching
    if (!selectedSymptoms.includes(originalName)) {
      setSelectedSymptoms([...selectedSymptoms, originalName])
    }
  }

  const handleRemoveSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) => prev.filter((s) => s !== symptom))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Always open the dropdown when typing
    if (value.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      if (filteredSymptoms.length > 0) {
        handleSelectSymptom(filteredSymptoms[0].name, filteredSymptoms[0].original)
      } else if (inputValue.trim()) {
        // If no matches but user typed something, add it as a custom symptom
        setSelectedSymptoms([...selectedSymptoms, inputValue.trim()])
        setInputValue("")
      }
      e.preventDefault()
    }
  }

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Type your symptoms..."
              className="pl-10"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpen(true)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start" side="bottom" sideOffset={5} width="target">
          <Command>
            <CommandList>
              <CommandEmpty>No symptoms found</CommandEmpty>
              <CommandGroup heading="Suggested symptoms">
                {filteredSymptoms.map((symptom, index) => (
                  <CommandItem key={index} onSelect={() => handleSelectSymptom(symptom.name, symptom.original)}>
                    <span>{symptom.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedSymptoms.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSymptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {symptom}
              <button
                onClick={() => handleRemoveSymptom(symptom)}
                className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
        onClick={handleSubmit}
      >
        Find Possible Conditions
      </Button>
    </div>
  )
}

