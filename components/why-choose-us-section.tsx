"use client"

import { CheckCircle, ChevronRight, Globe, Layers, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Local Expertise, Global Standards",
      description: "We combine deep understanding of the Kenyan market with international best practices.",
      icon: Globe,
      details: {
        overview: "Our unique blend of local market knowledge and international expertise sets us apart in the Kenyan ICT landscape.",
        keyPoints: [
          "Deep understanding of local business environment and regulations",
          "Partnerships with leading global technology providers",
          "Implementation of international best practices and standards",
          "Local team with global certifications and training",
          "Cultural awareness and contextual solutions"
        ],
        impact: "This combination allows us to deliver solutions that are both globally competitive and locally relevant, ensuring maximum value for our clients."
      }
    },
    {
      title: "End-to-End Solutions",
      description: "From strategy to implementation and support, we provide comprehensive technology services.",
      icon: Layers,
      details: {
        overview: "We offer complete technology solutions that cover every aspect of your digital transformation journey.",
        keyPoints: [
          "Strategic IT consulting and roadmap development",
          "Custom software development and integration",
          "Infrastructure setup and cloud migration",
          "24/7 monitoring and support services",
          "Regular maintenance and updates"
        ],
        impact: "Our comprehensive approach ensures seamless integration, consistent quality, and long-term success of your technology investments."
      }
    },
    {
      title: "Innovation-Driven Approach",
      description: "We constantly explore emerging technologies to deliver cutting-edge solutions.",
      icon: Zap,
      details: {
        overview: "Innovation is at the core of everything we do, keeping our clients ahead in the fast-evolving technology landscape.",
        keyPoints: [
          "Dedicated research and development team",
          "Regular exploration of emerging technologies",
          "Proof-of-concept development for new solutions",
          "Innovation workshops and knowledge sharing",
          "Continuous improvement and optimization"
        ],
        impact: "Our focus on innovation ensures that our clients benefit from the latest technological advancements while maintaining stability and reliability."
      }
    }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <SectionHeading badge="Why Choose Us" title="What Sets Us" titleColored="Apart" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-primary-600 to-sky-500 rounded-xl blur-sm opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative h-full bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm flex flex-col">
                  <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="mt-auto pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          Learn more <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-2xl">
                            <Icon className="h-6 w-6 text-primary-600" />
                            {item.title}
                          </DialogTitle>
                          <DialogDescription className="text-base mt-4">
                            {item.details.overview}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6">
                          <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {item.details.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <h4 className="font-semibold mb-2">Impact</h4>
                            <p className="text-muted-foreground">{item.details.impact}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature comparison */}
        <div className="mt-24">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold">How We Compare</h3>
              <p className="text-muted-foreground mt-1">See why clients choose Matrix Cloud Hub over alternatives</p>
            </div>
            <div className="overflow-x-auto min-w-full">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <th className="px-4 sm:px-6 py-4 text-left font-medium w-1/2">Features</th>
                    <th className="px-4 sm:px-6 py-4 text-center font-medium w-1/4">Matrix Cloud Hub</th>
                    <th className="px-4 sm:px-6 py-4 text-center font-medium w-1/4">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local Market Understanding", us: true, them: false },
                    { feature: "End-to-End Solutions", us: true, them: "Limited" },
                    { feature: "Customized Approach", us: true, them: "Standardized" },
                    { feature: "Ongoing Support", us: true, them: "Additional Cost" },
                    { feature: "Innovation Focus", us: true, them: "Variable" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 sm:px-6 py-4 text-sm">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-4 text-center">
                        {row.us === true ? <CheckCircle className="h-5 w-5 text-primary-600 mx-auto" /> : row.us}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center">
                        {row.them === true ? (
                          <CheckCircle className="h-5 w-5 mx-auto" />
                        ) : row.them === false ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-slate-400"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        ) : (
                          <span className="text-sm">{row.them}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
