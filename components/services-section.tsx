"use client"

import { useState } from "react"
import { ChevronRight, Code, Database, Globe, Server, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/ui/section-heading"

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive"
          titleColored="ICT Solutions"
          description="We offer a wide range of technology services tailored to meet the unique needs of our diverse clientele"
        />

        {/* Interactive Services Tabs */}
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <TabsTrigger
                value="all"
                className="rounded-md py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="cloud"
                className="rounded-md py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Cloud
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="rounded-md py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="consulting"
                className="rounded-md py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Consulting
              </TabsTrigger>
              <TabsTrigger
                value="development"
                className="rounded-md py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Development
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cloud Infrastructure",
                  description:
                    "Secure, scalable cloud solutions designed to optimize your business operations and reduce costs.",
                  icon: Server,
                  category: "cloud",
                },
                {
                  title: "Cybersecurity",
                  description:
                    "Comprehensive security solutions to protect your data and systems from evolving threats.",
                  icon: Shield,
                  category: "security",
                },
                {
                  title: "IT Consulting",
                  description:
                    "Strategic guidance from our experienced consultants to help you navigate complex technological challenges.",
                  icon: Database,
                  category: "consulting",
                },
                {
                  title: "Software Development",
                  description:
                    "Custom software solutions tailored to your specific business requirements and objectives.",
                  icon: Code,
                  category: "development",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "End-to-end digital transformation strategies to modernize your business processes and systems.",
                  icon: Zap,
                  category: "consulting",
                },
                {
                  title: "Network Solutions",
                  description:
                    "Reliable network infrastructure design, implementation, and management for seamless connectivity.",
                  icon: Globe,
                  category: "cloud",
                },
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <div key={i} className="group relative">
                    <div className="absolute -inset-px bg-gradient-to-r from-primary-600 to-sky-500 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Card className="relative h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
                      <CardHeader className="pb-2">
                        <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-4"
                        >
                          Learn more <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          {["cloud", "security", "consulting", "development"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cloud Infrastructure",
                    description:
                      "Secure, scalable cloud solutions designed to optimize your business operations and reduce costs.",
                    icon: Server,
                    category: "cloud",
                  },
                  {
                    title: "Cybersecurity",
                    description:
                      "Comprehensive security solutions to protect your data and systems from evolving threats.",
                    icon: Shield,
                    category: "security",
                  },
                  {
                    title: "IT Consulting",
                    description:
                      "Strategic guidance from our experienced consultants to help you navigate complex technological challenges.",
                    icon: Database,
                    category: "consulting",
                  },
                  {
                    title: "Software Development",
                    description:
                      "Custom software solutions tailored to your specific business requirements and objectives.",
                    icon: Code,
                    category: "development",
                  },
                  {
                    title: "Digital Transformation",
                    description:
                      "End-to-end digital transformation strategies to modernize your business processes and systems.",
                    icon: Zap,
                    category: "consulting",
                  },
                  {
                    title: "Network Solutions",
                    description:
                      "Reliable network infrastructure design, implementation, and management for seamless connectivity.",
                    icon: Globe,
                    category: "cloud",
                  },
                ]
                  .filter((service) => service.category === category)
                  .map((service, i) => {
                    const Icon = service.icon
                    return (
                      <div key={i} className="group relative">
                        <div className="absolute -inset-px bg-gradient-to-r from-primary-600 to-sky-500 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <Card className="relative h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
                          <CardHeader className="pb-2">
                            <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                              <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base">{service.description}</CardDescription>
                            <Button
                              variant="ghost"
                              className="p-0 h-auto text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-4"
                            >
                              Learn more <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Service Process */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Our Service Process</h3>
            <p className="text-muted-foreground mt-2">How we deliver exceptional results for our clients</p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 dark:bg-primary-900 -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Discovery", description: "We understand your business needs and challenges", icon: "01" },
                { title: "Strategy", description: "We develop a tailored technology roadmap", icon: "02" },
                { title: "Implementation", description: "We execute the solution with precision", icon: "03" },
                { title: "Support", description: "We provide ongoing maintenance and optimization", icon: "04" },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
