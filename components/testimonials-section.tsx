import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading badge="Testimonials" title="What Our" titleColored="Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Matrix Cloud Hub transformed our IT infrastructure, resulting in improved efficiency and significant cost savings.",
              author: "Ministry of ICT, Kenya",
              role: "Director of Digital Services",
              image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
            },
            {
              quote:
                "Their team's expertise and dedication to our project exceeded our expectations. Highly recommended!",
              author: "Faith International Church",
              role: "IT Administrator",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            },
            {
              quote:
                "A reliable partner that understands our business needs and delivers innovative solutions consistently.",
              author: "Savannah Enterprises Ltd",
              role: "Chief Technology Officer",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            },
          ].map((testimonial, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary-600 to-sky-500 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Card className="relative h-full border-none shadow-md bg-white dark:bg-slate-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.author}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute -top-4 -left-4 text-primary-100 dark:text-primary-900/30 h-12 w-12"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-lg relative z-10 pl-6">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Client Satisfaction */}
        <div className="mt-20 max-w-4xl mx-auto bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
              <p className="text-muted-foreground mb-6">
                We measure our success by the satisfaction and success of our clients. Here's what our client surveys
                reveal:
              </p>
              <Button className="bg-[#f5c855] hover:bg-yellow-500 text-black" asChild>
                <Link href="/#case-studies">Read More Success Stories</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Overall Satisfaction", percentage: 98 },
                { label: "Would Recommend Us", percentage: 96 },
                { label: "Project Delivery", percentage: 94 },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{stat.label}</span>
                    <span className="text-sm font-medium">{stat.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-primary-600 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
