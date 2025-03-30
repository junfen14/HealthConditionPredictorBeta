"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/" && "text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/results"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/results" && "text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              Results
            </Link>
            <Link
              href="/results/table-view"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/results/table-view" && "text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              Table View
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/about" && "text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/guide"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/guide" && "text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              Guide
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

