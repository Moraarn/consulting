import { SectionHeading } from "@/components/ui/section-heading"

export function JourneySection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          badge="Our Journey"
          title="The"
          titleColored="Matrix Cloud Hub"
          description="From our humble beginnings to becoming a leading ICT solutions provider in Kenya"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900 -translate-x-1/2"></div>

          {[
            {
              year: "2013",
              title: "Foundation",
              description: "Matrix Cloud Hub was founded with a vision to transform businesses through technology.",
            },
            {
              year: "2015",
              title: "First Government Contract",
              description: "Secured our first major contract with a Kenyan government department.",
            },
            {
              year: "2017",
              title: "Expansion",
              description: "Expanded our team and opened a new office in Nairobi's business district.",
            },
            {
              year: "2019",
              title: "Innovation Lab",
              description: "Launched our first innovation lab focused on emerging technologies.",
            },
            {
              year: "2021",
              title: "Regional Growth",
              description: "Began expanding our services to neighboring East African countries.",
            },
            {
              year: "2023",
              title: "Today",
              description: "Continuing to innovate and deliver exceptional technology solutions across Africa.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="inline-block bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-800 dark:text-primary-300 rounded mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Timeline node */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full border-4 border-primary-600 bg-white dark:bg-slate-900"></div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
