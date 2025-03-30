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

interface OptimizedSymptomSearchProps {
  initialBodyPart?: string
  onSymptomSelect?: (symptoms: string[]) => void
}

export default function OptimizedSymptomSearch({ initialBodyPart, onSymptomSelect }: OptimizedSymptomSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [allSymptoms, setAllSymptoms] = useState<{ name: string; original: string }[]>([])
  const [filteredSymptoms, setFilteredSymptoms] = useState<{ name: string; original: string }[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const initialBodyPartApplied = useRef(false)

  // Load all symptoms and recent searches on component mount
  useEffect(() => {
    const symptoms = getAllSymptomVariations()
    setAllSymptoms(symptoms)

    // Load recent searches from localStorage
    try {
      const savedSearches = localStorage.getItem("recentSearches")
      if (savedSearches) {
        const parsedSearches = JSON.parse(savedSearches)
        // Limit to 2 recent searches as requested
        setRecentSearches(parsedSearches.slice(0, 2))
      }
    } catch (e) {
      console.error("Error loading recent searches", e)
    }
  }, [])

  // Filter symptoms based on input value - only show exact matches to what's being typed
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredSymptoms([])
      return
    }

    const searchTerm = inputValue.toLowerCase()

    // Only show symptoms that start with the search term or contain the exact word
    const filtered = allSymptoms.filter((symptom) => {
      const symptomName = symptom.name.toLowerCase()

      // Check if symptom starts with the search term
      if (symptomName.startsWith(searchTerm)) {
        return true
      }

      // Check if any word in the symptom starts with the search term
      const words = symptomName.split(" ")
      return words.some((word) => word.startsWith(searchTerm))
    })

    // Limit to top 8 results for performance
    setFilteredSymptoms(filtered.slice(0, 8))
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

  // Handle initial body part if provided - using a ref to prevent infinite updates
  useEffect(() => {
    if (initialBodyPart && !initialBodyPartApplied.current && inputValue === "") {
      initialBodyPartApplied.current = true
      setInputValue(initialBodyPart + " ")
      setOpen(true)
    }
  }, [initialBodyPart, inputValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSymptoms.length > 0 || inputValue.trim()) {
      // Save to recent searches
      const newSearch = selectedSymptoms.length > 0 ? selectedSymptoms[0] : inputValue.trim()

      if (newSearch) {
        const updatedSearches = [newSearch, ...recentSearches.filter((s) => s !== newSearch)].slice(0, 2)
        setRecentSearches(updatedSearches)
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
      }

      // If callback provided, use it
      if (onSymptomSelect) {
        onSymptomSelect(selectedSymptoms.length > 0 ? selectedSymptoms : [inputValue.trim()])
      } else {
        // Otherwise navigate to results page
        router.push(`/results?symptoms=${encodeURIComponent(selectedSymptoms.join(",") || inputValue.trim())}`)
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

  const handleSelectRecentSearch = (search: string) => {
    setOpen(false)
    setInputValue("")

    if (!selectedSymptoms.includes(search)) {
      setSelectedSymptoms([...selectedSymptoms, search])
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

              {recentSearches.length > 0 && inputValue === "" && (
                <CommandGroup heading="Recent Searches">
                  {recentSearches.map((search, index) => (
                    <CommandItem key={`recent-${index}`} onSelect={() => handleSelectRecentSearch(search)}>
                      <Search className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{search}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {filteredSymptoms.length > 0 && (
                <CommandGroup heading="Suggested Symptoms">
                  {filteredSymptoms.map((symptom, index) => (
                    <CommandItem key={index} onSelect={() => handleSelectSymptom(symptom.name, symptom.original)}>
                      <span>{symptom.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
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
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
        size="lg"
        onClick={handleSubmit}
      >
        Find Possible Conditions
      </Button>
    </div>
  )
}

