"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  scrolled?: boolean
}

export function MobileMenu({ scrolled = true }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", !scrolled && "text-white hover:text-white hover:bg-white/10")}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <nav className="flex flex-col gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Case Studies", href: "/#case-studies" },
              { label: "Team", href: "/#team" },
              { label: "Contact", href: "/#contact" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-lg font-medium hover:text-primary-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button 
            className="mt-4 bg-[#f5c855] hover:bg-yellow-500 text-black"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
                setOpen(false)
              }
            }}
          >
            Get in Touch
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
