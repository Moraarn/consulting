import Image from "next/image"
import { Layers, Users, Zap } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <SectionHeading badge="About Us" title="Pioneering Digital Excellence in" titleColored="East Africa" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/78/d3/a0/78d3a05719edef1a11424f87982bf779.jpg"
                alt="Matrix Cloud Hub office"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-10 bg-primary-500"></div>
                  <span className="text-sm font-medium text-primary-300">Our Headquarters</span>
                </div>
                <h3 className="text-xl font-bold">Nairobi, Kenya</h3>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2">
                  <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold">Expert Team</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team of highly skilled consultants brings years of experience in implementing integrated business
                solutions.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <p className="text-lg">
                We are a Kenyan Information & Communication Technology Company headquartered in Nairobi, Kenya. Our
                mission is to grow and expand worldwide, creating a network of research & development, "innovation labs"
                and "delivery centers".
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Our Vision",
                    description:
                      "To be the leading ICT solutions provider in Africa, driving digital transformation across industries.",
                    icon: Zap,
                  },
                  {
                    title: "Our Mission",
                    description:
                      "To deliver innovative, reliable, and secure technology solutions that empower our clients to achieve their goals.",
                    icon: Layers,
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Card key={i} className="border-none shadow-md bg-slate-50 dark:bg-slate-900">
                      <CardHeader className="pb-2">
                        <div className="bg-primary-100 dark:bg-primary-900/30 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Government Partnerships", value: "25+" },
                  { label: "Religious Organizations", value: "40+" },
                  { label: "Private Companies", value: "85+" },
                  { label: "Years of Experience", value: "10+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-lg border bg-slate-50 dark:bg-slate-900">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
