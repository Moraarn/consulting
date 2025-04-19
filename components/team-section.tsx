import Image from "next/image"
import { CheckCircle, Clock, Users } from "lucide-react"

import { SectionHeading } from "@/components/ui/section-heading"

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <SectionHeading
          badge="Our Team"
          title="Meet Our"
          titleColored="Expert Team"
          description="Our team of highly skilled, self-driven and goal-oriented consultants with years of experience"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ezra Nyangwara",
              role: "CEO & Founder",
              bio: "15+ years of experience in IT leadership and strategy",
              image: "/Ezra.jpg",
            },
            { 
              name: "Ruth Moraa", 
              role: "Developer", 
              bio: "Expert in software development and emerging technologies",
              image: "/Ruth.jpg",
            },
            {
              name: "Dancan Mogire",
              role: "Country Managing Director (CMD) | Health Informatics",
              bio: "Specializes in digital transformation and process optimization",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            },
            {
              name: "Dickson Ogoti",
              role: "Project Manager",
              bio: "Certified PMP with extensive experience in complex IT projects",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            },
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-slate-800">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social links */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {["LinkedIn", "Twitter", "Email"].map((social, j) => (
                      <a
                        key={j}
                        href="#"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          {social === "LinkedIn" ? (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </>
                          ) : social === "Twitter" ? (
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          ) : (
                            <>
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </>
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Team Members", value: "30+", icon: Users },
            { label: "Certifications", value: "100+", icon: CheckCircle },
            { label: "Years Combined Experience", value: "150+", icon: Clock },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
