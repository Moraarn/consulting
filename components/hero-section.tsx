"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Code, Database, Globe, Server, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.4

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        ></div>
      </div>

      <div className="container relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-slate-800/50 px-4 py-1 text-sm text-[#f5c855] backdrop-blur mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f5c855] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f5c855]"></span>
              </span>
              Leading ICT Solutions in Kenya
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="text-primary-600">Transforming</span> <span className="text-blue">Businesses </span>Through{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent text-primary bg-clip-text bg-gradient-to-r from-slate-300 to-white">
                  Innovative Technology
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-white/20 blur-sm"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              A leading Kenyan ICT consultancy company delivering cutting-edge solutions to government departments,
              religious organizations, and private companies.
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="bg-white hover:bg-gray-100 text-slate-900">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="bg-[#f5c855] hover:bg-yellow-500 text-black">
                Our Portfolio
              </Button>
            </div>

            {/* Floating stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Projects Completed", value: "200+" },
                { label: "Satisfied Clients", value: "150+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4 text-center"
                  style={{
                    transform: `translateY(${Math.sin(i + 1) * 8 * Math.sin(scrollY / 500)}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg"
                alt="Digital transformation visualization"
                width={600}
                height={600}
                className="h-full w-full object-cover mix-blend-luminosity opacity-80"
              />

              {/* Floating tech icons */}
              {[
                { icon: Server, top: "10%", left: "-10%", delay: 0 },
                { icon: Shield, top: "70%", left: "-5%", delay: 1 },
                { icon: Globe, top: "20%", right: "-10%", delay: 2 },
                { icon: Database, top: "80%", right: "-5%", delay: 3 },
                { icon: Code, bottom: "-5%", left: "30%", delay: 4 },
              ].map((item, i) => {
                const Icon = item.icon
                const style: React.CSSProperties = {
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  animationDelay: `${item.delay * 0.2}s`,
                }
                return (
                  <div
                    key={i}
                    className="absolute animate-float rounded-full border border-slate-600 bg-slate-800/80 p-3 backdrop-blur"
                    style={style}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                )
              })}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full border border-white/10"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-white/10"></div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white dark:fill-background"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
