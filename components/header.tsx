"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <Image
              src="/logo1.jpg"
              alt="Matrix Cloud Hub Logo"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          </div>
          <span className={cn("text-xl font-bold", scrolled ? "text-foreground" : "text-white")}>Matrix Cloud Hub</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Services", "Our Work", "Insights", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "#" : `#${item.toLowerCase().replace(" ", "-")}`}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-primary-600" : "text-white/90 hover:text-white",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle scrolled={scrolled} />
          <Button
            className={cn(
              "hidden md:inline-flex",
              scrolled 
                ? "bg-[#f5c855] hover:bg-yellow-500 text-black" 
                : "bg-[#f5c855] text-black hover:bg-yellow-500",
            )}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </Button>
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  )
}
