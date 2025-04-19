import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/ui/section-heading"

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          titleColored="Questions"
          description="Find answers to common questions about our services and approach"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have extensive experience across multiple sectors including government, religious organizations, education, healthcare, finance, and retail. Our team has specialized knowledge of the unique technology requirements and challenges in each of these industries.",
              },
              {
                question: "How do you approach cybersecurity?",
                answer:
                  "We take a comprehensive, multi-layered approach to cybersecurity that includes threat assessment, preventive measures, monitoring systems, incident response planning, and staff training. We stay updated with the latest security threats and best practices to ensure our clients' data and systems remain protected.",
              },
              {
                question: "What is your project management methodology?",
                answer:
                  "We employ a flexible approach that combines elements of Agile and traditional methodologies, tailored to each project's specific needs. This ensures efficient delivery while maintaining adaptability to changing requirements. Our process includes regular client communication, transparent reporting, and quality assurance at every stage.",
              },
              {
                question: "Do you provide ongoing support after implementation?",
                answer:
                  "Yes, we offer comprehensive post-implementation support through various service level agreements (SLAs) tailored to your needs. These can include 24/7 monitoring, regular maintenance, performance optimization, security updates, and technical support to ensure your systems continue to operate efficiently.",
              },
              {
                question: "How do you stay current with emerging technologies?",
                answer:
                  "Our team regularly participates in professional development, industry conferences, and certification programs. We also maintain partnerships with leading technology providers and invest in our innovation labs where we research and test emerging technologies before implementing them for our clients.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 dark:border-slate-700">
                <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
            <Button className="bg-[#f5c855] hover:bg-yellow-500 text-black">Contact Our Team</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
