import Image from "next/image"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24">
      <div className="container">
        <SectionHeading
          badge="Our Work"
          title="Featured"
          titleColored="Case Studies"
          description="Explore how we've helped organizations across different sectors achieve their technology goals"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Government Digital Transformation",
              category: "Public Sector",
              description: "Modernizing systems for a key government department, improving efficiency by 40%.",
              image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            },
            {
              title: "Church Management System",
              category: "Religious Organization",
              description: "Custom software solution for a major religious organization with 50,000+ members.",
              image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
            },
            {
              title: "Enterprise Cloud Migration",
              category: "Private Sector",
              description: "Seamless migration to cloud infrastructure for a leading Kenyan enterprise.",
              image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
            },
          ].map((study, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="mb-2 inline-block rounded-full bg-primary-600/90 px-3 py-1 text-xs font-medium">
                  {study.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-slate-200 mb-4 opacity-0 transform transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {study.description}
                </p>
                <Button size="sm" className="bg-[#f5c855] hover:bg-yellow-500 text-black">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Results & Impact */}
        <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Our Impact</h3>
            <p className="text-muted-foreground mt-2">Measurable results we've delivered for our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "40%", description: "Average efficiency improvement" },
              { metric: "99.9%", description: "System uptime for critical infrastructure" },
              { metric: "60%", description: "Reduction in IT operational costs" },
              { metric: "3x", description: "Faster deployment of new features" },
            ].map((impact, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600">{impact.metric}</div>
                <p className="text-sm text-muted-foreground mt-2">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
